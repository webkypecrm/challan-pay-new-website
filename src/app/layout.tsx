import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import ConditionalHeader from "./components/common/ConditionalHeader";
import { ChallanProvider } from "@/context/ChallanContext";
import { TrackStatusAuthProvider } from "@/context/TrackStatusAuthContext";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:bg-slate-100`}
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
              <ConditionalHeader />
              {children}
            </ChallanProvider>
          </TrackStatusAuthProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
