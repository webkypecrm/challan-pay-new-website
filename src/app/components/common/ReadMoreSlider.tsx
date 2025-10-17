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

export function ReadMoreSlider({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="rounded-t-2xl bg-slate-50">
        <SheetHeader>
          <SheetTitle className="mb-2">Why Your Pledge Matters</SheetTitle>
          <Separator />
          <SheetDescription className="bg-white rounded-lg p-3 text-black">
            <div className="space-y-2 text-sm leading-relaxed">
              {/* Bold highlighted line */}
              <div className="font-bold text-sm">
                💛 You Care About Safety, Yours and Everyone Else
              </div>
              <p className="text-xs">
                Driving responsibly helps prevent accidents, protects loved
                ones, and ensures you return home safely every day. Your
                conscious choices on the road can be the reason someone else
                lives to see another day.
              </p>
            </div>
            <div className="space-y-2 text-sm leading-relaxed">
              {/* Bold highlighted line */}
              <div className="font-bold text-sm">
                👨‍👩‍👧 You Influence the People Around You
              </div>
              <p className="text-xs">
                Whether you are a parent, friend, colleague, or stranger on the
                road—your behaviour sets a powerful example. When you drive with
                discipline and respect, you silently inspire others to do the
                same.
              </p>
            </div>
            <div className="space-y-2 text-sm leading-relaxed">
              {/* Bold highlighted line */}
              <div className="font-bold text-sm">
                🇮🇳 You are Part of a Safer India
              </div>
              <p className="text-xs">
                One persons responsible actions may seem small. But when
                thousands act together, it shifts the culture. Your pledge adds
                momentum to a collective force making India roads safer and
                saner.
              </p>
            </div>
            <Button className="bg-cyan-600 text-sm font-medium mt-4 w-full">
              Proceed To Pay
              <ChevronRight size={16} />
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
