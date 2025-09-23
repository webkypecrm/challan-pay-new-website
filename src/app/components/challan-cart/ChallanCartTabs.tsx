import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingChallanList from "./PendingChallanList";
import PaidChallanList from "./PaidChallanList";

export function ChallanCartTabs() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 mt-4">
      <Tabs defaultValue="pending">
        <TabsList className="w-full justify-center  px-3 ">
          <TabsTrigger
            className="w-1/2 text-center data-[state=active]:bg-black  data-[state=active]:text-white "
            value="pending"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            className="w-1/2 text-center data-[state=active]:bg-black  data-[state=active]:text-white"
            value="paid"
          >
            Paid
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <PendingChallanList />
        </TabsContent>

        <TabsContent value="paid">
          <PaidChallanList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
