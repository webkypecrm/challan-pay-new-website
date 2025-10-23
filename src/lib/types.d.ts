interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name?: string;
  description?: string;
  order_id?: string;
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

// Define a strict type for the error object
interface RazorpayError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: {
    order_id: string;
    payment_id?: string;
  };
}

interface RazorpayInstance {
  open(): void;
  on(
    event: "payment.failed",
    handler: (response: { error: RazorpayError }) => void
  ): void;
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

interface Window {
  Razorpay: RazorpayConstructor;
}

// types/dashboard.ts
export interface DashboardResponse {
  data: {
    activeVehicles: number;
    challansResolved: number;
    pendingChallans: number;
    submittedChallans: number;
    refundChallans: number;
    totalRewardsEarned: number;
  };
}

export interface Incident {
  id: number;
  challanNo: string;
  challanInvoice: string;
  vehicleNo: string;
  vehicleType: string;
  driverName: string;
  driverPhone: string;
  incidentType: string;
  incidentStory: string;
  incidentArea: string;
  incidentCity: string;
  incidentState: string;
  roadName: string;
  latestStatus: string;
  latestSecondaryStatus: string;
  resolutionDate: string;
  subscriptionExpires: string;
  transactionId: string;
  attachment: string;
  rcDocument: string;
  aadhaarFrontDocument: string;
  aadhaarBackDocument: string;
  otherDocument: string;
  activeSubscription: string;
  addedBy: string;
  addedByComment: string;
  address: string;
  pincode: string;
  createdAt: string;
  courtChallan: boolean;
  // Add any other fields if necessary
}

export interface IncidentsData {
  incidents: Incident[];
  lastCursorId: number;
}

export interface IncidentsApiResponse {
  status: "success" | "error"; // or just string if there are more statuses
  message: string;
  data: IncidentsData;
}

interface FollowUp {
  id: string | number;
  time: string; // ISO or formatted date string
  title: string;
  status?: "success" | "error" | "default";
  link?: string;
  createdAt: string;
  comment: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name?: string;
  description?: string;
  image?: string;
  order_id?: string;
  handler?: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: {
    order_id: string;
    payment_id: string;
  };
}

interface RazorpayInstance {
  open(): void;
  on(
    event: "payment.failed",
    callback: (response: { error: RazorpayError }) => void
  ): void;
}
