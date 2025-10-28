// "use client";

// import React from "react";
// import Header from "../components/common/Header";
// import CommonHeader from "../components/common/CommonHeader";
// import { useRouter } from "next/navigation";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import WebVersionCommonComponent from "../components/track-status/WebVersionCommonComponent";

// function FrequentlyAsked() {
//   const router = useRouter();
//   const handleBack = () => {
//     router.push("/track-status-dashboard");
//   };
//   return (
//     <>
//       <div className="bg-slate-100 min-h-screen lg:hidden">
//         <Header />
//         <div className="bg-white rounded-lg">
//           <CommonHeader
//             title="Frequently Asked Questions"
//             onBack={handleBack}
//           />
//         </div>
//         <div className="px-4 mt-4">
//           <Accordion
//             type="single"
//             collapsible
//             className="w-full"
//             defaultValue="item-1"
//           >
//             <AccordionItem
//               value="item-1"
//               className="bg-white rounded-md mb-[10px] px-2 border border-gray-200"
//             >
//               <AccordionTrigger className="text-sm font-semibold">
//                 How do I track my challan status?
//               </AccordionTrigger>
//               <AccordionContent className="flex flex-col gap-4 text-balance px-1">
//                 <p>
//                   Our flagship product combines cutting-edge technology with
//                   sleek design. Built with premium materials, it offers
//                   unparalleled performance and reliability.
//                 </p>
//                 <p>
//                   Key features include advanced processing capabilities, and an
//                   intuitive user interface designed for both beginners and
//                   experts.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem
//               value="item-2"
//               className="bg-white rounded-md mb-[10px] px-2 border  border-gray-200"
//             >
//               <AccordionTrigger className="text-sm  font-semibold">
//                 Will I be notified when my challan gets cleared? If yes, how?
//               </AccordionTrigger>
//               <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                 <p>
//                   We offer worldwide shipping through trusted courier partners.
//                   Standard delivery takes 3-5 business days, while express
//                   shipping ensures delivery within 1-2 business days.
//                 </p>
//                 <p>
//                   All orders are carefully packaged and fully insured. Track
//                   your shipment in real-time through our dedicated tracking
//                   portal.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem
//               value="item-3"
//               className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
//             >
//               <AccordionTrigger className="text-sm  font-semibold">
//                 Can I resolve both online and court challans through the landing
//                 page?
//               </AccordionTrigger>
//               <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                 <p>
//                   We stand behind our products with a comprehensive 30-day
//                   return policy. If you&apos;re not completely satisfied, simply
//                   return the item in its original condition.
//                 </p>
//                 <p>
//                   Our hassle-free return process includes free return shipping
//                   and full refunds processed within 48 hours of receiving the
//                   returned item.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem
//               value="item-4"
//               className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
//             >
//               <AccordionTrigger className="text-sm  font-semibold">
//                 If my vehicle has both court and online challans pending, can I
//                 clear both through LOTS?
//               </AccordionTrigger>
//               <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                 <p>
//                   We stand behind our products with a comprehensive 30-day
//                   return policy. If you&apos;re not completely satisfied, simply
//                   return the item in its original condition.
//                 </p>
//                 <p>
//                   Our hassle-free return process includes free return shipping
//                   and full refunds processed within 48 hours of receiving the
//                   returned item.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem
//               value="item-5"
//               className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
//             >
//               <AccordionTrigger className="text-sm  font-semibold">
//                 Once the challan is cleared, how will I be informed?
//               </AccordionTrigger>
//               <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                 <p>
//                   Our flagship product combines cutting-edge technology with
//                   sleek design. Built with premium materials, it offers
//                   unparalleled performance and reliability.
//                 </p>
//                 <p>
//                   Key features include advanced processing capabilities, and an
//                   intuitive user interface designed for both beginners and
//                   experts.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </div>
//       <WebVersionCommonComponent
//         LeftTabComponent={
//           <div className="bg-white min-h-screen rounded-lg">
//             <Header />
//             <div className="bg-white rounded-lg">
//               <CommonHeader
//                 title="Frequently Asked Questions"
//                 onBack={handleBack}
//               />
//             </div>
//             <div className="px-4 mt-4">
//               <Accordion
//                 type="single"
//                 collapsible
//                 className="w-full"
//                 defaultValue="item-1"
//               >
//                 <AccordionItem
//                   value="item-1"
//                   className="bg-white rounded-md mb-[10px] px-2 border border-gray-200"
//                 >
//                   <AccordionTrigger className="text-sm font-semibold">
//                     How do I track my challan status?
//                   </AccordionTrigger>
//                   <AccordionContent className="flex flex-col gap-4 text-balance px-1">
//                     <p>
//                       Our flagship product combines cutting-edge technology with
//                       sleek design. Built with premium materials, it offers
//                       unparalleled performance and reliability.
//                     </p>
//                     <p>
//                       Key features include advanced processing capabilities, and
//                       an intuitive user interface designed for both beginners
//                       and experts.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="item-2"
//                   className="bg-white rounded-md mb-[10px] px-2 border  border-gray-200"
//                 >
//                   <AccordionTrigger className="text-sm  font-semibold">
//                     Will I be notified when my challan gets cleared? If yes,
//                     how?
//                   </AccordionTrigger>
//                   <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                     <p>
//                       We offer worldwide shipping through trusted courier
//                       partners. Standard delivery takes 3-5 business days, while
//                       express shipping ensures delivery within 1-2 business
//                       days.
//                     </p>
//                     <p>
//                       All orders are carefully packaged and fully insured. Track
//                       your shipment in real-time through our dedicated tracking
//                       portal.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem
//                   value="item-3"
//                   className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
//                 >
//                   <AccordionTrigger className="text-sm  font-semibold">
//                     Can I resolve both online and court challans through the
//                     landing page?
//                   </AccordionTrigger>
//                   <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                     <p>
//                       We stand behind our products with a comprehensive 30-day
//                       return policy. If you&apos;re not completely satisfied,
//                       simply return the item in its original condition.
//                     </p>
//                     <p>
//                       Our hassle-free return process includes free return
//                       shipping and full refunds processed within 48 hours of
//                       receiving the returned item.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem
//                   value="item-4"
//                   className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
//                 >
//                   <AccordionTrigger className="text-sm  font-semibold">
//                     If my vehicle has both court and online challans pending,
//                     can I clear both through LOTS?
//                   </AccordionTrigger>
//                   <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                     <p>
//                       We stand behind our products with a comprehensive 30-day
//                       return policy. If you&apos;re not completely satisfied,
//                       simply return the item in its original condition.
//                     </p>
//                     <p>
//                       Our hassle-free return process includes free return
//                       shipping and full refunds processed within 48 hours of
//                       receiving the returned item.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem
//                   value="item-5"
//                   className="bg-white rounded-md mb-[10px] px-2  border    border-gray-200"
//                 >
//                   <AccordionTrigger className="text-sm  font-semibold">
//                     Once the challan is cleared, how will I be informed?
//                   </AccordionTrigger>
//                   <AccordionContent className="flex flex-col gap-4 text-balance  px-1">
//                     <p>
//                       Our flagship product combines cutting-edge technology with
//                       sleek design. Built with premium materials, it offers
//                       unparalleled performance and reliability.
//                     </p>
//                     <p>
//                       Key features include advanced processing capabilities, and
//                       an intuitive user interface designed for both beginners
//                       and experts.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           </div>
//         }
//       />
//     </>
//   );
// }

