"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  description: string;
  location: string;
  amountSaved: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rashmi Sharma",
    description:
      "“Pehle socha online challan bharna risky hoga, par yahaan process clear aur har step pe update milta raha.”",
    location: "Two-Wheeler Owner · Delhi",
    amountSaved: 2300,
    photo: "/photo/user1.jpg",
  },
  {
    name: "Rakesh Yadav",
    description:
      "“Mere challan court ke the, par yahaan se easily resolve ho gaye bina kisi lawyer ke. Kaafi helpful service hai.”",
    location: "Car Owner · Faridabad",
    amountSaved: 1100,
    photo: "/photo/user1.jpg",
  },
  {
    name: "Raj Mahawar",
    description:
      "“I wasn’t sure how to deal with a pending traffic challan, but this service made it hassle-free. Everything was sorted in minutes!”",
    location: "Two-Wheeler Owner · Chandigarh",
    amountSaved: 1700,
    photo: "/photo/user1.jpg",
  },
  {
    name: "Khushi",
    description:
      "“Is platform ne sirf challan nahi bhara, sahi time pe reminder bhi bheja. Helpful laga mujhe.”",
    location: "Two-Wheeler Owner · Gurugram",
    amountSaved: 1000,
    photo: "/photo/user1.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-[#31AB76] text-white py-4 px-2">
      <h2 className="text-2xl font-bold text-center mb-4">
        REAL STORIES, REAL SAVINGS
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-white text-black rounded-lg shadow-lg w-80 h-60 p-5 flex flex-col">
                  <div className="flex flex-row justify-between">
                    <div>
                      {" "}
                      <p className="text-md font-bold text-[#2A9164]">
                        ₹{testimonial.amountSaved}
                      </p>
                      <p className="text-xs  mb-2">Saved</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 mt-2">
                        {/* Add star ratings for testimonials */}
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            className="text-yellow-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 12l-3.09 1.63.59-3.44L2 6.76l3.53-.29L8 3l1.47 3.47L13 6.76l-3.5 3.43.59 3.44L8 12z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-black mb-6 justify-start">
                    {testimonial.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    {/* Rounded photo */}
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={48} // equals w-12
                      height={48} // equals h-12
                      className="rounded-full object-cover"
                    />

                    {/* Name + Location on right side */}
                    <div className="flex flex-col">
                      <span className="font-semibold text-black">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-900 text-xs">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
