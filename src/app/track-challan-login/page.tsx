// app/challan-status-login/page.tsx
import { Suspense } from "react";
import TrackStatusLogin from "./TrackStatusLogin";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      }
    >
      <TrackStatusLogin />
    </Suspense>
  );
}
