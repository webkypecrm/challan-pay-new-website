import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChallanCardTrackStatus from "../common/ChallanCardTrackStatus";
import { useRouter } from "next/navigation";
function ChallanInfoTabs() {
  const router = useRouter();
  const handleBack = () => {
    router.push("track-challan-detail");
  };
  return (
    <div className="rounded-b-xl mt-4">
      <Tabs defaultValue="all">
        <TabsList className="w-full flex justify-center gap-2 bg-slate-100">
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
            value="inprogress"
            className="text-center rounded-lg border border-gray-300 text-gray-600 
                       data-[state=active]:border-blue-500 
                       data-[state=active]:text-blue-600 
                       data-[state=active]:bg-white"
          >
            In Progress
          </TabsTrigger>
          <TabsTrigger
            value="resolved"
            className=" text-center rounded-lg border border-gray-300 text-gray-600 
                       data-[state=active]:border-blue-500 
                       data-[state=active]:text-blue-600 
                       data-[state=active]:bg-white"
          >
            Resolved
          </TabsTrigger>

          <TabsTrigger
            value="refund"
            className="text-center rounded-lg border border-gray-300 text-gray-600 
                       data-[state=active]:border-blue-500 
                       data-[state=active]:text-blue-600 
                       data-[state=active]:bg-white"
          >
            Refund
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ChallanCardTrackStatus
            challanId="UP6545643843253554"
            status="Closed"
            vehicleNumber="HR26DK8337"
            incidentId="INC1234"
            onViewDetails={handleBack}
          />
          <ChallanCardTrackStatus
            challanId="UP6545643843253554"
            status="Closed"
            vehicleNumber="HR26DK8337"
            incidentId="INC1234"
            onViewDetails={handleBack}
          />
          <ChallanCardTrackStatus
            challanId="UP6545643843253554"
            status="Closed"
            vehicleNumber="HR26DK8337"
            incidentId="INC1234"
            onViewDetails={handleBack}
          />
        </TabsContent>
        <TabsContent value="inprogress" className="bg-slate-100">
          Resolved content here
        </TabsContent>
        <TabsContent value="resolved" className="bg-slate-100">
          Resolved content here
        </TabsContent>

        <TabsContent value="refund" className="bg-slate-100">
          Refund in progress content here
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ChallanInfoTabs;
