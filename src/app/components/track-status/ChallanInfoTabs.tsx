"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChallanCardTrackStatus from "../common/ChallanCardTrackStatus";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/TrackStatusAuthContext";
//import { useState } from "react";

function ChallanInfoTabs() {
  const { incidentData, setTab, tab } = useAuth();
  const router = useRouter();
  const handleBack = (id: string) => {
    router.push(`track-challan-detail/${id}`);
  };

  return (
    <div className="rounded-b-xl mt-4">
      <Tabs
        value={tab}
        onValueChange={(val) =>
          setTab(val as "all" | "In Progress" | "Win" | "Refund Successful")
        }
      >
        <TabsList className="w-full flex justify-center gap-2 bg-slate-100 lg:bg-white">
          <TabsTrigger
            value="all"
            className="text-center rounded-lg border border-gray-300 text-gray-600
                       data-[state=active]:border-blue-500
                       data-[state=active]:text-blue-600
                       data-[state=active]:bg-white"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="In Progress"
            className="text-center rounded-lg border border-gray-300 text-gray-600
                       data-[state=active]:border-blue-500
                       data-[state=active]:text-blue-600
                       data-[state=active]:bg-white"
          >
            In Progress
          </TabsTrigger>
          <TabsTrigger
            value="Win"
            className="text-center rounded-lg border border-gray-300 text-gray-600
                       data-[state=active]:border-blue-500
                       data-[state=active]:text-blue-600
                       data-[state=active]:bg-white"
          >
            Resolved
          </TabsTrigger>
          <TabsTrigger
            value="Refund Successful"
            className="text-center rounded-lg border border-gray-300 text-gray-600
                       data-[state=active]:border-blue-500
                       data-[state=active]:text-blue-600
                       data-[state=active]:bg-white"
          >
            Refund
          </TabsTrigger>
        </TabsList>

        {/* <TabsContent value={tab}>
          {incidentData?.incidents?.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No incidents found.
            </div>
          ) : (
            incidentData?.incidents?.map((incident) => (
              <ChallanCardTrackStatus
                key={incident.id}
                challanId={incident.challanNo}
                status={incident.latestSecondaryStatus}
                vehicleNumber={incident.vehicleNo}
                incidentId={`${incident.id}`}
                onViewDetails={() => handleBack(`${incident.id}`)}
              />
            ))
          )}
        </TabsContent> */}
        <TabsContent value={tab}>
          {incidentData?.incidents?.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No incidents found.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              {incidentData?.incidents?.map((incident) => (
                <ChallanCardTrackStatus
                  key={incident.id}
                  challanId={incident.challanNo}
                  status={incident.latestSecondaryStatus}
                  vehicleNumber={incident.vehicleNo}
                  incidentId={`${incident.id}`}
                  onViewDetails={() => handleBack(`${incident.id}`)}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ChallanInfoTabs;
