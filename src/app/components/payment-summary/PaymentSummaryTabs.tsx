"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PayAndClose from "./PayAndClose";
import ContestAndWait from "./ContestAndWait";
import BottomSheet from "../common/BottomSheet";
import { useRouter } from "next/navigation";

export function PaymentSummaryTabs() {
  const router = useRouter();

  return (
    <div className="rounded-xl ">
      <div className="flex w-full max-w-md flex-col ">
        <Tabs defaultValue="payandclose">
          <TabsList className="w-full justify-center  px-4  rounded-t-none ">
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
      <BottomSheet
        amount="₹ 4000"
        subtitle="Total Challan Amount"
        buttonText="Proceed to pay"
        onButtonClick={() => router.push("/payment-success")}
      />
    </div>
  );
}
