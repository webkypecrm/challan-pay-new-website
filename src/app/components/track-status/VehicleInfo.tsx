"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileSpreadsheet, CircleUser, Car } from "lucide-react";
import RegisterInfoCard from "../common/RegisterInfoCard";
import { AddVehicleModal } from "./AddVehicleModal";
import { getRequestWithoutToken } from "@/lib/api"; // your utility
//import { AxiosError } from "axios";
import KeyDetailCard from "./KeyDetailCard";
import VehicleDetailCard from "./VehicleDetailCard";
import Lottie from "lottie-react";
import loaderAnimation from "../../loader.json";

interface Vehicle {
  id: string | number;
  number: string;
  status: "Active" | "Inactive";
  ownerName: string;
  registrationDate: string;
  rto: string;
}

interface RC {
  ownerName: string;
  registrationDate: string;
  registeredAt: string;
  rcStatus: "ACTIVE" | "INACTIVE";
  puccUpto?: string;
  insuranceUpto?: string;
  makerModel?: string;
  bodyType?: string;
}

interface Vehicle {
  id: string | number;
  vehicleNo: string;
  status: "Active" | "Inactive";
  rc?: RC; // optional because some vehicles may not have RC info yet
}

function VehicleInfo() {
  const [open, setOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const data = await getRequestWithoutToken<{
          data: { vehicles: Vehicle[] };
        }>("/v1/customer/vehicles", {}, true);
        setVehicles(data.data.vehicles || []); // <-- updated
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <Lottie
          animationData={loaderAnimation}
          loop={true}
          className="w-32 h-32"
        />
      </div>
    );

  return (
    <div className=" pt-4">
      <div className="flex justify-between items-center">
        <div className="text-base font-bold">Vehicle Details</div>
        <div>
          <Button
            className="bg-transparent border border-gray-500 text-gary-500 text-sm font-medium hover:bg-black hover:text-white transition-all"
            onClick={() => setOpen(true)}
          >
            + Add Vehicle
          </Button>
        </div>
      </div>

      <div className="rounded-lg  mt-4">
        {loading ? (
          <p className="text-center py-6 text-gray-500">No vehicles found.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg px-4 py-2 mb-4"
              >
                <div className="flex items-center justify-start rounded-lg mb-2">
                  {/* Left side (car image) */}
                  <Image
                    src="/Images/car.svg"
                    alt="car image"
                    width={70}
                    height={30}
                    className="object-contain icon-cyan"
                  />
                  <div className="w-full flex justify-between ml-2">
                    <div className="border border-black font-bold rounded px-2 py-1">
                      • {vehicle.vehicleNo} •
                    </div>
                    <div
                      className={
                        vehicle?.rc?.rcStatus === "ACTIVE"
                          ? "bg-green-50 text-green-600 text-[10px] p-1 rounded font-bold h-6"
                          : "bg-gray-100 text-gray-600 text-[10px] p-1 rounded font-bold h-6"
                      }
                    >
                      {vehicle?.rc?.rcStatus || "N/A"}
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={`owner-${vehicle.id}`}
                    className="bg-white rounded-md my-1"
                  >
                    <AccordionTrigger>
                      <div className="flex items-center ">
                        <CircleUser size={18} className="text-[#737373] mx-2" />{" "}
                        Owner Details
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-start gap-4 text-balance ml-2 ">
                      <RegisterInfoCard
                        name={vehicle?.rc?.ownerName}
                        date={vehicle?.rc?.registrationDate}
                        rto={vehicle?.rc?.registeredAt}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value={`key-${vehicle.id}`}
                    className="bg-white rounded-md my-1"
                  >
                    <AccordionTrigger>
                      <div className="flex items-center">
                        <FileSpreadsheet
                          size={18}
                          className="text-[#737373] mx-2"
                        />{" "}
                        Key Details
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-start gap-4 text-balance ml-2">
                      <KeyDetailCard
                        puc={vehicle?.rc?.puccUpto}
                        ins={vehicle?.rc?.insuranceUpto}
                        rc={"N/A"}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value={`vehicle-${vehicle.id}`}
                    className="bg-white rounded-md my-1"
                  >
                    <AccordionTrigger>
                      <div className="flex items-center">
                        <Car size={18} className="text-[#737373] mx-2" />{" "}
                        Vehicle Details
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-start gap-4 text-balance ml-2">
                      <VehicleDetailCard
                        mod={vehicle?.rc?.makerModel}
                        type={vehicle?.rc?.bodyType}
                        eng={"N/A"}
                        chs={"N/A"}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </div>

      <AddVehicleModal open={open} onOpenChange={setOpen} />
    </div>
  );
}

export default VehicleInfo;
