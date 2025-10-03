import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";

function WhatNext() {
  return (
    <Card className="w-full  px-4 lg:hidden block">
      <CardTitle className="my-4 text-xl font-bold">Whats Next</CardTitle>
      <CardContent className="grid gap-6  !bg-[#FAF8F7] rounded-lg">
        <ul>
          <li className="py-3 my-2">
            <div className="flex items-start gap-3">
              {/* Left side (Number) */}
              <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                1
              </span>

              {/* Right side (Content) */}
              <div>
                <span className="font-bold text-md">
                  Verification in progress
                </span>
                <p className="text-gray-600 text-sm">
                  Our team will review and validate your submitted challan
                </p>
              </div>
            </div>
          </li>
          <li className="py-3 my-2">
            <div className="flex items-start gap-3">
              {/* Left side (Number) */}
              <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                2
              </span>

              {/* Right side (Content) */}
              <div>
                <span className="font-bold text-md block">
                  Update & Resolution
                </span>
                <p className="text-gray-600 text-sm ">{`You will receive timely updates on the status and resolution process via WhatsApp/SMS`}</p>
              </div>
            </div>
          </li>
          <li className="py-3 my-2">
            <div className="flex items-start gap-3">
              {/* Left side (Step number) */}
              <span className="px-3 py-1 bg-cyan-600 text-white rounded-sm font-bold">
                3
              </span>

              {/* Right side (Content) */}
              <div>
                <span className="font-bold text-md block">Track Anytime</span>
                <p className="text-gray-600 text-sm">
                  Use your register mobile number to check live status on our
                  portal
                </p>
              </div>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default WhatNext;
