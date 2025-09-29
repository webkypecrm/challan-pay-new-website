"use client";

import React from "react";
import DashboardCard from "../common/DashboardCard";
import {
  BadgeIndianRupee,
  CircleCheckBig,
  Hourglass,
  FileSpreadsheet,
  CircleChevronRight,
} from "lucide-react";
import InfoBanner from "../common/InfoBanner";
import SearchBar from "../common/SearchBar";
import ChallanInfoTabs from "./ChallanInfoTabs";
import { useRouter } from "next/navigation";

function ChallanInfo() {
  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };
  const router = useRouter();

  const handleFrequentlyAsked = () => {
    router.push("/frequently-asked-questions");
  };
  return (
    <div className="">
      <div className="grid grid-cols-2 p-4 sm:grid-cols-2 gap-4">
        <DashboardCard
          title="Challans Submitted on ChallanPay"
          count="12"
          icon={
            <FileSpreadsheet size={20} className="text-cyan-600 bg-cyan-50" />
          }
        />
        <DashboardCard
          title="Resolved Challans"
          count="04"
          icon={
            <CircleCheckBig size={20} className="text-green-600 bg-green-50" />
          }
          href="/resolved-challan"
        />
        <DashboardCard
          title="Challans In Progress"
          count="03"
          icon={
            <Hourglass size={20} className="text-orange-600 bg-orange-50" />
          }
          href="/in-progress-challan"
        />
        <DashboardCard
          title="Refund Challans"
          count="05"
          icon={
            <BadgeIndianRupee size={20} className="text-red-600 bg-red-50" />
          }
          href="/refund-challan"
        />
      </div>
      <div
        className="flex justify-between items-center  bg-white border border-gray-300 p-2  rounded-lg mx-4"
        onClick={handleFrequentlyAsked}
      >
        <div className="text-sm font-semibold px-2">
          Frequently Asked Questions
        </div>
        <div className="px-2">
          <CircleChevronRight size={20} />
        </div>
      </div>
      <div className="px-4">
        <InfoBanner
          title={"Easily Resolve Challan with ChallanPay"}
          bgColor="#ECFEFF" // default yellow background
          textColor="#0E7490" // default yellow-700 text
          icon={
            <CircleCheckBig size={20} className="text-cyan-600 bg-cyan-50" />
          }
        />
      </div>
      <div className="bg-slate-100 p-4">
        <div className="text-base font-bold my-4">Challans Information</div>
        <SearchBar placeholder="Search Challans..." onSearch={handleSearch} />
        <ChallanInfoTabs />
      </div>
    </div>
  );
}

export default ChallanInfo;
