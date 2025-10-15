"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

interface ChallanCardProps {
  challanId: string;
  status: string; // e.g. Closed, In Progress, Pending, Refunded
  vehicleNumber?: string;
  incidentId?: string;
  onViewDetails?: () => void; // callback for button
}

const statusColors: Record<string, string> = {
  Closed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-700",
  Refunded: "bg-blue-100 text-blue-700",
};

const ChallanCardTrackStatus: React.FC<ChallanCardProps> = ({
  challanId,
  status,
  vehicleNumber,
  incidentId,
  onViewDetails,
}) => {
  const statusStyle = statusColors[status] || "bg-gray-100 text-gray-700"; // fallback

  return (
    <div className="bg-white p-4 rounded-lg mt-4 shadow hover:shadow-md transition-shadow">
      {/* Top row: Challan ID + Status */}
      <div className="flex justify-between items-center mb-3">
        <div className="font-medium text-gray-800">{challanId}</div>
        <div
          className={`px-2 py-1 text-xs font-semibold rounded ${statusStyle}`}
        >
          {status}
        </div>
      </div>

      {(vehicleNumber || incidentId) && (
        <>
          <div className="flex flex-col gap-1 mt-3 text-sm">
            {vehicleNumber && (
              <div className="flex justify-between items-center">
                <div className="text-gray-500">Vehicle</div>
                <div className="text-gray-700 font-medium">{vehicleNumber}</div>
              </div>
            )}
            <Separator />
            {incidentId && (
              <div className="flex justify-between items-center">
                <div className="text-gray-500">Incident Id</div>
                <div className="text-gray-700 font-medium">
                  IRN-{incidentId}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Footer action */}
      <div
        className="mt-4 text-center text-blue-600 flex justify-center items-center"
        onClick={onViewDetails}
      >
        View Details <ArrowRight size={20} className="mx-2" />
      </div>
    </div>
  );
};

export default ChallanCardTrackStatus;
