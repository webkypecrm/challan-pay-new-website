"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { Check } from "lucide-react";
import { handleRazorpayPayment } from "../PayWithRozorpay";
import { useState, useEffect } from "react";
import Image from "next/image";

interface SavingsItem {
  image: string;
  title: string;
  emoji: string;
  showImage: boolean;
}

const savingsData: SavingsItem[] = [
  {
    image: "/rewardUser/riya.webp",
    title: "Riya from Mumbai saved ₹750",
    emoji: "🎉",
    showImage: true,
  },
  {
    image: "",
    title: "Jaipur cleared 246+ challans this week!",
    emoji: "🔔",
    showImage: false,
  },
  {
    image: "",
    title: "Drivers from Pune saved ₹15,000 today!",
    emoji: "🚗",
    showImage: false,
  },
  {
    image: "/rewardUser/ravi.webp",
    title: "Ravi just paid ₹4,800 court challan",
    emoji: "🔐",
    showImage: true,
  },
  {
    image: "/rewardUser/kavita.webp",
    title: "Kavita claimed ₹1250 reward",
    emoji: "🎉",
    showImage: true,
  },
  {
    image: "",
    title: "235+ challans resolved in Surat today!",
    emoji: "🔧",
    showImage: false,
  },
  {
    image: "/rewardUser/aditya.webp",
    title: "Aditya from Kolkata saved ₹1,650!",
    emoji: "🎁",
    showImage: true,
  },
  {
    image: "",
    title: "Delhi users saved over ₹25,000 in fines",
    emoji: "🕛",
    showImage: false,
  },
  {
    image: "/rewardUser/ajay.webp",
    title: "Ajay from Pune just saved ₹1650",
    emoji: "🎊",
    showImage: true,
  },
  {
    image: "",
    title: "6470+ challans resolved in last 15 days",
    emoji: "💰",
    showImage: false,
  },
];

export default function PaymentSummaryWebVersion() {
  const router = useRouter();
  const { data, isPledge, selectedChallans, isContestSelected } =
    useChallanContext();
  const [loader, setLoader] = useState(false);
  const [fadeState, setFadeState] = useState("fade-in");
  const [index, setIndex] = useState(() => Math.floor(Math.random() * 10));

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [],
        potentialDiscount: data?.potentialDiscount ?? 0,
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
        isContest: isContestSelected,
      },
      router,
      setLoader
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");

      // fade-out hone ke baad next item show karo
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % savingsData.length);
        setFadeState("fade-in");
      }, 500); // fade-out duration
    }, 5000); // har message kitne time me change ho

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="max-w-md w-full rounded-lg p-4 mt-17  hidden lg:flex lg:mt-19">
      <CardContent className="space-y-4 p-0">
        {/* Header */}
        <div className="text-[16px] font-semibold ">
          {selectedChallans?.length ?? 0} Challan
          {selectedChallans?.length > 1 ? "s" : ""} selected for settlement
        </div>

        {/* Info Banner (Pledge Reward Info) */}

        <div className="flex justify-center items-center  bg-cyan-50 border border-cyan-50 px-2  rounded-lg mt-3  bg-gradient-3 ">
          <div key={index} className={`${fadeState} min-w-[350px] `}>
            <div className="flex justify-between items-center">
              <div className="text-[14px] text-black font-medium flex items-center gap-2 ">
                {savingsData[index].showImage && (
                  <Image
                    alt="user"
                    src={savingsData[index].image}
                    width={20}
                    height={20}
                    className="rounded-[50%]"
                  />
                )}

                <span>{savingsData[index].title}</span>
              </div>

              <div className="text-[28px]">{savingsData[index].emoji}</div>
            </div>
          </div>
        </div>

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
