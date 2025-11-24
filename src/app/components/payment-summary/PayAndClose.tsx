"use client";

import React, { useState } from "react";
import { Gift } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { PledgeModal } from "../common/PledgeModal";
import { ReadMoreSlider } from "../common/ReadMoreSlider";
import { useChallanContext } from "@/context/ChallanContext";
import moengage from "@moengage/web-sdk";

function PayAndClose() {
  const [open, setOpen] = useState(false);
  const [openReadMore, setOpenReadMore] = useState(false);
  const { data, setIsPledge, isPledge } = useChallanContext();

  const handlePledgeChange = (checked: boolean) => {
    setIsPledge(checked);
    moengage.track_event("rewardOpted", {
      rewardSelected: isPledge,
      rewardAmount: data?.potentialDiscount,
      vehicleNo: sessionStorage.getItem("vehicleNo"),
    });
    if (checked) {
      setOpen(true); // open modal only when checked
    } else {
      setOpen(false); // close modal when unchecked
    }
  };

  return (
    <div className="border-1 border-yellow-700 rounded-2xl bg-white mb-4 ">
      {isPledge && (
        <div className="p-2 px-4 flex justify-between items-center bg-[#FEFCE8] rounded-t-2xl ">
          <div className="text-yellow-700 text-xs font-semibold ">
            Pledge & Claim ₹{data?.potentialDiscount} Reward
          </div>
          <div className="text-yellow-700 text-xs">
            <Gift />
          </div>
        </div>
      )}
      <PledgeModal open={open} onOpenChange={setOpen} isPledge={isPledge} />
      <div className="p-4 flex items-center gap-2">
        <button type="button" onClick={() => setOpen(true)}>
          {" "}
          <Checkbox
            className="rounded-sm w-6 h-6"
            checked={isPledge}
            onCheckedChange={handlePledgeChange}
          />
        </button>

        <span className="text-sm font-semibold"> I Pledge to Drive Safely</span>
      </div>
      <div className="p-2 flex justify-start items-center gap-2">
        <span className="text-xs font-semibold text-green-800 font-semibold p-2 bg-green-50 mx-2">
          Instant Benefit
        </span>
        <span className="text-xs font-semibold text-orange-800  font-semibold p-2 bg-orange-50">
          45–60 Days TAT
        </span>
      </div>
      <div className="p-4 text-xs font-medium">
        I wish to pledge & pay to claim upfront benefits. I understand it may
        take 45–60 days, and I am not eligible for any refund from waivers...
        <span className="text-blue-600" onClick={() => setOpenReadMore(true)}>
          read more
        </span>
      </div>
      <ReadMoreSlider open={openReadMore} setOpen={setOpenReadMore} />
    </div>
  );
}

export default PayAndClose;
