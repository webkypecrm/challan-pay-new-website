"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useChallanContext } from "@/context/ChallanContext";
import { ContestReadMore } from "../common/ContestReadMore";
import { useState, useEffect } from "react";

function ContestAndWait() {
  const { setIsContestSelected, isContestSelected, isPledge, setIsPledge } =
    useChallanContext();
  const [openReadMore, setOpenReadMore] = useState(false);

  const handleContestChange = () => {
    setIsContestSelected(!isContestSelected);
  };
  useEffect(() => {
    if (isPledge) {
      setIsContestSelected(false);
    }
  }, [isPledge]);

  useEffect(() => {
    if (isContestSelected) {
      setIsPledge(false);
    }
  }, [isContestSelected]);

  return (
    <div className="border-1 border-gray-200 rounded-2xl bg-white mb-4 ">
      <div className="p-4 flex flex-1 items-center gap-2">
        <Checkbox
          className="rounded-sm w-6 h-6"
          checked={isContestSelected}
          onCheckedChange={handleContestChange}
        />
        <span className="text-sm font-semibold"> Contest and Wait</span>
      </div>
      <div className="p-2 flex flex-wrap justify-start items-center gap-2">
        <span className="text-xs font-semibold text-green-800 font-semibold p-2 bg-green-50 mx-2">
          Delayed Benefit
        </span>
        <span className="text-xs font-semibold text-orange-800  font-semibold p-2 bg-orange-50">
          90 Days TAT
        </span>
        <span className="text-xs font-semibold text-cyan-800  font-semibold p-2 bg-cyan-50 mx-2">
          Refund Applicables
        </span>
      </div>
      <div className="p-4 text-xs font-medium">
        {`I wish to contest my challans. I understand this may take 60–90 days,
        and I’ll get refunds for any waiver granted after closure...`}
        <span className="text-blue-600" onClick={() => setOpenReadMore(true)}>
          read more
        </span>
      </div>
      <ContestReadMore open={openReadMore} setOpen={setOpenReadMore} />
    </div>
  );
}

export default ContestAndWait;
