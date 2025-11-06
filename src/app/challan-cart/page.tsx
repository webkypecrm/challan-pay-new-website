"use client";

import React from "react";
import Header from "../components/common/Header";
import ChallanCartHeader from "../components/challan-cart/ChallanCartHeader";
import { ChallanCartTabs } from "../components/challan-cart/ChallanCartTabs";
import BottomSheet from "../components/common/BottomSheet";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { useState, useEffect } from "react";

function ChallanCart() {
  const router = useRouter();
  const { data, loading } = useChallanContext();
  const [isPledge, setIsPledge] = useState(false);

  const handleProccedNext = () => {
    router.push("/payment-summary");
  };

  useEffect(() => {
    if (!data) return; // prevent unnecessary updates when data is null

    setIsPledge(!!data.potentialDiscount);
  }, [data]);

  return (
    <div className="bg-slate-100 lg:bg-slate-100 lg:min-h-screen">
      <Header />
      <div className="lg:flex lg:justify-center w-full">
        <div className="w-full lg:max-w-6xl">
          <div className="bg-white lg:bg-slate-100 lg:py-4">
            <ChallanCartHeader />
          </div>
          <div className="lg:mb-4">
            <ChallanCartTabs />
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        {!loading && data?.amountToPay ? (
          <BottomSheet
            amount={`₹ ${
              (data.onlineChallanAmount || 0) + (data.courtChallanAmount || 0)
            }`}
            subtitle="Total Challan Amount"
            buttonText="Proceed Next"
            onButtonClick={handleProccedNext}
            isPledge={isPledge}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ChallanCart;
