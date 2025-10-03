"use client";
import React from "react";
import PaymentSummaryHeader from "../components/payment-summary/PaymentSummaryHeader";
import Header from "../components/common/Header";
import { PaymentSummaryTabs } from "../components/payment-summary/PaymentSummaryTabs";
import PaymentSummaryWebVersion from "../components/payment-summary/PaymentSummaryWebVersion";

function page() {
  return (
    <div className="bg-slate-50">
      <Header />
      {/* <div className="lg:flex lg:justify-center lg:gap-2"> */}
      <div className="bg-white lg:px-30 lg:bg-slate-100 lg:py-4 lg:flex lg:items-center lg:justify-center lg:gap-2 ">
        <div>
          <PaymentSummaryHeader />
          <div className="lg:px-15 lg:pr-2">
            <PaymentSummaryTabs />
          </div>
        </div>
        <PaymentSummaryWebVersion />
      </div>
      <div></div>
      {/* </div> */}
    </div>
  );
}

export default page;
