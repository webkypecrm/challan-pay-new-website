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
import { useEffect, useState } from "react";
import { getRequestWithoutToken } from "@/lib/api";
import type { DashboardResponse } from "@/lib/types";
import { useAuth } from "@/context/TrackStatusAuthContext";

function ChallanInfo() {
  const router = useRouter();
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setSearch } = useAuth();

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await getRequestWithoutToken<DashboardResponse>(
        "/v1/customer/dashboard",
        {},
        true
      );
      setData(response);
    } catch (err) {
      console.error("Error fetching dashboard:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      fetchDashboardData();
    }
  }, []);

  const handleSearch = (value: string) => {
    if (value) {
      setSearch(value);
      router.push("/search-result");
    }
  };

  const handleFrequentlyAsked = () => {
    router.push("/frequently-asked-questions");
  };

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center h-screen w-screen bg-gray-100 lg:hidden">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  //     </div>
  //   );
  // if (error) return <p>{error}</p>;

  return (
    <div className="lg:rounded-lg">
      <div className="bg-white rounded-xl px-4 lg:bg-slate-100 lg:px-0">
        <div className="grid grid-cols-2  sm:grid-cols-2 gap-4">
          <DashboardCard
            title="Challans Submitted on ChallanPay"
            count={`${data?.data?.submittedChallans}`}
            icon={
              <FileSpreadsheet size={20} className="text-cyan-600 bg-cyan-50" />
            }
          />
          <DashboardCard
            title="Resolved Challans"
            count={`${data?.data?.challansResolved}`}
            icon={
              <CircleCheckBig
                size={20}
                className="text-green-600 bg-green-50"
              />
            }
            href="/resolved-challan/Win"
          />
          <DashboardCard
            title="Challans In Progress"
            count={`${data?.data?.pendingChallans}`}
            icon={
              <Hourglass size={20} className="text-orange-600 bg-orange-50" />
            }
            href="/in-progress-challan/In Progress"
          />
          <DashboardCard
            title="Refund Challans"
            count={`${data?.data?.refundChallans}`}
            icon={
              <BadgeIndianRupee size={20} className="text-red-600 bg-red-50" />
            }
            href="/refund-challan/Refund Successful"
          />
        </div>
        <div
          className="flex justify-between items-center  bg-white border border-gray-300 p-2 my-4 rounded-lg "
          onClick={handleFrequentlyAsked}
        >
          <div className="text-sm font-semibold px-2">
            Frequently Asked Questions
          </div>
          <div className="px-2">
            <CircleChevronRight size={20} />
          </div>
        </div>
        <div className=" mb-4">
          <InfoBanner
            title={"Easily Resolve Challan with ChallanPay"}
            bgColor="#ECFEFF" // default yellow background
            textColor="#0E7490" // default yellow-700 text
            icon={
              <CircleCheckBig size={20} className="text-cyan-600 bg-cyan-50" />
            }
          />
        </div>
      </div>
      <div className="bg-slate-100 p-4 lg:bg-white lg:rounded-lg">
        <div className="text-base font-bold my-2">Challans Information</div>
        <SearchBar placeholder="Search Challans..." onSearch={handleSearch} />
        <ChallanInfoTabs />
      </div>
    </div>
  );
}

export default ChallanInfo;
