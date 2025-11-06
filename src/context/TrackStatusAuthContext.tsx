"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { postRequestWithoutToken } from "@/lib/api";
import { getRequestWithoutToken } from "@/lib/api";
import { IncidentsApiResponse, IncidentsData } from "@/lib/types";

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
// Define your User type first
interface User {
  id: number;
  name: string;
  email: string;
  // Add other properties your user object has
}

// API response interface
interface AuthResponse {
  data: {
    token: string;
    user: User;
  };
}

interface OtpResponse {
  success: boolean;
  message: string;
  data: { otpId: string };
}

interface Incident {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  // add other fields
}

interface AuthContextType {
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // correct
  user: User | null;
  sendOtp: (phone: string) => Promise<OtpResponse>;
  verifyOtp: (phone: string, otp: string) => Promise<void>;
  logout: () => void;
  incidentData: IncidentsData | null;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  tab: string; // you were missing this
}

const TrackStatusAuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const TrackStatusAuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [incidentData, setIncidentData] = useState<IncidentsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const [userInfo, setUserInfo] = useState<string | null>(null);

  const sendOtp = async (phone: string): Promise<OtpResponse> => {
    const res = await postRequestWithoutToken("/v1/customer/auth/send-otp", {
      phone,
    });
    return res as OtpResponse;
  };
  // Step 2: Verify OTP
  const verifyOtp = async (otpId: string, otp: string) => {
    try {
      const data = await postRequestWithoutToken<AuthResponse>(
        "/v1/customer/auth/verify-otp",
        { otpId, otp }
      );
      // console.log(data);
      setUser(data?.data?.user);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("userToken", data?.data?.token);
        sessionStorage.setItem("userInfo", JSON.stringify(data?.data?.user));
      }
    } catch (error) {
      console.error("OTP verification failed", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("userToken");
  };

  const fetchIncidentData = async () => {
    try {
      setLoading(true);
      const response = await getRequestWithoutToken<IncidentsApiResponse>(
        `/v1/customer/incidents?search=${search}&secondaryStatus=${
          tab === "all" ? "" : tab
        }`,
        {},
        true
      );
      setIncidentData(response.data);
    } catch (err) {
      console.error("Error fetching dashboard:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = sessionStorage.getItem("userInfo");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setUserInfo(parsedUser);
      }
    }
  }, []);

  useEffect(() => {
    if (user) fetchIncidentData();
  }, [user, search, tab]);

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  //     </div>
  //   );
  if (error) return <p>{error}</p>;
  return (
    <TrackStatusAuthContext.Provider
      value={{
        user,
        setUser,
        sendOtp,
        verifyOtp,
        logout,
        incidentData,
        setSearch,
        setTab,
        tab,
        search,
      }}
    >
      {children}
    </TrackStatusAuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(TrackStatusAuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
