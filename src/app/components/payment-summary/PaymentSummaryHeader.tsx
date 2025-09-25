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
    <div className="mt-15 px-4">
      <div className="flex items-center justify-between">
        {/* Left side: Back button + Title */}
        <div className="flex items-center gap-2">
          <button
            className="p-1 bg-gray-100 border border-gray-200 rounded-sm hover:bg-gray-200"
            onClick={handleBack}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-base font-semibold">Payment Summary</span>
        </div>

        {/* Right side: Share button */}
        {/* <button className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 transition">
          <FaWhatsapp size={18} className="text-green-600" />
          <span className="text-xs font-medium text-gray-900">Share</span>
        </button> */}
      </div>
      <div className="flex items-center justify-start p-2 gap-4  bg-slate-50 rounded mt-4">
        <Image src={"/Images/car.png"} width={50} height={30} alt="car image" />
        <div className="p-1 border border-gray-300">
          <div className="border border-black px-2  font-bold">
            • UP 32MM 1113 •
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm mt-2">2 Challans selected for settlement</div>
      </div>
      <div className="flex justify-between items-center border border-gray-200 p-2 rounded-lg mt-2">
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
      <div className="flex justify-center items-center  bg-cyan-50 border border-cyan-50 p-2  rounded-lg mt-3">
        <div className="text-xs font-semibold text-cyan-800">
          630 Peoples have claimed ₹500 reward
        </div>
      </div>
      <PaymentSummarySheet open={open} setOpen={setOpen} />
    </div>
  );
}

export default PaymentSummaryHeader;
