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
                    • {vehicleNo || "N/A"} •
                  </div>
                </div>
              </div>
              {/* </div> */}
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
