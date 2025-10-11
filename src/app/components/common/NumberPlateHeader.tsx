import Image from "next/image";
import React from "react";

interface VehicleCardProps {
  imageSrc?: string;
  vehicleNumber: string;
}

const NumberPlateHeader: React.FC<VehicleCardProps> = ({
  imageSrc = "/Images/car.svg",
  vehicleNumber,
}) => {
  return (
    <div className="h-18 flex items-center justify-start p-2 gap-4 bg-slate-50 rounded-lg mt-4 lg:hidden">
      {/* Left side (vehicle image) */}
      <Image
        src={imageSrc}
        alt="vehicle image"
        width={80}
        height={30}
        className="object-contain"
      />

      {/* Vehicle number box */}
      <div className="p-1 border border-gray-300">
        <div className="border border-black font-bold px-2 py-1 text-sm">
          • {vehicleNumber} •
        </div>
      </div>
    </div>
  );
};

export default NumberPlateHeader;
