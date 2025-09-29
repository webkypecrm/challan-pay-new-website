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
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CommonSelect } from "../common/Select";
import { FaWhatsapp } from "react-icons/fa";
import { XIcon } from "lucide-react";

export function DialogDemo({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [selected, setSelected] = useState("");

  const vehicleOptions = [
    { label: "0-10", value: "0-10" },
    { label: "10-20", value: "10-20" },
    { label: "20-30", value: "20-30" },
    { label: "30+", value: "30+" },
  ];
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
              <Input id="name-1" name="name" placeholder="Aman" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Number of Vehicals</Label>
              <CommonSelect
                placeholder="Select Vehicles"
                options={vehicleOptions}
                value={selected}
                onChange={setSelected}
              />
            </div>
          </div>
          <DialogFooter>
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
