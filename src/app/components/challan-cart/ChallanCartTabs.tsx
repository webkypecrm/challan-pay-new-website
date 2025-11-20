"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingChallanList from "./PendingChallanList";
import PaidChallanList from "./PaidChallanList";
import { CheckCircle, Hourglass, Info } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { getRequest } from "@/lib/api";
import { AxiosError } from "axios";
import Loader from "../common/loader/Loader";
import { useChallanContext } from "@/context/ChallanContext";

interface Vehicle {
  id: number;
  vehicleNo: string;
  vehicleType: string;
  subscription: string;
  priceCategory: string;
}

interface Challan {
  id: number;
  challanNo: string;
  date: string;
  amount: number;
  challanStatus: string;
  courtChallan: boolean;
  offenseName: string; // ✅ added to match context
}

interface ChallanResponseData {
  challans: Challan[];
  vehicle: Vehicle;
}

interface ApiResponse {
  status: "success" | "error";
  message: string;
  data: ChallanResponseData;
}

export function ChallanCartTabs() {
  const [challans, setChallans] = useState<Challan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [progress, setProgress] = useState(0);
  const [vehicleNo, setVehicleNo] = useState<string | null>(null);
  //const { autoSelectAllOnInit } = useChallanContext();

  useEffect(() => {
    const subscriberId = sessionStorage.getItem("subscriberId");
    const vehicleId = sessionStorage.getItem("vehicleId");

    if (!subscriberId || !vehicleId) {
      toast.error("Missing subscriberId or vehicleId");
      setLoading(false);
      return;
    }

    const fetchChallans = async () => {
      try {
        setLoading(true);
        setProgress(0);
        const interval = setInterval(() => {
          setProgress((prev) => (prev < 90 ? prev + 5 : prev));
        }, 300);
        // call API
        const response = await getRequest<ApiResponse>(
          "/v1/d-to-c/find-challans",
          {
            subscriberId,
            vehicleId,
          }
        );
        // update state
        setChallans(response.data.challans);
        // autoSelectAllOnInit(response.data.challans);
        setVehicle(response.data.vehicle);
        setProgress(100);
        clearInterval(interval);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message || err.message);
        } else if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("Unknown error occurred");
        }
      } finally {
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 300);
      }
    };

    fetchChallans();
  }, []);

  useEffect(() => {
    const storedVehicleNo = sessionStorage.getItem("vehicleNo");
    setVehicleNo(storedVehicleNo);
  }, []);

  // console.log(challans.data.challans);
  return (
    <div className="lg:flex lg:justify-center">
      <div className="flex w-full max-w-md flex-col gap-4 lg:w-full lg:max-w-6xl">
        <Tabs
          defaultValue="pending"
          className="lg:grid lg:grid-cols-[1fr_3fr] gap-4"
        >
          <div className="lg:bg-white lg:p-2 lg:pt-10 lg:rounded-lg px-4 bg-white pb-4 rounded-b-xl">
            <TabsList
              className="
          w-full justify-center bg-[#faf8f7] lg:bg-white  px-4 
          flex flex-row gap-2
          lg:flex lg:flex-col lg:gap-4 lg:mt-4  lg:rounded-lg lg:mt-4
        "
            >
              {/* Pending */}
              {/* <TabsTrigger
                value="pending"
                className="
            w-1/2 text-center rounded-lg 
            data-[state=active]:bg-black lg:data-[state=active]:bg-[#F5F5F5] data-[state=active]:text-white lg:data-[state=active]:text-cyan-600 lg:bg-white
            lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
          "
              >
                <span className="hidden lg:flex items-center gap-2">
                  <Hourglass className="w-5 h-5" />
                  Pending
                </span>
                <span className="lg:hidden">Pending</span>
                <Info className="hidden lg:block w-5 h-5" />
              </TabsTrigger> */}
              <TabsTrigger
                value="pending"
                className="
    group data-[state=active]:shadow-none
    w-1/2 text-center rounded-lg 
    data-[state=active]:bg-black lg:data-[state=active]:bg-[#F5F5F5]
    data-[state=active]:text-white lg:data-[state=active]:text-cyan-600
    lg:bg-white
    lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
  "
              >
                {/* Desktop View */}
                <span className="hidden lg:flex items-center gap-3">
                  <div
                    className="
        w-8 h-8 rounded-md flex items-center justify-center
        bg-gray-100 group-data-[state=active]:bg-cyan-600
      "
                  >
                    <Hourglass className="w-6 h-6 text-black group-data-[state=active]:text-white" />
                  </div>
                  <span className="text-base font-medium">Pending</span>
                </span>

                {/* Mobile View */}
                <span className="lg:hidden">Pending</span>

                {/* Info Icon (Right Side) */}

                <div className="relative group inline-block">
                  <Info className="hidden lg:block w-6 h-6 text-gray-400 group-hover:text-cyan-600 cursor-pointer" />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300 whitespace-nowrap">
                    Challans that are still unpaid
                  </span>
                </div>

                {/* <Info className="hidden lg:block w-6 h-6 text-gray-400 group-data-[state=active]:text-cyan-600" /> */}
              </TabsTrigger>

              {/* Paid */}

              <TabsTrigger
                value="paid"
                className="
    group data-[state=active]:shadow-none
    w-1/2 text-center rounded-lg lg:bg-white
    data-[state=active]:bg-black lg:data-[state=active]:bg-[#f5f5f5]
    data-[state=active]:text-white lg:data-[state=active]:text-cyan-600
    lg:w-full lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6 lg:border
  "
              >
                <span className="hidden lg:flex items-center gap-3">
                  <div
                    className="
        w-8 h-8 rounded-md flex items-center justify-center
        bg-gray-100 group-data-[state=active]:bg-cyan-600
      "
                  >
                    <CheckCircle className="w-6 h-6 text-black group-data-[state=active]:text-white" />
                  </div>
                  <span className="text-base font-medium">Paid</span>
                </span>

                <span className="lg:hidden">Paid</span>

                <div className="relative group inline-block">
                  <Info className="hidden lg:block w-6 h-6 text-gray-400 group-hover:text-cyan-600 cursor-pointer" />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300 whitespace-nowrap">
                    {`Challans you’ve already paid.`}
                  </span>
                </div>

                {/* <Info className="hidden lg:block w-6 h-6 text-gray-400 group-data-[state=active]:text-cyan-600" /> */}
              </TabsTrigger>
            </TabsList>
          </div>
          <div>
            <div className="h-18 flex items-center justify-center p-2 bg-white mb-4 rounded-lg hidden lg:flex">
              {/* Wrapper to keep image and number plate centered with small gap */}
              <div className="flex items-center justify-center gap-10">
                {/* Left side (car image) */}
                <Image
                  src="/Images/car.svg"
                  alt="car image"
                  width={70}
                  height={30}
                  className="object-contain icon-cyan"
                />

                {/* Number plate */}
                <div className="p-1 border border-gray-300 bg-white">
                  <div className="border border-black font-bold px-3 py-1 text-sm text-center">
                    • {vehicleNo || "N/A"} •
                  </div>
                </div>
              </div>
            </div>

            <TabsContent
              value="pending"
              className="bg-slate-100 rounded-xl px-4 lg:bg-white  "
            >
              <PendingChallanList challans={challans} />
            </TabsContent>

            <TabsContent
              value="paid"
              className="bg-slate-100 px-4  lg:bg-white lg:rounded-lg "
            >
              <PaidChallanList challans={challans} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {loading && <Loader progress={progress} />}
    </div>
  );
}
