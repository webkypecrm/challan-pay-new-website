import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tabs2,
  TabsContent2,
  TabsList2,
  TabsTrigger2,
} from "@/components/ui/nestedTab";
import Image from "next/image";

export function CheckResolution() {
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-6 pt-12 ">
      <div className="text-black text-center font-bold text-2xl">
        Verified Challan Check<span> and Resolution</span>
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
              <div className="flex  items-center justify-center">
                <Image
                  src={"/Images/challanpay.png"}
                  alt="Challan Pay Png"
                  width={350}
                  height={250}
                  className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
                />
              </div>
              <Tabs2 defaultValue="account1" className="w-full">
                {/* Tabs List full width */}
                <TabsList2 className="w-full flex justify-between">
                  <TabsTrigger2 value="account1" className="flex-1">
                    How to Check Your E-challan
                  </TabsTrigger2>
                  <TabsTrigger2 value="password2" className="flex-1">
                    How to Pay Your E-challan
                  </TabsTrigger2>
                </TabsList2>

                {/* Tab Content full width */}
                <TabsContent2 value="account1" className="w-full">
                  <Card className="w-full">
                    <CardContent className="grid gap-6">
                      <ul>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              1
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md">
                                Visit the Official Website
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Navigate to the website
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              2
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Enter Vehicle Details
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                {`Input your vehicle's registration number to
                                fetch challan information`}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              3
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Verify Your Identity
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Provide your mobile number and authenticate via
                                OTP
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              4
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Check Challan Status
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                View all e-challans linked to your vehicle
                                instantly
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent2>
                <TabsContent2 value="password2" className="w-full">
                  <Card className="w-full">
                    <CardContent className="grid gap-6">
                      <ul>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              1
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md">
                                Select the challan
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Choose the specific challan you wish to pay
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              2
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Proceed with payment
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                You will be redirected to a secure payment
                                gateway
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              3
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Choose payment mode
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Select from options like credit card/debit card
                                or net-banking
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              4
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Receive Confirmation
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                You will get a confirmation with a transaction
                                ID
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              5
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Complete the transaction
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Follow the on-screen instructions to complete
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent2>
              </Tabs2>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="w-full">
          <Card className="w-full">
            <CardContent className="grid gap-6">
              <div className="flex  items-center justify-center">
                <Image
                  src={"/images/government.png"}
                  alt="Challan Pay Png"
                  width={350}
                  height={250}
                  className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
                />
              </div>
              <Tabs2 defaultValue="account2" className="w-full">
                {/* Tabs List full width */}
                <TabsList2 className="w-full flex justify-between">
                  <TabsTrigger2 value="account2" className="flex-1">
                    How to Check Your E-challan
                  </TabsTrigger2>
                  <TabsTrigger2 value="password2" className="flex-1">
                    How to Pay Your E-challan
                  </TabsTrigger2>
                </TabsList2>

                {/* Tab Content full width */}
                <TabsContent2 value="account2" className="w-full">
                  <Card className="w-full">
                    <CardContent className="grid gap-6">
                      <ul>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              1
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md">
                                Visit the Official Portal
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Go to the authorized government e-challan
                                website
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              2
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Enter Vehicle Details
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                {`Provide your vehicle's registration number to
                                retrieve challan details`}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              3
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                View Challan Status
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                The portal will display all e-challans
                                associated with your vehicle
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              4
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Verify Information
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Check the violation details, date, and fine
                                amount to ensure accuracy
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent2>
                <TabsContent2 value="password2" className="w-full">
                  <Card className="w-full">
                    <CardContent className="grid gap-6">
                      <ul>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              1
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md">
                                Select the Challan
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Choose the specific challan you want to pay
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              2
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Proceed to Payment
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                You will be redirected to a secure payment
                                gateway
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              3
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Choose Payment Mode
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Select from options like credit/debit card, net
                                banking, or digital wallets
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              4
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Complete the Payment
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                Follow the instructions to finalize the
                                transaction
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-3 my-2">
                          <div className="flex items-start gap-3">
                            {/* Left side (Step number) */}
                            <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                              5
                            </span>

                            {/* Right side (Content) */}
                            <div>
                              <span className="font-bold text-md block">
                                Get Confirmation
                              </span>
                              <p className="text-gray-600 text-sm mt-2">
                                {`You'll receive a confirmation with a transaction
                                ID`}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent2>
              </Tabs2>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
