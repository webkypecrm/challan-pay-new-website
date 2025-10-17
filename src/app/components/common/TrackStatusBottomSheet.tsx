"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BottomSheetProps {
  primaryText?: string; // First button label
  secondaryText?: string; // Second button label
  onPrimaryClick?: () => void; // Primary button click handler
  onSecondaryClick?: () => void; // Secondary button click handler
}

export default function TrackStatusBottomSheet({
  primaryText = "Track Status",
  secondaryText = "Download Reciept",
  onPrimaryClick,
  onSecondaryClick,
}: BottomSheetProps) {
  return (
    <div className="relative h-30 bg-gray-100 lg:hidden block">
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0",
          "bg-white shadow-xl rounded-t-2xl border-t",
          "transition-transform duration-500",
          "h-30"
        )}
      >
        <div className="w-full p-4  flex  flex-col gap-2 items-center">
          {/* Two Buttons */}

          <Button
            className="w-full bg-cyan-600 text-white text-sm font-medium flex items-center gap-1"
            onClick={onPrimaryClick}
          >
            {primaryText}
          </Button>
          {/* <Button
            variant="outline"
            className="w-full bg-white border border-gray-300 text-sm font-medium text-gray-700"
            onClick={onSecondaryClick}
          >
            {secondaryText}
          </Button> */}
        </div>
      </div>
    </div>
  );
}
