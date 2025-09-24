"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
//import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
//import { Button } from "@/components/ui/button";

export function PaymentSummarySlider({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="rounded-t-2xl bg-slate-50">
        <SheetHeader>
          <SheetTitle>Payment Summary</SheetTitle>
          <SheetDescription className="bg-white rounded-lg p-2">
            <div>
              <div className="flex justify-between items-center text-black px-2 py-1">
                <div>Online Challan ( 1 )</div>
                <div className="text-semibold">₹2000.00 </div>
              </div>
              <div className="flex justify-between items-center text-black px-2 py-1">
                <div>Convenience Fee</div>
                <div className="text-semibold">₹100.00</div>
              </div>
            </div>
            <div className="border-t border-1 border-dashed border-gray-300 my-2"></div>
            <div>
              <div className="flex justify-between items-center text-black px-2 py-1">
                <div>Online Challan ( 1 )</div>
                <div className="text-semibold">₹2000.00 </div>
              </div>
              <div className="flex justify-between items-center text-black px-2 py-1">
                <div>Convenience Fee</div>
                <div className="text-semibold">₹100.00</div>
              </div>
            </div>
            <div className="border-t border-1 border-dashed border-gray-300 my-2"></div>
            <div>
              <div className="flex justify-between items-center text-black px-2 py-1">
                <div className="text-md font-bold text-cyan-700">
                  Pledge Reward
                </div>
                <div className="text-md font-bold text-cyan-700">-₹500.00</div>
              </div>
              <div className="flex justify-between items-center text-black px-2 py-1">
                <div className="text-lg font-bold text-black">Grand Total</div>
                <div className="text-lg font-bold text-black">₹3700.00</div>
              </div>
            </div>
          </SheetDescription>
          <SheetDescription>
            <div className="flex justify-start items-center rounded bg-green-100 p-2 mb-4">
              <Check className="bg-green-800 rounded-full w-4 h-4 text-white p-1 mx-2" />
              <span className="text-green-800 text-xs font-semibold">
                {" "}
                You saved ₹500 By Pledging
              </span>
            </div>
            <Button className="bg-cyan-600 w-full mb-4">
              Proceed to pay <ChevronRight size={16} />
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
