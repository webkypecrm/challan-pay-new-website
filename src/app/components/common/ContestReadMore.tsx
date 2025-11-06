"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useChallanContext } from "@/context/ChallanContext";
import { handleRazorpayPayment } from "../PayWithRozorpay";

export function ContestReadMore({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { data, selectedChallans, isContestSelected } = useChallanContext();

  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [], // array of numbers
        potentialDiscount: data?.potentialDiscount ?? 0, // fallback if undefined
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
        isContest: isContestSelected,
      },
      router,
      setLoader
    );
  };

  // if (loader) {
  //   return (
  //     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-50">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  //     </div>
  //   );
  // }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="rounded-t-2xl max-h-[85vh]">
        <SheetHeader className="pb-0">
          <SheetTitle className="mb-2">
            Contest & Pay Acknowledgement
          </SheetTitle>
          <Separator />
        </SheetHeader>
        <SheetDescription className="bg-white rounded-lg p-4 text-black overflow-y-auto flex-1">
          <div className="space-y-4 text-sm leading-relaxed text-gray-800">
            <p className="text-xs">
              I, the undersigned, hereby grant{" "}
              <span className="font-semibold">Lawyered</span> full authorization
              to contest all traffic challans issued against me across any and
              all geographical locations in India. This authorization includes
              the power to represent me before traffic authorities, courts,
              tribunals, and other relevant judicial or quasi-judicial bodies.
            </p>

            <p className="text-xs">
              I acknowledge and agree to abide by all applicable laws,
              regulations, rules, and orders of Indian authorities governing
              traffic violations and challan contestations. I understand that
              these include, but are not limited to, provisions under the
              <span className="italic">Motor Vehicles Act</span> and other
              relevant legislations.
            </p>

            <p className="text-xs">
              I empower <span className="font-semibold">Lawyered</span> to
              undertake all necessary legal and procedural actions on my behalf,
              including the preparation and submission of documents, filing
              applications, attending hearings, making oral and written
              representations, and responding to any queries or notices issued
              by authorities.
            </p>

            <p className="text-xs">
              I commit to providing
              <span className="font-semibold">Lawyered</span> with accurate,
              complete, and truthful information and documents necessary for the
              effective contesting of my challans. I understand that the outcome
              of the contestation is subject to the discretion of the
              authorities and courts, and that no guarantee or assurance can be
              provided regarding the dismissal, reduction, or waiver of any
              fines or penalties.
            </p>

            <p className="text-xs">
              I authorize <span className="font-semibold">Lawyered</span> to
              make payments of court fees, fines, or other charges related to
              the contesting process on my behalf, with my prior consent. I
              agree to reimburse any such amounts promptly as requested by
              <span className="font-semibold">Lawyered</span>.
            </p>

            <p className="text-xs">
              I affirm that this authorization may be revoked by me at any time,
              provided such revocation is communicated to
              <span className="font-semibold">Lawyered</span> in writing. Until
              such revocation,
              <span className="font-semibold">Lawyered</span> shall continue to
              act with full authority granted herein.
            </p>

            <p className="text-xs">
              I trust that <span className="font-semibold">Lawyered</span>
              will maintain strict confidentiality and security of all personal,
              sensitive, and case-related information entrusted to them, using
              it solely for the purpose of contesting my challans.
            </p>

            <p className="text-xs font-medium">
              I declare that I have read, understood, and voluntarily accept all
              terms and conditions of this authorization.
            </p>
          </div>
          <Button
            className="bg-cyan-600 text-sm font-medium mt-4 w-full"
            onClick={handleProccedNext}
          >
            Proceed To Pay
            <ChevronRight size={16} />
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
