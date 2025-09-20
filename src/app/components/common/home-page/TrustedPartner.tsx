"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TrustedPartner() {
  const stats = [
    {
      icon: "/partner-logo/BajajAllianz.png",
      value: "5.5 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/partner-logo/Blackbuck.png",
      value: "1.65 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/partner-logo/BLRLogistiks.png",
      value: "61 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/partner-logo/Droom.png",
      value: "99%",
      label: "Successful Resolutions",
    },
    {
      icon: "/partner-logo/RenewBuy.png",
      value: "5.5 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/partner-logo/Symbo.png",
      value: "1.65 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/partner-logo/Transystems.png",
      value: "61 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/partner-logo/Zoomcar.png",
      value: "99%",
      label: "Successful Resolutions",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({
      delay: 1000,
      stopOnInteraction: false, // keeps autoplay even when user interacts
    }),
  ]);

  return (
    <div className="mt-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h4 className="text-lg md:text-3xl font-bold text-black">
          Trusted Partners
        </h4>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex  items-center justify-center flex-[0_0_auto] w-[140px] mx-1"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={100}
                height={100}
                className="mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
