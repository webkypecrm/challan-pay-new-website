"use client";

import Image from "next/image";

interface EmptyStateProps {
  imageSrc: string;
  title: string;
  subtitle?: string | number | null;
  width?: number;
  height?: number;
}

export default function EmptyState({
  imageSrc,
  title,
  subtitle,
  width = 150,
  height = 150,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-gray-50 p-4 rounded-lg">
      <Image
        src={imageSrc}
        alt={title}
        width={width}
        height={height}
        priority
        className="object-contain"
      />
      <p className="mt-4 text-lg font-medium text-gray-800">{title}</p>
      {subtitle && (
        <p className="text-xl font-semibold text-gray-900">{subtitle}</p>
      )}
    </div>
  );
}
