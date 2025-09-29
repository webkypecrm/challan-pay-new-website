"use client";

import React from "react";
import Header from "../components/common/Header";
import { ChevronLeft, Copy } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import CommonHeader from "../components/common/CommonHeader";

function ChallanDetail() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/challan-cart");
  };
  return (
    <>
      <Header />
      <div className="mt-15 px-3">
        <CommonHeader title="Challan Detail" onBack={handleBack} />
      </div>
      <div className="bg-slate-50 p-4 mt-2 min-h-screen">
        <div className="bg-slate-500 px-4 py-2 rounded-t-xl">
          <p className="text-xs font-semibold text-white">Challan</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">UP40838230418090682</p>
            <Copy className="cursor-pointer text-white" size={12} />
          </div>
        </div>

        <div className="flex items-center justify-between py-4 px-2 bg-white">
          <p className="text-[#DC2626] font-bold">₹ 4000</p>
          <p className="text-xs bg-blue-50 text-cyan-700 font-semibold p-1 rounded-sm">
            Pending
          </p>
        </div>
        <Separator />
        <div className="bg-white p-2 rounded-b-xl">
          <p className="text-xs text-gray-500">Issued Date</p>
          <p className="text-black mb-4">20-08-2023</p>
          <p className="text-xs text-gray-500 ">Offence</p>
          <p className="text-black text-sm mb-4">
            {" "}
            Violation of traffic rules by the driver except the offences
            mentioned in section 184 A,B,D,E,F and without any indication
            changing the alignment
          </p>
          <Separator />
          <p className="text-xs text-gray-500 mt-4">Location</p>
          <p className="text-black mb-4 text-sm">Gurugram, India</p>
        </div>
      </div>
    </>
  );
}

export default ChallanDetail;
