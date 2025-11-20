"use client";

import "../../../components/ui/Shimmer.css";

interface ShimmerProps {
  height?: string;
  width?: string;
  radius?: string;
}

export default function Shimmer({
  height = "20px",
  width = "100%",
  radius = "6px",
}: ShimmerProps) {
  return (
    <div
      className="shimmer"
      style={{
        height,
        width,
        borderRadius: radius,
        marginBottom: "10px",
      }}
    ></div>
  );
}
