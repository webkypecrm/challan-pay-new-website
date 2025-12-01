import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function TrustedByMillions() {
  const stats = [
    {
      icon: "/trusted-by/icon1.webp",
      value: "6 Lakhs+",
      label: "Vehicles Protected",
    },
    {
      icon: "/trusted-by/icon4.webp",
      value: "1.5 Lakh+",
      label: "Challans Resolved",
    },
    {
      icon: "/trusted-by/icon3.webp",
      value: "53 Crore+",
      label: "Savings on Legal Fees",
    },
    {
      icon: "/trusted-by/icon2.webp",
      value: "98%",
      label: "Successful Resolutions",
    },
  ];

  return (
    // <div>
    //   <Card className="w-full rounded-2xl lg:rounded-none  border  p-2 py-8 md:p-10 shadow-sm">

    //     <div className="text-center mb-8">
    //       <h2 className="font-broken lg:text-4xl text-[#374151] uppercase text-2xl ">
    //         Trusted By Millions
    //       </h2>
    //       <p className=" lg:text-lg text-black font-medium md:text-base mt-1 text-sm">
    //         Join the Largest Challan Resolution Platform in India
    //       </p>
    //     </div>
    //     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center">
    //       {stats.map((item, idx) => (
    //         <div key={idx} className="flex flex-col items-center">
    //           <Image
    //             src={item.icon}
    //             alt={item.label}
    //             width={60}
    //             height={60}
    //             className="mb-1"
    //           />
    //           <p className="font-bold lg:text-2xl text-black text-sm">
    //             {item.value}
    //           </p>
    //           <p className="font-medium lg:text-lg text-black text-sm">
    //             {item.label}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </Card>
    // </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="w-full rounded-2xl  border p-2 py-8 md:p-10 ">
        <div className="text-center mb-8">
          <h2 className="font-broken lg:text-4xl text-[#374151] uppercase text-2xl">
            Trusted By Millions
          </h2>
          <p className="lg:text-lg text-black font-medium md:text-base mt-1 text-sm">
            Join the Largest Challan Resolution Platform in India
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center lg:mt-10">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={item.label}
                width={60}
                height={60}
                className="mb-1"
              />
              <p className="font-bold lg:text-2xl text-black text-sm">
                {item.value}
              </p>
              <p className="font-medium lg:text-lg text-black text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="w-full rounded-2xl border p-4 flex justify-center items-center bg-white">
        <div className="relative w-[300px] sm:w-[350px] md:w-[400px] flex justify-center">
          <img
            src="/Mobile.png"
            alt="Samsung A35"
            className="w-[300px] h-[500px] object-contain"
          />

          {/* <video
            src="/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls
            className="absolute top-[3%] lg:left-[24%] left-[14%] lg:w-[52%] w-[70%]  h-[94%] object-cover rounded-lg"
          /> */}

          <video
            src="/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            controls
            className="absolute top-[3%] lg:left-[24%] left-[14%] lg:w-[52%] w-[70%]  h-[94%] object-cover rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
}
