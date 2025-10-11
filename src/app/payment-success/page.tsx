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
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

function PaymentSuccess() {
  const router = useRouter();

  const handleTrackChallanDashboard = () => {
    router.push("/track-challan-login");
  };

  return (
    <>
      <div className="lg:px-40 lg:bg-slate-50">
        <Header />
        <div className="bg-slate-50 mt-4 pb-4 lg:hidden block ">
          <div className="px-6 text-center text-black font-bold pt-6">
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
        <div className="lg:h-25 hidden lg:flex"></div>
        <div className="lg:flex lg:justify-around lg:gap-4  lg:rounded-lg lg:flex-row-reverse">
          <div className="lg:w-full lg:bg-white lg:rounded-lg">
            <div className="lg:text-green-700 font-semibold lg:px-4 lg:pt-4 hidden lg:flex">
              2 Challan Submitted!
            </div>
            <div className="hidden lg:flex flex justify-start items-center rounded-lg bg-green-100 p-2 mt-4 mt-2 mx-4 h-10">
              <Check className="bg-green-800 rounded-full w-4 h-4 text-white p-1 mx-2" />
              <span className="text-green-800 text-xs font-semibold">
                You saved ₹500
              </span>
            </div>
            <PaymentInfo />
            <div className="hidden lg:flex lg:flex-col lg:mx-4 lg:mt-4">
              <Button className="bg-cyan-600 w-full">Track Status</Button>

              <Button className="bg-white w-full text-black mt-4 border">
                Download Challan Receipt
              </Button>
            </div>
          </div>
          <div className="lg:w-full lg:bg-white lg:rounded-lg">
            <div className="hidden lg:flex  lg:justify-center mb-15">
              <div className="px-6 text-center text-black font-bold pt-6">
                <div className="px-6 text-center text-black font-bold pt-15 flex flex-col items-center">
                  <Image
                    src="/gif/icons8-check.gif"
                    alt="success gif"
                    height={60}
                    width={60}
                  />
                  <p>Thank you for submitting your challan!</p>
                </div>
              </div>
            </div>
            <div className="lg:pl-4 text-lg font-bold hidden lg:flex">
              Challan Details
            </div>
            <ChallanDetailCard />
            <ChallanDetailCard />
          </div>
        </div>
        <WhatNext />
        <TrackStatusBottomSheet
          primaryText={"Track Status"}
          secondaryText={"Download Reciept"}
          onPrimaryClick={handleTrackChallanDashboard}
        />
      </div>
    </>
  );
}

export default PaymentSuccess;
