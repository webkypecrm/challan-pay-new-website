"use client";

//import { Card } from "@/components/ui/card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TrustedPartner() {
  const stats = [
    {
      icon: "/partner-logo/cars24.png",
      value: "5.5 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/partner-logo/spinny.png",
      value: "1.65 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/partner-logo/cardekho.png",
      value: "61 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/partner-logo/trucks.png",
      value: "99%",
      label: "Successful Resolutions",
    },
    {
      icon: "/partner-logo/ald.png",
      value: "5.5 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/partner-logo/olx.png",
      value: "1.65 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/partner-logo/droom.png",
      value: "61 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/partner-logo/park.png",
      value: "99%",
      label: "Successful Resolutions",
    },
    {
      icon: "/partner-logo/renewbuy.png",
      value: "61 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/partner-logo/carinfo.png",
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
              className="flex  items-center justify-center flex-[0_0_auto] w-[140px] mx-1 bg-white border border-[#E5E5E5] p-2 rounded-lg"
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
