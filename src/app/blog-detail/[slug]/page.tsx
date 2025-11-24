import { getRequest } from "@/lib/api";
import BlogDetailClient from "./BlogDetailClient";
import Footer from "@/app/components/common/Footer";

interface Params {
  slug: string;
}

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

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const res: ApiResponse = await getRequest(`/v1/blogs/${params.slug}`);
    const blog = res?.data?.blog;

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "No blog data available",
      };
    }

    return {
      title: blog.meta || blog.name,
      description: blog.meta || "",
      openGraph: {
        title: blog.meta || blog.name,
        description: blog.meta || "",
        images: [{ url: blog.cover }],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.meta || blog.name,
        description: blog.meta,
        images: [blog.cover],
      },
    };
  } catch (e) {
    return {
      title: "Blog Detail",
      description: "Blog information",
    };
  }
}

export default function Page({ params }: { params: Params }) {
  return (
    <>
      <BlogDetailClient slug={params.slug} />
      <Footer />
    </>
  );
}
