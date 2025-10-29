"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

interface NewsItem {
  logo: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    logo: "/news-logo/yourstory-logo-png_seeklogo-528345.png",
    title:
      "Revolutionizing On-Road Legal Support:Lawyereds Journey Towards Accessible Justice",
    description:
      "Lawyered, a legal tech startup founded by Himanshu Gupta, is transforming the landscape of on-road legal assistance for vehicle owners in India. With its innovative LOTS platform, the company connects users to a network of over 70,000 lawyers for immediate support on traffic violations and legal disputes, operating 24/7 across 98% of Indias pin codes.",
    date: "Mar 15, 2025",
    link: "https://yourstory.com/2024/08/justice-on-the-road-lawyered-legal-tech-startup-lawyers-network-highway",
  },
  {
    logo: "/news-logo/abp-logo-png_seeklogo-432770.png",
    title:
      "Contracts To Code: Legal Tech Is Shaping Indias Startup Future. Heres How",
    description:
      "At a justice innovation workshop in a rural Tamil Nadu law school—well past the temple town of Mahabalipuram—we asked a class of law students how many were using ChatGPT. Every hand shot up. In an urban college, this would not have been surprising. But here? Their professor explained: most of these students were the children of farmers and fishermen from adjoining villages.x",
    date: "Apr 02, 2025",
    link: "https://news.abplive.com/technology/legal-tech-is-shaping-india-s-startup-future-here-s-how-1770572/amp",
  },

  {
    logo: "/news-logo/images3.png",
    title:
      "Delhi traffic challan: How to get them waived off or settled at Lok Adalat 2025",
    description:
      "In India today, technology touches almost every part of our lives — from how we pay bills to how we travel, shop, and even consult a doctor. Quietly, but powerfully, its also starting to reshape another cornerstone of our society: the legal system.",
    date: "Mar 01, 2025",
    link: "https://www.hindustantimes.com/business/delhi-traffic-challan-how-to-get-them-waived-off-or-settled-at-lok-adalat-2025-101740993817814.html",
  },
  {
    logo: "/news-logo/Lawyered_logo (3446x654)_20250527_103837_0000.png",
    title:
      "Celebrating Vision and Leadership:Himanshu Gupta Awarded Entrepreneur of the Year at 2024 Entrepreneur India Startup Awards",
    description:
      "Himanshu Gupta, Founder & CEO of Lawyered, has been honored with the Entrepreneur of the Year in Service Business - Legal award at the Entrepreneur India Startup Awards",
    date: "Feb 20, 2025",
    link: "https://lawyered.in/events-and-news/lots-launches-at-dealerships-in-chhattisgarh-with-fada-&-rada",
  },
  {
    logo: "/news-logo/sugermint-mobile-logo.png",
    title:
      "Meet Himanshu Gupta: The Visionary Revolutionizing Road Side Legal Assistance with LOTS",
    description:
      "With a mission to make Indian roads safer and more efficient, Himanshu has introduced cutting-edge tools like challan resolution and immediate legal help through the LOTS app. His journey is a testament to passion, purpose, and the power of technology to solve real-world problems.",
    date: "Feb 10, 2025",
    link: "https://sugermint.com/himanshu-gupta/",
  },
  {
    logo: "/news-logo/print_logo.png",
    title: "LOTS Launches at Dealerships in Chhattisgarh with FADA & RADA",
    description:
      "On February 28, 2024, the Federation of Automobile Dealers Associations (FADA) and the Raipur Automobile Dealers Association (RADA) welcomed the launch of Lawyereds flagship product, LOTS24×7 (On-Road Legal Assistance), at dealerships across Raipur, Chhattisgarh.",
    date: "Jan 25, 2025",
    link: "https://theprint.in/ani-press-releases/fada-and-lawyered-spearheaded-on-road-legal-assistance-for-dealerships-started-from-raipur-on-february-28th-2024/1997875/",
  },
];

export function LatestNews() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [emblaApi, setEmblaApi] = React.useState<EmblaCarouselType | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div>
      <div>
        <div className="text-center mb-6 mt-10">
          <h2 className="font-broken text-2xl md:text-3xl  text-[#374151] uppercase">
            Latest Media and News
          </h2>
        </div>
      </div>
      <Carousel
        className="w-full"
        setApi={setEmblaApi} // 👈 connect carousel API
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-2">
          {newsData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="rounded-xl border border-gray-200 py-0 shadow-sm hover:shadow-md transition h-110 lg:h-90">
                <CardContent className="p-5 space-y-3">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Image
                      src={item.logo}
                      alt="logo"
                      width={60}
                      height={50}
                      className="object-contain h-15"
                    />
                  </div>

                  {/* Title */}
                  <div className="font-bold text-sm text-[#0A0A0A]">
                    {item.title}
                  </div>

                  {/* Description */}
                  <p className="text-sm  text-[#0A0A0A]">{item.description}</p>

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
      <div className="flex justify-center mt-4  gap-2">
        {scrollSnaps.map((_, idx) => {
          // default = gray
          let dotColor = "bg-gray-200";

          // offset relative to active index
          let offset = idx - selectedIndex;

          // wrap-around (for circular case, e.g. last to first)
          if (offset < 0) offset += scrollSnaps.length;

          if (offset >= 0 && offset < 3) {
            if (offset === 0) {
              dotColor = "bg-green-500"; // first
            } else if (offset === 1) {
              dotColor = "bg-yellow-400"; // second
            } else if (offset === 2) {
              dotColor = "bg-red-500"; // active (always red)
            }
          }

          return (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${dotColor}`}
            />
          );
        })}
      </div>
    </div>
  );
}
