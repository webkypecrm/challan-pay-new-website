"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import InfoBanner from "./InfoBanner";
import { Gift } from "lucide-react";

interface BottomSheetProps {
  amount?: string | number; // Display amount
  subtitle?: string; // Text under amount
  buttonText?: string; // Button label
  onButtonClick?: () => void; // Button click handler
  isPledge?: boolean;
}

export default function BottomSheet({
  amount,
  subtitle = "Total Challan Amount",
  buttonText = "Proceed next",
  onButtonClick,
  isPledge,
}: BottomSheetProps) {
  return (
    <div className=" h-30 bg-gray-100 ">
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 lg:fixed lg:bottom-10 lg:left-45",
          "bg-white shadow-xl rounded-t-2xl border-t",
          "transition-transform duration-500",
          "h-30",
          "lg:w-250 "
        )}
      >
        {isPledge && (
          <InfoBanner
            title="Pledge & Claim Rewards"
            bgColor="#FEFCE8"
            textColor="#B45309"
            icon={<Gift />}
          />
        )}
        <div className="p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{amount}</h2>
            <p className="text-[#737373] text-xs">{subtitle}</p>
          </div>

          <div>
            <Button
              className="bg-cyan-600 text-sm font-medium flex items-center gap-1"
              onClick={onButtonClick}
            >
              {buttonText}
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
