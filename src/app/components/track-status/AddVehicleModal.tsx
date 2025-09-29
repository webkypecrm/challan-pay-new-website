// import { useState } from "react";
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

// export function AddVehicleModal({
//   open,
//   onOpenChange,
// }: {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }) {
//   const [selected, setSelected] = useState("");
//   const [step, setStep] = useState(1); // Step state
//   const [otp, setOtp] = useState("");

//   const vehicleType = [
//     { label: "Two-wheelar", value: "Two-wheelar" },
//     { label: "Commercial", value: "Commercial" },
//     { label: "Private", value: "Private" },
//     { label: "Electric", value: "Electric" },
//   ];

//   const handleNext = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("AMAN");
//     if (step === 1) {
//       // Here you can validate vehicle info or call API to send OTP
//       setStep(2);
//     } else if (step === 2) {
//       // Here you can verify OTP
//       setStep(3);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <form onSubmit={handleNext}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogClose asChild>
//             <button className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold py-1 shadow hover:bg-black">
//               <XIcon size={16} />
//             </button>
//           </DialogClose>

//           <DialogHeader>
//             <DialogTitle className="flex justify-start font-bold text-md">
//               {step === 1
//                 ? "Add New Vehicle"
//                 : step === 2
//                 ? "Verify OTP"
//                 : "Success"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="grid gap-4">
//             {step === 1 && (
//               <>
//                 <div className="grid gap-3">
//                   <Label htmlFor="vehicle-number">Vehicle Number</Label>
//                   <Input
//                     id="vehicle-number"
//                     name="vehicleNumber"
//                     placeholder="e.g UP32D2343"
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="vehicle-type">Select Vehicle Type</Label>
//                   <CommonSelect
//                     placeholder="Two-wheelar"
//                     options={vehicleType}
//                     value={selected}
//                     onChange={setSelected}
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="mobile-number">Mobile Number</Label>
//                   <Input
//                     id="mobile-number"
//                     name="mobileNumber"
//                     defaultValue="+91-"
//                   />
//                 </div>
//               </>
//             )}

//             {step === 2 && (
//               <div className="grid gap-3">
//                 <Label htmlFor="otp">Enter OTP</Label>
//                 <Input
//                   id="otp"
//                   name="otp"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//               </div>
//             )}

//             {step === 3 && (
//               <div className="text-center text-green-600 font-bold py-6">
//                 Vehicle Added Successfully!
//               </div>
//             )}
//           </div>

//           <Separator />
//           <DialogFooter>
//             {step < 3 && (
//               <Button type="submit" className="bg-cyan-600">
//                 {step === 1 ? "Get OTP" : "Verify OTP"}
//               </Button>
//             )}
//             {step === 3 && (
//               <Button
//                 type="button"
//                 className="bg-cyan-600"
//                 onClick={() => onOpenChange(false)}
//               >
//                 OK
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   );
// }

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CommonSelect } from "../common/Select";
import { XIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import Image from "next/image";

export function AddVehicleModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [selected, setSelected] = useState("");
  const [step, setStep] = useState(1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!open) setStep(1); // Reset step only when modal closes
  }, [open]);

  const vehicleType = [
    { label: "Two-wheelar", value: "Two-wheelar" },
    { label: "Commercial", value: "Commercial" },
    { label: "Private", value: "Private" },
    { label: "Electric", value: "Electric" },
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Current step:", step);
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
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
              {step === 1
                ? "Add New Vehicle"
                : step === 2
                ? "Verify your Phone number"
                : ""}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mb-4">
            {step === 1 && (
              <>
                <Label htmlFor="vehicle-number">Vehicle Number</Label>
                <Input id="vehicle-number" placeholder="e.g UP32D2343" />

                <Label htmlFor="vehicle-type">Vehicle Type</Label>
                <CommonSelect
                  placeholder="Two-wheelar"
                  options={vehicleType}
                  value={selected}
                  onChange={setSelected}
                />

                <Label htmlFor="mobile-number">Mobile Number</Label>
                <Input id="mobile-number" defaultValue="+91-" />
              </>
            )}

            {step === 2 && (
              <>
                <form>
                  <div className="flex justify-between gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <Input
                        key={i}
                        maxLength={1}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="w-14 h-14 text-center text-lg"
                        //  ref={(el) => (inputRefs.current[i] = el)}
                        ref={(el) => {
                          if (el) {
                            // store ref or do something with el
                            inputRefs.current[i] = el;
                          }
                        }}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                      />
                    ))}
                  </div>
                </form>
              </>
            )}

            {step === 3 && (
              <div className=" text-center  py-2">
                <div className="flex justify-center font-normal">
                  <Image
                    src="/Images/addvehicle.png"
                    alt="success-image"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="text-gray-500 text-sm my-2">
                  New Vehicle Added
                </div>
                <div className="text-lg font-bold">UP32MM1113</div>
              </div>
            )}
          </div>

          <Separator />
          <DialogFooter className="mt-4">
            {step < 3 && (
              <Button type="submit" className="bg-cyan-600">
                {step === 1 ? "Get OTP" : "Submit"}
              </Button>
            )}
            {step === 3 && (
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
