import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileSpreadsheet, CircleUser, Car } from "lucide-react";
import RegisterInfoCard from "../common/RegisterInfoCard";

function VehicleInfo() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-base font-bold">Vehicle Details</div>
        <div>
          <Button className="bg-white text-black text-xs">+ Add Vehicle</Button>
        </div>
      </div>
      <div className="bg-white rounded-lg px-4 mt-4">
        <div className="flex items-center justify-start  rounded-lg">
          {/* Left side (car image) */}
          <Image
            src="/Images/car.svg"
            alt="car image"
            width={60}
            height={30}
            className="object-contain"
          />

          {/* Centered number plate */}
          {/* <div className="flex-1 flex justify-center"> */}
          <div className="w-full flex justify-between ">
            <div className="border border-black font-bold rounded">
              • UP 32MM 1113 •
            </div>
            <div className="bg-green-50 text-green-600 text-xs p-1 rounded text-bold">
              Active
            </div>
          </div>
        </div>
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="bg-white rounded-md my-1">
              <AccordionTrigger>
                <div className="flex  items-center">
                  {" "}
                  <CircleUser size={18} className="text-[#737373] mx-2" /> Owner
                  Details
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center gap-4 text-balance ml-2">
                <RegisterInfoCard
                  name="A***R R***D"
                  date="12-Nov-2021"
                  rto="MAHANAGAR, ARTO LUCKNOW (UP321), Uttar Pradesh"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-md my-2">
              <AccordionTrigger>
                <div className="flex items-center">
                  {" "}
                  <FileSpreadsheet
                    size={18}
                    className="text-[#737373] mx-2"
                  />{" "}
                  Key Details
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center gap-4 text-balance ml-2">
                <RegisterInfoCard
                  name="A***R R***D"
                  date="12-Nov-2021"
                  rto="MAHANAGAR, ARTO LUCKNOW (UP321), Uttar Pradesh"
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-md my-1">
              <AccordionTrigger>
                <div className="flex  items-center">
                  {" "}
                  <Car size={18} className="text-[#737373] mx-2" />
                  Vehicle Details
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center gap-4 text-balance ml-2">
                <RegisterInfoCard
                  name="A***R R***D"
                  date="12-Nov-2021"
                  rto="MAHANAGAR, ARTO LUCKNOW (UP321), Uttar Pradesh"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default VehicleInfo;
