import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download } from "lucide-react";

export function RaiseDispute({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!open) setStep(1); // Reset step only when modal closes
  }, [open]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Current step:", step);
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {/* Close button outside the form */}
        <DialogClose asChild>
          <button className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold py-1 shadow hover:bg-black">
            <XIcon size={16} />
          </button>
        </DialogClose>

        <form onSubmit={handleNext}>
          <DialogHeader>
            <DialogTitle className="flex justify-start font-bold text-md mb-4">
              {step === 1 ? "Raise a Dispute" : ""}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mb-4">
            {step === 1 && (
              <>
                <div className="flex flex-col gap-2">
                  <Label>Share your concern Briefly</Label>
                  <Textarea placeholder="Enter here..." className="h-30" />
                  <Label htmlFor="picture">Supporting Document</Label>
                  <Input id="picture" type="file" />
                </div>
              </>
            )}

            {step === 2 && (
              <div>
                {" "}
                <div className="font-bold text-center">
                  You have raised a dispute on <br /> IRN-121112
                </div>
                <div className="text-gray-500 my-2">Supported Documents</div>
                <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg mt-2 px-3 py-2">
                  {/* Left Side: File Icon + Details */}
                  <div className="flex items-center space-x-3">
                    {/* PDF Icon */}
                    <div className="flex items-center justify-center bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                      PDF
                    </div>

                    {/* File Info */}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800">
                        File Title.pdf
                      </span>
                      <span className="text-xs text-gray-500">
                        313 KB · 31 Aug, 2022
                      </span>
                    </div>
                  </div>

                  {/* Download Icon */}
                  <button className="text-gray-500 hover:text-gray-700">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <Separator />
          <DialogFooter className="mt-4">
            {step < 2 && (
              <Button type="submit" className="bg-cyan-600">
                {step === 1 ? "Submit Dispute" : ""}
              </Button>
            )}
            {step === 2 && (
              <Button
                type="button"
                className="bg-cyan-600"
                onClick={() => onOpenChange(false)}
              >
                Okay
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
