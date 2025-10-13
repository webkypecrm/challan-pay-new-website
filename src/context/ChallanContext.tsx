// "use client";

// import { getRequest } from "@/lib/api";
// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   Dispatch,
//   SetStateAction,
// } from "react";

// interface Challan {
//   id: number;
//   challanNo: string;
//   challanDate?: string;
//   amount: number;
//   challanPlace?: string;
// }

// interface Challan {
//   id: number;
//   challanNo: string;
//   challanDate?: string;
//   amount: number;
//   challanPlace?: string;
//   fees?: number;
// }

// interface Subscriber {
//   id: number;
//   name: string;
//   email?: string;
//   phone?: string;
//   // add other fields as needed
// }

// interface Vehicle {
//   id: number;
//   registrationNo: string;
//   type?: string;
//   // add other fields as needed
// }

// interface PaymentEngagementData {
//   subscriber: Subscriber;
//   vehicle: Vehicle;
//   onlineChallans: Challan[];
//   courtChallans: Challan[];
//   onlineChallanAmount: number;
//   courtChallanAmount?: number;
//   totalAmount?: number;
//   amountToPay: number;
//   potentialDiscount: number;
//   onlineChallanFees: number;
//   courtChallanFees: number;
// }

// interface PaymentEngagementResponse {
//   status: string;
//   message: string;
//   data: PaymentEngagementData;
// }

// interface ChallanContextType {
//   selectedChallans: number[];
//   toggleChallan: (id: number, checked: boolean) => void;
//   selectAllNonZero: (challans: Challan[]) => void;
//   data: PaymentEngagementData | null;
//   loading: boolean;
//   setIsPledge: Dispatch<SetStateAction<boolean>>;
//   isPledge: boolean;
// }

// const ChallanContext = createContext<ChallanContextType | undefined>(undefined);

// export const ChallanProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [selectedChallans, setSelectedChallans] = useState<number[]>([]);
//   const [data, setData] = useState<PaymentEngagementData | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [isPledge, setIsPledge] = useState<boolean>(false);

//   // ✅ API call for payment engagement
//   const fetchPaymentEngagement = async (challanIds: number[]) => {
//     if (challanIds.length === 0) {
//       setData(null);
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await getRequest<PaymentEngagementResponse>(
//         "/v1/d-to-c/payment-engagement",
//         {
//           challanIds: challanIds.join(","), // e.g. "64,65"
//           pledge: isPledge ? "1" : "0",
//         }
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching payment engagement:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Re-fetch payment engagement whenever isPledge changes
//   useEffect(() => {
//     if (selectedChallans.length > 0) {
//       fetchPaymentEngagement(selectedChallans);
//     }
//   }, [isPledge]); // only runs when pledge changes

//   // ✅ Toggle single challan
//   const toggleChallan = (id: number, checked: boolean) => {
//     setSelectedChallans((prev) => {
//       let updated: number[];

//       if (checked) {
//         updated = [...prev, id];
//       } else {
//         // remove from selection
//         updated = prev.filter((challanId) => challanId !== id);
//       }

//       // call API after updating
//       fetchPaymentEngagement(updated);
//       return updated;
//     });
//   };

//   // ✅ Select or unselect all non-zero challans
//   const selectAllNonZero = (challans: Challan[]) => {
//     const nonZeroIds = challans.filter((c) => c.amount > 0).map((c) => c.id);
//     const areAllSelected = nonZeroIds.every((id) =>
//       selectedChallans.includes(id)
//     );

//     const updated = areAllSelected
//       ? selectedChallans.filter((id) => !nonZeroIds.includes(id))
//       : nonZeroIds;

//     setSelectedChallans(updated);
//     fetchPaymentEngagement(updated);
//   };

//   // ✅ Deselect "Select All" automatically if one card is unchecked
//   useEffect(() => {
//     // This just ensures UI components relying on selectedChallans react properly
//     console.log("Selected Challans updated:", selectedChallans);
//   }, [selectedChallans]);
//   console.log(data);
//   return (
//     <ChallanContext.Provider
//       value={{
//         selectedChallans,
//         toggleChallan,
//         selectAllNonZero,
//         data,
//         loading,
//         setIsPledge,
//         isPledge,
//       }}
//     >
//       {children}
//     </ChallanContext.Provider>
//   );
// };

// export const useChallanContext = () => {
//   const context = useContext(ChallanContext);
//   if (!context)
//     throw new Error("useChallanContext must be used within ChallanProvider");
//   return context;
// };

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
}

const ChallanContext = createContext<ChallanContextType | undefined>(undefined);

export const ChallanProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedChallans, setSelectedChallans] = useState<number[]>([]);
  const [data, setData] = useState<PaymentEngagementData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isPledge, setIsPledge] = useState<boolean>(false);

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
      localStorage.setItem(
        "paymentEngagementData",
        JSON.stringify(response.data)
      );
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

    const savedChallans = JSON.parse(
      localStorage.getItem("selectedChallans") || "[]"
    );

    // Only auto-select if nothing is already saved
    if (savedChallans.length === 0) {
      setSelectedChallans(nonZeroIds);
      localStorage.setItem("selectedChallans", JSON.stringify(nonZeroIds));
      fetchPaymentEngagement(nonZeroIds);
    }
  };

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const savedChallans = localStorage.getItem("selectedChallans");
    const savedData = localStorage.getItem("paymentEngagementData");
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
    localStorage.setItem("selectedChallans", JSON.stringify(selectedChallans));
  }, [selectedChallans]);

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
