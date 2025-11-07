"use client";

interface RegisterInfoProps {
  puc?: string;
  ins?: string;
  rc?: string;
}

export default function KeyDetailCard({ puc, ins, rc }: RegisterInfoProps) {
  return (
    <div className="w-[300px] lg:w-full rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="p-4 space-y-3">
        {/* Name */}
        <div>
          <p className="text-xs text-gray-500">PUC Expiry</p>
          <p className="text-sm font-semibold">{puc || "N/A"}</p>
        </div>

        <hr className="border-gray-200" />

        {/* Date */}
        <div>
          <p className="text-xs text-gray-500">Insurance Expiry</p>
          <p className="text-sm font-semibold">{ins || "N/A"}</p>
        </div>

        <hr className="border-gray-200" />

        {/* RTO */}
        <div>
          <p className="text-xs text-gray-500">RC Expiry</p>
          <p className="text-sm font-semibold">{rc || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
