"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
//import { Button } from "@/components/ui/button";
import type { EmblaCarouselType } from "embla-carousel";
import Shimmer from "../common/Shimmer";

const cardData = [
  {
    title: (
      <>
        <div className="flex flex-col lg:space-x-2 text-black  uppercase">
          <span>Challan Pay</span>
          <div>
            <span>AnyTime</span> <span>AnyWhere</span>
          </div>
        </div>
      </>
    ),
    description:
      "ChallanPay brings you a fast, secure, and hassle-free way to settle your traffic challans online",
    image: "/Images/hero-section-img.webp",
  },
  {
    title: (
      <div className="uppercase">
        <span className="text-black">No queues.</span>
        <br />
        <span className="text-black">No stress.</span>{" "}
        <span className="text-black">With ChallanPay</span>
      </div>
    ),
    description:
      "Few clicks, that's it. Discover and resolve your traffic challans.",
    image: "/Images/hero-section-img3.png",
  },
  {
    title: (
      <>
        <div className="flex flex-col  lg:space-x-2 text-black uppercase">
          <span>Pay Traffic</span>
          <div>
            <span>Challans</span> <span>Instantly</span>
          </div>
        </div>
      </>
    ),
    description: "No spam, no scam. Only authorized payments with ChallanPay.",
    image: "/Images/hero-section-img2.webp",
  },
];

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
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
    <div
      className="w-full max-w-screen-xl mx-auto px-4 lg:max-w-7xl lg:px-1.5 mt-25 mb-5 lg:mt-31"
      // style={{ marginTop: "100px", marginBottom: "30px" }}
    >
      {/* <Shimmer height="100px" width="100%" /> */}
      <Carousel
        setApi={setEmblaApi} // 👈 connect carousel API
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }} // 🔁 makes it infinite
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {cardData.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-100 border md:h-64 py-0 rounded-md lg:rounded-none">
                  <CardContent className="flex items-center justify-center p-3 h-full lg:justify-between lg:p-6">
                    <div className="w-full flex flex-col md:flex-row items-center justify-around lg:justify-between gap-6 md:gap-10">
                      <div className="flex-1 md:text-left">
                        <h1 className="text-3xl lg:text-5xl  font-bold leading-none">
                          {card.title}
                        </h1>
                        <p className="mt-2 text-[#423F3F] font-medium text-sm md:text-base max-w-md mx-auto md:mx-0">
                          {`${card.description}`}
                        </p>
                      </div>

                      {/* Right Image */}
                      <div className="flex-1 flex flex-col items-center lg:items-end">
                        <Image
                          src={card.image}
                          alt="Challan Pay"
                          width={350}
                          height={250}
                          className="object-contain w-64 h-auto lg:w-[380px] lg:h-[280px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-2 gap-2">
        {scrollSnaps.map((_, idx) => {
          // check if this dot is the active one
          const isActive = idx === selectedIndex;

          // default gray for all
          let dotColor = "bg-gray-300";

          // color only the active one based on index
          if (isActive) {
            if (idx === 0) dotColor = "bg-red-500";
            else if (idx === 1) dotColor = "bg-yellow-400";
            else if (idx === 2) dotColor = "bg-green-500";
            // optional: add more colors if you have more slides
          }

          return (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${dotColor}`}
            />
          );
        })}
      </div>
      {/* <Button
        className="w-full bg-cyan-600 mt-4"
        onClick={() => {
          document.getElementById("challan-check")?.scrollIntoView({
            behavior: "smooth", // 👈 smooth scrolling
          });
        }}
      >
        Check Challan Status
      </Button> */}
    </div>
  );
}
