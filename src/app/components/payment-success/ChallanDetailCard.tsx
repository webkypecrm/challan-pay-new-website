import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";
import React from "react";

const ChallanDetailCard = () => {
  return (
    <div className="p-4">
      <div className="px-2 border border-[#E5E5E5] rounded-lg">
        <div className="flex justify-between items-center p-2 pt-4 pb-2">
          <div className="text-black flex">
            <span className="text-sm mr-1">UP40838230418090682</span>{" "}
            <Copy className=" mt-1" size={14} />
          </div>
          <div className="bg-yellow-50 p-1 px-1 rounded text-yellow-700 text-xs font-semibold">
            Submitted
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="text-[#737373]">Incident ID</div>
          <div className="text-black text-sm font-semibold">IRN-121112</div>
        </div>
        <Separator />
        <div className="flex justify-between items-center p-4">
          <div className="text-[#737373]">Challan Type</div>
          <div className="text-black text-sm font-semibold">Court Challan</div>
        </div>
        <Separator />
        <div className="flex justify-between items-center p-4">
          <div className="text-[#737373]">Resolution Date</div>
          <div className="text-black text-sm font-semibold">02-09-2025</div>
        </div>
      </div>
    </div>
  );
};

export default ChallanDetailCard;
