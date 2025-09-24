"use client";

import React from "react";
import { cn } from "@/lib/utils"; // shadcn helper for conditional classes
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function BottomSlider() {
  return (
    <div className="relative h-30 bg-gray-100">
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0",
          "bg-white shadow-xl rounded-t-2xl border-t",
          "transition-transform duration-500",
          "h-30" // fixed height (adjust as needed)
        )}
      >
        <div className="p-2 px-4 flex justify-between items-center bg-[#FEFCE8] rounded-t-2xl ">
          <div className="text-yellow-700 text-xs ">Pledge & Claim Rewards</div>
          <div className="text-yellow-700 text-xs">
            <Gift />
          </div>
        </div>
        <div className="p-4 flex justify-between items-center ">
          <div>
            <h2 className="text-xl font-semibold">₹ 4000</h2>{" "}
            <p className="text-[#737373] text-xs">Total Challan Amount</p>
          </div>
          <div>
            <Button className="bg-cyan-600 text-sm font-medium">
              Proceed next
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
