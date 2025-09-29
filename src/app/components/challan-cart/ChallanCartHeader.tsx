"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ChallanCartHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="mt-20 px-4 pb-4">
      <div className="flex items-center justify-between">
        {/* Left side: Back button + Title */}
        <div className="flex items-center gap-2">
          <button
            className="p-1 bg-gray-100 border border-gray-200 rounded-sm hover:bg-gray-200"
            onClick={handleBack}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-base font-semibold">Challan Summary</span>
        </div>

        {/* Right side: Share button */}
        <button className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 transition">
          <FaWhatsapp size={18} className="text-green-600" />
          <span className="text-xs font-medium text-gray-900">Share</span>
        </button>
      </div>
      <div className="h-18 flex items-center justify-start p-2 gap-4 bg-slate-50 rounded-lg mt-4">
        {/* Left side (car image) */}
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
      </div>
    </div>
  );
}

export default ChallanCartHeader;
