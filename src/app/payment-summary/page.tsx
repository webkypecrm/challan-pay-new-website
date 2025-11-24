"use client";
import React from "react";
import PaymentSummaryHeader from "../components/payment-summary/PaymentSummaryHeader";
import Header from "../components/common/Header";
import { PaymentSummaryTabs } from "../components/payment-summary/PaymentSummaryTabs";
import PaymentSummaryWebVersion from "../components/payment-summary/PaymentSummaryWebVersion";

//import ChallanCartHeader from "../components/challan-cart/ChallanCartHeader";

function page() {
  return (
    <div className="bg-slate-100 lg:flex lg:justify-center lg:min-h-screen">
      <Header />
      {/* <div className="lg:flex lg:justify-center lg:gap-2"> */}
      <div
        className="bg-white lg:max-h-screen
  lg:bg-slate-100 lg:py-4 lg:flex lg:items-center lg:max-w-6xl lg:justify-center lg:gap-2  "
      >
        <div className="lg:w-full">
          <PaymentSummaryHeader />
          {/* <ChallanCartHeader /> */}
          <div className="lg:px-0 lg:pr-0">
            <PaymentSummaryTabs />
          </div>
        </div>

        <PaymentSummaryWebVersion />
      </div>
      {/* </div> */}
    </div>
  );
}

export default page;
