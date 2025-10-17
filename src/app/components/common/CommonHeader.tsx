"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

const CommonHeader: React.FC<PageHeaderProps> = ({ title, onBack }) => {
  return (
    <div className="flex items-center justify-between p-2  pt-6 mt-15 lg:mt-0">
      {/* Left side: Back button + Title */}
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            className="p-1 bg-gray-100 border border-gray-200 rounded-sm hover:bg-gray-200"
            onClick={onBack}
          >
            <ChevronLeft size={18} />
          </button>
        )}
        <span className="text-base font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default CommonHeader;
