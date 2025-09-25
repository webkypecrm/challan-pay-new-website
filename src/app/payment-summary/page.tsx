"use client";

import React from "react";
import PaymentSummaryHeader from "../components/payment-summary/PaymentSummaryHeader";
import Header from "../components/common/Header";
import { PaymentSummaryTabs } from "../components/payment-summary/PaymentSummaryTabs";
import BottomSheet from "../components/common/BottomSheet";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <>
      <Header />
      <PaymentSummaryHeader />
      <PaymentSummaryTabs />
      <BottomSheet
        amount="₹ 4000"
        subtitle="Total Challan Amount"
        buttonText="Proceed to pay"
        onButtonClick={() => router.push("/payment-success")}
      />
    </>
  );
}

export default page;
