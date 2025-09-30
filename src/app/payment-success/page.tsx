"use client";

import React from "react";
import Header from "../components/common/Header";
import PaymentInfo from "../components/payment-success/PaymentInfo";
import ChallanDetailCard from "../components/payment-success/ChallanDetailCard";
//import { CircleCheck } from "lucide-react";
import WhatNext from "../components/payment-success/WhatNext";
import TrackStatusBottomSheet from "../components/common/TrackStatusBottomSheet";
import { useRouter } from "next/navigation";
import Image from "next/image";

function PaymentSuccess() {
  const router = useRouter();

  const handleTrackChallanDashboard = () => {
    router.push("/track-challan-login");
  };

  return (
    <>
      <Header />
      <div className="bg-slate-50 mt-8 pb-4">
        <div className="px-6 text-center text-black font-bold pt-15">
          <div className="px-6 text-center text-black font-bold pt-15 flex flex-col items-center">
            <Image
              src="/gif/icons8-check.gif"
              alt="success gif"
              height={60}
              width={60}
            />
            <p>Thank you Anurag, for submitting your challan for Contest!</p>
          </div>
        </div>
      </div>
      <PaymentInfo />
      <ChallanDetailCard />
      <WhatNext />
      <TrackStatusBottomSheet
        primaryText={"Track Status"}
        secondaryText={"Download Reciept"}
        onPrimaryClick={handleTrackChallanDashboard}
      />
    </>
  );
}

export default PaymentSuccess;
