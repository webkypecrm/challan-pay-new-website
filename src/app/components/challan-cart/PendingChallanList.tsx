import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ChallanCard from "./ChallanCard";

function PendingChallanList() {
  return (
    <div className="px-2 bg-slate-100 rounded-lg pb-4">
      <div className="flex justify-between items-center py-3">
        <div className="text-sm">0 Selected</div>
        <div className="text-sm flex items-center justify-center">
          <Checkbox className="w-4 h-4 bg-white data-[state=checked]:bg-cyan-600   data-[state=checked]:text-white data-[state=checked]:border-cyan-600" />{" "}
          <span className="mx-1">Select All</span>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-black font-bold">Online Challans (2)</p>
      </div>
      <ChallanCard />
      <ChallanCard />
      <div className="mt-6">
        <p className="text-sm text-black font-bold">Court Challans (2)</p>
      </div>
      <ChallanCard />
      <ChallanCard />
    </div>
  );
}

export default PendingChallanList;
