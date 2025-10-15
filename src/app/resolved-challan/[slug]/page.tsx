"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "../../components/common/Header";
import CommonHeader from "../../components/common/CommonHeader";
//import ChallanCloseCard from "../../components/common/ChallanCloseCard";
import ChallanCardTrackStatus from "@/app/components/common/ChallanCardTrackStatus";
import { useAuth } from "@/context/TrackStatusAuthContext";

const ResolvedChallan: React.FC = () => {
  const router = useRouter();
  const { slug } = useParams();

  const { setTab, incidentData } = useAuth(); // ✅ Get data & setter from context

  // Handle back navigation
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  const handleDetail = (id: string) => {
    router.push(`track-challan-detail/${id}`);
  };
  console.log(slug);

  // When slug changes, update tab in context
  useEffect(() => {
    if (slug) {
      setTab(`${slug}`);
    }
  }, [slug, setTab]);

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <div className="bg-white rounded-xl">
        <CommonHeader title="Resolved Challan" onBack={handleBack} />
      </div>
      <div className="px-4 py-3 space-y-3">
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
              onViewDetails={() => handleDetail(`${incident.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ResolvedChallan;
