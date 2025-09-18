//import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CheckResolution() {
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-6 pt-20 px-2">
      <div className="text-black text-center font-bold text-2xl uppercase">
        Verified Challan Check and Resolution
      </div>
      <Tabs defaultValue="account" className="w-full">
        {/* Tabs List full width */}
        <TabsList className="w-full flex justify-between">
          <TabsTrigger value="account" className="flex-1">
            ChallanPay
          </TabsTrigger>
          <TabsTrigger value="password" className="flex-1">
            Government Portal
          </TabsTrigger>
        </TabsList>

        {/* Tab Content full width */}
        <TabsContent value="account" className="w-full">
          <Card className="w-full">
            <CardContent className="grid gap-6">
              <ul>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      1
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Select the challan{" "}
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      Choose the specific challan you wish to pay
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      2
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Proceed with payment
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      You will be redirected to a secure payment gateway
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      3
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Choose payment mode
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      Select from options like credit card/debit card or
                      net-banking
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      4
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Receive Confirmation
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      You will get a confirmation with a transaction ID
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      5
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Complete the transaction
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      Follow the on-screen instructions to complete
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="w-full">
          <Card className="w-full">
            <CardContent className="grid gap-6">
              <ul>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      1
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Select the challan{" "}
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      Choose the specific challan you wish to pay
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      2
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Proceed with payment
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      You will be redirected to a secure payment gateway
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      3
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Choose payment mode
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      Select from options like credit card/debit card or
                      net-banking
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      4
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Receive Confirmation
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      You will get a confirmation with a transaction ID
                    </p>
                  </div>
                </li>
                <li className="py-3 my-2">
                  <div>
                    <span className="px-3 py-1  bg-gray-200 rounded-sm font-bold">
                      5
                    </span>{" "}
                    <span className="font-bold text-md mx-1">
                      Complete the transaction
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      Follow the on-screen instructions to complete
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
