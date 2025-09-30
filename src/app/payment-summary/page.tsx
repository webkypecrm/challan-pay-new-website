"use client";
import React from "react";
import PaymentSummaryHeader from "../components/payment-summary/PaymentSummaryHeader";
import Header from "../components/common/Header";
import { PaymentSummaryTabs } from "../components/payment-summary/PaymentSummaryTabs";

function page() {
  return (
    <div className="bg-slate-50">
      <Header />
      <PaymentSummaryHeader />
      <PaymentSummaryTabs />
    </div>
  );
}

export default page;
