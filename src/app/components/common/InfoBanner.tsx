"use client";

import React from "react";
import { Gift } from "lucide-react";

interface InfoBannerProps {
  title: string; // Text to show
  bgColor?: string; // Background color
  textColor?: string; // Text color
  icon?: React.ReactNode; // Optional custom icon
}

export default function InfoBanner({
  title,
  bgColor = "#FEFCE8", // default yellow background
  textColor = "#B45309", // default yellow-700 text
  icon,
}: InfoBannerProps) {
  return (
    <div
      className="p-2  px-4 flex justify-between items-center rounded-2xl"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="text-xs font-bold">{title}</div>
      {icon || <Gift />}
    </div>
  );
}
