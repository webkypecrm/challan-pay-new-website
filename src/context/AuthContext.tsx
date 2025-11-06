"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { postRequest } from "@/lib/api";

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

interface User {
  subscriber: Subscriber | null;
  vehicle: Vehicle | null;
}

interface OtpResponse {
  success: boolean;
  message: string;
  data: { otpId: string };
}

interface AuthContextType {
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // ✔ correct
  user: User | null;
  sendOtp: (phone: string) => Promise<OtpResponse>;
  verifyOtp: (phone: string, otp: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

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
      console.log(data);
    } catch (error) {
      console.error("OTP verification failed", error);
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]); // run whenever user changes
  // Logout

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("user");
    }
  };
  return (
    <AuthContext.Provider value={{ user, setUser, sendOtp, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
