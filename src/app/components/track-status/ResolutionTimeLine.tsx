"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  status?: "success" | "error" | "default";
  link?: string;
}

const events: TimelineEvent[] = [
  {
    id: "1",
    time: "11/09/2025, 11:01 AM",
    title: "Challan Resolved",
    status: "success",
    link: "#",
  },
  {
    id: "2",
    time: "11/09/2025, 11:01 AM",
    title: "Dispute Raised",
    status: "error",
    link: "#",
  },
  {
    id: "3",
    time: "11/09/2025, 11:01 AM",
    title: "Lawyer Has Been Assigned",
    status: "default",
    link: "#",
  },
  {
    id: "4",
    time: "11/09/2025, 11:01 AM",
    title: "Screening For Challan",
    status: "default",
    link: "#",
  },
  {
    id: "5",
    time: "11/09/2025, 11:01 AM",
    title: "Application Submitted In Court",
    status: "default",
    link: "#",
  },
];

const statusColors: Record<NonNullable<TimelineEvent["status"]>, string> = {
  success: "bg-green-500",
  error: "bg-red-500",
  default: "bg-blue-500",
};

export default function ResolutionTimeLine() {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent className="px-4">
        <h2 className="font-semibold mb-4">Resolution Timeline</h2>
        <div className="relative border-l border-gray-300 pl-4 space-y-6">
          {events.map((event, idx) => (
            <div key={event.id} className="relative pl-6">
              {/* Dot */}
              <span
                className={cn(
                  "absolute left-[-22px] top-1 w-4 h-4 rounded-full border-2 border-white",
                  statusColors[event.status || "default"]
                )}
              />

              {/* Time */}
              <p className="text-xs text-gray-500">{event.time}</p>

              {/* Title */}
              <p
                className={cn(
                  "text-sm font-medium",
                  event.status === "success" && "text-green-600",
                  event.status === "error" && "text-red-600"
                )}
              >
                {event.title}
              </p>

              {/* Link */}
              {event.link && (
                <a
                  href={event.link}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:underline"
                >
                  View details <ChevronRight className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
