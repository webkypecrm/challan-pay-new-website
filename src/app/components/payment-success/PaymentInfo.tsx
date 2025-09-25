import { Separator } from "@/components/ui/separator";
import React from "react";

const PaymentInfo = () => {
  const info = [
    { label: "Subscriber ID", value: "LWD-1234" },
    { label: "Vehicle Number", value: "UP32MM1113" },
    { label: "Challans Submitted", value: "02" },
    { label: "Total Amount Paid", value: "₹4236.00" },
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
