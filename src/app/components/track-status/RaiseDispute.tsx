"use client";
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
import { XIcon, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postRequestWithoutToken } from "@/lib/api"; // adjust the path

interface PageProps {
  params: {
    id: string;
  };
}
export function RaiseDispute({
  open,
  onOpenChange,
  id,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
}) {
  const [step, setStep] = useState(1);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setStep(1);
      setComment("");
      setFile(null);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("id", id); // You can replace this with dynamic ID
        formData.append("type", "Update");
        formData.append("comment", comment);
        if (file) formData.append("attachment", file);

        // API call using your utility function
        await postRequestWithoutToken(
          "/v1/customer/incidents/store-comment",
          formData,
          true
        );

        // Proceed to next step after success
        setStep(2);
      } catch (err) {
        console.error("Error submitting dispute:", err);
        alert("Failed to raise dispute. Please try again.");
      } finally {
        setLoading(false);
      }
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogClose asChild>
          <button className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold py-1 shadow hover:bg-black">
            <XIcon size={16} />
          </button>
        </DialogClose>

        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="flex justify-start font-bold text-md mb-4">
              {step === 1 ? "Raise a Dispute" : ""}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mb-4">
            {step === 1 && (
              <>
                <div className="flex flex-col gap-2">
                  <Label>Share your concern briefly</Label>
                  <Textarea
                    placeholder="Enter here..."
                    className="h-30"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  <Label htmlFor="file">Supporting Document</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div>
                <div className="font-bold text-center">
                  You have raised a dispute on <br /> IRN-{id}
                </div>
                {file && (
                  <div className="text-gray-500 my-2">Supported Documents</div>
                )}
                {file && (
                  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg mt-2 px-3 py-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        {file.name.split(".").pop()?.toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-800">
                          {file.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => {
                        const url = URL.createObjectURL(file);
                        const link = document.createElement("a");
                        link.href = url;
                        link.download = file.name;
                        link.click();
                      }}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <Separator />
          <DialogFooter className="mt-4">
            {step === 1 && (
              <Button type="submit" className="bg-cyan-600" disabled={loading}>
                {loading ? "Submitting..." : "Submit Dispute"}
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
