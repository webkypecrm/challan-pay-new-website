"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { getRequest } from "@/lib/api";
import loaderAnimation from "../../loader.json";
import Lottie from "lottie-react";

interface Author {
  firstName: string;
  lastName?: string;
}

interface Category {
  id: number;
  name: string;
}

interface Blog {
  name: string;
  cover: string;
  description: string;
  shortDescription: string;
  meta: string;
  createdAt: string;
  readMins: number;
  author: Author;
  category: Category;
}

interface ApiResponse {
  status: string;
  data?: {
    blog?: Blog;
  };
}

export default function BlogDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blogDetail, setBlogDetail] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const res: ApiResponse = await getRequest(`/v1/blogs/${slug}`);

        if (res?.status === "success" && res?.data?.blog) {
          setBlogDetail(res.data.blog);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogDetail();
  }, [slug]);

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

  if (!blogDetail) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 mb-6 hover:bg-gray-100 transition"
        >
          <span className="text-sm lg:text-lg">←</span>
          <span className="font-medium text-sm lg:text-lg">Back</span>
        </button>

        {/* Meta Info */}
        <div className="text-sm text-gray-500 mb-4 hidden lg:block">
          <span>{new Date(blogDetail.createdAt).toDateString()}</span> •{" "}
          <span>{blogDetail.readMins} min read</span> •{" "}
          <span>
            Author: {blogDetail.author.firstName}{" "}
            {blogDetail.author.lastName ?? ""}
          </span>
        </div>

        {/* Title */}
        <div className="lg:text-5xl font-bold lg:my-8 leading-tight text-xl mb-4">
          {blogDetail.name}
        </div>

        {/* Featured Image */}
        <div className="rounded-sm overflow-hidden lg:mb-8 lg:px-20 mb-4">
          <Image
            src={blogDetail.cover}
            alt={blogDetail.name}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 lg:px-20">
          {/* <p className="py-2">{blogDetail.shortDescription}</p> */}

          <div
            className="py-2"
            dangerouslySetInnerHTML={{ __html: blogDetail.description }}
          />
        </article>
      </div>
    </div>
  );
}
