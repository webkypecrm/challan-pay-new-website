"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { Check } from "lucide-react";
import { handleRazorpayPayment } from "../PayWithRozorpay";
import { useState } from "react";

export default function PaymentSummaryWebVersion() {
  const router = useRouter();
  const { data, isPledge, selectedChallans } = useChallanContext();
  const [loader, setLoader] = useState(false);

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [],
        potentialDiscount: data?.potentialDiscount ?? 0,
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
      },
      router,
      setLoader
    );
  };

  if (loader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <Card className="max-w-md w-full rounded-lg p-4 mt-17  hidden lg:flex lg:mt-7">
      <CardContent className="space-y-4 p-0">
        {/* Header */}
        <div className="text-[16px] font-semibold ">
          {selectedChallans?.length ?? 0} Challan
          {selectedChallans?.length > 1 ? "s" : ""} selected for settlement
        </div>

        {/* Info Banner (Pledge Reward Info) */}
        {isPledge && data?.potentialDiscount && data.potentialDiscount > 0 ? (
          <div className="bg-cyan-50 text-cyan-700 text-sm text-center py-2 rounded-md font-medium">
            You saved ₹{data.potentialDiscount} by pledging!
          </div>
        ) : (
          <div className="bg-cyan-50 text-cyan-700 text-sm text-center py-2 rounded-md font-medium">
            630 people have claimed ₹500 reward
          </div>
        )}

        <hr className="border-gray-200" />

        {/* Challan list */}
        <div className="space-y-2 text-sm">
          {/* Online Challans */}
          {data?.onlineChallanAmount && data.onlineChallanAmount > 0 ? (
            <>
              <div className="flex justify-between">
                <span>Online Challan ({data.onlineChallans?.length ?? 0})</span>
                <span className="font-semibold text-black">
                  ₹{data.onlineChallanAmount}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>
                  <span className="text-black">Convenience Fee</span> (
                  {data.onlineChallans?.length ?? 0} x 100)
                </span>
                <span className="font-semibold text-black">
                  ₹{data.onlineChallanFees}
                </span>
              </div>
            </>
          ) : null}

          {/* Court Challans */}
          {data?.courtChallanAmount && data.courtChallanAmount > 0 ? (
            <>
              <div className="flex justify-between pt-2">
                <span>Court Challan ({data.courtChallans?.length ?? 0})</span>
                <span className="font-semibold">
                  ₹{data.courtChallanAmount}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>
                  <span className="text-black">Convenience Fee</span> (
                  {data.courtChallans?.length ?? 0} x 2000)
                </span>
                <span className="font-semibold text-black">
                  ₹{data.courtChallanFees}
                </span>
              </div>
            </>
          ) : null}

          {/* Pledge Reward */}
          {isPledge &&
            data?.potentialDiscount &&
            data.potentialDiscount > 0 && (
              <div className="flex justify-between text-cyan-700 pt-2 font-bold">
                <span>Pledge Reward</span>
                <span>-₹{data.potentialDiscount}</span>
              </div>
            )}
        </div>

        <hr className="border-gray-200" />

        {/* Grand Total */}
        {data?.amountToPay && data.amountToPay > 0 && (
          <div className="flex justify-between font-bold text-base">
            <span>Grand Total</span>
            <span>₹{data.amountToPay}</span>
          </div>
        )}

        {/* Pledge Saved Message */}
        {isPledge && data?.potentialDiscount && data.potentialDiscount > 0 && (
          <div className="flex items-center rounded bg-green-100 p-2 mb-2 mt-1">
            <Check className="bg-green-800 rounded-full w-4 h-4 text-white p-1 mx-2" />
            <span className="text-green-800 text-xs font-semibold">
              You saved ₹{data.potentialDiscount} by pledging!
            </span>
          </div>
        )}

        {/* Proceed Button */}
        <Button
          className="w-full rounded-lg mt-2 bg-cyan-600"
          onClick={handleProccedNext}
        >
          Proceed To Pay →
        </Button>
      </CardContent>
    </Card>
  );
}
