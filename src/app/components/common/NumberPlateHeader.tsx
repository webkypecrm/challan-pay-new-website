// import Image from "next/image";
// import React from "react";

// interface VehicleCardProps {
//   imageSrc?: string;
//   vehicleNumber: string;
// }

// const NumberPlateHeader: React.FC<VehicleCardProps> = ({
//   imageSrc = "/Images/car.svg",
//   vehicleNumber,
// }) => {
//   return (
//     <div className="h-18 flex items-center justify-start p-2 gap-4 bg-slate-50 rounded-lg mt-4 lg:hidden">
//       {/* Left side (vehicle image) */}
//       <Image
//         src={imageSrc}
//         alt="vehicle image"
//         width={70}
//         height={40}
//         className="object-contain icon-cyan"
//       />

//       {/* Vehicle number box */}
//       <div className="p-1 border border-gray-300 bg-white">
//         <div className="border border-black font-bold px-2 py-1 text-sm">
//           • {vehicleNumber} •
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NumberPlateHeader;

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
    <div className="relative flex items-center bg-slate-50 rounded-lg mt-4 h-18 p-2 lg:hidden">
      {/* Left side (vehicle image) */}
      <div className="absolute left-2">
        <Image
          src={imageSrc}
          alt="vehicle image"
          width={70}
          height={40}
          className="object-contain icon-cyan"
        />
      </div>

      {/* Vehicle number box (centered) */}
      <div className="mx-auto p-1 border border-gray-300 bg-white">
        <div className="border border-black font-bold px-2 py-1 text-sm text-center">
          • {vehicleNumber} •
        </div>
      </div>
    </div>
  );
};

export default NumberPlateHeader;
