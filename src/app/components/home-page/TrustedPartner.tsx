"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
//import type { EmblaCarouselType } from "embla-carousel";

export default function TrustedPartner() {
  const stats = [
    {
      icon: "/partner-logo/cars241.png",
    },
    {
      icon: "/partner-logo/spinny1.png",
    },
    {
      icon: "/partner-logo/cardekho1.png",
    },
    {
      icon: "/partner-logo/trucks1.png",
    },
    {
      icon: "/partner-logo/ald1.png",
    },
    {
      icon: "/partner-logo/olx1.png",
    },
    {
      icon: "/partner-logo/droom1.png",
    },
    {
      icon: "/partner-logo/park1.png",
    },
    {
      icon: "/partner-logo/renewbuy1.png",
    },
    {
      icon: "/partner-logo/carinfo1.png",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const dotColors = ["bg-green-500", "bg-yellow-400", "bg-red-500"];

  return (
    <div className="mt-4 bg-white p-4 rounded-xl pt-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h4 className="font-broken text-2xl md:text-3xl text-[#374151] uppercase">
          Trusted Partners
        </h4>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center flex-[0_0_auto] w-[140px] sm:w-[180px] md:w-[200px] mx-2 bg-white border border-[#E5E5E5] p-1 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.icon}
                alt="Company logo"
                width={140} // ⬅️ increase size
                height={120} // ⬅️ adjust proportion
                className="mb-2 object-contain w-[120px] h-[60px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[140px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {scrollSnaps.map((_, idx) => {
          const offset = idx - selectedIndex;
          const dotColor =
            offset >= 0 && offset < dotColors.length
              ? dotColors[offset]
              : "bg-gray-200";

          return (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${dotColor}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
