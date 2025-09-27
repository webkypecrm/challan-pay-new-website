"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CommonSheetProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  title: string;
  content: React.ReactNode; // description/content
  buttonText?: string;
  onButtonClick?: () => void;
}

export function CommonSheet({
  open,
  setOpen,
  title,
  content,
  buttonText,
  onButtonClick,
}: CommonSheetProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="rounded-t-2xl bg-slate-50">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            <div className="mb-4">{content}</div>
            {buttonText && (
              <Button className="bg-cyan-600 w-full" onClick={onButtonClick}>
                {buttonText} {<ChevronRight size={16} />}
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
