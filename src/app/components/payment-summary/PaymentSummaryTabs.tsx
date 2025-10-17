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

export function PaymentSummaryTabs() {
  const { data, loading, selectedChallans } = useChallanContext();
  const [isPledge, setIsPledge] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [], // array of numbers
        potentialDiscount: data?.potentialDiscount ?? 0, // fallback if undefined
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
      },
      router,
      setLoader
    );
  };

  useEffect(() => {
    if (!data) return; // prevent unnecessary updates when data is null

    setIsPledge(!!data.potentialDiscount);
  }, [data]);
  if (loader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="rounded-xl  lg:px-6 lg:flex lg:justify-center lg:bg-white bg-white lg:my-4">
      <div className="flex w-full max-w-md flex-col lg:max-w-3xl">
        <div className=" lg:text-sm lg:font-semibold lg:py-4  hidden lg:flex">
          Select Resolution Type
        </div>
        <Tabs
          defaultValue={
            data?.potentialDiscount === 0 ? "contestandwait" : "payandclose"
          }
        >
          {data?.amountToPay && data.amountToPay > 10000 && (
            <TabsList className="w-full justify-center  px-4 lg:px-0 rounded-t-none lg:rounded-md lg:bg-[#faf8f7]">
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
          )}

          {data?.potentialDiscount !== 0 ? (
            <TabsContent value="payandclose" className=" px-4">
              <PayAndClose />
            </TabsContent>
          ) : null}

          {data?.amountToPay && data.amountToPay > 10000 ? (
            <TabsContent value="contestandwait" className=" px-4">
              <ContestAndWait />
            </TabsContent>
          ) : null}
        </Tabs>
      </div>
      <LoaderModal open={loader} message="Processing your payment..." />
      <div className="lg:hidden block">
        {!loading && data?.amountToPay ? (
          <BottomSheet
            amount={`₹ ${data.amountToPay.toLocaleString()}`}
            subtitle="Total Challan Amount"
            buttonText="Proceed To Pay"
            onButtonClick={handleProccedNext}
            isPledge={isPledge}
          />
        ) : null}
      </div>
    </div>
  );
}
