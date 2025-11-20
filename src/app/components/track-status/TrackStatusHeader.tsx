"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChallanInfo from "./ChallanInfo";
import VehicleInfo from "./VehicleInfo";
import { Info, FileSpreadsheet, Car } from "lucide-react";

interface Info {
  id: number;
  name: string;
  phone: string;
}
function TrackStatusHeader() {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    // Only runs on client side
    const storedUser = sessionStorage.getItem("userInfo");
    if (storedUser) {
      setInfo(JSON.parse(storedUser)); // parse JSON string to object
    }
  }, []);

  return (
    <div className="lg:flex lg:justify-center">
      <div className="bg-white rounded-b-xl lg:w-[1200px]">
        <div className="mt-18 px-4 flex justify-start text-center lg:bg-slate-100 lg:py-4 lg:mt-0">
          <div className="w-9 h-9 flex items-center font-semibold text-cyan-600 text-sm justify-center bg-cyan-100 rounded-full text-center  mt-3">
            AB
          </div>
          <div className="p-2">
            <div className="text-base font-semibold">
              Welcome,{" "}
              {info?.name ? info.name.split(" ")[0].toLocaleLowerCase() : "N/A"}
            </div>
            <div className="text-sm font-semibold text-[#737373]">
              M no: {info?.phone}
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="pending"
          className="lg:grid lg:grid-cols-[1fr_3fr] gap-4 lg:bg-slate-100"
        >
          {/* Left Side (Tabs List) */}
          <div className="lg:bg-white lg:p-2 lg:pt-10 lg:rounded-lg px-4">
            {/* <TabsList
              className="w-full justify-center bg-white px-4 rounded-t-none
                 flex flex-row gap-2
                 lg:flex lg:flex-col lg:gap-4 lg:mt-4 lg:rounded-lg"
            >
              <TabsTrigger
                value="pending"
                className="w-1/2 text-center rounded-lg
                   data-[state=active]:bg-black data-[state=active]:text-white
                   lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border"
              >
                <span className="hidden lg:flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Challan Info
                </span>
                <span className="lg:hidden">Challan Info</span>
                <Info className="hidden lg:block w-5 h-5" />
              </TabsTrigger>

              <TabsTrigger
                value="paid"
                className="w-1/2 text-center rounded-lg
                   data-[state=active]:bg-black data-[state=active]:text-white
                   lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border"
              >
                <span className="hidden lg:flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Vehicle Info
                </span>
                <span className="lg:hidden">Vehicle Info</span>
                <Info className="hidden lg:block w-5 h-5" />
              </TabsTrigger>
            </TabsList> */}
            <TabsList
              className="
          w-full justify-center  bg-[#faf8f7] lg:bg-white px-4 
          flex flex-row gap-2
          lg:flex lg:flex-col lg:gap-4 lg:mt-4  lg:rounded-lg lg:mt-4
        "
            >
              {/* Pending */}
              {/* <TabsTrigger
                value="pending"
                className="
            w-1/2 text-center rounded-lg 
            data-[state=active]:bg-black lg:data-[state=active]:bg-[#F5F5F5] data-[state=active]:text-white lg:data-[state=active]:text-cyan-600 lg:bg-white
            lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
          "
              >
                <span className="hidden lg:flex items-center gap-2">
                  <Hourglass className="w-5 h-5" />
                  Pending
                </span>
                <span className="lg:hidden">Pending</span>
                <Info className="hidden lg:block w-5 h-5" />
              </TabsTrigger> */}
              <TabsTrigger
                value="pending"
                className="
    group data-[state=active]:shadow-none
    w-1/2 text-center rounded-lg 
    data-[state=active]:bg-black lg:data-[state=active]:bg-[#F5F5F5]
    data-[state=active]:text-white lg:data-[state=active]:text-cyan-600
    lg:bg-white
    lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
  "
              >
                {/* Desktop View */}
                <span className="hidden lg:flex items-center gap-3">
                  <div
                    className="
        w-8 h-8 rounded-md flex items-center justify-center
        bg-gray-100 group-data-[state=active]:bg-cyan-600
      "
                  >
                    {/* <Hourglass className="w-6 h-6 text-black group-data-[state=active]:text-white" /> */}
                    <FileSpreadsheet className="w-5 h-5 group-data-[state=active]:text-white" />
                  </div>
                  <span className="text-base font-medium">Challan Info</span>
                </span>

                {/* Mobile View */}
                <span className="lg:hidden">Challan Info</span>

                {/* Info Icon (Right Side) */}

                <div className="relative group inline-block">
                  <Info className="hidden lg:block w-6 h-6 text-gray-400 group-hover:text-cyan-600 cursor-pointer" />
                  <span className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300 whitespace-nowrap">
                    {`All challans you’ve paid that are still under processing
                    appear here.`}
                  </span>
                </div>

                {/* <Info className="hidden lg:block w-6 h-6 text-gray-400 group-data-[state=active]:text-cyan-600" /> */}
              </TabsTrigger>

              {/* Paid */}

              <TabsTrigger
                value="paid"
                className="
    group data-[state=active]:shadow-none
    w-1/2 text-center rounded-lg lg:bg-white
    data-[state=active]:bg-black lg:data-[state=active]:bg-[#f5f5f5]
    data-[state=active]:text-white lg:data-[state=active]:text-cyan-600
    lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
  "
              >
                <span className="hidden lg:flex items-center gap-3">
                  <div
                    className="
        w-8 h-8 rounded-md flex items-center justify-center
        bg-gray-100 group-data-[state=active]:bg-cyan-600
      "
                  >
                    {/* <CheckCircle className="w-6 h-6 text-black group-data-[state=active]:text-white" /> */}
                    <Car className="w-5 h-5 group-data-[state=active]:text-white" />
                  </div>
                  <span className="text-base font-medium">Vehicle Info</span>
                </span>

                <span className="lg:hidden">Vehicle Info</span>

                <div className="relative group inline-block">
                  <Info className="hidden lg:block w-6 h-6 text-gray-400 group-hover:text-cyan-600 cursor-pointer" />
                  <span className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300 whitespace-nowrap">
                    {`All your added vehicles and their details appear here.`}
                  </span>
                </div>

                {/* <Info className="hidden lg:block w-6 h-6 text-gray-400 group-data-[state=active]:text-cyan-600" /> */}
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Right Side (Tabs Content) */}
          <div className="lg:bg-slate-100">
            <TabsContent value="pending" className="bg-slate-100 rounded-xl ">
              <ChallanInfo />
            </TabsContent>

            <TabsContent
              value="paid"
              className="bg-slate-100 px-4 lg:bg-white lg:rounded-lg"
            >
              <VehicleInfo />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default TrackStatusHeader;
