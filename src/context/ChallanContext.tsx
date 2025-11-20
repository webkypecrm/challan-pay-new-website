"use client";

import { getRequest } from "@/lib/api";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/navigation";

interface Challan {
  id: number;
  challanNo: string;
  challanDate?: string;
  amount: number;
  challanPlace?: string;
  fees?: number;
}

interface Subscriber {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

interface Vehicle {
  id: number;
  registrationNo: string;
  type?: string;
}

interface PaymentEngagementData {
  subscriber: Subscriber;
  vehicle: Vehicle;
  onlineChallans: Challan[];
  courtChallans: Challan[];
  onlineChallanAmount: number;
  courtChallanAmount?: number;
  totalAmount?: number;
  amountToPay: number;
  potentialDiscount: number;
  onlineChallanFees: number;
  courtChallanFees: number;
  courtChallansAmountToPay: number;
}

interface PaymentEngagementResponse {
  status: string;
  message: string;
  data: PaymentEngagementData;
}

interface ChallanContextType {
  selectedChallans: number[];
  toggleChallan: (id: number, checked: boolean) => void;
  selectAllNonZero: (challans: Challan[]) => void;
  autoSelectAllOnInit: (challans: Challan[]) => void;
  data: PaymentEngagementData | null;
  loading: boolean;
  setIsPledge: Dispatch<SetStateAction<boolean>>;
  isPledge: boolean;
  isContestSelected: boolean;
  setIsContestSelected: Dispatch<SetStateAction<boolean>>;
}

interface Challan {
  id: number;
  amount: number;
  challanNo: string;

  offenseName: string;
  // add other fields if needed
}

const ChallanContext = createContext<ChallanContextType | undefined>(undefined);

export const ChallanProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedChallans, setSelectedChallans] = useState<number[]>([]);
  const [data, setData] = useState<PaymentEngagementData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isPledge, setIsPledge] = useState<boolean>(true);
  const [isContestSelected, setIsContestSelected] = useState(false);
  const router = useRouter();

  // ✅ Fetch payment engagement data
  const fetchPaymentEngagement = async (challanIds: number[]) => {
    if (challanIds.length === 0) {
      setData(null);
      return;
    }

    try {
      setLoading(true);
      const response = await getRequest<PaymentEngagementResponse>(
        "/v1/d-to-c/payment-engagement",
        {
          challanIds: challanIds.join(","),
          pledge: isPledge ? "1" : "0",
        }
      );
      setData(response.data);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "paymentEngagementData",
          JSON.stringify(response.data)
        );
      }
    } catch (error) {
      console.error("Error fetching payment engagement:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Re-fetch when isPledge changes
  useEffect(() => {
    if (selectedChallans.length > 0) {
      fetchPaymentEngagement(selectedChallans);
    }
  }, [isPledge]);

  const toggleChallan = (id: number, checked: boolean) => {
    setSelectedChallans((prev) => {
      let updated: number[];
      if (checked) {
        updated = [...prev, id];
      } else {
        updated = prev.filter((challanId) => challanId !== id);
      }
      fetchPaymentEngagement(updated);
      return updated;
    });
  };

  // ✅ Select/unselect all non-zero challans
  const selectAllNonZero = (challans: Challan[]) => {
    const nonZeroIds = challans.filter((c) => c.amount > 0).map((c) => c.id);
    const areAllSelected = nonZeroIds.every((id) =>
      selectedChallans.includes(id)
    );
    const updated = areAllSelected
      ? selectedChallans.filter((id) => !nonZeroIds.includes(id))
      : nonZeroIds;
    setSelectedChallans(updated);
    fetchPaymentEngagement(updated);
  };

  // ✅ Auto select all challans initially
  const autoSelectAllOnInit = (challans: Challan[]) => {
    const nonZeroIds = challans.filter((c) => c.amount > 0).map((c) => c.id);
    if (nonZeroIds.length === 0) return;

    let savedChallans: Challan[] = [];

    if (typeof window !== "undefined") {
      savedChallans = JSON.parse(
        sessionStorage.getItem("selectedChallans") || "[]"
      );
    }

    // Only auto-select if nothing is already saved
    if (savedChallans.length === 0) {
      setSelectedChallans(nonZeroIds);
      sessionStorage.setItem("selectedChallans", JSON.stringify(nonZeroIds));
      fetchPaymentEngagement(nonZeroIds);
    }
  };

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const savedChallans = sessionStorage.getItem("selectedChallans");
    const savedData = sessionStorage.getItem("paymentEngagementData");
    if (savedChallans) {
      const parsed = JSON.parse(savedChallans);
      setSelectedChallans(parsed);
      if (parsed.length > 0 && savedData) {
        setData(JSON.parse(savedData));
      }
    }
  }, []);

  // ✅ Save to localStorage on change
  useEffect(() => {
    sessionStorage.setItem(
      "selectedChallans",
      JSON.stringify(selectedChallans)
    );
  }, [selectedChallans]);

  // useEffect(() => {
  //   if (selectedChallans.length === 0) {
  //     router.push("/");
  //   }
  // }, [selectedChallans]);

  return (
    <ChallanContext.Provider
      value={{
        selectedChallans,
        toggleChallan,
        selectAllNonZero,
        autoSelectAllOnInit,
        data,
        loading,
        setIsPledge,
        isPledge,
        isContestSelected,
        setIsContestSelected,
      }}
    >
      {children}
    </ChallanContext.Provider>
  );
};

export const useChallanContext = () => {
  const context = useContext(ChallanContext);
  if (!context)
    throw new Error("useChallanContext must be used within ChallanProvider");
  return context;
};