// export default FrequentlyAsked;

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
import WebVersionCommonComponent from "../components/track-status/WebVersionCommonComponent";

function FrequentlyAsked() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/track-status-dashboard");
  };

  const faqData = [
    {
      id: "item-1",
      question: "How can I track my challan status?",
      answer: (
        <>
          <p>
            You can easily track your challan status by logging into your
            ChallanPay Website Track Status. All updates and progress details
            will be available in real time there.
          </p>
        </>
      ),
    },
    {
      id: "item-2",
      question: "Will I be notified when my challan gets cleared? If yes, how?",
      answer: (
        <>
          <p>
            Yes. You will automatically receive a WhatsApp update once your
            challan is officially cleared.
          </p>
        </>
      ),
    },
    {
      id: "item-3",
      question:
        "Can I resolve both online and court challans through ChallanPay website?",
      answer: (
        <>
          <p>
            Yes, ChallanPay allows you to resolve both online and court challans
            directly through ChallanPay website in a few simple steps.
          </p>
        </>
      ),
    },
    {
      id: "item-4",
      question:
        "If my vehicle has both court and online challans pending, can I clear both through ChallanPay?",
      answer: (
        <>
          <p>
            Yes, ChallanPay team will process and manage both types of challans
            — court as well as online — under a single journey.
          </p>
        </>
      ),
    },
    {
      id: "item-5",
      question: "Once the challan is cleared, how will I be informed?",
      answer: (
        <>
          <p>
            You will receive an official confirmation via WhatsApp and your
            dashboard once the challan is successfully cleared.
          </p>
        </>
      ),
    },
    {
      id: "item-6",
      question: "What if I accidentally pay for the same challan twice?",
      answer: (
        <>
          <p>
            If you believe a duplicate payment has been made, you can raise a
            request through the Help & Support section on your dashboard. Your
            case will be reviewed, and if applicable, a refund will be
            processed.
          </p>
        </>
      ),
    },
    {
      id: "item-7",
      question: "What types of challans can I resolve using ChallanPay?",
      answer: (
        <>
          <p>
            You can resolve traffic challans issued by various authorities,
            including online challans, court challans, and virtual challans
            (where applicable in your city/state).
          </p>
        </>
      ),
    },
  ];

  const AccordionList = () => (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {faqData.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="bg-white rounded-md mb-[10px] px-2 border border-gray-200"
        >
          <AccordionTrigger className="text-sm font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance px-1 text-sm">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <>
      {/* Mobile Version */}
      <div className="bg-slate-100 min-h-screen lg:hidden">
        <Header />
        <div className="bg-white rounded-lg">
          <CommonHeader
            title="Frequently Asked Questions"
            onBack={handleBack}
          />
        </div>
        <div className="px-4 mt-4">
          <AccordionList />
        </div>
      </div>

      {/* Web Version */}
      <WebVersionCommonComponent
        LeftTabComponent={
          <div className="bg-white min-h-screen rounded-lg">
            <Header />
            <div className="bg-white rounded-lg">
              <CommonHeader
                title="Frequently Asked Questions"
                onBack={handleBack}
              />
            </div>
            <div className="px-4 mt-4">
              <AccordionList />
            </div>
          </div>
        }
      />
    </>
  );
}

export default FrequentlyAsked;
