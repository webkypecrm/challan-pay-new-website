// components/ChallanSummary.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//import { useRouter } from "next/navigation";

export default function PaymentSummaryWebVersion() {
  return (
    <Card className="max-w-md w-full rounded-lg  p-4 mt-17 hidden lg:flex">
      <CardContent className="space-y-4 p-0">
        {/* Header */}
        <div className="text-[16px] font-semibold ">
          2 Challans selected for settlement
        </div>

        {/* Info Banner */}
        <div className="bg-cyan-50 text-cyan-700 text-sm text-center py-2 rounded-md font-medium">
          630 Peoples have claimed ₹500 reward
        </div>

        <hr className="border-gray-200" />

        {/* Challan list */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Online Challan (1)</span>
            <span>₹2000.00</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Convenience Fee</span>
            <span>₹100.00</span>
          </div>

          <div className="flex justify-between pt-2">
            <span>Court Challan (1)</span>
            <span>₹2000.00</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Convenience Fee</span>
            <span>₹100.00</span>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Grand Total */}
        <div className="flex justify-between font-bold text-base">
          <span>Grand Total</span>
          <span>₹4200.00</span>
        </div>

        {/* Button */}
        <Button className="w-full rounded-lg mt-2 bg-cyan-600">
          Proceed to Pay →
        </Button>
      </CardContent>
    </Card>
  );
}
