"use client";

import React from "react";
import Header from "../../components/common/Header";
import { Copy } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import CommonHeader from "../../components/common/CommonHeader";
import Image from "next/image";
import ChallanEmailCard from "../../components/challan-detail/ChallanEmailCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { copyWithFeedback } from "@/lib/helpers";

interface ChallanData {
  challanNo: string;
  amount: number;
  challanDate: string;
  offenseName: string;
  challanPlace: string;
}

function ChallanDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [challanData, setChallanData] = useState<ChallanData | null>(null);
  const [vehicleNo, setVehicleNo] = useState<string | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("challanDetail");
    if (data) {
      setChallanData(JSON.parse(data));
    }
  }, [searchParams]);

  useEffect(() => {
    const storedVehicleNo = sessionStorage.getItem("vehicleNo");
    setVehicleNo(storedVehicleNo);
  }, []);

  const handleBack = () => {
    router.push("/challan-cart");
  };

  return (
    <div className="lg:bg-slate-100 lg:min-h-screen lg:overflow-hidden">
      <Header />
      <div className="lg:px-30 lg:bg-slate-100 lg:flex lg:justify-center">
        <div className="lg:w-[1200px]">
          <div className="mt-10 lg:mt-0">
            <CommonHeader title="Challan Details" onBack={handleBack} />
          </div>
          <div className="lg:px-5 lg:flex lg:justify-between lg:w-full lg:gap-4">
            <div className="lg:w-2/3  ">
              {/* <div className="h-18 flex items-center justify-center p-2 lg:px-4 gap-4 bg-slate-50 rounded-lg mx-4 mt-2 lg:flex lg:justify-center lg:items-center lg:bg-white lg:mx-0">
               
                <div className="flex justify-center items-center lg:gap-6">
                  <Image
                    src="/Images/car.svg"
                    alt="car image"
                    width={70}
                    height={30}
                    className="object-contain  icon-cyan"
                  />
                  <div className="p-1 border border-gray-300 mx-5 ">
                    <div className="border border-black font-bold">
                      • {vehicleNo || "N/A"} •
                    </div>
                  </div>
                </div>
              
              </div> */}
              <div className="bg-slate-50 lg:bg-white  p-4  min-h-screen lg:min-h-0 lg:mb-4 lg:rounded-lg lg:flex lg:justify-center">
                <div className="lg:w-[600px] lg:border lg:rounded-xl ">
                  <div className="bg-[#64748B] px-4 py-2 rounded-t-xl lg:py-8 lg:px-6 ">
                    <p className="text-base font-semibold text-white">
                      Challan
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-base text-white">
                        {challanData?.challanNo}
                      </p>
                      {copied ? (
                        <Check size={13} className="ml-1 mt-1 text-white" />
                      ) : (
                        <Copy
                          size={13}
                          className="ml-1 mt-1 cursor-pointer text-white"
                          onClick={() =>
                            copyWithFeedback(
                              challanData?.challanNo || "",
                              setCopied
                            )
                          }
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4 px-2 bg-white lg:px-6 ">
                    <p className="text-[#DC2626] font-bold">
                      ₹{challanData?.amount}
                    </p>
                    {/* <p className="text-xs bg-blue-50 text-cyan-600 font-semibold p-1 rounded-sm">
                      Pending
                    </p> */}
                    <p></p>
                  </div>
                  <Separator />
                  <div className="bg-white p-2 rounded-b-xl lg:px-6">
                    <p className="text-xs text-gray-500">Issued Date</p>
                    <p className="text-black mb-4">
                      {challanData?.challanDate}
                    </p>
                    <p className="text-xs text-gray-500 ">Offence</p>
                    <p className="text-black text-sm mb-4">
                      {" "}
                      {challanData?.offenseName}
                    </p>
                    <Separator />
                    <p className="text-xs text-gray-500 mt-4">Location</p>
                    <p className="text-black mb-4 text-sm break-words whitespace-normal">
                      {challanData?.challanPlace}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 mt-4 hidden lg:block lg:mt-0 opacity-25">
              <ChallanEmailCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallanDetail;
