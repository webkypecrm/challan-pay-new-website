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
    <>
      <Header />
      <ChallanCartHeader />
      <ChallanCartTabs />
      <BottomSheet
        amount="₹ 4000"
        subtitle="Total Challan Amount"
        buttonText="Proceed next"
        onButtonClick={handleProccedNext}
      />
    </>
  );
}

export default ChallanCart;
