import React from "react";
import PaidChallanCard from "./PaidChallanCard";

function PaidChallanList() {
  return (
    <div className="px-2 bg-slate-100 rounded-lg pt-2">
      <PaidChallanCard />
      <PaidChallanCard />
    </div>
  );
}

export default PaidChallanList;
