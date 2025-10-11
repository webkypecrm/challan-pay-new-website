"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface LoaderModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  message?: string;
}

export const LoaderModal: React.FC<LoaderModalProps> = ({
  open,
  onOpenChange,
  message = "Loading...",
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white w-screen h-screen flex flex-col justify-center items-center backdrop-blur-sm">
        {/* Loader Spinner */}
        <div className="animate-spin rounded-full border-8 border-t-8 border-gray-300 border-t-blue-500 w-16 h-16 mb-4"></div>

        {/* Optional message */}
        <p className="text-gray-700 text-lg font-medium">{message}</p>
      </DialogContent>
    </Dialog>
  );
};
