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
    logo: "/news-logo/yourstory-logo-png_seeklogo-528345.webp",
    title:
      "Revolutionizing On-Road Legal Support : Lawyered's Journey Towards Accessible Justice",
    description:
      "Lawyered, a legal tech startup founded by Himanshu Gupta is transforming the landscape of on-road legal assistance for vehicle owners in India. With its innovative LOTS platform and the company connects users to a network of over 70,000 lawyers for immediate support on traffic violations and legal disputes, operating 24/7 across 98% of India's pin codes.",
    date: "Mar 15, 2025",
    link: "https://yourstory.com/2024/08/justice-on-the-road-lawyered-legal-tech-startup-lawyers-network-highway",
  },
  {
    logo: "/news-logo/abp-logo-png_seeklogo-432770.webp",
    title:
      "Contracts To Code: Legal Tech Is Shaping India's Startup Future. Here's How",
    description:
      "At a justice innovation workshop in a rural Tamil Nadu law school—well past the temple town of Mahabalipuram—we asked a class of law students how many were using ChatGPT. Every hand shot up. In an urban college, this would not have been surprising. But here? Their professor explained: most of these students were the children of farmers and fishermen from adjoining villages",
    date: "Apr 02, 2025",
    link: "https://news.abplive.com/technology/legal-tech-is-shaping-india-s-startup-future-here-s-how-1770572/amp",
  },

  {
    logo: "/news-logo/images3.webp",
    title:
      "Delhi traffic challan: How to get them waived off or settled at Lok Adalat 2025",
    description:
      "In India today, technology touches almost every part of our lives — from how we pay bills to how we travel, shop, and even consult a doctor. Quietly, but powerfully, it's also starting to reshape another cornerstone of our society: the legal system.",
    date: "Mar 01, 2025",
    link: "https://www.hindustantimes.com/business/delhi-traffic-challan-how-to-get-them-waived-off-or-settled-at-lok-adalat-2025-101740993817814.html",
  },
  {
    logo: "/news-logo/Lawyered_logo.webp",
    title:
      "Celebrating Vision and Leadership:Himanshu Gupta Awarded Entrepreneur of the Year at 2024 Entrepreneur India Startup Awards",
    description:
      "Himanshu Gupta, Founder & CEO of Lawyered, has been honored with the Entrepreneur of the Year in Service Business - Legal award at the Entrepreneur India Startup Awards",
    date: "Feb 20, 2025",
    link: "https://lawyered.in/events-and-news/lots-launches-at-dealerships-in-chhattisgarh-with-fada-&-rada",
  },
  {
    logo: "/news-logo/sugermint-mobile-logo.webp",
    title:
      "Meet Himanshu Gupta: The Visionary Revolutionizing Road Side Legal Assistance with LOTS",
    description:
      "With a mission to make Indian roads safer and more efficient, Himanshu has introduced cutting-edge tools like challan resolution and immediate legal help through the LOTS app. His journey is a testament to passion, purpose, and the power of technology to solve real-world problems.",
    date: "Feb 10, 2025",
    link: "https://sugermint.com/himanshu-gupta/",
  },
  {
    logo: "/news-logo/print_logo.webp",
    title: "LOTS Launches at Dealerships in Chhattisgarh with FADA & RADA",
    description:
      "On February 28, 2024, the Federation of Automobile Dealers Associations (FADA) and the Raipur Automobile Dealers Association (RADA) welcomed the launch of Lawyereds flagship product, LOTS24×7 (On-Road Legal Assistance), at dealerships across Raipur, Chhattisgarh.",
    date: "Jan 25, 2025",
    link: "https://theprint.in/ani-press-releases/fada-and-lawyered-spearheaded-on-road-legal-assistance-for-dealerships-started-from-raipur-on-february-28th-2024/1997875/",
  },

  {
    logo: "/news-logo/business-standard.webp",
    title:
      "E-Challan Backlog Soars: ChallanPay Featured in TOI Gurgaon Edition",
    description:
      "Featured in the Times of India – Gurgaon edition: India’s e-challan backlog is swelling, with ~60% of fines tied in courts. Discover how ChallanPay aims to ease the burden.",
    date: "Aug 15 2025",
    link: "https://epaper.indiatimes.com/timesepaper/publication-the-times-of-india,city-delhi.cms?redirectionSource=TOIWeb&_gl=1*7eud4s*_gcl_au*ODcxNDcxMTQuMTc1MjgyNDA1MQ..*_ga*MjEzNTU4Mzk1NS4xNzE3NDE3MjU3*_ga_FCN624MN68*czE3NjA1OTIxMDUkbzQ1JGcxJHQxNzYwNTkyMTMwJGozNSRsMCRoMA",
  },
  {
    logo: "/news-logo/business-standard.webp",
    title: "Addressing India’s E-Challan Backlog: ChallanPay to the Rescue",
    description:
      "With 60% of traffic fines stuck in courts and only 27.5% closure rate (2019–2024), ChallanPay brings legal-tech innovation to help resolve e-challan cases efficiently.",
    date: "Aug 19, 2025",
    link: "https://www.business-standard.com/industry/auto/e-challan-backlog-swells-beyond-courts-125081801112_1.html",
  },
  {
    logo: "/news-logo/the-economic-time.webp",
    title:
      "ChallanPay Supports National Lok Adalat to Simplify Challan Resolutions",
    description:
      "During the National Lok Adalat, citizens can settle traffic challans and disputes. ChallanPay helps make post-Adalat legal resolutions faster and easier.",
    date: "May 10, 2025",
    link: "https://m.economictimes.com/wealth/save/national-lok-adalat-on-10-may-you-can-settle-traffic-challans-drink-and-drive-case-select-property-dispute-and-more/articleshow/121024621.cms",
  },
  {
    logo: "/news-logo/cxo.webp",
    title:
      "Leading the way among Top Legal Startups Streamlining Traffic Challans",
    description:
      "Featured in CXO Today:  Ranks India’s top legal-tech startups simplifying traffic challan resolution through tech and innovation.",
    date: "April 16, 2025",
    link: "https://cxotoday.com/story/tech-driven-and-hassle-free-4-legal-startups-streamlining-traffic-challan/",
  },
  {
    logo: "/news-logo/ev-revolution.webp",
    title:
      "How a Missed Online Challan Can Turn Costly in India’s Digital Traffic System",
    description:
      "Missing an online challan can lead to hefty fines. Learn how India’s tech-driven traffic system is changing compliance—and how timely payment can save you money.",
    date: "Sept 12, 2025",
    link: "https://evolutionautoindia.in/how-indias-tech-driven-traffic-system-turns-a-missed-online-challan-into-a-costly-affair/",
  },
  {
    logo: "/news-logo/techi-expert.webp",
    title: "Smart Ways to Manage Digital Challans: Tips for Everyday Commuters",
    description:
      "Discover effective strategies to manage digital challans easily. Learn how commuters can stay compliant, avoid penalties, and simplify traffic fine management.",
    date: "Oct 07, 2025",
    link: "https://www.techiexpert.com/smart-ways-to-tackle-digital-challans-lessons-for-everyday-commuters/",
  },
  {
    logo: "/news-logo/the-economic-time.webp",
    title: "Lawyered Unveils ChallanPay for Seamless Challan Resolution",
    description:
      "Lawyered introduces ChallanPay, a one-stop digital platform to discover, contest & pay traffic challans across India — boosting compliance for drivers & fleets.",
    date: "Nov 13, 2025",
    link: "https://auto.economictimes.indiatimes.com/amp/news/industry/lawyered-launches-challanpay-to-simplify-and-digitise-traffic-challan-resolution/125289397",
  },
  {
    logo: "/news-logo/the-economic-time.webp",
    title: "Wrong E-Challans: A Rising Legal Risk for Drivers",
    description:
      "Lawyered highlights how incorrect e-challans jeopardise drivers’ rights, urging fast legal recourse and smarter resolution via tech-driven solutions.",
    date: "Nov 19, 2025",
    link: "https://etedge-insights.com/industry/auto-and-transportation/wrong-e-challans-for-traffic-violations-a-new-bother-for-citizens-time-to-act-fast/amp/",
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
          <h2 className="font-broken text-2xl lg:text-3xl  text-[#374151] uppercase">
            Latest Media and News
          </h2>
          <p className="text-xs lg:text-sm">
            Stay Updated with our most recent stories and updates from across
            the country
          </p>
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
                    {`${item.title}`}
                  </div>

                  {/* Description */}
                  <p className="text-sm  text-[#0A0A0A]">{`${item.description}`}</p>

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
