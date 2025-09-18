"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  logo: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    logo: "/news-logo/abp-logo-png_seeklogo-432770.png",
    title:
      "Meet Himanshu Gupta: The Visionary Revolutionizing Road Side Legal Assistance with LOTS",
    description:
      "With a mission to make Indian roads safer and more efficient, Himanshu has introduced cutting-edge tools like challan resolution and immediate legal help through the LOTS app...",
    date: "Apr 02, 2025",
    link: "#",
  },
  {
    logo: "/news-logo/images2.jpeg",
    title: "LOTS App Empowers Drivers with Instant Challan Resolution",
    description:
      "The LOTS app is transforming how drivers resolve challans instantly, reducing legal complexities and ensuring compliance...",
    date: "Mar 15, 2025",
    link: "#",
  },
  {
    logo: "/news-logo/images3.png",
    title: "Tech-Driven Legal Assistance: The Future of Road Safety",
    description:
      "Cutting-edge digital platforms are enabling roadside legal assistance with unprecedented speed and accuracy...",
    date: "Mar 01, 2025",
    link: "#",
  },
  {
    logo: "/news-logo/Lawyered_logo (3446x654)_20250527_103837_0000.png",
    title: "LOTS: Transforming the Legal Landscape for Roadside Issues",
    description:
      "By providing immediate support for challan disputes, LOTS is saving crores in legal fees across India...",
    date: "Feb 20, 2025",
    link: "#",
  },
  {
    logo: "/news-logo/sugermint-mobile-logo.png",
    title: "Revolutionizing Road Safety with AI-Powered Tools",
    description:
      "Artificial Intelligence is at the heart of LOTS’s mission, making legal resolutions faster and more accurate...",
    date: "Feb 10, 2025",
    link: "#",
  },
  {
    logo: "/news-logo/print_logo.png",
    title: "India’s First Digital Roadside Legal Support Platform",
    description:
      "LOTS is pioneering a new category of tech-enabled legal services for drivers, fleet owners, and individuals...",
    date: "Jan 25, 2025",
    link: "#",
  },
];

export function LatestNews() {
  return (
    <div>
      <div>
        <div className="text-center mb-8 mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            Latest News
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Stay Updated with our most recent stories and updates from across
            the country
          </p>
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-2">
          {newsData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="rounded-xl border border-gray-200 py-0 shadow-sm hover:shadow-md transition">
                <CardContent className="p-5 space-y-3">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Image
                      src={item.logo}
                      alt="logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600">{item.description}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <Link
                      href={item.link}
                      className="text-xs font-medium text-blue-600 hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
