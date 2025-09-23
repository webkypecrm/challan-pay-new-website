"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SupportedBy() {
  const partners = [
    { icon: "/supported-by/Agami.png" },
    { icon: "/supported-by/MSME.png" },
    { icon: "/supported-by/ULIP.png" },
    { icon: "/supported-by/EntrepreneurIndia.png" },
    { icon: "/supported-by/fada.png" },
    { icon: "/supported-by/aitwa.png" },
  ];

  return (
    <div className="w-full mt-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h4 className="text-lg md:text-3xl font-bold text-black">
          Supported By
        </h4>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {partners.map((partner, idx) => (
          <Card
            key={idx}
            className="flex h-16 flex-col items-center justify-center p-1 rounded-sm  border border-gray-200 hover:shadow-md transition"
          >
            <Image
              src={partner.icon}
              alt={"icon"}
              width={80}
              height={80}
              className="object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
