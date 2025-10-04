"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PayAndClose from "./PayAndClose";
import ContestAndWait from "./ContestAndWait";
import BottomSheet from "../common/BottomSheet";
import { useRouter } from "next/navigation";

export function PaymentSummaryTabs() {
  const router = useRouter();

  return (
    <div className="rounded-xl  lg:px-6 lg:flex lg:justify-center lg:bg-white lg:my-4">
      <div className="flex w-full max-w-md flex-col lg:max-w-3xl">
        <div className=" lg:text-sm lg:font-semibold lg:py-4  hidden lg:flex">
          Select Resolution Type
        </div>
        <Tabs defaultValue="payandclose">
          <TabsList className="w-full justify-center  px-4 lg:px-0 rounded-t-none lg:rounded-md lg:bg-[#faf8f7]">
            <TabsTrigger
              className="w-1/2 text-center data-[state=active]:bg-black rounded-lg data-[state=active]:rounded-lg  data-[state=active]:text-white "
              value="payandclose"
            >
              Pay & Close
            </TabsTrigger>
            <TabsTrigger
              className="w-1/2 text-center data-[state=active]:bg-black rounded-lg data-[state=active]:rounded-lg  data-[state=active]:text-white"
              value="contestandwait"
            >
              Contest & Wait
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payandclose" className=" px-4">
            <PayAndClose />
          </TabsContent>

          <TabsContent value="contestandwait" className=" px-4">
            <ContestAndWait />
          </TabsContent>
        </Tabs>
      </div>
      <div className="lg:hidden block">
        <BottomSheet
          amount="₹ 4000"
          subtitle="Total Challan Amount"
          buttonText="Proceed to pay"
          onButtonClick={() => router.push("/payment-success")}
        />
      </div>
    </div>
  );
}
