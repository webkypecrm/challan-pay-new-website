"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VehicleInfo from "./VehicleInfo";
import { Info, FileSpreadsheet, Car } from "lucide-react";

interface Info {
  id: number;
  name: string;
  phone: string;
}

interface TrackStatusHeaderProps {
  LeftTabComponent: React.ReactNode; // Component to render in the first tab
}

const WebVersionCommonComponent: React.FC<TrackStatusHeaderProps> = ({
  LeftTabComponent,
}) => {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userInfo");
    if (storedUser) {
      setInfo(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="lg:flex lg:justify-center hidden lg:flex lg:bg-slate-100 lg:pb-5">
      <div className="bg-white rounded-b-xl lg:w-[1200px]">
        {/* Header */}
        <div className="mt-16 px-4 flex justify-start text-center lg:bg-slate-100 lg:py-4 lg:mt-0">
          <div className="w-9 h-9 flex items-center font-semibold text-cyan-600 text-sm justify-center bg-cyan-100 rounded-full mt-3">
            AB
          </div>
          <div className="p-2">
            <div className="text-base font-semibold">
              Welcome,{" "}
              {info?.name ? info.name.split(" ")[0].toLocaleLowerCase() : "N/A"}
            </div>
            <div className="text-sm font-semibold text-[#737373]">
              M No : {info?.phone}
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="pending"
          className="lg:grid lg:grid-cols-[1fr_3fr] gap-4 lg:bg-slate-100"
        >
          {/* Left Side (Tabs List) */}
          <div className="lg:bg-white lg:p-2 lg:pt-10 lg:rounded-lg">
            <TabsList className="w-full justify-center bg-white px-4 rounded-t-none flex flex-row gap-2 lg:flex lg:flex-col lg:gap-4 lg:mt-4 lg:rounded-lg">
              {/* Left Tab */}
              <TabsTrigger
                value="pending"
                className="w-1/2 text-center rounded-lg data-[state=active]:bg-black data-[state=active]:text-white lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border"
              >
                <span className="hidden lg:flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Challan Info
                </span>
                <span className="lg:hidden">Challan Info</span>
              </TabsTrigger>

              {/* Right Tab */}
              <TabsTrigger
                value="paid"
                className="w-1/2 text-center rounded-lg data-[state=active]:bg-black data-[state=active]:text-white lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border"
              >
                <span className="hidden lg:flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Vehicle Info
                </span>
                <span className="lg:hidden">Vehicle Info</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Right Side (Tabs Content) */}
          <div className="lg:bg-slate-100">
            <TabsContent value="pending" className="bg-slate-100 rounded-xl">
              {LeftTabComponent} {/* Render the passed component */}
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
};

export default WebVersionCommonComponent;
