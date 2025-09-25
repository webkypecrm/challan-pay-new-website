import React from "react";
import Header from "../components/common/Header";
import ChallanCartHeader from "../components/challan-cart/ChallanCartHeader";
import { ChallanCartTabs } from "../components/challan-cart/ChallanCartTabs";
import BottomSlider from "../components/common/BottomSheet";

function page() {
  return (
    <>
      <Header />
      <ChallanCartHeader />
      <ChallanCartTabs />
      <BottomSlider />
    </>
  );
}

export default page;
