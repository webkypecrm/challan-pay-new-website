import { postRequest } from "@/lib/api";
import { useRouter } from "next/navigation";
//import { RazorpayOptions } from "@/lib/types";
import { json } from "zod";

interface PaymentParams {
  challanIds: number[];
  potentialDiscount: number;
  grandTotal: number;
  rewardGiven: boolean;
}

interface RazorpayErrorResponse {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata: {
      order_id: string;
      payment_id: string;
    };
  };
}
interface CreateIncidentPayload extends PaymentParams {
  razorpayPaymentId: string;
}

interface CreateIncidentResponse {
  status: string;
  message: string;
  data?: unknown;
}

export const handleRazorpayPayment = async (
  { challanIds, potentialDiscount, grandTotal, rewardGiven }: PaymentParams,
  router: ReturnType<typeof useRouter>
  // setLoading: (val: boolean) => void
) => {
  // const router = useRouter();

  try {
    const loadRazorpayScript = () => {
      return new Promise<boolean>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!, // ✅ add !
      amount: grandTotal * 100,
      currency: "INR",
      name: "Challan Pay",
      description: "Challan Payment",
      handler: async function (response: { razorpay_payment_id: string }) {
        //console.log("✅ Razorpay payment success:", response);
        //  setLoading(true);
        // document.getElementById("loader").style.display = "block";

        // 🔹 Step 2: Send payment info to your API
        const payload: CreateIncidentPayload = {
          challanIds,
          potentialDiscount,
          grandTotal,
          rewardGiven,
          razorpayPaymentId: response.razorpay_payment_id,
        };

        try {
          const apiResponse = await postRequest<CreateIncidentResponse>(
            "/v1/d-to-c/create-incidents",
            payload as unknown as Record<string, unknown>
          );
          console.log("Incident created:", apiResponse.data);
          if (typeof window !== "undefined") {
            sessionStorage.setItem(
              "paymentDetail",
              JSON.stringify(apiResponse.data)
            );
          }
          router.push(`/payment-success/${grandTotal}`);
        } catch (apiError) {
          console.error("Error creating incident:", apiError);
          alert("Payment succeeded, but failed to record in system.");
        }
      },
      modal: {
        ondismiss: function () {
          console.log("❌ Payment cancelled by user");
          alert("Payment cancelled.");
        },
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#000",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", (response) => {
      console.error("❌ Payment failed:", response.error);
    });

    rzp.open();
  } catch (error) {
    console.error("Payment process failed:", error);
    alert("Something went wrong while processing payment.");
  }
};
