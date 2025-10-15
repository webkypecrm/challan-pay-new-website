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
          <button className="absolute -top-8 right-38 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold hover:bg-black">
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

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogClose,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { CommonSelect } from "../common/Select";
// import { XIcon } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import { useRef } from "react";
// import Image from "next/image";

// export function AddVehicleModal({
//   open,
//   onOpenChange,
// }: {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }) {
//   const [selected, setSelected] = useState("");
//   const [step, setStep] = useState(1);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   useEffect(() => {
//     if (!open) setStep(1); // Reset step only when modal closes
//   }, [open]);

//   const vehicleType = [
//     { label: "Two-wheelar", value: "Two-wheelar" },
//     { label: "Commercial", value: "Commercial" },
//     { label: "Private", value: "Private" },
//     { label: "Electric", value: "Electric" },
//   ];

//   const handleNext = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Current step:", step);
//     if (step === 1) setStep(2);
//     else if (step === 2) setStep(3);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const { value } = e.target;
//     if (/^\d$/.test(value)) {
//       if (index < inputRefs.current.length - 1) {
//         inputRefs.current[index + 1]?.focus();
//       }
//     } else {
//       e.target.value = "";
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//     if (e.key === "ArrowRight" && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//     if (e.key === "ArrowLeft" && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[425px]">
//         {/* Close button outside the form */}
//         <DialogClose asChild>
//           <button className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold py-1 shadow hover:bg-black">
//             <XIcon size={16} />
//           </button>
//         </DialogClose>

//         <form onSubmit={handleNext}>
//           <DialogHeader>
//             <DialogTitle className="flex justify-start font-bold text-md mb-4">
//               {step === 1
//                 ? "Add New Vehicle"
//                 : step === 2
//                 ? "Verify your Phone number"
//                 : ""}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="grid gap-4 mb-4">
//             {step === 1 && (
//               <>
//                 <Label htmlFor="vehicle-number">Vehicle Number</Label>
//                 <Input id="vehicle-number" placeholder="e.g UP32D2343" />

//                 <Label htmlFor="vehicle-type">Vehicle Type</Label>
//                 <CommonSelect
//                   placeholder="Two-wheelar"
//                   options={vehicleType}
//                   value={selected}
//                   onChange={setSelected}
//                 />

//                 <Label htmlFor="mobile-number">Mobile Number</Label>
//                 <Input id="mobile-number" defaultValue="+91-" />
//               </>
//             )}

//             {step === 2 && (
//               <>
//                 <form>
//                   <div className="flex justify-between gap-2">
//                     {[0, 1, 2, 3].map((i) => (
//                       <Input
//                         key={i}
//                         maxLength={1}
//                         inputMode="numeric"
//                         pattern="[0-9]*"
//                         className="w-14 h-14 text-center text-lg"
//                         //  ref={(el) => (inputRefs.current[i] = el)}
//                         ref={(el) => {
//                           if (el) {
//                             // store ref or do something with el
//                             inputRefs.current[i] = el;
//                           }
//                         }}
//                         onChange={(e) => handleChange(e, i)}
//                         onKeyDown={(e) => handleKeyDown(e, i)}
//                       />
//                     ))}
//                   </div>
//                 </form>
//               </>
//             )}

//             {step === 3 && (
//               <div className=" text-center  py-2">
//                 <div className="flex justify-center font-normal">
//                   <Image
//                     src="/Images/addvehicle.png"
//                     alt="success-image"
//                     width={80}
//                     height={80}
//                   />
//                 </div>

//                 <div className="text-gray-500 text-sm my-2">
//                   New Vehicle Added
//                 </div>
//                 <div className="text-lg font-bold">UP32MM1113</div>
//               </div>
//             )}
//           </div>

//           <Separator />
//           <DialogFooter className="mt-4">
//             {step < 3 && (
//               <Button type="submit" className="bg-cyan-600">
//                 {step === 1 ? "Get OTP" : "Submit"}
//               </Button>
//             )}
//             {step === 3 && (
//               <Button
//                 type="button"
//                 className="bg-cyan-600"
//                 onClick={() => onOpenChange(false)}
//               >
//                 Okay
//               </Button>
//             )}
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
