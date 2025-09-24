import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PayAndClose from "./PayAndClose";
import ContestAndWait from "./ContestAndWait";

export function PaymentSummaryTabs() {
  return (
    <div className="bg-slate-100 rounded-xl">
      <div className="flex w-full max-w-md flex-col gap-4 mt-4 px-4 pt-2">
        <Tabs defaultValue="payandclose">
          <TabsList className="w-full justify-center  px-3 ">
            <TabsTrigger
              className="w-1/2 text-center data-[state=active]:bg-black  data-[state=active]:text-white "
              value="payandclose"
            >
              Pay & Close
            </TabsTrigger>
            <TabsTrigger
              className="w-1/2 text-center data-[state=active]:bg-black  data-[state=active]:text-white"
              value="contestandwait"
            >
              Contest & Wait
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payandclose">
            <PayAndClose />
          </TabsContent>

          <TabsContent value="contestandwait">
            <ContestAndWait />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
