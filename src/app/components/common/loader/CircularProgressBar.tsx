"use client";

import { useState, useEffect } from "react";

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb" // Tailwind gray-200
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#gradient)" // Blue gradient
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0891b2" /> {/* blue-500 */}
            <stop offset="100%" stopColor="#0891b2" /> {/* blue-400 */}
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage text in center */}
      <span className="absolute text-sm font-semibold text-black">
        {percentage}%
      </span>
    </div>
  );
};

export default function CircularProgressBar() {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > 100) {
        clearInterval(interval);
      } else {
        setPercentage(current);
      }
    }, 100); // every 100ms = ~10 seconds for full progress

    return () => clearInterval(interval);
  }, []);

  return <CircularProgress percentage={percentage} />;
}
