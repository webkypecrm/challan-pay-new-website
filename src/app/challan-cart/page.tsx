import React from "react";
import Header from "../components/common/Header";
import ChallanCartHeader from "../components/challan-cart/ChallanCartHeader";
import { ChallanCartTabs } from "../components/challan-cart/ChallanCartTabs";

function page() {
  return (
    <>
      <Header />
      <ChallanCartHeader />
      <ChallanCartTabs />
    </>
  );
}

export default page;
