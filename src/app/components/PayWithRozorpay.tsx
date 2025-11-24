import { postRequest } from "@/lib/api";
import { useRouter } from "next/navigation";
import moengage from "@moengage/web-sdk";

interface PaymentParams {
  challanIds: number[];
  potentialDiscount: number;
  grandTotal: number;
  rewardGiven: boolean;
  isContest: boolean;
}

interface CreateIncidentPayload extends PaymentParams {
  razorpayPaymentId: string;
}

interface CaseLead {
  id: number | string;
  challanNo: string;
  vehicleNo: string;
  challanAmount: number;
}
interface APIData {
  caseLeads: CaseLead[];
}

interface CreateIncidentResponse {
  status: string;
  message: string;
  data?: { data: APIData };
}

export const handleRazorpayPayment = async (
  {
    challanIds,
    potentialDiscount,
    grandTotal,
    rewardGiven,
    isContest,
  }: PaymentParams,
  router: ReturnType<typeof useRouter>,
  setLoader: (val: boolean) => void
) => {
  moengage.track_event("paymentInitiated", {
    totalAmount: grandTotal + potentialDiscount,
    rewardAvailed: rewardGiven,
    payableAmount: grandTotal,
    vehicleNo: sessionStorage.getItem("vehicleNo"),
  });
  try {
    let prefillData = { name: "", email: "", contact: "" };

    if (typeof window !== "undefined") {
      const raw = sessionStorage.getItem("user");
      if (raw) {
        const parsed = JSON.parse(raw);
        prefillData = {
          name: parsed?.subscriber?.name ?? "",
          email: parsed?.subscriber?.email ?? "",
          contact: parsed?.subscriber?.phone
            ? String(parsed.subscriber.phone).replace(/\s+/g, "")
            : "",
        };
      }
    }

    const loadRazorpayScript = () =>
      new Promise<boolean>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load. Check your connection.");
      return;
    }
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
      amount: grandTotal * 100,
      currency: "INR",
      name: "ChallanPay",
      description: "Challan Payment",
      prefill: prefillData,
      theme: { color: "#000" },
      handler: async function (response: { razorpay_payment_id: string }) {
        setLoader(true);
        const payload: CreateIncidentPayload = {
          challanIds,
          potentialDiscount,
          grandTotal,
          rewardGiven,
          razorpayPaymentId: response.razorpay_payment_id,
          isContest: isContest,
        };

        moengage.track_event("paymentSuccess", {
          transactionId: response.razorpay_payment_id,
          paymentAmount: grandTotal,
          paymentStatus: "success",
          paymentTime: new Date().toISOString(),
        });

        try {
          const apiResponse = await postRequest<CreateIncidentResponse>(
            "/v1/d-to-c/create-incidents",
            payload as unknown as Record<string, unknown>
          );
          if (typeof window !== "undefined") {
            sessionStorage.setItem(
              "paymentDetail",
              JSON.stringify(apiResponse.data)
            );
          }
          const response = apiResponse.data;

          //    moengage.track_event("ticketCreated", {
          //   irnNumbers: response?.data?.caseLeads.map(
          //     (caseLead) => caseLead.id
          //   ),
          //   creationDate: new Date().toLocaleString(),
          //   challanNumbers: response?.data?.caseLeads.map(
          //     (caseLead) => caseLead.challanNo
          //   ),
          //   vehicleNumber: response?.data.caseLeads[0].vehicleNo,
          //   challanAmount: response?.data.caseLeads.reduce(
          //     (acc, caseLead) => acc + caseLead.challanAmount,
          //     0
          //   ),
          //   paidAmount: grandTotal,
          // });
          //console.log(response);
          // moengage.track_event("rewardOpted", {
          //   rewardSelected: rewardGiven,
          //   rewardAmount: potentialDiscount,
          //   vehicleNo: sessionStorage.getItem("vehicleNo"),
          // });
          router.push(`/payment-success/${grandTotal}`);
        } catch (err) {
          console.error("Error creating incident:", err);
          alert(
            "Payment succeeded, but failed to record in system. Redirecting anyway."
          );
        } finally {
          setTimeout(() => setLoader(false), 2000);
        }
      },
      modal: {
        ondismiss: () => alert("Payment cancelled."),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment process failed:", error);
    alert("Something went wrong while processing payment.");
  }
};
