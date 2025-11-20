import { Suspense } from "react";
import ChallanStatusLogin from "./ChallanStatusLogin";
import Footer from "../components/common/Footer";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ChallanStatusLogin />
      <Footer />
    </Suspense>
  );
}
