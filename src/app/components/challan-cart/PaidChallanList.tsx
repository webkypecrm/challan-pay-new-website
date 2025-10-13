import React from "react";
import PaidChallanCard from "./PaidChallanCard";
import EmptyState from "../common/EmptyState";

interface Challan {
  id: string | number;
  challanNo: string;
  date: string;
  amount: number;
  challanStatus: string;
  courtChallan: boolean;
}
interface PendingChallanListProps {
  challans: Challan[];
}

function PaidChallanList({ challans }: PendingChallanListProps) {
  const paidChallans = challans.filter(
    (item) => item.challanStatus === "Disposed" || item.challanStatus === "Paid"
  );
  return (
    <div>
      <div className="text-lg font-bold  pt-4 hidden lg:flex">
        Paid Challans
      </div>
      {paidChallans.length ? (
        <div className="bg-slate-100 rounded-lg pt-2 pb-4 lg:bg-white lg:flex lg:gap-4">
          {paidChallans.map((item) => (
            <div className="lg:flex-1" key={item.id}>
              <PaidChallanCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          imageSrc="/Images/paid.png"
          title="No, Paid Challans found on"
          subtitle="UP32MM1113"
        />
      )}
    </div>
  );
}

export default PaidChallanList;
