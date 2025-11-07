"use client";

import React, { useRef, useState, useEffect } from "react";
import Header from "../components/common/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardFooter,
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
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/TrackStatusAuthContext";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
//import { tree } from "next/dist/build/templates/app-page";

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

export default function TrackStatusLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { sendOtp, verifyOtp } = useAuth();
  const [showOtp, setShowOtp] = useState(false);
  const [otpId, setOtpId] = useState("");
  const [loading, setLoading] = useState(false);
  const [decodedData, setDecodedData] = useState<DecodedData | null>(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0); // ⏳ new state for timer
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const {
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
    vehicleType: decodedData?.vehicleType || "",
    utmSource: "facebook",
  };

  // Decode URL params
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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Send OTP
  const onSubmit = async (data: LoginFormData) => {
    try {
      toast.loading("Sending OTP...");
      const response = await sendOtp(data.phone);
      setOtpId(response?.data?.otpId);
      setShowOtp(true);
      setTimer(30);
      toast.dismiss();
      toast.success("OTP sent successfully");
    } catch (error: unknown) {
      const err = error as AxiosError<ErrorResponse>;
      const message =
        err.response?.data?.message || err.message || "Failed to send OTP";
      setError(message);
      toast.error(message);
    }
  };

  // Resend OTP
  const resendOtp = async (phone: string) => {
    try {
      toast.loading("Resending OTP...");
      const response = await sendOtp(phone);
      setOtpId(response?.data?.otpId);
      setShowOtp(true);
      setTimer(30);
      toast.dismiss();
      toast.success("OTP resent successfully");
    } catch (error: unknown) {
      const err = error as AxiosError<ErrorResponse>;
      const message =
        err.response?.data?.message || err.message || "Failed to resend OTP";
      setError(message);
      toast.error(message);
    }
  };

  // Handle OTP input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      inputRefs.current[index]!.value = value;

      // Move to next input
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Auto-submit when last digit entered
      if (index === inputRefs.current.length - 1) {
        handleVerifyOtp();
      }
    } else {
      e.target.value = "";
    }
  };

  // Handle key navigation (Backspace / Arrow)
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

  const getOtpValue = () =>
    inputRefs.current.map((input) => input?.value).join("");

  // Verify OTP
  const handleVerifyOtp = async (): Promise<void> => {
    const otpValue = getOtpValue();
    if (otpValue.length < 4) return; // wait for full OTP

    try {
      toast.loading("Verifying OTP...");
      setLoading(true);
      await verifyOtp(otpId, otpValue);
      toast.dismiss();
      toast.success("OTP verified successfully");
      router.push("/track-status-dashboard");
    } catch (err: unknown) {
      toast.dismiss();
      let message = "OTP verification failed";
      if (err instanceof AxiosError) {
        message = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === "string") {
        message = err;
      }
      setError(message);
      toast.error(message);
    } finally {
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    }
  };

  return (
    <div className="lg:bg-white lg:h-screen lg:pt-10 lg:overflow-hidden ">
      <Header />
      <Card className="w-full max-w-sm mt-10 mx-auto lg:bg-white lg:min-h-screen">
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
            {/* Login Form */}
            <CardHeader className="justify-center text-center">
              <CardTitle className="text-lg font-bold leading-none">
                Login to check your
                <br /> <span>track status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
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
                        {errors?.fullName?.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <div className="flex border-gray-200">
                      <span className="inline-flex items-center px-1 border border-r-0 border-gray-200 rounded-l-md text-gray-500">
                        +91
                      </span>
                      <Input
                        id="phone"
                        placeholder="XXXXXXXXXX"
                        {...register("phone")}
                        maxLength={10}
                        className="rounded-l-none flex-1 border-l-0"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors?.phone?.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-cyan-600">
                    Get OTP
                  </Button>
                </div>
              </form>
            </CardContent>

            <div className="fixed bottom-0 lg:fixed lg:bottom-10 text-xs text-center py-2 mx-2">
              By continuing, you agree to our{" "}
              <span className="text-blue-600 underline">
                <Link href="/terms-and-condition">Terms & Conditions</Link>
              </span>{" "}
              and{" "}
              <span className="text-blue-600 underline">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </span>
            </div>
          </>
        ) : (
          <>
            {/* OTP Verification Form */}
            <CardHeader className="justify-center text-center mt-2">
              <CardTitle className="text-lg font-bold">
                Verify your Phone number
              </CardTitle>
            </CardHeader>

            <CardContent className="px-10 mt-6">
              <div className="flex justify-between gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <Input
                    key={i}
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-14 h-14 text-center text-lg"
                    //ref={(el) => (inputRefs.current[i] = el)}
                    ref={(el) => {
                      inputRefs.current[i] = el; // ✅ assign ref
                    }}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  />
                ))}
              </div>
            </CardContent>

            <div className="text-xs text-center text-gray-600 mt-6 mx-6">
              Did not receive any code?
              <br />
              {timer > 0 ? (
                <div className="text-gray-700 my-2 font-bold">
                  Resend in {Math.floor(timer / 60)}:
                  {String(timer % 60).padStart(2, "0")} sec
                </div>
              ) : (
                <div
                  className="text-blue-600 my-2 font-bold cursor-pointer"
                  onClick={() => resendOtp(formData.phone)}
                >
                  Resend Now
                </div>
              )}
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
