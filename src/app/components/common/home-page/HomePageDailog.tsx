// DialogDemo.tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectDemo } from "../Select";
import { FaWhatsapp } from "react-icons/fa";
import { XIcon } from "lucide-react";

export function DialogDemo({
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
          <DialogClose asChild>
            <button className="absolute -top-8  left-1/2 -translate-x-1/2 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center   text-white font-bold py-1  shadow hover:bg-black">
              <XIcon size={16} />
            </button>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="px-5 font-bold">
              Share Your Company Details
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Company Name</Label>
              <Input id="name-1" name="name" defaultValue="Aman Mishra" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Number of Vehicals</Label>
              <SelectDemo />
            </div>
          </div>
          <DialogFooter>
            {/* <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose> */}
            <Button type="submit" className="bg-green-500">
              <FaWhatsapp size={32} color="white" />
              Send WhatsApp Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
