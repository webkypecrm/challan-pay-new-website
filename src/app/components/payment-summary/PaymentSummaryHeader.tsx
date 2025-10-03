"use client";

import React from "react";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";
//import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaymentSummarySheet } from "./PaymentSummarySheet";

function PaymentSummaryHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.push("/challan-cart");
  };
  return (
    <div className="mt-20 px-4 bg-white lg:px-15 lg:pr-2 lg:bg-slate-100">
      <div className="flex items-center justify-between">
        {/* Left side: Back button + Title */}
        <div className="flex items-center gap-2">
          <button
            className="p-1 bg-gray-100 border border-gray-200 rounded-sm hover:bg-gray-200"
            onClick={handleBack}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-base font-semibold lg:text-lg lg:font-bold">
            Payment Summary
          </span>
        </div>
      </div>
      <div className="h-18 flex items-center justify-start p-2 gap-4 bg-slate-50 rounded-lg mt-4 lg:w-[600px] lg:flex lg:justify-center lg:items-center lg:bg-white">
        {/* Left side (car image) */}
        {/* <div className="lg:flex lg:justify-center lg:items-center"> */}
        <Image
          src="/Images/car.svg"
          alt="car image"
          width={80}
          height={30}
          className="object-contain"
        />

        {/* Centered number plate */}
        {/* <div className="flex-1 flex justify-center"> */}
        <div className="p-1 border border-gray-300">
          <div className="border border-black font-bold">• UP 32MM 1113 •</div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="block lg:hidden">
        <div className="text-sm mt-2">2 Challans selected for settlement</div>
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
        <div className="text-base font-bold">₹ 4000</div>
      </div>
      <div className="lg:hidden flex justify-center items-center  bg-cyan-50 border border-cyan-50 p-2  rounded-lg mt-3 ">
        <div className="text-xs font-semibold text-cyan-800">
          630 Peoples have claimed ₹500 reward
        </div>
      </div>
      <div className="h-4 bg-white lg:hidden"></div>

      <PaymentSummarySheet open={open} setOpen={setOpen} />
    </div>
  );
}

export default PaymentSummaryHeader;
