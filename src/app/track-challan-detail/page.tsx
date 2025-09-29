"use client";

import React from "react";
import Header from "../components/common/Header";
import CommonHeader from "../components/common/CommonHeader";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResolutionTimeline from "../components/track-status/ResolutionTimeLine";

function TrackChallanDetail() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  return (
    <div className="bg-slate-100 ">
      <Header />
      <div className="bg-white rounded-lg">
        <CommonHeader title="Challan Detail" onBack={handleBack} />
      </div>
      <div className="px-4 ">
        <div className="bg-cyan-600 p-4 rounded-t-lg mt-4">
          <div className="text-white text-sm">
            <p>Challan </p>
            <p className="flex ">
              UP40838230418090682 <Copy size={16} className="mt-1 mx-2" />
            </p>
          </div>
        </div>
        <div className="p-4 bg-white rounded-b-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="font-bold text-gray-900">₹2000 paid</div>
            <div
              className={`px-2 py-1 text-xs font-semibold rounded  bg-orange-50 text-orange-700`}
            >
              In Progress
            </div>
          </div>

          {/* <Separator /> */}

          {/* Extra details: Vehicle + Incident + IRN */}

          <div className="flex flex-col gap-2 mt-3 text-sm">
            <div className="flex justify-between items-center">
              <div className="text-[#737373] text-sm">Incident ID</div>
              <div className="text-gray-700 font-medium">IRN-21212</div>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div className="text-[#737373] text-sm">Vehicle</div>
              <div className="text-gray-700 font-medium">UP61D2323</div>
            </div>

            <Separator />
            <div className="flex justify-between items-center">
              <div className="text-[#737373] text-sm">Resolution Date</div>
              <div className="text-gray-700 font-medium">12-09-2025</div>
            </div>
          </div>
        </div>
        <Button className="bg-white text-black w-full mt-4">
          Download Receipt
        </Button>
        <Button className="bg-cyan-600 text-white w-full mt-4">
          Raise a Dispute
        </Button>
      </div>
      <div className="mt-4 px-4 mb-10">
        <ResolutionTimeline />
      </div>
    </div>
  );
}

export default TrackChallanDetail;
