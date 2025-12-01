"use client";

import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Link from "next/link";
//import { createSlug } from "@/lib/utils";
import { getRequest } from "@/lib/api";
import loaderAnimation from "../loader.json";
import Lottie from "lottie-react";
import { formatDate } from "@/lib/helpers";

interface Blog {
  id: number;
  name: string;
  meta: string;
  shortDescription: string;
  description: string;
  author: { firstName: string; lastName: string };
  category: { id: number; name: string };
  cover: string;
  attachment?: string;
  createdAt: string;
  readMins?: number;
  slug?: string;
  icon: string;
}

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title:
//       "ChallanPay: India’s Trusted Platform for Fast and Easy Challan Resolution",
//     description:
//       "Managing traffic challans has become a significant concern for vehicle owners across India. With increasing digital enforcement and automated e-challan systems, many people find themselves struggling to keep track of outstanding fines, payment deadlines, and resolution procedures. This is where ChallanPay steps in. As India’s largest and most reliable challan resolution platform, ChallanPay simplifies the entire process of tracking and clearing challans through a fast, secure, and user-friendly system available at www.challanpay.in.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog1.png",
//   },
//   {
//     id: 2,
//     title: "Legal Support for Challans: A Complete Guide by ChallanPay",
//     description:
//       "Traffic challans have become a routine part of modern urban life, especially with increased digital enforcement across India. Whether it is a speeding violation, signal jump, missing documentation, or an e-challan issued through automated systems, most vehicle owners struggle to understand the legal process that follows.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog2.png",
//   },
//   {
//     id: 3,
//     title: "Transforming Legal Risk Management with ChallanPay",
//     description:
//       "Introduction: The Changing Face of Legal Risk In India’s rapidly evolving legal-and-mobility landscape, managing legal risks associated with vehicles, fleets and transport operations is no longer a back-office chore - it’s a strategic imperative. Rising regulatory complexity, real-time enforcement tools and generational shifts in mobility demand more proactive, technology-driven approaches.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog3.png",
//   },
//   {
//     id: 4,
//     title:
//       "Fast & Simple: Your Complete Step-by-Step Guide to Paying E-Challans Online in India",
//     description:
//       "India’s traffic enforcement system has undergone a major transformation over the last few years. With most state traffic departments shifting to digital platforms, e-challans have become a standard method for issuing and paying fines. This move not only simplifies compliance but also removes the need for physical paperwork, long queues, and manual verification.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog4.png",
//   },
//   {
//     id: 5,
//     title:
//       "Charting Tomorrow - How AI Is Redefining the Landscape of Legal Technology in India",
//     description:
//       "The march of artificial intelligence (AI) is no longer confined to high-tech labs or futuristic visions - it is steadily permeating every aspect of professional life, and the legal sector in India is no exception. In a country with a vast legal ecosystem, heavy case-backlogs, diverse languages and ever-evolving regulatory demands, AI offers both promise and challenge. This article explores how AI is reshaping legal technology in India, drives change in law firms, corporate legal departments and in access to justice, and what that means for stakeholders - from litigators to lay clients.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog5.png",
//   },
//   {
//     id: 6,
//     title:
//       "SwiftPay Routes: The Fastest Ways to Clear Traffic Challans Online in Delhi & Gurugram",
//     description:
//       "The National Capital Region (NCR), especially Delhi and Gurugram, is known for its fast-paced lifestyle, dense traffic conditions and advanced surveillance systems. With digital enforcement rising through AI-driven cameras, speed detection systems and automatic number plate recognition, traffic challans have become more frequent and more accurate. As a result, timely payment of traffic fines is not only a legal responsibility but also a necessary practice to avoid penalties, vehicle blacklisting or complications during insurance and ownership transfers.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog6.png",
//   },
//   {
//     id: 7,
//     title:
//       "MetroChallan Guide: Quick Digital Methods for Clearing Fines Across NCR",
//     description:
//       "Living in the National Capital Region (NCR) - comprising cities like Delhi, Noida, Gurugram and adjoining areas - means navigating busy roads, strict traffic rules, and sometimes unexpected fines. The good news: many traffic violations (commonly referred to as “challans”) can now be cleared online. This post walks you through how to check, manage and pay your traffic fines quickly and digitally - including using the platform at www.challanpay.in (ChallanPay) - and then offers tips to avoid future fines.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog7.png",
//   },
//   {
//     id: 8,
//     title:
//       "UrbanChallan Navigator: The Most Efficient Ways to Settle Fines Online Today",
//     description:
//       "Settling a traffic challan no longer requires standing in queues or visiting multiple authorities. With the evolution of digital governance in India, online payment systems have transformed how citizens handle penalties swiftly and securely. Today, platforms like www.challanpay.in are redefining the experience by offering faster verifications, transparent processes, and smooth payment journeys.",
//     date: "Mar 12, 2024",
//     image: "/blogs/blog8.png",
//   },
// ];

function BlogsListing() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res: { data: { blogs: Blog[] } } = await getRequest("/v1/blogs");
        setBlogs(res?.data?.blogs || []);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <Lottie
          animationData={loaderAnimation}
          loop={true}
          className="w-32 h-32"
        />
      </div>
    );

  return (
    <div className="lg:bg-white">
      <Header />
      <div className="px-4 bg-white lg:flex lg:justify-around  lg:items-center lg:border lg:rounded-none lg:mx-32 lg:mt-32">
        <div className="border p-2 mt-25 lg:border-none lg:mt-0">
          <div className="text-3xl font-bold pt-4 lg:text-5xl ">
            <div className="uppercase ">
              The ChallanPay <br />
              Blogs
            </div>
            <p className="text-[18px] font-semibold text-gray-800 leading-normal mt-2 hidden lg:block">
              Explore the latest blog articles, stories, and perspectives
              <br /> about the world of traffic management
            </p>
            <p className="text-[15px] font-semibold text-gray-600 leading-normal mt-2 lg:hidden block">
              Explore the latest blog articles, stories, and perspectives about
              the world of traffic management
            </p>
          </div>

          <div className="flex justify-center items-center rounded-md mt-4 lg:rounded-0 lg:mt-0 block lg:hidden">
            <Image
              src="/blogs/blog-heading.png"
              alt="blog image"
              width={400}
              height={300}
              className="object-contain "
            />
          </div>
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 lg:rounded-0 lg:mt-0 lg:block hidden p-2">
          <Image
            src="/blogs/blog-heading.webp"
            alt="blog image"
            width={400}
            height={300}
            className="object-contain "
          />
        </div>
      </div>
      <section className="py-10 bg-white px-4 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white  rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div className="relative w-full h-80">
                <Image
                  src={blog.icon}
                  alt={blog.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className=" py-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                  {`${blog.name}`}
                </h3>
                <div
                  className="text-gray-600 text-sm mb-3 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: blog.shortDescription }}
                />

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {formatDate(blog.createdAt)}
                  </span>
                  <Link
                    // href={`/blog-detail/${blog.slug}`}
                    href={`/blog-detail/${blog.slug}?id=${blog.id}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogsListing;
