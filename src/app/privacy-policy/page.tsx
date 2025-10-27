import React from "react";
import Header from "../components/common/Header";
import Image from "next/image";

function PrivacyPolicy() {
  return (
    <div className="lg:bg-slate-100">
      <Header />
      <div className="px-4 bg-white">
        <div className="text-2xl font-bold pt-4">Privacy Policy</div>
        <div className="flex justify-center items-center rounded-md mt-4">
          <Image
            src="/Images/privacy.png"
            alt="car image"
            width={400}
            height={300}
            className="object-contain "
          />
        </div>
      </div>
      <div className="min-h-screen md:px-20">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-4">
          <section>
            <p className="text-black text-sm md:text-base mb-3">
              <strong>Effective Date:</strong> August 8, 2025
            </p>
          </section>
          <section>
            <h2 className="text-sm font-bold text-black mb-3">1. BACKGROUND</h2>

            {/* 1.1 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>1.1</strong> Sproutech Solutions Private Limited, having
                its office at MGF Metropolis Mall, Ground Floor LG-006,
                Mehrauli-Gurgaon Rd, Sector 28, Gurugram, Haryana 122002, India
                (Us, We, or Our) operate the website Challan Pay (the
                "Website"). The Website and App, along with all associated
                software, design, servers, data, user inputs and associated
                services shall collectively be known as the Platform. The
                services we provide to you via the Platform shall be known as
                the Services.
              </p>
            </div>

            {/* 1.2 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>1.2</strong> Welcome to Challan Pay, (we, us, or our).
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit and use our website and services, which
                facilitate the online settlement of challans through court, Lok
                Adalat, and similar mechanisms. This Privacy Policy does not
                apply to any third-party websites or applications. Please note
                that you shall visit any third-party sites and apps at your own
                risk upon conditions laid down in their privacy policies, if
                any.
              </p>
            </div>

            {/* 1.3 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>1.3</strong> We may change, modify, amend, terminate or
                replace this Privacy Policy at any time at our discretion. If We
                change, modify, amend or terminate this Privacy Policy, such
                modifications will become effective immediately upon posting to
                the Website and/or App. Your continued use of the Services
                following any such modification shall constitute your binding
                acceptance of the updated Privacy Policy, irrespective of
                whether you have read the updated version.
              </p>
            </div>

            {/* 1.4 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>1.4</strong> We will not use or share your information
                with anyone except as described in this Privacy Policy and as
                otherwise permitted by applicable law, regulation, or with your
                implied consent through continued use of the Services. We use
                your information for providing and improving the Services. By
                using the Services, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* 1.5 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>1.5</strong> You agree to periodically review the
                current version of the Privacy Policy, as posted on the Website
                or the App. If you do not agree with the terms of this Privacy
                Policy, please do not use the Services.
              </p>
            </div>

            {/* 1.6 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>1.6</strong> This Privacy Policy is to be read with, and
                is an integral part of, our Terms of Use available at{" "}
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Link of terms of use (Challanpay)
                </a>
                . Unless otherwise defined in this Privacy Policy, terms used in
                this Privacy Policy have the same meanings as in our Terms of
                Use.
              </p>
            </div>
          </section>
          {/* 2. COLLECTION OF INFORMATION */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3">
              2. COLLECTION OF INFORMATION
            </h2>

            {/* 2.1 */}
            <div className="space-y-2">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>2.1</strong> While using Our services, We may ask you to
                provide certain personally identifiable information (PII) that
                can be used to contact or identify You. PII includes, but is not
                limited to, your name, phone number, postal address, email
                address and other information that by itself, or in conjunction
                with other information, can be used to specifically identify
                you. However, PII does not include aggregated information that,
                by itself, does not permit identification.
              </p>
            </div>

            {/* 2.2 */}
            <div className="space-y-4 mt-4">
              <p className="text-gray-800 leading-relaxed text-sm mb-3">
                <strong>2.2</strong> Information that we collect when you use
                our services includes:
              </p>

              {/* Personal Data */}
              <div>
                <h3 className="text-sm font-medium text-black mb-1">
                  Personal Data:
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm mb-3">
                  When you sign up and register with us through Website and/or
                  App, We ask for certain information. This will include your
                  name, email address, mobile number, and vehicle number.
                </p>
              </div>

              {/* Log Data */}
              <div>
                <h3 className="text-sm font-medium text-black mb-1">
                  Log Data:
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm mb-3">
                  This Log Data includes information such as your computers
                  Internet Protocol (IP) address, geolocation and geospatial
                  data, browser type and browser version. In case you are
                  accessing the App, we may collect certain mobile device
                  information such as device ID, model number, operating system,
                  global positioning data, application, and other related
                  information. We also collect data on the pages of our Services
                  that you visit, the time and date of your visit, the time
                  spent on those pages, default language and user preferences,
                  and other similar usage related statistics. We may assign each
                  user of the Services unique identifiers to help keep track of
                  future visits.
                </p>
              </div>

              {/* Payment Data */}
              <div>
                <h3 className="text-sm font-medium text-black mb-1">
                  Payment Data:
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm mb-3">
                  Our Services require you to make payments on the Platform.
                  When you are making any payments, we collect billing details
                  from you such as your name, billing address, contact number,
                  payment method and IP address, and then redirect you to a
                  secure payment service provider platform operated by our
                  payments partner(s) such as Razorpay, Paytm and other payment
                  partners which may be added from time to time. We do not store
                  any payment related information such as credit/debit card
                  details and/or bank details.
                </p>
              </div>

              {/* Cookie Policy */}
              <div>
                <h3 className="text-sm font-medium text-black mb-1">
                  Use of Cookies and Other Tracking Technologies (Cookie
                  Policy):
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm mb-3">
                  We may store session information, cookies, pixels, web beacons
                  and other technologies to recognize your needs and to enhance
                  your experience on our website including improving security,
                  preventing fraudulent activity, and reporting. You have the
                  option to manage your cookies preferences through your browser
                  settings or by opting out of certain third-party tracking
                  mechanisms. Third parties may include marketing agencies,
                  social media networks, analytic services, search engines, etc.
                  However, please note that disabling cookies may limit your
                  ability to access certain features of our website or services.
                </p>
              </div>

              {/* Controlling Online Ads */}
              <div>
                <h3 className="text-sm font-medium text-black mb-1">
                  Controlling Online Interest-Based Ads:
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm mb-3">
                  We sometimes work with online advertising vendors to provide
                  you with relevant and useful ads. This may include ads served
                  on other companies websites. These ads may be based on
                  information collected by us or third parties. For example,
                  your geographical location may be used to target an ad for
                  people in your area. These ads may also be based on your
                  activities on our Sites or on third party websites.
                </p>
              </div>
            </div>
          </section>
          {/* 3. DISCLOSURE OF YOUR INFORMATION */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3">
              3. DISCLOSURE OF YOUR INFORMATION
            </h2>

            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              We may share your information under the following circumstances:
            </p>

            <ul className="list-disc text-sm list-inside space-y-2 text-gray-800 leading-relaxed">
              <li>
                <strong>
                  With courts, Lok Adalats, and government agencies:
                </strong>
                &nbsp;As necessary for challan resolution and compliance with
                applicable laws.
              </li>
              <li>
                <strong>
                  With service partners under confidentiality agreements:
                </strong>
                &nbsp;We may engage trusted partners to deliver certain aspects
                of our services while ensuring that your personal information
                remains protected and used solely for authorized purposes.
              </li>
              <li>
                <strong>With our affiliates and business associates:</strong>
                &nbsp;Including group companies, investors, marketing partners,
                and other third parties engaged for legitimate business
                purposes, under confidentiality agreements where reasonably
                practicable.
              </li>
              <li>
                <strong>When required by law or government request:</strong>
                &nbsp;We may disclose information as legally mandated or
                requested by courts, tribunals, regulatory authorities, or other
                authorized bodies.
              </li>
              <li>
                <strong>In case of business restructuring:</strong>
                &nbsp;If there is a merger, acquisition, restructuring, or sale
                of business assets, your data may be transferred as part of
                business continuity, subject to the same obligations of
                confidentiality.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
