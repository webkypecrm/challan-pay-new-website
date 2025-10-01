"use client";

import React from "react";
import Header from "../components/common/Header";
import ChallanCartHeader from "../components/challan-cart/ChallanCartHeader";
import { ChallanCartTabs } from "../components/challan-cart/ChallanCartTabs";
import BottomSheet from "../components/common/BottomSheet";
import { useRouter } from "next/navigation";

function ChallanCart() {
  const router = useRouter();

  const handleProccedNext = () => {
    router.push("/payment-summary");
  };
  return (
    <div className="bg-slate-100 lg:bg-slate-100">
      <Header />
      <div className="bg-white lg:px-30  lg:bg-slate-100 lg:py-4">
        <ChallanCartHeader />
      </div>
      <ChallanCartTabs />

      <BottomSheet
        amount="₹ 4000"
        subtitle="Total Challan Amount"
        buttonText="Proceed next"
        onButtonClick={handleProccedNext}
      />
    </div>
  );
}

export default ChallanCart;
