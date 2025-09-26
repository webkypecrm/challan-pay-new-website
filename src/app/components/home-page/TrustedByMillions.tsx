import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function TrustedByMillions() {
  const stats = [
    {
      icon: "/trusted-by/icon1.png",
      value: "6 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/trusted-by/icon4.png",
      value: "1.5 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/trusted-by/icon3.png",
      value: "53 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/trusted-by/icon2.png",
      value: "98%",
      label: "Successful Resolutions",
    },
  ];

  return (
    <Card className="w-full rounded-2xl  border  p-2 py-8 md:p-10 shadow-sm">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="font-broken text-2xl text-[#374151] uppercase">
          Trusted By Millions
        </h2>
        <p className="text-black font-medium text-sm md:text-base mt-1">
          Join the Largest Challan Resolution Platform in India
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              src={item.icon}
              alt={item.label}
              width={60}
              height={60}
              className="mb-1"
            />
            <p className="font-bold text-lg text-black">{item.value}</p>
            <p className="text-sm text-black">{item.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
