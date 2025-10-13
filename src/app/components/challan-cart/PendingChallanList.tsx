"use client";
import { Checkbox } from "@/components/ui/checkbox";
import PendingChallanCard from "./PendingChallanCard";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import InfoBanner from "../common/InfoBanner";
import { Gift } from "lucide-react";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { useEffect } from "react";
import EmptyState from "../common/EmptyState";

interface Challan {
  id: number;
  challanNo: string;
  date: string;
  amount: number;
  challanStatus: string;
  courtChallan: boolean;
}
interface PendingChallanListProps {
  challans: Challan[];
}

function PendingChallanList({ challans }: PendingChallanListProps) {
  const router = useRouter();
  const [isPledge, setIsPledge] = useState(false);
  const { selectedChallans, selectAllNonZero, autoSelectAllOnInit, data } =
    useChallanContext();

  const handleProccedNext = () => {
    router.push("/payment-summary");
  };

  console.log(selectedChallans);
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

  console.log(pendingChallan);
  const allSelected = pendingChallan
    .filter((c) => c.amount > 0)
    .every((c) => selectedChallans.includes(c.id));

  console.log("onlineChallans", onlineChallans);

  console.log("courtChallans", courtChallans);
  useEffect(() => {
    if (pendingChallan.length) {
      autoSelectAllOnInit(pendingChallan.filter((c) => c.amount > 0));
      console.log("AMAN");
    }
  }, [pendingChallan.length]);

  useEffect(() => {
    if (!data) return; // prevent unnecessary updates when data is null

    setIsPledge(!!data.potentialDiscount);
  }, [data]);
  console.log(data);
  return (
    <div className="bg-slate-100 rounded-lg pb-4 lg:bg-white lg:py-2 lg:relative">
      <div className="text-lg font-bold mt-4 hidden lg:flex">
        Pending Challans
      </div>
      {pendingChallan.length ? (
        <>
          <div className="flex justify-between items-center py-3">
            <div className="text-sm">{selectedChallans.length} Selected</div>
            <div className="text-sm flex items-center justify-center">
              <Checkbox
                checked={allSelected} // ✅ controlled by allSelected
                className="w-4 h-4 bg-white data-[state=checked]:bg-cyan-600   data-[state=checked]:text-white data-[state=checked]:border-cyan-600"
                onClick={() => selectAllNonZero(pendingChallan)}
              />{" "}
              <span className="mx-1">Select All</span>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-black font-bold">
              Online Challans ({onlineChallans.length})
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {onlineChallans.map((item) => (
              <PendingChallanCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6">
            <p className="text-sm text-black font-bold">
              Court Challans ({courtChallans.length})
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courtChallans.map((item) => (
              <PendingChallanCard key={item.id} item={item} />
            ))}
          </div>
          {data && data?.amountToPay ? (
            <div className=" h-30 bg-gray-100 hidden lg:flex">
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
                )}{" "}
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
          title="No, Active Challans found on"
          subtitle="UP32MM1113"
        />
      )}
    </div>
  );
}

export default PendingChallanList;
