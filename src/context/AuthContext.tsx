"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { postRequest } from "@/lib/api";

interface User {
  id: string;
  name: string;
  phone: string;
}

interface OtpResponse {
  success: boolean;
  message: string;
  data: { otpId: string };
}

interface AuthContextType {
  // otpId: string | null;
  user: User | null;
  sendOtp: (phone: string) => Promise<OtpResponse>;
  verifyOtp: (phone: string, otp: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  // const [otpId, setOtpId] = useState("");
  // Step 1: Send OTP
  const sendOtp = async (phone: string): Promise<OtpResponse> => {
    const res = await postRequest("/v1/d-to-c/send-otp", { phone });
    return res as OtpResponse;
  };
  // Step 2: Verify OTP
  const verifyOtp = async (otpId: string, otp: string) => {
    try {
      const data = await postRequest<{ token: string; user: User }>(
        "/v1/d-to-c/verify-otp",
        { otpId, otp }
      );

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("OTP verification failed", error);
      throw error;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, sendOtp, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
