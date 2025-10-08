// app/challan-status-login/page.tsx
import { Suspense } from "react";
import ChallanStatusLogin from "./ChallanStatusLogin";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChallanStatusLogin />
    </Suspense>
  );
}
