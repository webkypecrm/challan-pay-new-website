"use client";

import React from "react";
import PaymentSummaryHeader from "../components/payment-summary/PaymentSummaryHeader";
import Header from "../components/common/Header";
import { PaymentSummaryTabs } from "../components/payment-summary/PaymentSummaryTabs";
//import BottomSheet from "../components/common/BottomSheet";

function page() {
  return (
    <>
      <Header />
      <PaymentSummaryHeader />
      <PaymentSummaryTabs />
    </>
  );
}

export default page;
