"use client";

import React from "react";
import Header from "../components/common/Header";
import CommonHeader from "../components/common/CommonHeader";
import ChallanCloseCard from "../components/common/ChallanCloseCard";
import { useRouter } from "next/navigation";

function ResolvedChallan() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="bg-white rounded-xl">
        {" "}
        <CommonHeader title="Resolved Challan" onBack={handleBack} />
      </div>
      <div className="px-4">
        <ChallanCloseCard />
        <ChallanCloseCard />
        <ChallanCloseCard />
      </div>
    </div>
  );
}

export default ResolvedChallan;
