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

export function ReadMoreSlider({
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

  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="rounded-t-2xl  max-h-[85vh]">
        <SheetHeader className="pb-0">
          <SheetTitle className="mb-2">Why Your Pledge Matters</SheetTitle>
          <Separator />
        </SheetHeader>
        <SheetDescription className="bg-white rounded-lg p-4 text-black overflow-y-auto flex-1 ">
          <div className="space-y-6 text-sm leading-relaxed text-gray-800">
            {/* 1️⃣ Safety Section */}
            <div className="space-y-2">
              <div className="font-bold text-sm">
                You Care About Safety, Yours and Everyone Elses
              </div>
              <p className="text-xs">
                Driving responsibly helps prevent accidents, protects loved
                ones, and ensures you return home safely every day. Your
                conscious choices on the road can be the reason someone else
                lives to see another day.
              </p>
            </div>

            {/* 2️⃣ Influence Section */}
            <div className="space-y-2">
              <div className="font-bold text-sm">
                You Influence the People Around You
              </div>
              <p className="text-xs">
                Whether youre a parent, friend, colleague, or stranger on the
                road—your behaviour sets a powerful example. When you drive with
                discipline and respect, you silently inspire others to do the
                same.
              </p>
            </div>

            {/* 3️⃣ Safer India Section */}
            <div className="space-y-2">
              <div className="font-bold text-sm">
                🇮🇳 Youre Part of a Safer India
              </div>
              <p className="text-xs">
                One persons responsible actions may seem small. But when
                thousands act together, it shifts the culture. Your pledge adds
                momentum to a collective force making Indias roads safer and
                saner.
              </p>
            </div>

            {/* 4️⃣ Commitment Intro */}
            <div className="space-y-2">
              <div className="font-bold text-sm">
                What Youre Choosing to Commit To
              </div>
              <p className="text-xs">
                Choosing responsible driving means standing for values that
                protect, respect, and inspire. Heres what it reflects:
              </p>
            </div>

            {/* Commitments List */}
            <div className="space-y-3 pl-3 border-l-2 border-yellow-400">
              <div>
                <p className="font-semibold text-xs">
                  Never drink and drive, or drive under the influence of any
                  substance.
                </p>
                <p className="text-xs">
                  I value life—mine and others. I will always choose safety and
                  responsibility over risk and regret.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Avoid honking unnecessarily and show patience on the road.
                </p>
                <p className="text-xs">
                  I understand that aggressive behaviour, including honking,
                  contributes to road rage and stress. I choose calm over chaos.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Stop completely at pedestrian crossings and give right of way
                  when required.
                </p>
                <p className="text-xs">
                  I believe that roads are shared spaces, and I will always
                  respect the most vulnerable road users.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Avoid overtaking from the wrong side or in blind spots.
                </p>
                <p className="text-xs">
                  I will drive predictably and avoid shortcuts that compromise
                  safety for a few seconds saved.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Regularly maintain my vehicle to ensure safety standards are
                  met.
                </p>
                <p className="text-xs">
                  I recognize that safe driving starts with a safe vehicle. I
                  will keep mine roadworthy at all times.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Stay within designated speed limits—not just to avoid fines,
                  but to protect lives.
                </p>
                <p className="text-xs">
                  I understand that speed thrills but often kills. I will choose
                  control over recklessness.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Use indicators and signals to communicate clearly with other
                  drivers.
                </p>
                <p className="text-xs">
                  I will not assume others can read my mind. Clear communication
                  on the road saves lives.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Avoid using high beams inappropriately, especially in city
                  areas or when approaching oncoming traffic.
                </p>
                <p className="text-xs">
                  I care about the comfort and safety of others and will drive
                  with consideration.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Pull over safely if I feel drowsy, distracted, or unfit to
                  drive.
                </p>
                <p className="text-xs">
                  I will never compromise alertness for urgency. Driving tired
                  is as dangerous as driving drunk.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Treat all traffic enforcement officers with respect.
                </p>
                <p className="text-xs">
                  I will engage with them respectfully, even if I disagree.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Keep my vehicle documents updated and readily accessible.
                </p>
                <p className="text-xs">
                  I will ensure I am legally compliant and prepared to cooperate
                  during checks.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Act responsibly in the event of an accident.
                </p>
                <p className="text-xs">
                  I will help where possible, not flee or escalate the
                  situation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Never use my phone while driving, even at red lights.
                </p>
                <p className="text-xs">
                  No call or message is more important than a life. I will stay
                  focused and attentive.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Educate at least one person a month on the importance of road
                  safety.
                </p>
                <p className="text-xs">
                  I believe change spreads through action and conversation. I
                  will use my voice to create safer roads.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">
                  Embrace humility and empathy every time I drive.
                </p>
                <p className="text-xs">
                  I will remember that each vehicle has a person with a story,
                  and I will treat every journey with humanity.
                </p>
              </div>
            </div>

            {/* 5️⃣ Conscious Driving Message */}
            <div className="space-y-2">
              <p className="text-xs italic">
                You are not pledging to be perfect. You are pledging to be
                conscious, considerate, and committed.
              </p>
            </div>

            {/* 6️⃣ What You Can Expect */}
            <div className="space-y-2">
              <div className="font-bold text-sm">
                What You Can Expect from Us
              </div>
              <p className="text-xs">
                Were not just here to support your legal needs. Were here to
                back your values. When you take this pledge, we commit to:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li>
                  Providing fast, transparent, and accessible solutions for your
                  legal challenges.
                </li>
                <li>
                  Sharing tools, insights, and information to help you stay
                  informed and aware.
                </li>
                <li>
                  Advocating road safety in partnership with authorities,
                  communities, and citizens.
                </li>
                <li>
                  Elevating the voices of those who drive responsibly and lead
                  by example.
                </li>
              </ul>
            </div>

            {/* 7️⃣ Who This Is For */}
            <div className="space-y-2">
              <div className="font-bold text-sm">Who This Is For</div>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li>
                  People who want to be better drivers and more mindful
                  citizens.
                </li>
                <li>
                  Those who believe in personal responsibility as a path to
                  societal change.
                </li>
                <li>
                  Anyone who understands that how we drive reflects who we are.
                </li>
              </ul>
            </div>

            {/* 8️⃣ Final Message */}
            <div className="space-y-2">
              <div className="font-bold text-sm">
                {`You're Not Just Clearing a Challan. You are Leading by Example`}
              </div>
              <p className="text-xs">
                When you take this pledge, you are stepping up—not because
                someone asked you to, but because it aligns with who you are.
                Responsible. Aware. Committed. And now, recognized.
              </p>
              <p className="text-xs font-semibold">
                Thank you for driving change that India needs.
              </p>
            </div>
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
