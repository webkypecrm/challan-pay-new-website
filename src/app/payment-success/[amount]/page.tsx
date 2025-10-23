"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import PaymentInfo from "../../components/payment-success/PaymentInfo";
import ChallanDetailCard from "../../components/payment-success/ChallanDetailCard";
import WhatNext from "../../components/payment-success/WhatNext";
import TrackStatusBottomSheet from "../../components/common/TrackStatusBottomSheet";
import { useRouter } from "next/navigation";
import Image from "next/image";
//import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Define proper TypeScript interfaces
interface Incident {
  challanNo: string;
  id: string;
  challanType: boolean;
  courtChallan: boolean;
  createdAt?: string;
  latestSecondaryStatus: string;
}

interface PaymentDetail {
  incidents: Incident[];
}

const PaymentSuccess: React.FC = () => {
  const router = useRouter();

  const [challanPaymentDetail, setChallanPaymentDetail] =
    useState<PaymentDetail | null>(null);

  const handleTrackChallanDashboard = () => {
    router.push("/track-challan-login");
  };

  useEffect(() => {
    const paymentDetail = sessionStorage.getItem("paymentDetail");
    if (paymentDetail) {
      setChallanPaymentDetail(JSON.parse(paymentDetail));
    }
  }, []);

  return (
    <div className="lg:px-40 lg:bg-slate-50 lg:mt-20 ">
      <Header />

      {/* ✅ Mobile success message */}
      <div className="bg-slate-50 mt-4 pb-4 lg:hidden block mt-16 ">
        <div className="px-6 text-center text-black font-bold pt-6 flex flex-col items-center">
          <Image
            src="/gif/Checked.gif"
            alt="success gif"
            height={120}
            width={120}
          />
          <p>Thank you for submitting your challan!</p>
        </div>
      </div>

      <div className="lg:flex lg:justify-around lg:gap-4 lg:rounded-lg lg:flex-row-reverse">
        {/* ✅ Left side - Payment Info */}
        <div className="lg:w-full lg:bg-white lg:rounded-lg">
          <div className="lg:text-green-700 font-semibold lg:px-4 lg:pt-4 hidden lg:flex">
            {challanPaymentDetail?.incidents?.length || 0} Challan Submitted!
          </div>

          {/* <div className="hidden lg:flex items-center rounded-lg bg-green-100 p-2 mt-2 mx-4 h-10">
            <Check className="bg-green-800 rounded-full w-4 h-4 text-white p-1 mx-2" />
            <span className="text-green-800 text-xs font-semibold">
              You saved ₹500
            </span>
          </div> */}

          <PaymentInfo paymentDetail={challanPaymentDetail?.incidents || []} />

          <div className="hidden lg:flex lg:flex-col lg:mx-4 lg:mt-4">
            <Button
              className="bg-cyan-600 w-full"
              onClick={handleTrackChallanDashboard}
            >
              Track Status
            </Button>
            {/* <Button className="bg-white w-full text-black mt-4 border">
              Download Challan Receipt
            </Button> */}
          </div>
        </div>

        {/* ✅ Right side - Challan Details */}
        <div className="lg:w-full lg:bg-white lg:rounded-lg">
          <div className="hidden lg:flex lg:justify-center mb-4">
            <div className="text-center text-black font-bold flex flex-col items-center">
              <Image
                src="/gif/icons8-check.gif"
                alt="success gif"
                height={60}
                width={60}
              />
              <p>Thank you for submitting your challan!</p>
            </div>
          </div>

          <div className="lg:pl-4 text-lg font-bold hidden lg:flex">
            Challan Details
          </div>

          {challanPaymentDetail?.incidents?.map((challan) => (
            <ChallanDetailCard
              key={challan.challanNo}
              challanNo={challan.challanNo}
              incidentId={challan.id}
              courtChallan={challan?.courtChallan}
              createdAt={challan.createdAt || "N/A"}
              status={challan.latestSecondaryStatus}
              //onClick={() => handleChallanClick(challan.challanNo)}
            />
          ))}
        </div>
      </div>

      <WhatNext />

      <TrackStatusBottomSheet
        primaryText="Track Status"
        secondaryText="Download Receipt"
        onPrimaryClick={handleTrackChallanDashboard}
      />
    </div>
  );
};

export default PaymentSuccess;
