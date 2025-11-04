"use client";

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
//import { FaWhatsapp } from "react-icons/fa";
//import Image from "next/image";
import { useRouter } from "next/navigation";
import NumberPlateHeader from "../common/NumberPlateHeader";
import { useEffect } from "react";

function ChallanCartHeader() {
  const router = useRouter();
  // const vehicleNo = localStorage.getItem("vehicleNo");
  const [vehicleNo, setVehicleNo] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if running in the browser
      const storedUser = sessionStorage.getItem("vehicleNo");
      if (storedUser) {
        setVehicleNo(storedUser);
      }
    }
  }, []);

  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="mt-25 px-4 pb-4 lg:px-0 lg:mt-0 lg:pb-0">
      <div className="flex items-center justify-between">
        {/* Left side: Back button + Title */}
        <div className="flex items-center gap-2 ">
          <button
            className="p-1 bg-white border border-gray-200   rounded-sm hover:bg-gray-200"
            onClick={handleBack}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-base font-semibold lg:font-bold lg:text-lg">
            Challan Summary
          </span>
        </div>

        {/* Right side: Share button */}
        {/* <button className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 transition">
          <FaWhatsapp size={18} className="text-green-600" />
          <span className="text-xs font-medium text-gray-900">Share</span>
        </button> */}
      </div>
      <NumberPlateHeader vehicleNumber={vehicleNo || ""} />
    </div>
  );
}

export default ChallanCartHeader;
