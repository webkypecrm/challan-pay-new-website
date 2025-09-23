import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function TrustedByMillions() {
  const stats = [
    {
      icon: "/trusted-by/icon1.png",
      value: "5.5 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/trusted-by/icon4.png",
      value: "1.65 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/trusted-by/icon3.png",
      value: "61 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/trusted-by/icon2.png",
      value: "99%",
      label: "Successful Resolutions",
    },
  ];

  return (
    <Card className="w-full rounded-2xl  border  p-2 py-8 md:p-10 shadow-sm">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className=" text-2xl md:text-3xl font-bold text-gray-900">
          Trusted By <span className="text-cyan-600">Millions</span>
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
