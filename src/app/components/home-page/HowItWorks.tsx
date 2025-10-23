"use client";

import React from "react";
import Image from "next/image";
//import { Button } from "@/components/ui/button";
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
      img: "/how-it-work/rectangle3.png",
      heading: "View and Pay Challans",
      text: "Settle your challans without visiting courts - fast, easy and hassle-free",
    },
    {
      id: 3,

      img: "/how-it-work/rectangle2.png",
      heading: "Settle Challans Easily",
      text: "Enter your vehicle number and mobile number to begin",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
    <section className="w-full py-12 ">
      <div className="text-center mb-8 px-4">
        <h2 className="font-broken text-2xl text-[#374151] uppercase">
          Pay Challan In Just 3 <br />
          <span>Easy Steps</span>
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="flex flex-col justify-center items-center w-full relative">
        <div className="lg:hidden w-12 h-12 absolute -top-4 -left-1 rounded-full bg-cyan-500 text-white text-lg font-bold flex items-center justify-center z-10">
          {selectedIndex + 1} {/* dynamically show current slide number */}
        </div>

        <Carousel
          className="w-full max-w-xs sm:max-w-md lg:max-w-6xl "
          setApi={setEmblaApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {steps.map((step) => (
              <CarouselItem key={step.id} className="basis-full lg:basis-1/3">
                <Card className=" flex flex-col items-center justify-center rounded-xl overflow-visible border shadow-sm py-0">
                  {/* Step Number Badge */}

                  {/* Image */}
                  <Image
                    src={step.img}
                    alt={step.text}
                    width={400}
                    height={250}
                    className="w-full h-auto object-contain"
                  />
                </Card>

                {/* Heading & Text */}
                <div className=" mt-2">
                  <h3 className="text-base font-bold text-black">
                    {step.heading}
                  </h3>
                  <p className="text-sm font-normal text-black mt-1">
                    {step.text}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="lg:hidden flex justify-center  mt-2 gap-2">
          {scrollSnaps.map((_, idx) => {
            // find relative position with wrap-around
            const offset =
              (idx - selectedIndex + scrollSnaps.length) % scrollSnaps.length;

            let dotColor = "bg-gray-200";

            if (offset === 0) {
              dotColor = "bg-red-500"; // active
            } else if (offset === 1) {
              dotColor = "bg-yellow-400"; // next
            } else if (offset === 2) {
              dotColor = "bg-green-500"; // next-next
            }

            return (
              <button
                key={idx}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${dotColor}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
