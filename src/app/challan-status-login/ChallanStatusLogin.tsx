"use client";

import React, { useRef, useState } from "react";
import Header from "../components/common/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//import Loader from "../components/common/loader/Loader";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { postRequest } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const loginSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  whatsappOptIn: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface ErrorResponse {
  message?: string;
}

interface DecodedData {
  vehicleNumber: string;
  vehicleType: string;
}
interface Subscriber {
  id: string;
  name: string;
  // add other fields if any
}

interface Vehicle {
  id: string;
  type: string;
  vehicleNo: string;
  // add other fields if any
}

interface Response {
  data: {
    subscriber: Subscriber | null;
    vehicle: Vehicle | null;
  };
  message: string;
  status: string;
}

//const TOKEN = process.env.NEXT_PUBLIC_LAWYERED_PARTNER_TOKEN;

export default function ChallanStatusLogin() {
  const router = useRouter();
  const [showOtp, setShowOtp] = useState(false);
  const { setUser } = useAuth();
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { sendOtp, verifyOtp } = useAuth();
  const [otpId, setOtpId] = useState("");
  const searchParams = useSearchParams();
  const [decodedData, setDecodedData] = useState<DecodedData | null>(null);

  const {
    // control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const formData = {
    name: watch("fullName") || "",
    phone: watch("phone") || "",
    vehicleNo: decodedData?.vehicleNumber || "",
    vehicleType: decodedData?.vehicleType || "", // ✅ fixed typo (was vehicaleType)
    utmSource: "facebook",
  };

  useEffect(() => {
    const encoded = searchParams.get("data");
    if (encoded) {
      try {
        const decoded = JSON.parse(decodeURIComponent(encoded));
        setDecodedData(decoded);
      } catch (error) {
        console.error("Failed to decode data:", error);
      }
    }
  }, [searchParams]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      toast.loading("Sending OTP...");
      const response = await sendOtp(data.phone);
      setOtpId(response?.data?.otpId);
      setShowOtp(true);
      toast.dismiss(); // remove loading
      toast.success("OTP send successfully");
    } catch (error: unknown) {
      const err = error as AxiosError<ErrorResponse>;
      const message =
        err.response?.data?.message || err.message || "Failed to send OTP";

      setError(message);
      toast.error(message);
    }
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

  const getOtpValue = () => {
    return inputRefs.current.map((input) => input?.value).join("");
  };

  const handleVerifyOtp = async (): Promise<void> => {
    try {
      toast.loading("Verifying OTP...");
      await verifyOtp(otpId, getOtpValue());
      toast.dismiss(); // remove loading
      toast.success("OTP verified successfully");
      const response: Response = await postRequest(
        "/v1/d-to-c/user-verification",
        formData
      );
      if (response?.data) {
        const result = response.data;
        setUser(result);
        if (result?.subscriber?.id && result?.vehicle?.id) {
          localStorage.setItem("subscriberId", result.subscriber.id);
          localStorage.setItem("vehicleId", result.vehicle.id);
        } else {
          console.warn("Missing subscriber or vehicle data:", result);
        }
      } else {
        console.error("No data found in response:", response);
      }
      router.push("/challan-cart");
    } catch (err: unknown) {
      toast.dismiss();

      let message = "OTP verification failed";

      if (err instanceof AxiosError) {
        // Axios error with response
        message = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        // Standard JS error
        message = err.message;
      } else if (typeof err === "string") {
        // Plain string
        message = err;
      }

      toast.error(message);
      setError(message);
    }
  };

  const handleChallanDataFetch = () => {
    // setLoading(true);
    handleVerifyOtp();
  };

  return (
    <div className="lg:bg-white lg:h-screen lg:pt-10 lg:overflow-hidden ">
      <Header />
      <Card className="w-full max-w-sm  mt-10 mx-auto lg:bg-white lg:min-h-screen">
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <Image
            src="/Images/loginImg.png"
            width={180}
            height={120}
            alt="login-image"
          />
        </div>

        {!showOtp ? (
          <>
            {/* 🔹 Login Form */}
            <CardHeader className="justify-center text-center">
              <CardTitle className="text-lg font-bold">
                Login to check your
                <br /> <span>challan status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              {/* 🔑 Keep button inside form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter Name"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <div className="flex  border-gray-200">
                      <span className="inline-flex items-center px-1 border border-r-0 border-gray-200 rounded-l-md text-gray-500">
                        +91
                      </span>
                      <Input
                        id="phone"
                        placeholder="9876543210"
                        {...register("phone")}
                        className="rounded-l-none flex-1 border-l-0 "
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* 🔑 Button must be INSIDE form */}
                  <Button type="submit" className="w-full bg-cyan-600">
                    Get OTP
                  </Button>
                </div>
              </form>
            </CardContent>

            <div className="fixed bottom-0  lg:fixed lg:bottom-10 text-xs text-center py-2  mx-6">
              By continuing, you agree to our{" "}
              <span className="text-blue-600 underline">
                <Link href="#">terms & Condition</Link>
              </span>{" "}
              and{" "}
              <span className="text-blue-600 underline">
                <Link href="#">Privacy Policy</Link>
              </span>
            </div>
          </>
        ) : (
          <>
            {/* 🔹 OTP Verification Form */}
            <CardHeader className="justify-center text-center mt-2">
              <CardTitle className="text-lg font-bold">
                Verify your Phone number
              </CardTitle>
            </CardHeader>

            <CardContent className="px-10 mt-6">
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
            </CardContent>

            <CardFooter className="flex-col gap-2 mt-6">
              <Button
                type="button"
                onClick={handleChallanDataFetch}
                className="w-full bg-cyan-600"
              >
                Submit OTP
              </Button>
            </CardFooter>

            <div className="text-xs text-center text-gray-600 mt-6 mx-6">
              Did not receive any code?
              <br />
              <div
                className="text-blue-600 my-2  font-bold cursor-pointer"
                onClick={() => sendOtp(formData.phone)} // wrap it in arrow function
              >
                Resend Now
              </div>
            </div>
          </>
        )}
        {/* {loading && <Loader />} */}
      </Card>
    </div>
  );
}
