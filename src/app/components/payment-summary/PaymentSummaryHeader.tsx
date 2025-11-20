"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
//import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaymentSummarySheet } from "./PaymentSummarySheet";
import { useChallanContext } from "@/context/ChallanContext";

interface SavingsItem {
  image: string;
  title: string;
  emoji: string;
  showImage: boolean;
}

const savingsData: SavingsItem[] = [
  {
    image: "/rewardUser/riya.png",
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
    image: "/rewardUser/ravi.png",
    title: "Ravi just paid ₹4,800 court challan",
    emoji: "🔐",
    showImage: true,
  },
  {
    image: "/rewardUser/kavita.png",
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
    image: "/rewardUser/aditya.png",
    title: "Aditya from Kolkata saved ₹1,650!",
    emoji: "🎁",
    showImage: true,
  },
  {
    image: "",
    title: "Delhi users saved over ₹25,000 in fines",
    emoji: "⌚",
    showImage: false,
  },
  {
    image: "/rewardUser/ajay.png",
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

function PaymentSummaryHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [vehicleNo, setVehicleNo] = useState<string | null>(null);
  const { data } = useChallanContext();
  const [index, setIndex] = useState(() => Math.floor(Math.random() * 10));
  const [fadeState, setFadeState] = useState("fade-in");

  const handleBack = () => {
    router.push("/challan-cart");
  };
  useEffect(() => {
    const storedVehicleNo = sessionStorage.getItem("vehicleNo");
    setVehicleNo(storedVehicleNo);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      // fade-out hone ke baad next item show karo
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % savingsData.length);
        setFadeState("fade-in");
      }, 400); // fade-out duration
    }, 5000); // har message kitne time me change ho

    return () => clearInterval(interval);
  }, []);

  //console.log(index);
  return (
    <div className="mt-25 px-4 lg:px-0 bg-white lg:mt-0  lg:bg-slate-100">
      <div className="flex items-center justify-between">
        {/* Left side: Back button + Title */}
        <div className="flex items-center gap-2">
          <button
            className="p-1 bg-white border border-gray-200 rounded-sm hover:bg-gray-200"
            onClick={handleBack}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-base font-semibold lg:text-lg lg:font-bold">
            Payment Summary
          </span>
        </div>
      </div>

      {/* <div className="h-18 flex items-center justify-center gap-4 p-2 bg-slate-50 rounded-lg mt-4 lg:bg-white">
        
        <Image
          src="/Images/car.svg"
          alt="car image"
          width={70}
          height={25}
          className="object-contain icon-cyan"
        />

      
        <div className="p-1 border border-gray-300 rounded">
          <div className="border border-black font-bold px-4 py-1 text-center rounded bg-white">
            • {vehicleNo || "N/A"} •
          </div>
        </div>
      </div> */}
      <div
        className="
  h-18 flex items-center p-2 gap-4 bg-slate-50 rounded-lg mt-4 relative
  lg:bg-white lg:justify-center lg:gap-6
"
      >
        {/* Car Image */}
        <div className="absolute left-2 lg:static lg:left-auto">
          <Image
            src="/Images/car.svg"
            alt="car image"
            width={70}
            height={25}
            className="object-contain icon-cyan"
          />
        </div>

        {/* Number Plate */}
        <div className="mx-auto lg:mx-0 p-1 border border-gray-300 bg-white">
          <div className="border border-black font-bold px-2 py-1 text-sm text-center">
            • {vehicleNo || "N/A"} •
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="text-sm mt-2">
          {(data?.courtChallans?.length ?? 0) +
            (data?.onlineChallans?.length ?? 0)}{" "}
          Challans selected for settlement
        </div>
      </div>
      <div className="lg:hidden flex justify-between items-center border border-gray-200 p-2 rounded-lg mt-2">
        <button
          type="button"
          className="text-normal flex items-center"
          onClick={() => setOpen(true)}
        >
          <ChevronDown size={18} />
          <span className="mx-2"> Check Summary</span>
        </button>
        <div className="text-base font-bold">₹ {data?.amountToPay}</div>
      </div>
      <div className="lg:hidden flex justify-center items-center  bg-cyan-50 border border-cyan-50 px-2  rounded-lg mt-3  bg-gradient-3 ">
        <div key={index} className={`${fadeState}  w-full`}>
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
      <div className="h-4 bg-white lg:hidden"></div>
      <PaymentSummarySheet open={open} setOpen={setOpen} />
    </div>
  );
}

export default PaymentSummaryHeader;
