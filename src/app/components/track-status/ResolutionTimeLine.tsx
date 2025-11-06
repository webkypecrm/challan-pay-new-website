"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/helpers";
import { cn } from "@/lib/utils";
//import { FollowUp } from "@/lib/types";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✅ Extend the FollowUp interface to include all fields you actually receive
interface FollowUp {
  id: string | number;
  title?: string;
  comment?: string;
  status?: string;
  priority?: string;
  secondaryStatus?: string;
  mode?: string;
  reason?: string;
  venue?: string;
  attachment?: string;
  createdAt?: string;
}

const statusColors: Record<string, string> = {
  success: "bg-green-500",
  error: "bg-red-500",
  default: "bg-blue-500",
};

export default function ResolutionTimeLine({
  followUps = [],
}: {
  followUps: FollowUp[];
}) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent className="px-4 py-5">
        <h2 className="font-semibold text-lg mb-4 text-gray-800">
          Resolution Timeline
        </h2>

        {followUps.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-6">
            No follow-up updates yet.
          </p>
        ) : (
          <div className="relative border-l border-gray-300 pl-5 space-y-6">
            {followUps.map((event, idx) => {
              const isLast = idx === followUps.length - 1;

              // ✅ safer color handling
              const statusKey = event.status?.toLowerCase() || "default";
              const colorClass = isLast
                ? statusColors.default
                : statusColors[statusKey] || statusColors.default;

              return (
                <div key={event.id || idx} className="relative pl-2">
                  {/* Dot */}
                  <span
                    className={cn(
                      "absolute left-[-28px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm",
                      colorClass
                    )}
                  />

                  {/* Time */}
                  <p className="text-xs text-gray-500 mb-1">
                    {event.createdAt ? formatDateTime(event.createdAt) : "-"}
                  </p>

                  {/* Comment */}
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    {event.comment || "No comment available"}
                  </p>

                  {/* Toggle Button */}
                  <Button
                    variant="link"
                    className="text-blue-600 text-xs px-0 mt-1"
                    onClick={() => handleToggle(idx)}
                  >
                    {expanded === idx ? (
                      <span className="flex items-center gap-1">
                        Hide Details <ChevronUp size={14} />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        View Details <ChevronDown size={14} />
                      </span>
                    )}
                  </Button>

                  {/* Details */}
                  {expanded === idx && (
                    <div className="mt-2 ml-2 border-l-2 border-gray-200 pl-4 text-sm text-gray-600 space-y-1 animate-fadeIn">
                      {event.title && (
                        <p>
                          <span className="font-medium">Title:</span>{" "}
                          {event.title}
                        </p>
                      )}
                      {event.priority && (
                        <p>
                          <span className="font-medium">Priority:</span>{" "}
                          {event.priority}
                        </p>
                      )}
                      {event.secondaryStatus && (
                        <p>
                          <span className="font-medium">Secondary Status:</span>{" "}
                          {event.secondaryStatus}
                        </p>
                      )}
                      {event.status && (
                        <p>
                          <span className="font-medium">Status:</span>{" "}
                          {event.status}
                        </p>
                      )}
                      {event.mode && (
                        <p>
                          <span className="font-medium">Mode:</span>{" "}
                          {event.mode}
                        </p>
                      )}
                      {event.reason && (
                        <p>
                          <span className="font-medium">Reason:</span>{" "}
                          {event.reason}
                        </p>
                      )}
                      {event.venue && (
                        <p>
                          <span className="font-medium">Venue:</span>{" "}
                          {event.venue}
                        </p>
                      )}
                      {event.attachment && (
                        <p>
                          <span className="font-medium">Attachment:</span>{" "}
                          <a
                            href={event.attachment}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            View File
                          </a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
