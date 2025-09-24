"use client";

import React from "react";
import Header from "../components/common/Header";
import { useRouter } from "next/navigation";
import { ChevronLeft, Copy } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function page() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/challan-cart");
  };
  return (
    <>
      <Header />
      <div className="mt-16 px-4">
        <div className="flex items-center justify-between">
          {/* Left side: Back button + Title */}
          <div className="flex items-center gap-2">
            <button
              className="p-1 bg-gray-100 border border-gray-200 rounded-sm hover:bg-gray-200"
              onClick={handleBack}
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-semibold">Challan Detail</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-3 mt-2 min-h-screen">
        <div className="bg-gray-300 px-4 py-2 rounded-t-xl">
          <p className="text-xs font-semibold">Challan</p>
          <div className="flex items-center gap-2">
            <p className="text-xs">UP40838230418090682</p>
            <Copy className="cursor-pointer" size={12} />
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

export default page;
