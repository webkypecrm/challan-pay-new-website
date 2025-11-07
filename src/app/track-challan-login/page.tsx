// app/challan-status-login/page.tsx
import { Suspense } from "react";
import TrackStatusLogin from "./TrackStatusLogin";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      {" "}
      <TrackStatusLogin />
    </Suspense>
  );
}
