"use client";

//import { useState } from "react";
import { useChallanContext } from "@/context/ChallanContext";
import { CommonSheet } from "../common/CommonSheet";
import { Check } from "lucide-react";
import { handleRazorpayPayment } from "../PayWithRozorpay";
import { useRouter } from "next/navigation";
import { useState } from "react";
//import { LoaderModal } from "../LoaderModal";

// interface ChallanData {
//   onlineChallans?: { id: number }[];
//   courtChallans?: { id: number }[];
//   onlineChallanAmount?: number;
//   courtChallanAmount?: number;
//   onlineChallanFees?: number;
//   courtChallanFees?: number;
//   potentialDiscount?: number;
//   amountToPay?: number;
// }

// interface ChallanSummaryProps {
//   data?: ChallanData;
//   isPledge?: boolean;
// }

export function PaymentSummarySheet({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { data, isPledge, selectedChallans, isContestSelected } =
    useChallanContext();
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const handleProccedNext = () => {
    handleRazorpayPayment(
      {
        challanIds: selectedChallans.map((c) => c) ?? [], // array of numbers
        potentialDiscount: data?.potentialDiscount ?? 0, // fallback if undefined
        grandTotal: data?.amountToPay ?? 0,
        rewardGiven: true,
        isContest: isContestSelected,
      },
      router,
      setLoader
    );
  };

  // if (loader) {
  //   return (
  //     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-50">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  //     </div>
  //   );
  // }
  const content = (
    <>
      <div className="bg-white rounded-lg p-2">
        {/* Online Challan */}
        {data?.onlineChallanAmount && data.onlineChallanAmount > 0 ? (
          <>
            <div className="flex justify-between items-center text-black px-2 py-1">
              <div>Online Challan ( {data.onlineChallans?.length ?? 0} )</div>
              <div className="font-semibold">₹{data.onlineChallanAmount}</div>
            </div>
            <div className="flex justify-between items-center text-black px-2 py-1">
              <div>
                Convenience Fee ({data.onlineChallans?.length ?? 0} x 100)
              </div>
              <div className="font-semibold">₹{data.onlineChallanFees}</div>
            </div>
            <div className="border-t border-1 border-dashed border-gray-300 my-2"></div>
          </>
        ) : null}

        {/* Court Challan */}
        {data?.courtChallanAmount && data.courtChallanAmount > 0 ? (
          <>
            <div className="flex justify-between items-center text-black px-2 py-1">
              <div>Court Challan ( {data.courtChallans?.length ?? 0} )</div>
              <div className="font-semibold">₹{data.courtChallanAmount}</div>
            </div>
            <div className="flex justify-between items-center text-black px-2 py-1">
              <div>
                Convenience Fee ({data.courtChallans?.length ?? 0} x 2000)
              </div>
              <div className="font-semibold">₹{data.courtChallanFees}</div>
            </div>
            <div className="border-t border-1 border-dashed border-gray-300 my-2"></div>
          </>
        ) : null}

        {/* Pledge Reward */}
        {isPledge && data?.potentialDiscount && data.potentialDiscount > 0 && (
          <div className="flex justify-between items-center text-black px-2 py-1">
            <div className="text-md font-bold text-cyan-700">Pledge Reward</div>
            <div className="text-md font-bold text-cyan-700">
              -₹{data.potentialDiscount}
            </div>
          </div>
        )}

        {/* Grand Total */}
        {data?.amountToPay && data.amountToPay > 0 && (
          <div className="flex justify-between items-center text-black px-2 py-1">
            <div className="text-lg font-bold text-black">Grand Total</div>
            <div className="text-lg font-bold text-black">
              ₹{data.amountToPay}
            </div>
          </div>
        )}
      </div>

      {/* Pledge Saved Message */}
      {isPledge && data?.potentialDiscount && data.potentialDiscount > 0 && (
        <div className="flex justify-start items-center rounded bg-green-100 p-2 mb-4 mt-2">
          <Check className="bg-green-800 rounded-full w-4 h-4 text-white p-1 mx-2" />
          <span className="text-green-800 text-xs font-semibold">
            You saved ₹{data.potentialDiscount} By Pledging
          </span>
        </div>
      )}
    </>
  );

  return (
    <>
      <CommonSheet
        open={open}
        setOpen={setOpen}
        title="Payment Summary"
        content={content}
        buttonText="Proceed To Pay"
        onButtonClick={handleProccedNext}
      />{" "}
    </>
  );
}
