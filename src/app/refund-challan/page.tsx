"use client";

import React from "react";
import Header from "../components/common/Header";
import CommonHeader from "../components/common/CommonHeader";
import ChallanCloseCard from "../components/common/ChallanCloseCard";
import { useRouter } from "next/navigation";

function RefundChallan() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  return (
    <div>
      <Header />
      <div className="bg-slate-100 px-4 mt-18">
        <CommonHeader title="Refund Challan" onBack={handleBack} />
        <ChallanCloseCard />
        <ChallanCloseCard />
        <ChallanCloseCard />
      </div>
    </div>
  );
}

export default RefundChallan;
