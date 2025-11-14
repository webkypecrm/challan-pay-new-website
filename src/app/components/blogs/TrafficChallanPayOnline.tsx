"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function TrafficChallanPayOnline() {
  const router = useRouter();
  return (
    <div className="min-h-screen  text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-900 border border-gray-300 rounded-lg px-4 py-2 mb-6 hover:bg-gray-100 transition"
        >
          <span className="lg:text-lg text-sm">←</span>
          <span className="font-medium text-sm">Back</span>
        </button>

        {/* Meta Information */}
        <div className="text-sm text-gray-500 mb-4 hidden lg:block">
          {/* <span>Dec 3, 2024</span> • <span>5 min read</span> • */}
          <span>Author: Team ChallanPay</span>
        </div>
        <div className="lg:text-5xl  font-bold lg:my-8 leading-tight text-xl mb-4">
          MetroChallan Guide: Quick Digital Methods for Clearing Fines Across
          NCR
        </div>
        {/* Featured Image */}
        <div className="rounded-sm overflow-hidden lg:mb-8  lg:px-20 mb-4">
          <Image
            src="/blogs/blog07.png" // replace with your own image path
            alt="Traffic compliance"
            width={1200}
            height={900}
            className="w-full h-auto object-cover rounded-sm"
            priority
          />
        </div>

        {/* Article Content */}

        <article className="prose prose-lg  mx-auto lg:px-20  prose-headings:text-gray-900 prose-p:text-gray-900 prose-li:text-gray-900">
          <p className="text-gray-900 mb-6 leading-relaxed">
            Living in the <strong>National Capital Region (NCR)</strong> —
            comprising cities like <strong>Delhi, Noida, Gurugram</strong> and
            adjoining areas — means navigating busy roads, strict traffic rules,
            and sometimes unexpected fines. The good news: many traffic
            violations (commonly referred to as “challans”) can now be cleared
            online.
          </p>

          <p className="text-gray-900 mb-6 leading-relaxed">
            This post walks you through how to check, manage, and pay your
            traffic fines quickly and digitally — including using the platform
            at{" "}
            <Link
              href="https://www.challanpay.in"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              www.challanpay.in
            </Link>{" "}
            (ChallanPay) — and then offers tips to avoid future fines.
          </p>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            {" "}
            Why Use a Digital Platform like ChallanPay?
          </h2>
          <ul className="list-disc list-inside text-gray-900 mb-6 leading-relaxed space-y-1">
            <li>
              With <strong>ChallanPay</strong>, you enter your vehicle number
              and mobile number to get instant access to any outstanding fines.
            </li>
            <li>
              No need to physically visit traffic police stations or wait in
              long queues.
            </li>
            <li>
              Transparent billing process — see the fine, select it, and pay via{" "}
              <strong>UPI, card, net banking</strong> or other digital modes.
            </li>
            <li>
              Particularly useful across NCR where traffic enforcement and
              digital monitoring (CCTVs, automated systems) are increasingly
              rigorous.
            </li>
            <li>
              Helps maintain a clean record — unpaid fines may block your RC
              renewal, vehicle transfer, or invite legal action.
            </li>
          </ul>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            Step-by-Step: How to Check & Pay Your Challan via ChallanPay
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Step</th>
                  <th className="border px-4 py-2 text-left">Action</th>
                  <th className="border px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">1</td>
                  <td className="border px-4 py-2">
                    Visit{" "}
                    <Link
                      href="https://www.challanpay.in"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      www.challanpay.in
                    </Link>{" "}
                    and go to “Check your vehicle”.
                  </td>
                  <td className="border px-4 py-2">
                    Enter registration number and mobile number.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">2</td>
                  <td className="border px-4 py-2">
                    View all pending challans linked to your vehicle.
                  </td>
                  <td className="border px-4 py-2">
                    Platform pulls data from official sources.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">3</td>
                  <td className="border px-4 py-2">
                    Select the challan(s) you want to clear.
                  </td>
                  <td className="border px-4 py-2">
                    You may see fine amount, offence type, date & place.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">4</td>
                  <td className="border px-4 py-2">Proceed to payment.</td>
                  <td className="border px-4 py-2">
                    Choose payment method (UPI, debit/credit card, net banking).
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">5</td>
                  <td className="border px-4 py-2">
                    Download or save the payment receipt.
                  </td>
                  <td className="border px-4 py-2">
                    Keep proof of payment for future disputes.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">6</td>
                  <td className="border px-4 py-2">
                    Verify status as “cleared”.
                  </td>
                  <td className="border px-4 py-2">
                    You can recheck via official portal if needed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-900 mb-6 leading-relaxed">
            <strong>Tip:</strong> Ensure your registered mobile number is
            active, as OTPs or verification codes may be required.
          </p>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            Alternate Official Routes (for the NCR)
          </h2>
          <ul className="list-disc list-inside text-gray-900 mb-6 leading-relaxed space-y-1">
            <li>
              <strong>e-Challan Portal (MoRTH):</strong> Visit{" "}
              <Link
                href="https://echallan.parivahan.gov.in"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                echallan.parivahan.gov.in
              </Link>{" "}
              to check challan status or payments.
            </li>
            <li>
              <strong>Delhi Traffic Police:</strong> Pay pending challans using
              debit card or net banking.
            </li>
            <li>
              <strong>Virtual Courts:</strong> If your challan has gone to
              court, payment can be made via the respective court portal.
            </li>
          </ul>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            {" "}
            Common Offences & Penalties — NCR Snapshot
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Offence</th>
                  <th className="border px-4 py-2 text-left">
                    Approximate Penalty*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    Driving without valid licence
                  </td>
                  <td className="border px-4 py-2">Up to ₹5,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Driving without insurance or PU certificate
                  </td>
                  <td className="border px-4 py-2">
                    ₹2,000 and/or other penalties
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Not wearing helmet or seat-belt
                  </td>
                  <td className="border px-4 py-2">
                    ₹1,000 and/or licence suspension
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Jumping red light / overspeeding
                  </td>
                  <td className="border px-4 py-2">₹1,000 – ₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            *Note: Actual penalties may differ by state or vehicle type — always
            verify your challan.
          </p>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            {" "}
            Why Timely Payment Matters
          </h2>
          <ul className="list-disc list-inside text-gray-900 mb-6 leading-relaxed space-y-1">
            <li>Avoid additional penalties or court escalation.</li>
            <li>Keep your RC, insurance, and documents valid and unblocked.</li>
            <li>Maintain clear legal records and peace of mind.</li>
          </ul>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            {" "}
            Tips to Stay Ahead & Avoid Future Challans
          </h2>
          <ul className="list-disc list-inside text-gray-900 mb-6 leading-relaxed space-y-1">
            <li>
              Carry your valid licence, RC, insurance, and PUC certificate at
              all times.
            </li>
            <li>Follow all speed limits, lane rules, and signal guidelines.</li>
            <li>Check for pending challans regularly online.</li>
            <li>
              If a challan seems incorrect, verify via the official portal
              before paying.
            </li>
            <li>
              Always save your digital receipt and confirm challan status after
              payment.
            </li>
          </ul>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            {" "}
            Why ChallanPay Adds Value in NCR
          </h2>
          <ul className="list-disc list-inside text-gray-900 mb-6 leading-relaxed space-y-1">
            <li>
              Unified platform for Delhi, Noida, and Gurugram challans — all in
              one place.
            </li>
            <li>
              Avoid multiple portals — just “enter vehicle number → view fines →
              pay instantly”.
            </li>
            <li>
              Helps fleet owners, frequent travellers, and households manage
              multiple vehicles.
            </li>
          </ul>

          <h2 className="font-bold lg:text-2xl text-base text-gray-900 mb-4">
            {" "}
            Final Word
          </h2>
          <p>
            {`In NCR’s fast-paced traffic ecosystem, `}
            <strong>digital challan payment</strong> is now a necessity.
            Platforms like{" "}
            <Link
              href="https://www.challanpay.in"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              ChallanPay
            </Link>{" "}
            offer a smooth, reliable, and transparent process to check and clear
            your fines — without queues or confusion.
          </p>

          <p>
            {`Combine that convenience with awareness and safe driving habits, and
            you’ll stay compliant, avoid penalties, and maintain a clean driving
            record. `}
            <strong>
              Drive responsibly — check your vehicle number today!
            </strong>
          </p>
        </article>
      </div>
    </div>
  );
}

export default TrafficChallanPayOnline;
