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
    <Card className="bg-white rounded-2xl px-2 py-4 shadow-sm border border-gray-200 my-10">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* image */}
        <Image
          src={"/Images/truckonroad.png"}
          alt="Banner"
          width={350}
          height={250}
          className="object-cover  h-auto md:w-[350px] md:h-[250px]"
        />
        {/* Left text */}
        <p className="text-sm md:text-base font-bold text-black text-center md:text-left">
          Want to check challans for multiple vehicles together? Do not worry.{" "}
        </p>
        <DialogDemo open={open} onOpenChange={setOpen} />
        {/* WhatsApp Button */}
        <Button
          variant="outline"
          className="flex items-center h-10 gap-2 rounded-md bg-secondary text-green-600 hover:bg-green-50 justify-center"
          onClick={() => setOpen(true)}
        >
          <FaWhatsapp size={40} color="" />
          Contact us on WhatsApp
        </Button>
      </div>
    </Card>
  );
}
