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
    { icon: "/supported-by/Agami2.webp", name: "Agami" },
    { icon: "/supported-by/MSME2.webp", name: "MSME" },
    { icon: "/supported-by/ULIP-Consolidated2.webp", name: "ULIP" },
    {
      icon: "/supported-by/Entrepreneurlndia2.webp",
      name: "Entrepreneur India",
    },
    { icon: "/supported-by/fada2.webp", name: "FADA" },
    { icon: "/supported-by/aitwa2.webp", name: "AITWA" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return; // stop if Embla API is not ready

    // Set initial scroll snaps
    setScrollSnaps(emblaApi.scrollSnapList());

    // Handler for slide change
    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected);
    };

    // Subscribe to select event
    emblaApi.on("select", onSelect);

    // Run once to set the initial index
    onSelect();

    // Cleanup safely
    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // const dotColors = ["bg-green-500", "bg-yellow-400", "bg-red-500"];

  return (
    <div className="w-full lg:h-60 mt-4 bg-white rounded-xl p-4 pt-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h4 className="font-broken text-2xl md:text-3xl text-[#374151] uppercase">
          Supported By
        </h4>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="
                            flex flex-col items-center justify-center flex-[0_0_50%] 
                            sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] 
                            xl:flex-[0_0_16.66%] 
                            px-2 py-3 mx-2 bg-white border border-[#E5E5E5] 
                            rounded-lg shadow-sm hover:shadow-md transition
                          "
            >
              <Image
                src={partner.icon}
                alt="Company logo"
                width={160}
                priority
                loading="eager"
                height={120}
                className="object-contain w-[100px] sm:w-[140px] md:w-[160px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}

      {/* <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, idx) => {
          // Calculate offset from the current active index
          const offset = idx - selectedIndex;

          // Show only the previous, current, and next dots (3 visible)
          if (offset < -1 || offset > 1) return null;

          // Define color: active one (middle) is cyan, others gray
          const dotColor = offset === 0 ? "bg-cyan-600" : "bg-gray-300";

          return (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${dotColor}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div> */}
    </div>
  );
}
