import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/admin/",
          "/login/",
          "/register/",
          "/user/",
          "/dashboard/",
          "/api/",
          "/checkout/",
          "/cart/",
          "/payment/",
          "/thank-you/",
          "/privacy/",
          "/terms/",
        ],
        allow: [
          "/*.css$",
          "/*.js$",
          "/images/",
          "/assets/",
        ],
        crawlDelay: 5,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Slurp",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
    ],

    sitemap: "https://www.challanpay.in/sitemap.xml",
  };
}
