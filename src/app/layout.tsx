import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import ConditionalHeader from "./components/common/ConditionalHeader";
import { ChallanProvider } from "@/context/ChallanContext";
import { TrackStatusAuthProvider } from "@/context/TrackStatusAuthContext";
import { Suspense } from "react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Challan Pay",
  description: "Power By Lawyered",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Base Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1131279109198514');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1131279109198514&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
        {/*  Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5HQP9D3');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:bg-white`}
      >
        {" "}
        <AuthProvider>
          <TrackStatusAuthProvider>
            <ChallanProvider>
              {" "}
              <Toaster
                position="top-center"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                }}
              />
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                  </div>
                }
              >
                <ConditionalHeader />
                {/* ✅ Google Tag Manager (noscript) — goes immediately after <body> */}
                <noscript>
                  <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-5HQP9D3"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                  ></iframe>
                </noscript>
                <div className="mt-20 lg:mt-35">{children}</div>
              </Suspense>
            </ChallanProvider>
          </TrackStatusAuthProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
