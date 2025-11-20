"use client";

import { useState } from "react";
import axios from "axios";
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
import { CommonSelect } from "../common/Select";
import { XIcon } from "lucide-react";
import { postRequestWithoutToken } from "@/lib/api"; // adjust path as needed
import toast from "react-hot-toast";

interface AddVehicleFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface VehicleApiResponse {
  status: "success" | "error";
  message: string;
  data: Record<string, unknown>;
}
const vehicleOptions = [
  { label: "Two-wheeler", value: "Two-wheeler" },
  { label: "Commercial", value: "Commercial" },
  { label: "Private", value: "Private" },
  { label: "Electric", value: "Electric" },
];

export function AddVehicleModal({ open, onOpenChange }: AddVehicleFormProps) {
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleNo) {
      toast.error("Please enter vehicle number");
      return;
    }

    setLoading(true);

    try {
      const payload = { vehicleNo, vehicleType };
      const response: VehicleApiResponse = await postRequestWithoutToken(
        "/v1/customer/vehicles",
        payload,
        true
      );

      if (response.status === "success") {
        toast.success("Vehicle added successfully!");
        setVehicleNo("");
        setVehicleType("");
        onOpenChange(false);
      } else {
        toast.error(response.message); // handles "Vehicle already exists"
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const apiError = error.response.data as VehicleApiResponse;
        toast.error(apiError.message || "Failed to add vehicle");
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to add vehicle. Unknown error.");
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogClose asChild>
          <button className="absolute -top-8 right-38 lg:right-45 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold hover:bg-black">
            <XIcon size={16} />
          </button>
        </DialogClose>

        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-bold text-md mb-4">
              Add New Vehicle
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mb-4">
            <div>
              <Label htmlFor="vehicle-number">Vehicle Number</Label>
              <Input
                className="mt-2"
                id="vehicle-number"
                placeholder="e.g UP32D2343"
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
              />
            </div>

            <div>
              <Label htmlFor="vehicle-type">Vehicle Type</Label>
              <CommonSelect
                className="mt-2 w-full"
                placeholder="Select vehicle type"
                options={vehicleOptions}
                value={vehicleType}
                onChange={setVehicleType}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="bg-cyan-600" disabled={loading}>
              {loading ? "Adding..." : "Add Vehicle"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
