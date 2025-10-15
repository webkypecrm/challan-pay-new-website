"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChallanInfo from "./ChallanInfo";
import VehicleInfo from "./VehicleInfo";

interface Info {
  id: number;
  name: string;
  phone: string;
}
function TrackStatusHeader() {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    // Only runs on client side
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setInfo(JSON.parse(storedUser)); // parse JSON string to object
    }
  }, []);

  return (
    <div className="bg-white rounded-b-xl">
      <div className="mt-18 px-4 flex justify-start text-center">
        <div className="w-9 h-9 flex items-center font-semibold text-cyan-600 text-sm justify-center bg-cyan-100 rounded-full text-center  mt-3">
          AB
        </div>
        <div className="p-2">
          <div className="text-base font-semibold">
            Welcome, {info?.name ? info.name.split(" ")[0] : "N/A"}
          </div>
          <div className="text-sm font-semibold text-[#737373]">
            M No : {info?.phone}
          </div>
        </div>
      </div>
      <Tabs defaultValue="pending">
        <TabsList className="w-full justify-center px-3  ">
          <TabsTrigger
            className="w-1/2 text-center  data-[state=active]:bg-black rounded-lg  data-[state=active]:rounded-lg data-[state=active]:text-white "
            value="pending"
          >
            Challan Info
          </TabsTrigger>
          <TabsTrigger
            className="w-1/2 text-center  data-[state=active]:bg-black rounded-lg data-[state=active]:rounded-lg  data-[state=active]:text-white"
            value="paid"
          >
            Vehicle Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="">
          <ChallanInfo />
        </TabsContent>

        <TabsContent value="paid" className="bg-slate-100 ">
          <VehicleInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TrackStatusHeader;
