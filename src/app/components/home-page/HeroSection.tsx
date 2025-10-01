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

const cardData = [
  {
    title: (
      // <>
      //   <span className="text-black">Challan Pay</span>
      //   <br />
      //   <span className="text-black">AnyTime</span> <br />
      //   <span className="text-black">AnyWhere</span>
      // </>
      <>
        <div className="flex flex-col lg:flex-row lg:space-x-2 text-black">
          <span>Challan Pay</span>
          <span>AnyTime</span>
          <span>AnyWhere</span>
        </div>
      </>
    ),
    description:
      "ChallanPay brings you a fast, secure, and hassle-free way to settle your traffic challans online",
    image: "/Images/hero-section-img.png",
  },
  {
    title: (
      <>
        <span className="text-black">No queues.</span>
        <br />
        <span className="text-black">No stress.</span>{" "}
        <span className="text-black">With ChallanPay</span>
      </>
      // <>
      //   <div className="flex flex-col lg:flex-row lg:space-x-2 text-black">
      //     <span>No queues.</span>
      //     <span>No stress.</span>
      //     <span>With ChallanPay</span>
      //   </div>
      // </>
    ),
    description:
      "Few clicks, thats it. Discover and resolve your traffic challans.",
    image: "/Images/hero-section-img.png",
  },
  {
    title: (
      // <>
      //   <span className="text-black">Pay Traffic</span>
      //   <br />
      //   <span className="text-black">Challans</span>{" "}
      //   <span className="text-black">Instantly</span>
      // </>
      <>
        <div className="flex flex-col lg:flex-row lg:space-x-2 text-black">
          <span>Pay Traffic</span>
          <span>Challans</span>
          <span>Instantly</span>
        </div>
      </>
    ),
    description: "No spam, no scam. Only authorized payments with ChallanPay.",
    image: "/Images/hero-section-img.png",
  },
];

export function HeroSection() {
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
    <div
      className="w-full max-w-screen-xl mx-auto px-4 "
      style={{ marginTop: "100px", marginBottom: "30px" }}
    >
      <Carousel
        setApi={setEmblaApi} // 👈 connect carousel API
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {cardData.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-100 border md:h-64 py-0 rounded-md">
                  <CardContent className="flex items-center justify-center p-3 h-full lg:justify-between lg:p-6">
                    <div className="w-full flex flex-col md:flex-row items-center justify-around gap-6 md:gap-10">
                      <div className="flex-1 md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                          {card.title}
                        </h1>
                        <p className="mt-2 text-[#423F3F] font-medium text-sm md:text-base max-w-md mx-auto md:mx-0">
                          {card.description}
                        </p>
                      </div>

                      {/* Right Image */}
                      <div className="flex-1 flex flex-col items-center">
                        <Image
                          src={card.image}
                          alt="Challan Pay"
                          width={350}
                          height={250}
                          className="object-contain w-64 h-auto md:w-[350px] md:h-[250px]"
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

      {/* Dots */}
      <div className="flex justify-center mt-2 gap-2">
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
