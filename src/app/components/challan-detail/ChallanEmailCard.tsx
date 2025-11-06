"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaWhatsapp } from "react-icons/fa";

export default function ChallanEmailCard() {
  const [email, setEmail] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleSendMail = () => {
    // console.log("Email:", email, "Vehicle:", vehicleNumber);
    // API call here
  };

  const handleWhatsappShare = () => {
    //  console.log("Share on WhatsApp");
  };

  return (
    <Card className="border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Get this Challan on Email
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Email Input */}
        <Input
          type="email"
          placeholder="enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="w-full bg-[#0099aa] hover:bg-[#008095] text-white font-medium"
          onClick={handleSendMail}
          disabled
        >
          Send to my email
        </Button>

        {/* OR Separator */}
        <div className="flex items-center justify-center gap-2">
          <Separator className="flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <Separator className="flex-1" />
        </div>

        {/* WhatsApp Share */}
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
          onClick={handleWhatsappShare}
          disabled
        >
          <FaWhatsapp className="text-lg" />
          Share on WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
}
