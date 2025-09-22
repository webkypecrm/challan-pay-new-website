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
import { Button } from "@/components/ui/button";
import type { EmblaCarouselType } from "embla-carousel";

const cardData = [
  {
    title: (
      <>
        <span className="text-cyan-600">Challan Pay</span>
        <br />
        <span className="text-black">AnyTime</span>
        <br />
        <span className="text-black">AnyWhere</span>
      </>
    ),
    description:
      "ChallanPay brings you a fast, secure, and hassle-free way to settle your traffic challans online",
    image: "/Images/hero-section-img.png",
  },
  {
    title: (
      <>
        <span className="text-cyan-600">No queues.</span>
        <br />
        <span className="text-black">No stress.</span>
        <br />
        <span className="text-black">With ChallanPay</span>
      </>
    ),
    description:
      "Few clicks, thats it. Discover and resolve your traffic challans.",
    image: "/Images/hero-section-img.png",
  },
  {
    title: (
      <>
        <span className="text-cyan-600">Pay Traffic</span>
        <br />
        <span className="text-black">Challans</span>
        <br />
        <span className="text-black">Instantly</span>
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
      className="w-full max-w-screen-xl mx-auto px-4"
      style={{ marginTop: "70px", marginBottom: "50px" }}
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
                <Card className="h-auto border md:h-64 py-0 rounded">
                  <CardContent className="flex items-center justify-center p-3 h-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                      {/* Left Content */}
                      <div className="flex-1 md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                          {card.title}
                        </h1>
                        <p className="mt-2 text-black font-medium text-sm md:text-base max-w-md mx-auto md:mx-0">
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
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === selectedIndex ? "bg-black" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <Button className="w-full bg-cyan-600 mt-4">Check Challan Status</Button>
    </div>
  );
}
