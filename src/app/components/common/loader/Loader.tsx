import React from "react";
import Image from "next/image";
import CircularProgressBar from "./CircularProgressBar";

interface LoaderProps {
  progress: number; // add this
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <div className="bg-white fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-cyan-200 to-white">
      {/* Top bar with company logo */}
      <div className="flex items-center p-4">
        <Image
          src={"/logo/text-logo-png2.png"}
          alt="Company Logo"
          width={120}
          height={40}
        />
      </div>
      <div className="items-center absolute top-10  lg:hidden ">
        <Image
          src={"/Images/vector.png"}
          alt="Company Logo"
          width={700}
          height={100}
          className="mask-gradient"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center z-100">
        <Image
          // src={"/loader-img/road-side.png"}
          src={"/gif/trafficLight.gif"}
          alt="Center"
          width={100}
          height={100}
          className=""
        />
        <div className="flex flex-col text-center justify-center items-center mt-4 mb-4">
          <p className="text-lg font-bold">
            Please wait for a while, data <br /> is preparing to serve you...
          </p>{" "}
        </div>
        {/* <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
        <CircularProgressBar progress={progress} />
      </div>

      {/* Bottom image */}
      <div className="flex justify-center">
        <Image
          src={"/loader-img/red-light.png"}
          alt="Bottom"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default Loader;
