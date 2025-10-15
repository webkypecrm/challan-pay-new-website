"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation"; // Next.js App Router
import React from "react";
import { CircleChevronRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  count: number | string;
  icon: React.ReactNode;
  href?: string; // the page to navigate on click
}

const DashboardCard: React.FC<StatsCardProps> = ({
  title,
  count,
  icon,
  href,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <Card
      className="w-full rounded-xl py-0 border border-gray-200 cursor-pointer hover:shadow-md transition"
      onClick={handleClick}
    >
      <CardContent className="flex flex-col justify-start gap-1 p-2">
        {/* Icon */}
        <div className="flex justify-between ">
          {" "}
          <div className="my-1 w-5">{icon}</div>
          {href && (
            <div className="my-1 w-5">
              <CircleChevronRight size={20} className="text-gray-300" />
            </div>
          )}
        </div>

        {/* Text */}
        <div>
          <h2 className="text-xl font-bold">{count}</h2>
        </div>
        <div>
          <p className="text-xs text-gray-900">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
