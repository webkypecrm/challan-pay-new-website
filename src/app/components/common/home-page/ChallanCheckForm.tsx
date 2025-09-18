"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

export default function Home() {
  const [selected, setSelected] = useState<string>("");

  // Dynamic cards array
  const cards = [
    { id: "car", title: "Private", image: "/images/car.png" },
    { id: "bike", title: "Two - Wheelar", image: "/images/bike.png" },
    { id: "truck", title: "Electric", image: "/images/electric.png" },
    { id: "bus", title: "Commercial", image: "/images/truck.png" },
  ];

  return (
    <div className="flex flex-col lg:flex-row  gap-4 justify-center ">
      {/* Left Section */}
      <div className="flex flex-col lg:items-start w-full lg:w-1/3 gap-6">
        {/* Heading */}
        <div className="text-xl font-bold lg:text-left">
          Select Vehicle Type
        </div>

        {/* Cards */}
        <RadioGroup
          value={selected}
          onValueChange={(val) => setSelected(val)}
          className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center"
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              className={`relative cursor-pointer border rounded-2xl w-[130px] h-[120px] sm:w-[200px] sm:h-[180px] flex flex-col items-center justify-center transition 
        ${
          selected === card.id
            ? "border-gray-200 bg-cyan-50"
            : "border-gray-200"
        }`}
              onClick={() => setSelected(card.id)}
            >
              {/* Radio button in corner */}
              <div className="absolute top-2 right-2">
                <RadioGroupItem
                  value={card.id}
                  id={card.id}
                  className="h-5 w-5  border-1 border-cyan-500
                     data-[state=checked]:bg-cyan-500 
                     data-[state=checked]:border-cyan-500 flex items-center justify-center"
                >
                  {/* White Tick Icon */}
                  <Check className="h-3 w-3 text-white" />
                </RadioGroupItem>
              </div>

              {/* Card Content */}
              <CardContent className="flex flex-col items-center justify-center gap-1 p-2">
                {/* Image */}
                <div className="w-16 h-16 relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-scale-down rounded-md"
                  />
                </div>

                {/* Title */}
                <Label
                  htmlFor={card.id}
                  className={`font-medium cursor-pointer text-center text-sm sm:text-base ${
                    selected === card.id ? "text-cyan-600" : "text-black"
                  } `}
                >
                  {card.title}
                </Label>
              </CardContent>
            </Card>
          ))}
        </RadioGroup>
      </div>

      {/* Right Section - Input & Button */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center gap-2  lg:mt-0">
        <div className="text-xl font-bold   lg:text-left">
          Enter Vehicle Number
        </div>
        <Input
          placeholder="eg. UP32MM1113"
          className="w-full h-9 rounded-md border bg-white"
        />
        <p className=" text-base font-normal text-sm md:text-base max-w-md mx-auto md:mx-0">
          Enter your vehicle registration number without spaces
        </p>

        <Button className="w-full bg-cyan-600 sm:w-auto">Challan Check</Button>
        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" className="mt-1" />
          <div className="grid gap-2">
            <p className="text-muted-foreground text-sm">
              I agree to terms & Condition and Privacy Policy and authorize to
              fetch my vehicle registration and Challan Details from Government
              Database This is a checkbox description.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
