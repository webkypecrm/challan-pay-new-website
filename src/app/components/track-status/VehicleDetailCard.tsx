"use client";

interface RegisterInfoProps {
  mod?: string;
  type?: string;
  eng?: string;
  chs?: string;
}

export default function VehicleDetailCard({
  mod,
  type,
  eng,
  chs,
}: RegisterInfoProps) {
  return (
    <div className="w-[300px] lg:w-full rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="p-4 space-y-3">
        {/* Name */}
        <div>
          <p className="text-xs text-gray-500">Make Model</p>
          <p className="text-sm font-semibold">{mod || "N/A"}</p>
        </div>

        <hr className="border-gray-200" />

        {/* Date */}
        <div>
          <p className="text-xs text-gray-500">Vehicle Type/Color</p>
          <p className="text-sm font-semibold">{type || "N/A"}</p>
        </div>

        <hr className="border-gray-200" />

        {/* RTO */}
        <div>
          <p className="text-xs text-gray-500">Engine Number</p>
          <p className="text-sm font-semibold">{eng || "N/A"}</p>
        </div>
        <hr className="border-gray-200" />

        {/* RTO */}
        <div>
          <p className="text-xs text-gray-500">Chassis Number</p>
          <p className="text-sm font-semibold">{chs || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
