"use client";

import { useState } from "react";
import { useChallanContext } from "@/context/ChallanContext";
import { CommonSheet } from "../common/CommonSheet";
import { Check } from "lucide-react";
import { handleRazorpayPayment } from "../PayWithRozorpay";
import { useRouter } from "next/navigation";

export function PaymentSummarySheet({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { data, isPledge, selectedChallans } = useChallanContext();
  const router = useRouter();

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [], // array of numbers
        potentialDiscount: data?.potentialDiscount ?? 0, // fallback if undefined
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
      },
      router
      // setLoader
    );
  };
  const content = (
    <>
      <div className="bg-white rounded-lg p-2">
        <div className="flex justify-between items-center text-black px-2 py-1">
          <div>Online Challan ( {data?.onlineChallans?.length} )</div>
          <div className="text-semibold">₹{data?.onlineChallanAmount} </div>
        </div>
        <div className="flex justify-between items-center text-black px-2 py-1">
          <div>Convenience Fee ({data?.onlineChallans?.length ?? 0} x 100)</div>
          <div className="text-semibold"> ₹{data?.onlineChallanFees}</div>
        </div>
        <div className="border-t border-1 border-dashed border-gray-300 my-2"></div>
        <div className="flex justify-between items-center text-black px-2 py-1">
          <div>Court Challan ( {data?.courtChallans?.length} )</div>
          <div className="text-semibold">₹{data?.courtChallanAmount} </div>
        </div>
        <div className="flex justify-between items-center text-black px-2 py-1">
          <div>Convenience Fee ({data?.courtChallans?.length ?? 0} x 500)</div>
          <div className="text-semibold">₹{data?.courtChallanFees}</div>
        </div>
        <div className="border-t border-1 border-dashed border-gray-300 my-2"></div>
        {isPledge && (
          <div className="flex justify-between items-center text-black px-2 py-1">
            <div className="text-md font-bold text-cyan-700">Pledge Reward</div>
            <div className="text-md font-bold text-cyan-700">
              -₹{data?.potentialDiscount}
            </div>
          </div>
        )}
        <div className="flex justify-between items-center text-black px-2 py-1">
          <div className="text-lg font-bold text-black">Grand Total</div>
          <div className="text-lg font-bold text-black">
            ₹{data?.amountToPay}
          </div>
        </div>
      </div>
      {isPledge && (
        <div className="flex justify-start items-center rounded bg-green-100 p-2 mb-4 mt-2">
          <Check className="bg-green-800 rounded-full w-4 h-4 text-white p-1 mx-2" />
          <span className="text-green-800 text-xs font-semibold">
            You saved ₹{data?.potentialDiscount} By Pledging
          </span>
        </div>
      )}
    </>
  );

  return (
    <CommonSheet
      open={open}
      setOpen={setOpen}
      title="Payment Summary"
      content={content}
      buttonText="Proceed to pay"
      onButtonClick={handleProccedNext}
    />
  );
}
