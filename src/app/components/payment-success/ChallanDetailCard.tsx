import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/helpers";
import { Copy } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";

interface ChallanDetailProps {
  challanNo: string;
  status: string;
  incidentId: string;
  // challanType: boolean;
  courtChallan: boolean;
  createdAt: string;
  challanInvoice: string;
}

const ChallanDetailCard: React.FC<ChallanDetailProps> = ({
  challanNo,
  status,
  incidentId,
  courtChallan,
  createdAt,
  challanInvoice,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(challanNo);
    toast.success("Challan number copied!");
  };

  return (
    <div className="p-4">
      <div className="px-2 border border-[#E5E5E5] rounded-lg">
        {/* Challan No + Status */}
        <div className="flex justify-between items-center p-2 pt-4 pb-2">
          <div
            className="text-black flex cursor-pointer"
            onClick={handleCopy}
            title="Copy Challan Number"
          >
            <span className="text-sm mr-1">{challanNo}</span>
            <Copy className="mt-1" size={14} />
          </div>

          <div className="bg-yellow-50 p-1 px-2 rounded text-yellow-700 text-xs font-semibold">
            {status}
          </div>
        </div>

        {/* Incident ID */}
        <div className="flex justify-between items-center p-2">
          <div className="text-[#737373]">Incident ID</div>
          <div className="text-black text-sm font-semibold">
            IRN-{incidentId}
          </div>
        </div>

        <Separator />

        {/* Challan Type */}
        <div className="flex justify-between items-center p-2">
          <div className="text-[#737373]">Challan Type</div>
          <div className="text-black text-sm font-semibold">
            {courtChallan ? "Court Challan" : "Online Challan"}
          </div>
        </div>

        <Separator />

        {/* Resolution Date */}
        <div className="flex justify-between items-center p-2">
          <div className="text-[#737373]">Resolution Date</div>
          <div className="text-black text-sm font-semibold">
            {courtChallan
              ? new Date(
                  new Date(createdAt).getTime() + 45 * 24 * 60 * 60 * 1000
                ).toLocaleDateString("en-IN")
              : new Date(
                  new Date(createdAt).getTime() + 15 * 24 * 60 * 60 * 1000
                ).toLocaleDateString("en-IN")}
          </div>
        </div>
        {/* <div className="flex justify-between items-center p-2">
          <div className="text-[#737373]">Download Invoice</div>
          <div className="text-black text-sm font-semibold">
            <Link
              href={`${challanInvoice}`}
              target="_blank"
              className="text-blue-700 underline"
            >
              Download
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ChallanDetailCard;
