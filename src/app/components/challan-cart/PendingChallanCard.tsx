"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { copyWithFeedback, truncateText } from "@/lib/helpers";
import { useChallanContext } from "@/context/ChallanContext";

interface ChallanItem {
  id: number;
  challanNo: string;
  challanDate?: string;
  amount: number;
  challanPlace?: string;
  offenseName?: string;
}

interface ChallanCardProps {
  item: ChallanItem;
}

const PendingChallanCard: React.FC<ChallanCardProps> = ({ item }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const { selectedChallans, toggleChallan } = useChallanContext();
  //console.log(item);
  const isSelected = selectedChallans.includes(item.id);
  const isZero = item.amount === 0;

  const handleCheckboxChange = (checked: boolean) => {
    toggleChallan(item.id, checked);
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg  shadow hover:shadow-md transition-shadow ${
        isZero ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex font-medium text-gray-800">
          {item.challanNo}{" "}
          {copied ? (
            <Check size={16} className="ml-2 mt-1 text-green-500" />
          ) : (
            <Copy
              size={16}
              className="ml-2 mt-1 cursor-pointer"
              onClick={() => copyWithFeedback(item.challanNo, setCopied)}
            />
          )}
        </div>
        <Checkbox
          checked={isSelected}
          className="w-6 h-6 data-[state=checked]:bg-cyan-600 data-[state=checked]:text-white data-[state=checked]:border-cyan-600"
          onCheckedChange={(checked) => handleCheckboxChange(Boolean(checked))}
        />
      </div>

      <Separator />

      <div className="flex justify-between items-start mt-3 mb-3">
        <div>
          <div className="text-lg font-bold text-red-600">₹{item.amount}</div>
          <div className="text-gray-500 text-xs mt-1">
            Issued on {item.challanDate || "N/A"}
          </div>
        </div>
        <div className="text-gray-500 text-xs mt-1">
          {item.challanPlace ? truncateText(item.challanPlace, 15) : "N/A"}
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <button
          className="flex items-center text-blue-700 text-sm hover:underline"
          onClick={() => {
            if (typeof window !== "undefined") {
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

export default PendingChallanCard;
