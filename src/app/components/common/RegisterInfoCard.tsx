"use client";

interface RegisterInfoProps {
  name?: string;
  date?: string;
  rto?: string;
}

export default function RegisterInfoCard({
  name,
  date,
  rto,
}: RegisterInfoProps) {
  return (
    <div className="w-[300px] lg:w-full rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="p-4 space-y-3">
        {/* Name */}
        <div>
          <p className="text-xs text-gray-500">Register Name</p>
          <p className="text-sm font-semibold">{name || "N/A"}</p>
        </div>

        <hr className="border-gray-200" />

        {/* Date */}
        <div>
          <p className="text-xs text-gray-500">Register Date</p>
          <p className="text-sm font-semibold">{date || "N/A"}</p>
        </div>

        <hr className="border-gray-200" />

        {/* RTO */}
        <div>
          <p className="text-xs text-gray-500">Registered RTO</p>
          <p className="text-sm font-semibold">{rto || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
