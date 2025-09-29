import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingChallanList from "./PendingChallanList";
import PaidChallanList from "./PaidChallanList";

export function ChallanCartTabs() {
  return (
    <div className="">
      <div className="flex w-full max-w-md flex-col gap-4 ">
        <Tabs defaultValue="pending">
          <TabsList className="w-full justify-center bg-white px-4 rounded-t-none ">
            <TabsTrigger
              className="w-1/2 text-center data-[state=active]:bg-black rounded-lg  data-[state=active]:rounded-lg data-[state=active]:text-white "
              value="pending"
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              className="w-1/2 text-center data-[state=active]:bg-black rounded-lg data-[state=active]:rounded-lg  data-[state=active]:text-white"
              value="paid"
            >
              Paid
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="pending"
            className="bg-slate-100 rounded-xl px-4 "
          >
            <PendingChallanList />
          </TabsContent>

          <TabsContent value="paid" className="bg-slate-100 px-4 ">
            <PaidChallanList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
