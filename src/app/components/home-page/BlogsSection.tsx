"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
//import { createSlug } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // adjust path if needed
import { Card, CardContent } from "@/components/ui/card";
import { getRequest } from "@/lib/api";
import loaderAnimation from "../../loader.json";
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

export default function BlogsSection() {
  const [viewAll, setViewAll] = useState(false);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
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
    <section className="py-10  px-0">
      <div className="my-10 text-black">
        <h4 className="font-broken text-center text-2xl md:text-3xl text-[#374151] uppercase">
          THE CHALLANPAY BLOGS
        </h4>
        <p className="text-xs lg:text-lg text-center my-2">
          Explore the latest blog articles, stories, and perspectives about the
          world of traffic management
        </p>
      </div>

      <div className="w-full">
        {/* Mobile View — Horizontal Scroll Carousel */}
        <div className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {blogs.map((blog, index) => (
                <CarouselItem
                  key={blog.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4 flex flex-col">
                        {/* Blog Image */}
                        <div className="relative w-full h-56">
                          <Image
                            src={blog.icon}
                            alt={blog.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>

                        {/* Blog Text */}
                        <div className="mt-4 flex flex-col justify-between h-full">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                            {blog.name}
                          </h3>

                          <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                            {blog.shortDescription}
                          </p>

                          <div className="flex justify-between items-center mt-auto">
                            <span className="text-sm text-gray-500">
                              {formatDate(blog.createdAt)}
                            </span>
                            <Link
                              href={`/blog-detail/${blog.slug}?id=${blog.id}`}
                              className="text-sm font-medium text-blue-600 hover:underline"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop View — Original Grid Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-4">
          {blogs?.length > 0 && (
            <div className="col-span-2 bg-white rounded-2xl overflow-hidden border border-gray-200 transition-shadow duration-300 p-5">
              <div className="relative w-full h-65">
                <Image
                  src={blogs[0]?.cover ?? "/placeholder.png"}
                  alt={blogs[0]?.name ?? "blog image"}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                  {blogs[0]?.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-6 my-6">
                  {blogs[0]?.shortDescription}
                </p>

                <div className="flex justify-between items-center my-4">
                  <span className="text-sm text-gray-500">
                    {blogs[0]?.createdAt ? formatDate(blogs[0].createdAt) : ""}
                  </span>

                  <Link
                    href={`/blog-detail/${blogs[0]?.id}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Right column — Smaller cards (3/5) */}
          <div className="col-span-3 flex flex-col gap-4">
            {blogs.slice(1, 3).map((blog) => (
              <div
                key={blog.id}
                className="bg-white flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-200   p-5"
              >
                <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                  <Image
                    src={blog.icon}
                    alt={blog.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between sm:w-2/3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2">
                      {blog.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-6">
                      {blog.shortDescription}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">
                      {formatDate(blog.createdAt)}
                    </span>
                    <Link
                      href={`/blog-detail/${blog.id}`}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href={"/blog-listing"}
          className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          View All
          <ChevronDown
            size={18}
            className={`transition-transform ${
              viewAll ? "rotate-180" : "rotate-0"
            }`}
          />
        </Link>
      </div>
    </section>
  );
}
