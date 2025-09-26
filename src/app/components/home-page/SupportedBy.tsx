"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type SupportedByProps = {
  autoplayDelay?: number;
};

export default function SupportedBy({
  autoplayDelay = 2000,
}: SupportedByProps) {
  const partners = [
    { icon: "/supported-by/Agami1.png", name: "Agami" },
    { icon: "/supported-by/MSME1.png", name: "MSME" },
    { icon: "/supported-by/ULIP-Consolidated1.png", name: "ULIP" },
    {
      icon: "/supported-by/EntrepreneurIndia1.png",
      name: "Entrepreneur India",
    },
    { icon: "/supported-by/fada1.png", name: "FADA" },
    { icon: "/supported-by/aitwa1.png", name: "AITWA" },
  ];

  // ✅ Get both ref and API directly
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: autoplayDelay,
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
    <div className="w-full mt-8 bg-white rounded-xl p-4 pt-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h4 className="font-broken text-2xl md:text-3xl text-[#374151] uppercase">
          Supported By
        </h4>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-[0_0_auto] w-[100px] sm:w-[120px] md:w-[140px] mx-1 bg-white border border-[#E5E5E5] p-2 rounded-lg"
            >
              <Image
                src={partner.icon}
                alt="Company logo"
                width={140} // ⬅️ increase size
                height={120} // ⬅️ adjust proportion
                className="mb-2 object-contain w-[120px] h-[40px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[140px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
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
