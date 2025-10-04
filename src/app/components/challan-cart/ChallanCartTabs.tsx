import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingChallanList from "./PendingChallanList";
import PaidChallanList from "./PaidChallanList";
import { CheckCircle, Hourglass, Info } from "lucide-react";

import Image from "next/image";

export function ChallanCartTabs() {
  return (
    <div className="lg:flex lg:justify-center">
      <div className="flex w-full max-w-md flex-col gap-4 lg:w-full lg:max-w-6xl">
        <Tabs
          defaultValue="pending"
          className="lg:grid lg:grid-cols-[1fr_3fr] gap-4"
        >
          {/* <TabsList className="w-full justify-center bg-white px-4 rounded-t-none lg:flex lg:flex-col lg:gap-4 lg:mt-4 ">
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
          </TabsList> */}
          <div className="lg:bg-white lg:p-2 lg:pt-10 lg:rounded-lg">
            <TabsList
              className="
          w-full justify-center bg-white px-4 rounded-t-none 
          flex flex-row gap-2
          lg:flex lg:flex-col lg:gap-4 lg:mt-4  lg:rounded-lg lg:mt-4
        "
            >
              {/* Pending */}
              <TabsTrigger
                value="pending"
                className="
            w-1/2 text-center rounded-lg 
            data-[state=active]:bg-cyan-600 data-[state=active]:text-white
            lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
          "
              >
                <span className="hidden lg:flex items-center gap-2">
                  <Hourglass className="w-5 h-5" />
                  Pending
                </span>
                <span className="lg:hidden">Pending</span>
                <Info className="hidden lg:block w-5 h-5" />
              </TabsTrigger>

              {/* Paid */}
              <TabsTrigger
                value="paid"
                className="
            w-1/2 text-center rounded-lg 
            data-[state=active]:bg-cyan-600 data-[state=active]:text-white
            lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
          "
              >
                <span className="hidden lg:flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Paid
                </span>
                <span className="lg:hidden">Paid</span>
                <Info className="hidden lg:block w-5 h-5" />
              </TabsTrigger>
            </TabsList>
          </div>
          <div>
            <div className="h-18 flex items-center justify-center p-2 gap-4 bg-white mb-4 rounded-lg  hidden lg:flex">
              {/* Left side (car image) */}
              <div className="flex justify-center items-center">
                <Image
                  src="/Images/car.svg"
                  alt="car image"
                  width={80}
                  height={30}
                  className="object-contain"
                />

                <div className="p-1 border border-gray-300">
                  <div className="border border-black font-bold">
                    • UP 32MM 1113 •
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <TabsContent
              value="pending"
              className="bg-slate-100 rounded-xl px-4 lg:bg-white  "
            >
              <PendingChallanList />
            </TabsContent>

            <TabsContent
              value="paid"
              className="bg-slate-100 px-4  lg:bg-white lg:rounded-lg "
            >
              <PaidChallanList />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
