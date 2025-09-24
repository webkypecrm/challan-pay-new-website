import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { Gift } from "lucide-react";

export function PledgeModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px] ">
          <div className="flex flex-col justify-center items-center">
            <Gift className="text-yellow-700" size={50} />
            <div className="text-base font-bold mt-4">₹500 Reward For You!</div>
            <div className="text-sm text-center font-medium text-[#737373]">
              Congratulation on taking the pledge to drive safely!
            </div>
            <Separator className="my-2" />
            <button
              type="button"
              className="text-sm text-[#0891B2] font-medium"
              onClick={() => onOpenChange(false)}
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
