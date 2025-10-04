"use client";
import { Checkbox } from "@/components/ui/checkbox";
import ChallanCard from "./ChallanCard";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import InfoBanner from "../common/InfoBanner";
import { Gift } from "lucide-react";
import { useRouter } from "next/navigation";

function PendingChallanList() {
  const router = useRouter();

  const handleProccedNext = () => {
    router.push("/payment-summary");
  };
  return (
    <div className="bg-slate-100 rounded-lg pb-4 lg:bg-white lg:py-2 lg:relative">
      <div className="text-lg font-bold mt-4 hidden lg:flex">
        Pending Challans
      </div>
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
      <div className="lg:flex lg:gap-4">
        <div className="lg:flex-1">
          <ChallanCard />
        </div>
        <div className="lg:flex-1">
          <ChallanCard />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm text-black font-bold">Court Challans (2)</p>
      </div>
      <div className="lg:flex lg:gap-4">
        <div className="lg:flex-1">
          <ChallanCard />
        </div>
        <div className="lg:flex-1">
          <ChallanCard />
        </div>
      </div>
      <div className=" h-30 bg-gray-100 hidden lg:flex">
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 lg:absolute lg:bottom-0 lg:left-0",
            "bg-white shadow-xl rounded-t-2xl rounded-b-2xl border-t",
            "transition-transform duration-500",
            "h-30",
            "lg:w-auto"
          )}
        >
          <InfoBanner
            title="Pledge & Claim Rewards"
            bgColor="#FEFCE8"
            textColor="#B45309"
            icon={<Gift />}
          />

          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">₹4000</h2>
              <p className="text-[#737373] text-xs">Total amount to pay</p>
            </div>

            <div>
              <Button
                className="bg-cyan-600 text-sm font-medium flex items-center gap-1"
                onClick={handleProccedNext}
              >
                Procced to pay
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingChallanList;
