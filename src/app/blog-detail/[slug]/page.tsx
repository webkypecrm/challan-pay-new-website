// import CheckChallanWithChallanPay from "@/app/components/blogs/CheckChallanWithChallanPay";
// import HowtoTrafficChallanPay from "@/app/components/blogs/HowtoTrafficChallan";
// import ParivahanEchallan from "@/app/components/blogs/ParivahanEchallan";
// import PayVirtualCourt from "@/app/components/blogs/PayVirtualCourt";
// import SettleCourtChallan from "@/app/components/blogs/SettleCourtChallan";
// import StreamLinePayment from "@/app/components/blogs/StreamLinePayment";
// import TrafficChallanPayOnline from "@/app/components/blogs/TrafficChallanPayOnline";
// import UpAndGurugramWithChallanPay from "@/app/components/blogs/UpAndGurugramWithChallanPay";
// import Footer from "@/app/components/common/Footer";

// export default async function BlogDetail({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   let BlogContent;

//   switch (`${params.slug}`) {
//     case "challanpay-indias-trusted-platform-for-fast-and-easy-challan-resolution":
//       BlogContent = <CheckChallanWithChallanPay />;
//       break;
//     case "legal-support-for-challans-a-complete-guide-by-challanpay":
//       BlogContent = <HowtoTrafficChallanPay />;
//       break;
//     case "transforming-legal-risk-management-with-challanpay":
//       BlogContent = <ParivahanEchallan />;
//       break;
//     case "fast-simple-your-complete-step-by-step-guide-to-paying-e-challans-online-in-india":
//       BlogContent = <PayVirtualCourt />;
//       break;
//     case "charting-tomorrow---how-ai-is-redefining-the-landscape-of-legal-technology-in-india":
//       BlogContent = <SettleCourtChallan />;
//       break;
//     case "swiftpay-routes-the-fastest-ways-to-clear-traffic-challans-online-in-delhi-gurugram":
//       BlogContent = <StreamLinePayment />;
//       break;
//     case "metrochallan-guide-quick-digital-methods-for-clearing-fines-across-ncr":
//       BlogContent = <TrafficChallanPayOnline />;
//       break;
//     case "urbanchallan-navigator-the-most-efficient-ways-to-settle-fines-online-today":
//       BlogContent = <UpAndGurugramWithChallanPay />;
//       break;
//     default:
//       BlogContent = (
//         <div className="flex flex-col items-center justify-center text-3xl font-bold pt-20">
//           Blog not found
//         </div>
//       );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">{BlogContent}</main>
//       <Footer />
//     </div>
//   );
// }

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
      description: blog.shortDescription || "",
      openGraph: {
        title: blog.meta || blog.name,
        description: blog.shortDescription || "",
        images: [{ url: blog.cover }],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.meta || blog.name,
        description: blog.shortDescription,
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
