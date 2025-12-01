"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
//import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { DialogDemo } from "./HomePageDailog";

export default function Banner() {
  const [open, setOpen] = useState(false);
  return (
    <Card className="bg-white rounded-2xl px-2 py-4  border border-gray-200 my-10 lg:px-6 lg:max-w-7xl">
      <div className="flex flex-col md:flex-row items-center md:justify-between lg:justify-start gap-4 lg:gap-10">
        {/* image */}
        <Image
          src={"/Images/truckonroad.webp"}
          alt="Banner"
          width={350}
          height={250}
          className="object-cover  h-auto md:w-[350px] md:h-[250px]"
        />
        {/* Left text */}
        <div className="flex flex-col gap-2 lg:w-150">
          <p className="text-lg lg:text-2xl md:text-base font-bold text-black text-center md:text-left px-5 lg:px-0">
            Want to check challans for multiple vehicles together? Do not worry.{" "}
          </p>
          <DialogDemo open={open} onOpenChange={setOpen} />
          {/* WhatsApp Button */}
          <Button
            variant="outline"
            className="flex items-center h-10 gap-2 rounded-md bg-secondary text-green-600 hover:bg-green-50 justify-center  lg:w-60 lg:mt-4"
            onClick={() => setOpen(true)}
          >
            <FaWhatsapp size={40} color="" />
            Chat with us on WhatsApp
          </Button>
        </div>
      </div>
    </Card>
  );
}
