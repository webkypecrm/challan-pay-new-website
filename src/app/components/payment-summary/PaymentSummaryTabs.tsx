"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PayAndClose from "./PayAndClose";
import ContestAndWait from "./ContestAndWait";
import BottomSheet from "../common/BottomSheet";
//import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { useEffect, useState } from "react";
import { handleRazorpayPayment } from "../PayWithRozorpay";
import { useRouter } from "next/navigation";
import { LoaderModal } from "../LoaderModal";
// import Lottie from "lottie-react";
// import confettiLoader from "../../../../public/json/confetti.json";
import ConfettiAnimation from "../common/ConfettiAnimation";

export function PaymentSummaryTabs() {
  const { data, loading, selectedChallans, isContestSelected, isPledge } =
    useChallanContext();
  const [isPledge1, setIsPledge1] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [], // array of numbers
        potentialDiscount: data?.potentialDiscount ?? 0, // fallback if undefined
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
        isContest: isContestSelected,
      },
      router,
      setLoader
    );
  };

  useEffect(() => {
    if (!data) return; // prevent unnecessary updates when data is null
    setIsPledge1(!!data.potentialDiscount);
  }, [data]);

  //console.log(isPledge);
  return (
    <div className="rounded-xl  lg:px-6 lg:flex lg:justify-center lg:bg-white bg-slate-100 lg:my-4">
      <div className="flex w-full max-w-md flex-col lg:max-w-3xl ">
        <div className="m-4 bg-white rounded-lg lg:m-0">
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
            {/* <Lottie
              animationData={confettiLoader}
              loop={false}
              className="w-[400] h-[400] max-w-[500px] max-h-[500px] lg:w-[400px] lg:h-[350px] 
               lg:translate-x-[-230px] lg:translate-y-[50px]"
            /> */}
            <ConfettiAnimation isPledge={isPledge} />
          </div>

          <div className=" lg:text-[16px] lg:font-semibold lg:py-4  hidden lg:flex">
            Choose Resolution Type
          </div>
          <div className=" text-[15px] font-semibold py-2 px-4  lg:hidden block">
            Select Resolution Type
          </div>
          <Tabs
            defaultValue={
              data?.potentialDiscount === 0 ? "contestandwait" : "payandclose"
            }
          >
            {data?.courtChallanAmount && data.courtChallanAmount >= 10000 ? (
              <TabsList className="w-full justify-center  px-4 lg:px-0 rounded-t-none lg:rounded-md lg:bg-[#faf8f7]  ">
                {data?.potentialDiscount !== 0 ? (
                  <TabsTrigger
                    className="w-1/2 text-center data-[state=active]:bg-black rounded-lg data-[state=active]:rounded-lg  data-[state=active]:text-white "
                    value="payandclose"
                  >
                    Pay & Close
                  </TabsTrigger>
                ) : null}{" "}
                <TabsTrigger
                  className="w-1/2 text-center 
               data-[state=active]:bg-black 
               rounded-lg 
               data-[state=active]:rounded-lg  
               data-[state=active]:text-white"
                  value="contestandwait"
                >
                  Contest & Wait
                </TabsTrigger>
              </TabsList>
            ) : null}

            {data?.potentialDiscount !== 0 ? (
              <TabsContent value="payandclose" className=" px-4">
                <PayAndClose />
              </TabsContent>
            ) : null}

            {data?.courtChallanAmount && data.courtChallanAmount >= 10000 ? (
              <TabsContent value="contestandwait" className=" px-4">
                <ContestAndWait />
              </TabsContent>
            ) : null}
          </Tabs>
        </div>
      </div>
      <LoaderModal open={loader} message="Processing your payment..." />
      <div className="lg:hidden block">
        {!loading && data?.amountToPay ? (
          <BottomSheet
            amount={`₹ ${data.amountToPay.toLocaleString()}`}
            subtitle="Total Payable Amount"
            buttonText="Proceed To Pay"
            onButtonClick={handleProccedNext}
            isPledge={isPledge1}
          />
        ) : null}
      </div>
    </div>
  );
}
