"use client";

import React from "react";
import Header from "../components/common/Header";
import { ChevronLeft, Copy } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import CommonHeader from "../components/common/CommonHeader";
import Image from "next/image";
import ChallanEmailCard from "../components/challan-detail/ChallanEmailCard";

function ChallanDetail() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/challan-cart");
  };
  return (
    <div className="">
      <Header />
      <div className="lg:px-30 lg:bg-slate-100">
        <div className="mt-15 px-3">
          <CommonHeader title="Challan Detail" onBack={handleBack} />
        </div>
        <div className="lg:px-5 lg:flex lg:justify-center lg:w-full ">
          <div className="lg:w-full  ">
            <div className="h-18 flex items-center justify-start p-2 gap-4 bg-white rounded-lg mt-4 lg:flex lg:justify-center lg:items-center">
              {/* Left side (car image) */}
              <div className="flex justify-center items-center">
                <Image
                  src="/Images/car.svg"
                  alt="car image"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <div className="p-1 border border-gray-300">
                  <div className="border border-black font-bold">
                    • UP 32MM 1113 •
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="bg-slate-50 lg:bg-white p-4 mt-2 min-h-screen lg:min-h-0 lg:mb-4 lg:rounded-lg lg:w-[600px]">
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
          </div>
          <div className="lg:w-full mt-4 hidden lg:block">
            <ChallanEmailCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallanDetail;
