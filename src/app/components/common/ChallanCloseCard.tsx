import { Separator } from "@/components/ui/separator";
import React from "react";

function ChallanCloseCard() {
  return (
    <div className="bg-white p-4 rounded-lg mt-4 shadow hover:shadow-md transition-shadow">
      {/* Top row: Challan ID + Checkbox */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex  font-medium text-gray-800">
          UP6545643843253554
        </div>
        <div className="px-1 py-1 text-emerald-700 text-xs font-semibold bg-green-100 rounded">
          Closed
        </div>
      </div>

      <Separator />
      <div className="flex justify-between items-start mt-3 mb-3">
        <div>
          <div className="text-lg font-bold text-black">₹ 2000</div>
          <div className="text-gray-500 text-xs mt-1">
            Issued on 21 Jun, 2023
          </div>
        </div>
        <div className="text-gray-500 text-xs mt-1">Gurugram, Haryana</div>
      </div>
    </div>
  );
}

export default ChallanCloseCard;
