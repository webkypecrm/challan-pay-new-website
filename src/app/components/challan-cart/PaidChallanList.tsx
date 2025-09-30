import React from "react";
import PaidChallanCard from "./PaidChallanCard";

function PaidChallanList() {
  return (
    <div className=" bg-slate-100 rounded-lg pt-2 pb-4">
      <PaidChallanCard />
      <PaidChallanCard />
    </div>
  );
}

export default PaidChallanList;
