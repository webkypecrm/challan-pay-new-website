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

function PaymentSummaryHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [vehicleNo, setVehicleNo] = useState<string | null>(null);
  const { data } = useChallanContext();

  const handleBack = () => {
    router.push("/challan-cart");
  };
  useEffect(() => {
    const storedVehicleNo = sessionStorage.getItem("vehicleNo");
    setVehicleNo(storedVehicleNo);
  }, []);
  //console.log(data);
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
