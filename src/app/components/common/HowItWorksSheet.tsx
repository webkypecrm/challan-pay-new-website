"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { handleRazorpayPayment } from "../PayWithRozorpay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const steps = [
  {
    image: "/how-contest-works/step1.png",
    title: "Step 1: Choose Contest and Make Payment ",
    description:
      "Complete your challan payment securely to initiate the process.",
  },
  {
    image: "/how-contest-works/step2.png",
    title: "Step 2: We Contest on Your Behalf",
    description: "Our team reviews your case and files the contest for you.",
  },
  {
    image: "/how-contest-works/step3.png",
    title: "Step 3: Track Your Case Status",
    description: "Monitor real-time updates and stay informed at every stage.",
  },
  {
    image: "/how-contest-works/step4.png",
    title: "Step 4: Receive Up to 100% Waiver",
    description:
      "Based on eligibility, you can get a partial or full waiver on your challan amount.",
  },
];

export function HowItWorksSheet({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { data, selectedChallans, isContestSelected } = useChallanContext();
  const [loader, setLoader] = useState(false);

  const router = useRouter();

  // carousel states
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % steps.length;
        api.scrollTo(next); // scroll carousel
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c),
        potentialDiscount: data?.potentialDiscount ?? 0,
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
        isContest: isContestSelected,
      },
      router,
      setLoader
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="rounded-t-2xl max-h-[85vh]">
        <SheetDescription className="bg-white rounded-lg p-4 text-black overflow-y-auto flex-1">
          <div className="w-full max-w-md mx-auto py-6 pt-0">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative"
            >
              <CarouselContent>
                {steps.map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="pt-0">
                      <CardContent className="p-0 space-y-3">
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt="step-image"
                          width={500}
                          height={300}
                          className="w-full h-auto object-contain"
                        />

                        {/* Title */}
                        <div className="text-xl font-bold text-[#0891B2]">
                          {item.title}
                        </div>

                        {/* Description */}
                        <div className="text-sm text-black">
                          {item.description}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Cyan Dots Indicator */}
            </Carousel>
            <div className="flex justify-center mt-0 gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-cyan-500 scale-110"
                      : "bg-cyan-200 opacity-60"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button
            className="bg-cyan-600 text-sm font-medium mt-4 w-full"
            onClick={handleProccedNext}
          >
            Pay & Get Rewards
            <ChevronRight size={16} />
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
