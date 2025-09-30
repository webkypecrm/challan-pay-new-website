"use client";

import React from "react";
import Header from "../components/common/Header";
import CommonHeader from "../components/common/CommonHeader";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FrequentlyAsked() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="bg-white rounded-lg">
        <CommonHeader title="Frequently Asked Questions" onBack={handleBack} />
      </div>
      <div className="px-4 mt-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem
            value="item-1"
            className="bg-white rounded-md mb-[10px] px-2 border border-gray-200"
          >
            <AccordionTrigger className="text-sm font-semibold">
              How do I track my challan status?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance px-1">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-white rounded-md mb-[10px] px-2 border  border-gray-200"
          >
            <AccordionTrigger className="text-sm  font-semibold">
              Will I be notified when my challan gets cleared? If yes, how?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
          >
            <AccordionTrigger className="text-sm  font-semibold">
              Can I resolve both online and court challans through the landing
              page?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
          >
            <AccordionTrigger className="text-sm  font-semibold">
              If my vehicle has both court and online challans pending, can I
              clear both through LOTS?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
          >
            <AccordionTrigger className="text-sm  font-semibold">
              Once the challan is cleared, how will I be informed?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FrequentlyAsked;
