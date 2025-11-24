"use client";
import { Checkbox } from "@/components/ui/checkbox";
import PendingChallanCard from "./PendingChallanCard";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gift } from "lucide-react";
import InfoBanner from "../common/InfoBanner";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import EmptyState from "../common/EmptyState";
import moengage from "@moengage/web-sdk";

interface Challan {
  id: number;
  challanNo: string;
  date: string;
  amount: number;
  challanStatus: string;
  courtChallan: boolean;
  offenseName: string;
}

interface PendingChallanListProps {
  challans: Challan[];
}

function PendingChallanList({ challans }: PendingChallanListProps) {
  const router = useRouter();
  const [isPledge, setIsPledge] = useState(false);
  const { selectedChallans, selectAllNonZero, autoSelectAllOnInit, data } =
    useChallanContext();
  const [vehicleNo, setVehicleNo] = useState<string | null>(null);

  // Separate view toggles
  const [showAllOnline, setShowAllOnline] = useState(false);
  const [showAllCourt, setShowAllCourt] = useState(false);

  useEffect(() => {
    const storedVehicle = sessionStorage.getItem("vehicleNo");
    setVehicleNo(storedVehicle);
  }, []);

  const handleProccedNext = () => {
    router.push("/payment-summary");
  };

  const onlineChallans = challans.filter(
    (item) =>
      !item.courtChallan &&
      (item.challanStatus === "VIRTUAL COURT" ||
        item.challanStatus === "Pending" ||
        item.challanStatus === "Unpaid")
  );

  const courtChallans = challans.filter(
    (item) =>
      item.courtChallan &&
      (item.challanStatus === "VIRTUAL COURT" ||
        item.challanStatus === "Pending" ||
        item.challanStatus === "Unpaid")
  );

  const pendingChallan = [...onlineChallans, ...courtChallans];

  const allSelected = pendingChallan
    .filter((c) => c.amount > 0)
    .every((c) => selectedChallans.includes(c.id));

  useEffect(() => {
    if (pendingChallan.length) {
      autoSelectAllOnInit(pendingChallan.filter((c) => c.amount > 0));
    }
  }, [pendingChallan.length]);

  useEffect(() => {
    if (!data) return;
    setIsPledge(!!data.potentialDiscount);
  }, [data]);

  const visibleOnlineChallans = showAllOnline
    ? onlineChallans
    : onlineChallans.slice(0, 2);
  const visibleCourtChallans = showAllCourt
    ? courtChallans
    : courtChallans.slice(0, 2);

  useEffect(() => {
    if (challans.length) {
      moengage.track_event("challanSummaryViewed", {
        challans: challans.map((challan) => challan.challanNo),
        courtChallans: courtChallans.map((challan) => challan.challanNo),
        onlineChallans: onlineChallans.map((challan) => challan.challanNo),
        courtChallansAmount: data?.courtChallanAmount,
        onlineChallansAmount: data?.onlineChallanAmount,
        totalAmount: data?.amountToPay,
        potentialRewards: data?.potentialDiscount,
        vehicleNo: sessionStorage.getItem("vehicleNo"),
        eventPage: window.location.href,
      });
    }
  }, [challans]);

  return (
    <div className="bg-slate-100 rounded-lg pb-4 lg:bg-white lg:py-2 lg:relative">
      <div className="text-lg font-bold mt-4 hidden lg:flex">
        Pending Challans
      </div>

      {pendingChallan.length ? (
        <>
          <div className="lg:mb-30">
            <div className="flex justify-between items-center py-1">
              <div className="text-sm">{selectedChallans.length} Selected</div>
              <div className="text-sm flex items-center justify-center">
                <Checkbox
                  checked={allSelected}
                  className="w-4 h-4 bg-white data-[state=checked]:bg-cyan-600 data-[state=checked]:text-white data-[state=checked]:border-cyan-600"
                  onClick={() => selectAllNonZero(pendingChallan)}
                />
                <span className="mx-1">Select All</span>
              </div>
            </div>

            {/* ONLINE CHALLANS */}
            <div className="my-3">
              <p className="text-sm text-black font-bold">
                Online Challans ({onlineChallans.length})
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {visibleOnlineChallans.map((item) => (
                <PendingChallanCard key={item.id} item={item} />
              ))}
            </div>
            {onlineChallans.length > 2 && (
              <div className="text-center mt-2">
                <button
                  onClick={() => setShowAllOnline(!showAllOnline)}
                  className="text-blue-700 text-sm  hover:underline"
                >
                  {showAllOnline ? "View Less" : "View More"}
                </button>
              </div>
            )}

            {/* COURT CHALLANS */}
            <div className="my-3">
              <p className="text-sm text-black font-bold">
                Court Challans ({courtChallans.length})
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {visibleCourtChallans.map((item) => (
                <PendingChallanCard key={item.id} item={item} />
              ))}
            </div>
            {courtChallans.length > 2 && (
              <div className="text-center mt-2">
                <button
                  onClick={() => setShowAllCourt(!showAllCourt)}
                  className="text-blue-700 text-sm  hover:underline"
                >
                  {showAllCourt ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
          {/* PAYMENT FOOTER */}
          {data && data?.amountToPay ? (
            <div className="h-30 bg-gray-100 hidden lg:flex lg:bg-white fixed bottom-4 w-[820px]">
              <div
                className={cn(
                  "fixed bottom-0 left-0 right-0 lg:absolute lg:bottom-0 lg:left-0",
                  "bg-white shadow-xl rounded-t-2xl rounded-b-2xl border-t",
                  "transition-transform duration-500",
                  "h-30",
                  "lg:w-auto"
                )}
              >
                {isPledge && (
                  <InfoBanner
                    title="Pledge & Claim Rewards"
                    bgColor="#FEFCE8"
                    textColor="#B45309"
                    icon={<Gift />}
                  />
                )}
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">
                      ₹
                      {(data.onlineChallanAmount || 0) +
                        (data.courtChallanAmount || 0)}
                    </h2>
                    <p className="text-[#737373] text-xs">
                      Total amount to pay
                    </p>
                  </div>

                  <div>
                    <Button
                      className="bg-cyan-600 text-sm font-medium flex items-center gap-1"
                      onClick={handleProccedNext}
                    >
                      Procced To Pay
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <EmptyState
          imageSrc="/Images/nochallan.png"
          title="No Active Challans found on"
          subtitle={vehicleNo}
        />
      )}
    </div>
  );
}

export default PendingChallanList;
