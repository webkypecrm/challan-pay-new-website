"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div
      className="w-full max-w-screen-xl mx-auto px-4"
      style={{ marginTop: "120px", marginBottom: "50px" }}
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-auto border md:h-64 py-0">
                  <CardContent className="flex items-center justify-center p-3 h-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                      {/* Left Content (text) */}
                      <div className="flex-1  md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug uppercase">
                          <span className="text-cyan-600">Challan Pay</span>
                          <br />
                          <span className="text-black">AnyTime</span>
                          <br />
                          <span className="text-black">AnyWhere</span>
                        </h1>
                        <p className="mt-2 text-black font-medium text-sm md:text-base max-w-md mx-auto md:mx-0">
                          ChallanPay brings you a fast, secure, and hassle-free
                          way to settle your traffic challans online
                        </p>
                      </div>

                      {/* Right Image */}
                      <div className="flex-1 flex flex-col items-center">
                        <Image
                          src="/Images/hero-section-img.png"
                          alt="Challan Pay"
                          width={350}
                          height={250}
                          className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Button — only show on mobile, below the image */}
                <Button
                  className=" w-full bg-cyan-600 mt-4
                                 md:hidden"
                >
                  Check Challan Status
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
    <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
