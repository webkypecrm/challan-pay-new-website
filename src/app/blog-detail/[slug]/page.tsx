// import { getRequest } from "@/lib/api";
// import BlogDetailClient from "./BlogDetailClient";
// import Footer from "@/app/components/common/Footer";

// // interface Params {
// //   slug: string;
// // }

// interface PageProps {
//   params: { slug: string };
//   searchParams: { id: string };
// }

// interface Author {
//   firstName: string;
//   lastName?: string;
// }

// interface Category {
//   id: number;
//   name: string;
// }

// interface Blog {
//   name: string;
//   cover: string;
//   description: string;
//   shortDescription: string;
//   metaDescription: string;
//   metaKeywords: string;
//   meta: string;
//   createdAt: string;
//   readMins: number;
//   author: Author;
//   category: Category;
// }

// interface ApiResponse {
//   status: string;
//   data?: {
//     blog?: Blog;
//   };
// }

// export async function generateMetadata({ params, searchParams }: PageProps) {
//   try {
//     const res: ApiResponse = await getRequest(`/v1/blogs/${searchParams.id}`);
//     const blog = res?.data?.blog;

//     if (!blog) {
//       return {
//         title: "Blog Not Found",
//         description: "No blog data available",
//       };
//     }

//     return {
//       title: blog.meta || blog.name,
//       description: blog.metaDescription || "",
//       keywords: blog.metaKeywords?.split(",") || [],
//       openGraph: {
//         title: blog.meta || blog.name,
//         description: blog.metaDescription || "",
//         images: [{ url: blog.cover }],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: blog.meta || blog.name,
//         description: blog.metaDescription,
//         images: [blog.cover],
//       },
//     };
//   } catch (e) {
//     return {
//       title: "Blog Detail",
//       description: "Blog information",
//     };
//   }
// }

// export default async function Page({ params, searchParams }: PageProps) {
//   const res: ApiResponse = await getRequest(`/v1/blogs/${searchParams.id}`);
//   const blog = res?.data?.blog;

//   const schemaData = blog
//     ? {
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         mainEntityOfPage: {
//           "@type": "WebPage",
//           "@id": `https://www.challanpay.in/blog-detail/${params.slug}`,
//         },
//         headline: blog.meta || blog.name,
//         description: blog.metaDescription,
//         image: blog.cover,
//         author: {
//           "@type": "Organization",
//           name: "ChallanPay",
//         },
//         publisher: {
//           "@type": "Organization",
//           name: "ChallanPay",
//           logo: {
//             "@type": "ImageObject",
//             url: "https://www.challanpay.in/logo/text-logo-png.png",
//           },
//         },
//         datePublished: blog.createdAt,
//       }
//     : null;

//   return (
//     <>
//       {schemaData && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//       )}

//       <BlogDetailClient slug={searchParams.id} />
//       <Footer />
//     </>
//   );
// }

import { getRequest } from "@/lib/api";
import BlogDetailClient from "./BlogDetailClient";
import Footer from "@/app/components/common/Footer";

interface PageProps {
  params: { slug: string };
  searchParams: { id: string };
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
  metaDescription: string;
  metaKeywords: string;
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

export async function generateMetadata({ params, searchParams }: PageProps) {
  try {
    const res: ApiResponse = await getRequest(`/v1/blogs/${searchParams.id}`);
    const blog = res?.data?.blog;

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "No blog data available",
      };
    }

    return {
      title: blog.meta || blog.name,
      description: blog.metaDescription || "",
      keywords: blog.metaKeywords?.split(",") || [],
      openGraph: {
        title: blog.meta || blog.name,
        description: blog.metaDescription || "",
        images: [{ url: blog.cover }],
        url: `https://www.challanpay.in/blog-detail/${params.slug}?id=${searchParams.id}`,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.meta || blog.name,
        description: blog.metaDescription,
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

export default async function Page({ params, searchParams }: PageProps) {
  const res: ApiResponse = await getRequest(`/v1/blogs/${searchParams.id}`);
  const blog = res?.data?.blog;

  const schemaData = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.challanpay.in/blog-detail/${params.slug}?id=${searchParams.id}`,
        },
        headline: blog.meta || blog.name,
        description: blog.metaDescription,
        image: blog.cover,
        author: {
          "@type": "Organization",
          name: "ChallanPay",
        },
        publisher: {
          "@type": "Organization",
          name: "ChallanPay",
          logo: {
            "@type": "ImageObject",
            url: "https://www.challanpay.in/_next/image?url=%2Flogo%2Ftext-logo-png.png&w=640&q=75",
          },
        },
        datePublished: blog.createdAt,
      }
    : null;

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <BlogDetailClient slug={searchParams.id} />
      <Footer />
    </>
  );
}
