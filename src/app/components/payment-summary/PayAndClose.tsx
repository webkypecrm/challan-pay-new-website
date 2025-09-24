import React from "react";
import { Gift } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

function PayAndClose() {
  return (
    <div className="border-1 border-yellow-700 rounded-2xl bg-white mb-4 ">
      <div className="p-2 px-4 flex justify-between items-center bg-[#FEFCE8] rounded-t-2xl ">
        <div className="text-yellow-700 text-xs font-semibold ">
          Pledge & Claim ₹500 Reward
        </div>
        <div className="text-yellow-700 text-xs">
          <Gift />
        </div>
      </div>
      <div className="p-4 flex items-center gap-2">
        <Checkbox className="rounded-full w-6 h-6" />
        <span className="text-sm font-semibold"> I Pledge to Drive Safely</span>
      </div>
      <div className="p-2 flex justify-start items-center gap-2">
        <span className="text-xs font-semibold text-green-800 font-semibold p-2 bg-green-50 mx-2">
          Instant Benefit
        </span>
        <span className="text-xs font-semibold text-orange-800  font-semibold p-2 bg-orange-50">
          45–60 Days TAT
        </span>
      </div>
      <div className="p-4 text-xs font-medium">
        I wish to pledge & pay to claim upfront benefits. I understand it may
        take 45–60 days, and I am not eligible for any refund from waivers...
        <span className="text-blue-600">read more</span>
      </div>
    </div>
  );
}

export default PayAndClose;
