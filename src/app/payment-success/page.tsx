import React from "react";
import Header from "../components/common/Header";
import PaymentInfo from "../components/payment-success/PaymentInfo";
import ChallanDetailCard from "../components/payment-success/ChallanDetailCard";
import { CircleCheck } from "lucide-react";
import BottomSlider from "../components/common/BottomSlider";

function page() {
  return (
    <>
      <Header />
      <div className="bg-slate-50 mt-12">
        <div className="px-10 text-center text-black font-bold pt-15">
          <CircleCheck className="m-auto text-green-500 mb-5" size={60} /> Thank
          you Anurag, for submitting your challan for Contest!
        </div>
      </div>
      <PaymentInfo />
      <ChallanDetailCard />
      <BottomSlider />
    </>
  );
}

export default page;
