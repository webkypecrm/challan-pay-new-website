"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ConditionalHeader from "./components/common/ConditionalHeader";
import { AuthProvider } from "@/context/AuthContext";
import { ChallanProvider } from "@/context/ChallanContext";
import { TrackStatusAuthProvider } from "@/context/TrackStatusAuthContext";
import { initMoengage } from "@/lib/moengage";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initMoengage();
    console.log("MoEngage Initialized");
  }, []);

  return (
    <AuthProvider>
      <TrackStatusAuthProvider>
        <ChallanProvider>
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
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5HQP9D3"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <ConditionalHeader />
          {children}
        </ChallanProvider>
      </TrackStatusAuthProvider>
    </AuthProvider>
  );
}
