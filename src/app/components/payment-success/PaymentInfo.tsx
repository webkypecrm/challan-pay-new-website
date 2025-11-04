"use client";

import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import React from "react";

// PaymentInfo.tsx

interface Subscriber {
  id: number;
}

export interface PaymentDetail {
  subscriber?: Subscriber;
  vehicleNo?: string;
  amountPaid?: number;
  challanNo?: string;
  challanInvoice?: string;
}

export interface PaymentInfoProps {
  paymentDetail?: PaymentDetail[];
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ paymentDetail = [] }) => {
  const params = useParams(); // ✅ correct way
  //console.log(params); // e.g. { amount: "500" }

  const info = [
    {
      label: "Subscriber ID",
      value: paymentDetail[0]?.subscriber?.id ?? "—",
    },
    {
      label: "Vehicle Number",
      value: paymentDetail[0]?.vehicleNo ?? "—",
    },
    {
      label: "Challans Submitted",
      value: paymentDetail.length,
    },
    {
      label: "Total Amount Paid",
      value:
        params.amount !== undefined &&
        params.amount !== null &&
        params.amount !== ""
          ? `₹${Number(params.amount).toFixed(2)}`
          : "—",
    },
  ];

  return (
    <div className="p-4">
      <div className="px-2 border border-[#E5E5E5] rounded-lg">
        {info.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex justify-between items-center p-3">
              <div className="text-[#737373]">{item.label}</div>
              <div className="text-black text-sm font-semibold">
                {item.value}
              </div>
            </div>
            {index < info.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
