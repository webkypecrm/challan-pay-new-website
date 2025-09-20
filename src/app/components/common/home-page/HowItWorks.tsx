"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      img: "/how-it-work/rectangle1.png",
      heading: "Enter Details",
      text: "Enter your vehicle number and mobile number to begin",
    },
    {
      id: 2,
      img: "/how-it-work/rectangle2.png",
      heading: "View and Pay Challans",
      text: "Settle your challans without visiting courts - fast, easy and hassle-free",
    },
    {
      id: 3,
      img: "/how-it-work/rectangle3.png",
      heading: "View Challans",
      text: "Enter your vehicle number and mobile number to begin",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [emblaApi, setEmblaApi] = React.useState<EmblaCarouselType | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="w-full py-20 ">
      <div className="text-center mb-8 px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black ">
          Pay Challan In Just 3 Easy Steps
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="flex flex-col justify-center items-center">
        <Carousel
          className="w-full max-w-xs"
          setApi={setEmblaApi} // 👈 connect carousel API
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={index}>
                <Card
                  key={step.id}
                  className="relative flex flex-col items-center justify-center rounded-xl overflow-hidden border shadow-sm py-0"
                >
                  {/* Step Number Badge */}
                  <div className="absolute top-2 left-2 bg-cyan-500 text-white text-sm font-bold px-3 py-2 rounded">
                    {step.id}
                  </div>

                  {/* Image */}
                  <Image
                    src={step.img}
                    alt={step.text}
                    width={400}
                    height={250}
                    className="w-full h-auto object-contain"
                  />
                </Card>
                <div>
                  <h3 className="text-base text-black font-bold py-1">
                    {step.heading}
                  </h3>
                  {/* Text */}
                  <p className="text-sm font-normal text-black  py-1">
                    {step.text}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
        <div className="flex justify-center  mt-2 gap-2">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === selectedIndex ? "bg-yellow-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-center mt-8">
        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-md px-6">
          Check Challan Status
        </Button>
      </div>
    </section>
  );
}
