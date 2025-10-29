"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TrustedPartner() {
  const stats = [
    { icon: "/partner-logo/cars242.png" },
    { icon: "/partner-logo/spinny2.png" },
    { icon: "/partner-logo/cardekho2.png" },
    { icon: "/partner-logo/trucks2.png" },
    { icon: "/partner-logo/ald2.png" },
    { icon: "/partner-logo/olx2.png" },
    { icon: "/partner-logo/droom2.png" },
    { icon: "/partner-logo/park2.png" },
    { icon: "/partner-logo/renewbuy2.png" },
    { icon: "/partner-logo/carinfo2.png" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 3000,
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
      emblaApi?.off("select", onSelect); // 👈 safe cleanup
    };
  }, [emblaApi]);

  //const dotColors = ["bg-green-500", "bg-yellow-400", "bg-red-500"];

  return (
    <div className="mt-4 h-60 bg-white p-4 rounded-xl pt-6">
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
              className="
                flex flex-col items-center justify-center flex-[0_0_50%] 
                sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] 
                xl:flex-[0_0_16.66%] 
                px-2 py-3 mx-2 bg-white border border-[#E5E5E5] 
                rounded-lg shadow-sm hover:shadow-md transition
              "
            >
              <Image
                src={item.icon}
                alt="Company logo"
                width={160}
                height={120}
                priority
                loading="eager"
                className="object-contain w-[100px] sm:w-[140px] md:w-[160px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, idx) => {
          const offset = idx - selectedIndex;

          // Show only previous, current, and next (3 dots visible)
          if (offset < -1 || offset > 1) return null;

          // Dot color setup
          const dotColor = offset === 0 ? "bg-cyan-600" : "bg-gray-300";

          return (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${dotColor}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
