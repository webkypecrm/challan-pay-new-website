import React from "react";
import PaymentSummaryHeader from "../components/payment-summary/PaymentSummaryHeader";
import Header from "../components/common/Header";
import { PaymentSummaryTabs } from "../components/payment-summary/PaymentSummaryTabs";
import BottomSlider from "../components/common/BottomSlider";

function page() {
  return (
    <>
      <Header />
      <PaymentSummaryHeader />
      <PaymentSummaryTabs />
      <BottomSlider />
    </>
  );
}

export default page;
