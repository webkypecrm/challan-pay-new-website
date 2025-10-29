"use client";

//import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { copyWithFeedback, truncateText } from "@/lib/helpers";
import { useState } from "react";

interface ChallanItem {
  id: string | number;
  challanNo: string;
  challanDate?: string;
  amount: number;
  challanPlace?: string;
  offenseName?: string;
}
interface ChallanCardProps {
  item: ChallanItem;
}

const PaidChallanCard: React.FC<ChallanCardProps> = ({ item }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg mt-4 shadow hover:shadow-md transition-shadow">
      {/* Top row: Challan ID + Checkbox */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex  font-medium text-gray-800">
          {item?.challanNo}{" "}
          {copied ? (
            <Check size={16} className="ml-2 mt-1 text-green-500" />
          ) : (
            <Copy
              size={16}
              className="ml-2 mt-1 cursor-pointer"
              onClick={() => copyWithFeedback(item?.challanNo, setCopied)}
            />
          )}
        </div>
        <div className="px-1 py-1 text-emerald-700 text-xs font-semibold bg-green-100 rounded">
          Closed
        </div>
      </div>

      <Separator />

      {/* Middle row: Amount + Issue Date and Location */}
      <div className="flex justify-between items-start mt-3 mb-3">
        <div>
          <div className="text-lg font-bold text-red-600">₹{item.amount}</div>
          <div className="text-gray-500 text-xs mt-1">
            Issued on {item.challanDate}
          </div>
        </div>
        <div className="text-gray-500 text-xs mt-1 ">
          {item.challanPlace ? truncateText(item.challanPlace, 15) : "N/A"}
        </div>
      </div>

      {/* Bottom row: View Details */}
      <div className="flex justify-end mt-3">
        <button
          className="flex items-center text-blue-700 text-sm hover:underline"
          onClick={() => {
            if (typeof window !== "undefined") {
              // Ensure this runs only in the browser
              const data = JSON.stringify({
                amount: item.amount,
                challanDate: item.challanDate,
                challanNo: item.challanNo,
                challanPlace: item.challanPlace,
                offenseName: item.offenseName,
              });
              sessionStorage.setItem("challanDetail", data);
              router.push(`/challan-detail/${item.id}`);
            }
          }}
        >
          View Details <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default PaidChallanCard;
