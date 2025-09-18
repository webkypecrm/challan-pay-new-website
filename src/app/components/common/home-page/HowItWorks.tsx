import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      img: "/how-it-work/rectangle1.png",
      heading: "Enter Details",
      text: "Enter your vehicle number and mobile number to begin",
    },
    {
      id: 2,
      img: "/how-it-work/rectangle2.png",
      heading: "View and Pay Challans",
      text: "Settle your challans without visiting courts - fast, easy and hassle-free",
    },
    {
      id: 3,
      img: "/how-it-work/rectangle3.png",
      heading: "View Challans",
      text: "Enter your vehicle number and mobile number to begin",
    },
  ];

  return (
    <section className="w-full py-20 ">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black ">
          Pay Challan In Just 3 Easy Steps
        </h2>
      </div>

      {/* Steps Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"> */}
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index}>
              <Card
                key={step.id}
                className="relative flex flex-col items-center justify-center rounded-xl overflow-hidden border shadow-sm py-0"
              >
                {/* Step Number Badge */}
                <div className="absolute top-2 left-2 bg-cyan-500 text-white text-sm font-bold px-3 py-2 rounded">
                  {step.id}
                </div>

                {/* Image */}
                <Image
                  src={step.img}
                  alt={step.text}
                  width={400}
                  height={250}
                  className="w-full h-auto object-contain"
                />
              </Card>
              <div>
                <h3 className="text-base text-black font-bold py-1">
                  {step.heading}
                </h3>
                {/* Text */}
                <p className="text-sm font-normal text-black  py-1">
                  {step.text}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      {/* </div> */}

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6">
          Check Challans
        </Button>
      </div>
    </section>
  );
}
