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
    <>
      <div className="w-full  flex flex-col items-center justify-center gap-6 pt-12  ">
        <div className=" text-center text-2xl font-broken lg:text-4xl lg:text-[#374151] uppercase lg:font-normal">
          Verified Challan Check<span> and Resolution</span>
        </div>
        <Tabs defaultValue="account" className="w-full ">
          {/* Tabs List full width */}
          <div className="lg:flex lg:justify-center">
            <TabsList className="w-full flex justify-between bg-[#FAF8F7] lg:bg-slate-50 lg:w-150 lg:h-12">
              <TabsTrigger value="account" className="flex-1 ">
                ChallanPay
              </TabsTrigger>
              <TabsTrigger value="password" className="flex-1">
                Government Portal
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content full width */}
          <TabsContent value="account" className="w-full ">
            <Card className="w-full bg-[#FAF8F7] lg:bg-slate-50">
              <CardContent className="grid gap-6">
                <div className="flex  items-center justify-center lg:hidden">
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
                  <div className="lg:flex lg:justify-center">
                    <TabsList2 className="w-full flex justify-center lg:w-200 lg:gap-x-4">
                      <TabsTrigger2
                        value="account1"
                        className="flex-1 lg:flex-none lg:px-4 lg:text-black lg:font-bold lg:text-lg lg:border-none"
                      >
                        How to Check Your E-challan
                      </TabsTrigger2>
                      <TabsTrigger2
                        value="password2"
                        className="flex-1 lg:flex-none lg:px-4 lg:text-black lg:font-bold lg:text-lg lg:border-none"
                      >
                        How to Pay Your E-challan
                      </TabsTrigger2>
                    </TabsList2>
                  </div>

                  {/* Tab Content full width */}
                  <div className="w-full lg:flex ">
                    <TabsContent2 value="account1" className="w-full">
                      <Card className="w-full  bg-[#FAF8F7] lg:bg-slate-50">
                        <CardContent className="grid gap-6">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                  <p className="text-gray-600 text-sm ">
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
                                  <p className="text-gray-600 text-sm ">
                                    {`Input your vehicles registration number to
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
                                  <p className="text-gray-600 text-sm">
                                    Provide your mobile number and authenticate
                                    via OTP
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
                                  <p className="text-gray-600 text-sm ">
                                    View all E-challans linked to your vehicle
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
                      <Card className="w-full  bg-[#FAF8F7] lg:bg-slate-50">
                        <CardContent className="grid gap-6">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                  <p className="text-gray-600 text-sm ">
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
                                  <p className="text-gray-600 text-sm ">
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
                                  <p className="text-gray-600 text-sm ">
                                    Select from options like credit card/debit
                                    card or net-banking
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
                                  <p className="text-gray-600 text-sm">
                                    You will get a confirmation with a
                                    transaction ID
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
                                  <p className="text-gray-600 text-sm">
                                    Follow the on-screen instructions to
                                    complete
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent2>
                    <div className="flex items-center justify-center hidden lg:flex">
                      <Image
                        src={"/Images/challanpay.png"}
                        alt="Challan Pay Png"
                        width={350}
                        height={250}
                        className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
                      />
                    </div>
                  </div>
                </Tabs2>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="w-full">
            <Card className="w-full  bg-[#FAF8F7] lg:bg-slate-50">
              <CardContent className="grid gap-6">
                <div className="flex  items-center justify-center  lg:hidden">
                  <Image
                    src={"/Images/government.png"}
                    alt="Challan Pay Png"
                    width={350}
                    height={250}
                    className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
                  />
                </div>
                <Tabs2
                  defaultValue="account2"
                  className="w-full bg-[#FAF8F7] lg:bg-slate-50"
                >
                  {/* Tabs List full width */}
                  <div className="lg:flex lg:justify-center">
                    <TabsList2 className="w-full flex justify-between lg:justify-center lg:w-200  lg:gap-x-4">
                      <TabsTrigger2
                        value="account2"
                        className="flex-1 lg:flex-none px-4 lg:text-black lg:font-bold lg:text-lg lg:border-none"
                      >
                        How to Check Your E-challan
                      </TabsTrigger2>
                      <TabsTrigger2
                        value="password2"
                        className="flex-1 lg:flex-none px-4 lg:text-black lg:font-bold lg:text-lg lg:border-none"
                      >
                        How to Pay Your E-challan
                      </TabsTrigger2>
                    </TabsList2>
                  </div>

                  {/* Tab Content full width */}
                  <div className="w-full lg:flex ">
                    <TabsContent2 value="account2" className="w-full">
                      <Card className="w-full !bg-[#FAF8F7] lg:bg-slate-50">
                        <CardContent className="grid gap-6  !bg-[#FAF8F7] lg:bg-slate-50">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                  <p className="text-gray-600 text-sm">
                                    Go to the authorized government E-challan
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
                                  <p className="text-gray-600 text-sm ">
                                    {`Provide your vehicles registration number to
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
                                  <p className="text-gray-600 text-sm">
                                    The portal will display all E-challans
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
                                  <p className="text-gray-600 text-sm ">
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
                      <Card className="w-full !bg-[#FAF8F7] lg:bg-slate-50">
                        <CardContent className="grid gap-6">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                  <p className="text-gray-600 text-sm ">
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
                                  <p className="text-gray-600 text-sm">
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
                                  <p className="text-gray-600 text-sm">
                                    Select from options like credit/debit card,
                                    net banking, or digital wallets
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
                                  <p className="text-gray-600 text-sm ">
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
                                  <p className="text-gray-600 text-sm">
                                    {`You will receive a confirmation with a transaction
                                ID`}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent2>
                    <div className="flex  items-center justify-center hidden lg:flex ">
                      <Image
                        src={"/Images/government.png"}
                        alt="Challan Pay Png"
                        width={350}
                        height={250}
                        className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
                      />
                    </div>
                  </div>
                </Tabs2>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
