"use client";

import React from "react";
import Header from "../components/common/Header";
import CommonHeader from "../components/common/CommonHeader";
import { useRouter } from "next/navigation";
import ChallanCardTrackStatus from "../components/common/ChallanCardTrackStatus";

function InProgressChallan() {
  const router = useRouter();
  const handleChallanDetail = () => {
    router.push("/track-challan-detail");
  };
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="bg-white rounded-xl">
        {" "}
        <CommonHeader title="In Progress Challan" onBack={handleBack} />
      </div>
      <div className="px-4">
        <ChallanCardTrackStatus
          challanId="UP6545643843253554"
          status="In progress"
          vehicleNumber="HR26DK8337"
          incidentId="INC1234"
          onViewDetails={handleChallanDetail}
        />
        <ChallanCardTrackStatus
          challanId="UP6545643843253554"
          status="In progress"
          vehicleNumber="HR26DK8337"
          incidentId="INC1234"
          onViewDetails={handleChallanDetail}
        />
        <ChallanCardTrackStatus
          challanId="UP6545643843253554"
          status="In progress"
          vehicleNumber="HR26DK8337"
          incidentId="INC1234"
          onViewDetails={handleChallanDetail}
        />
      </div>
    </div>
  );
}

export default InProgressChallan;
