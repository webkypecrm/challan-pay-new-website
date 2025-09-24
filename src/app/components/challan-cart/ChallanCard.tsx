import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { ArrowRight, Copy } from "lucide-react";

function ChallanCard() {
  return (
    <div className="bg-white p-4 rounded-lg mt-4 shadow hover:shadow-md transition-shadow">
      {/* Top row: Challan ID + Checkbox */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex  font-medium text-gray-800">
          UP6545643843253554 <Copy size={16} className="ml-2 mt-1" />
        </div>
        <Checkbox className="w-6 h-6" />
      </div>

      <Separator />

      {/* Middle row: Amount + Issue Date and Location */}
      <div className="flex justify-between items-start mt-3 mb-3">
        <div>
          <div className="text-lg font-bold text-red-600">₹ 2000</div>
          <div className="text-gray-500 text-xs mt-1">
            Issued on 21 Jun, 2023
          </div>
        </div>
        <div className="text-gray-500 text-xs mt-1">Gurugram, Haryana</div>
      </div>

      {/* Bottom row: View Details */}
      <div className="flex justify-end mt-3">
        <button className="flex items-center text-blue-700 text-sm hover:underline">
          View Details <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}

export default ChallanCard;
