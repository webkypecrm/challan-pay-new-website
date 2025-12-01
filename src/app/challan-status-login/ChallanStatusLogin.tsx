"use client";

import React, { useRef, useState, useEffect } from "react";
import Header from "../components/common/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { postRequest } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import moengage from "@moengage/web-sdk";

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
}

interface Vehicle {
  id: string;
  type: string;
  vehicleNo: string;
}

interface Response {
  data: {
    subscriber: Subscriber | null;
    vehicle: Vehicle | null;
  };
  message: string;
  status: string;
}

export default function ChallanStatusLogin() {
  const router = useRouter();
  const [showOtp, setShowOtp] = useState(false);
  const { setUser, sendOtp, verifyOtp } = useAuth();
  const [otpId, setOtpId] = useState("");
  const [decodedData, setDecodedData] = useState<DecodedData | null>(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();

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

  // Decode query param
  useEffect(() => {
    const encoded = searchParams.get("data");
    if (encoded) {
      try {
        const decoded = JSON.parse(decodeURIComponent(encoded));
        setDecodedData(decoded);
      } catch (err) {
        console.error("Failed to decode data:", err);
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

  // Submit login to send OTP
  const onSubmit = async (data: LoginFormData) => {
    moengage.track_event("otpRequested", {
      mobileNumber: data.phone,
      otpSent: "Yes",
      eventPage: window.location.href,
    });

    try {
      toast.loading("Sending OTP...");
      const response = await sendOtp(data.phone);
      setOtpId(response?.data?.otpId);
      setShowOtp(true);
      setTimer(30);
      toast.dismiss();
      toast.success("OTP sent successfully");
    } catch (err: unknown) {
      const errorMsg =
        (err as AxiosError<ErrorResponse>)?.response?.data?.message ||
        (err as Error).message ||
        "Failed to send OTP";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  // Resend OTP
  const resendOtp = async (phone: string) => {
    try {
      toast.loading("Resending OTP...");
      const response = await sendOtp(phone);
      setOtpId(response?.data?.otpId);
      setTimer(30); // ⏳ restart timer
      toast.dismiss();
      toast.success("OTP resent successfully");
    } catch (err: unknown) {
      const errorMsg =
        (err as AxiosError<ErrorResponse>)?.response?.data?.message ||
        (err as Error).message ||
        "Failed to resend OTP";
      setError(errorMsg);
      toast.error(errorMsg);
    }
  };

  // OTP input handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      inputRefs.current[index]!.value = value;
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Auto-submit if last digit
      if (index === inputRefs.current.length - 1) {
        const otpValue = getOtpValue();
        if (otpValue.length === 4) handleVerifyOtp(otpValue);
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
    return inputRefs.current.map((input) => input?.value || "").join("");
  };

  // Verify OTP
  const handleVerifyOtp = async (otpValue?: string) => {
    moengage.add_first_name(formData.name);
    moengage.add_mobile(formData.phone);
    moengage.identifyUser(formData.phone);
    moengage.track_event("otpVerified", {
      mobileNumber: formData.name,
      otpStatus: "verified",
      eventPage: window.location.href,
    });
    const otp = otpValue || getOtpValue();
    try {
      setLoading(true);
      toast.loading("Verifying OTP...");
      await verifyOtp(otpId, otp);
      toast.dismiss();
      toast.success("OTP verified successfully");

      const response: Response = await postRequest(
        "/v1/d-to-c/user-verification",
        formData
      );

      if (response?.data) {
        const result = response.data;
        setUser(result);

        if (typeof window !== "undefined") {
          if (result?.subscriber?.id)
            sessionStorage.setItem(
              "subscriberId",
              result.subscriber.id.toString()
            );
          if (result?.vehicle?.id)
            sessionStorage.setItem("vehicleId", result.vehicle.id.toString());
        }
      }
      router.push("/challan-cart");
    } catch (err: unknown) {
      let message = "OTP verification failed";
      if (err instanceof AxiosError)
        message = err.response?.data?.message || err.message;
      else if (err instanceof Error) message = err.message;
      else if (typeof err === "string") message = err;

      toast.error(message);
      setError(message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white h-screen overflow-hidden fixed w-full top-4 left-0 lg:top-18">
      <Header />
      <Card className="w-full max-w-sm mt-10 mx-auto lg:bg-white ">
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <Image
            src="/Images/loginImg.webp"
            width={220}
            height={140}
            alt="login-image"
          />
        </div>

        {!showOtp ? (
          <>
            {/* Login Form */}
            <CardHeader className="justify-center text-center">
              <CardTitle className="text-lg font-bold leading-none">
                Login to check your
                <br />
                <span>challan status</span>
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
              <form>
                <div className="flex justify-between gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <Input
                      key={i}
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="w-14 h-14 text-center text-lg"
                      // ref={(el) => (inputRefs.current[i] = el)}
                      ref={(el) => {
                        inputRefs.current[i] = el;
                      }}
                      onChange={(e) => handleChange(e, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                    />
                  ))}
                </div>
              </form>
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
