import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useChallanContext } from "@/context/ChallanContext";

import { Gift } from "lucide-react";

export function PledgeModal({
  open,
  onOpenChange,
  isPledge,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isPledge: boolean;
}) {
  const { data } = useChallanContext();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px] ">
          {isPledge ? (
            <div className="flex flex-col justify-center items-center">
              <Gift className="text-yellow-700" size={50} />
              <div className="text-base font-bold mt-4">
                ₹{data?.potentialDiscount} Reward For You!
              </div>
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
          ) : (
            <div className="flex flex-col justify-center items-center">
              <Gift className="text-yellow-700" size={50} />
              <div className="text-base font-bold mt-4">
                ₹{data?.potentialDiscount} Reward For You!
              </div>
              <div className="text-sm text-center font-medium text-[#737373]">
                You removed the pledge, no reward this time.
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
          )}
        </DialogContent>
      </form>
    </Dialog>
  );
}
