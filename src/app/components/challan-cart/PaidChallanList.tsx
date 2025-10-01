import React from "react";
import PaidChallanCard from "./PaidChallanCard";

function PaidChallanList() {
  return (
    // <div className=" bg-slate-100 rounded-lg pt-2 pb-4">
    //   <PaidChallanCard />
    //   <PaidChallanCard />
    // </div>
    <div>
      <div className="text-lg font-bold  pt-4 hidden lg:flex">
        Paid Challans
      </div>
      <div className="bg-slate-100 rounded-lg pt-2 pb-4 lg:bg-white lg:flex lg:gap-4">
        <div className="lg:flex-1">
          <PaidChallanCard />
        </div>
        <div className="lg:flex-1">
          <PaidChallanCard />
        </div>
      </div>
    </div>
  );
}

export default PaidChallanList;
