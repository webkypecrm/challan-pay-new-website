import React from "react";
import Header from "../components/common/Header";
import Image from "next/image";
import Footer from "../components/common/Footer";

function PrivacyPolicy() {
  return (
    <div className="lg:bg-white">
      <Header />
      {/* <div className="px-4 bg-white">
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
      </div> */}
      <div className="px-4 bg-white lg:flex lg:justify-around  lg:items-center lg:border lg:rounded-none lg:mx-32 lg:mt-38">
        <div className="text-2xl font-bold pt-4 lg:hidden block">
          Privacy Policy
        </div>
        <div className="text-6xl font-bold pt-4 lg:block hidden uppercase">
          Privacy <br /> Policy
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 lg:rounded-0 lg:mt-0 block lg:hidden">
          <Image
            src="/Images/privacy.png"
            alt="car image"
            width={400}
            height={300}
            className="object-contain "
          />
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 lg:rounded-0 lg:mt-0 lg:block hidden p-2">
          <Image
            src="/Images/privacy-png.png"
            alt="car image"
            width={400}
            height={300}
            className="object-contain "
          />
        </div>
      </div>
      <div className="min-h-screen md:px-20 lg:mb-10">
        <div className="max-w-4xl mx-auto bg-white  rounded-2xl p-4 lg:max-w-[1290px] lg:mt-15 lg:rounded-none lg:shadow-none">
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
                (Us, We, or Our) operate the website Challan Pay (the Website).
                The Website and App, along with all associated software, design,
                servers, data, user inputs and associated services shall
                collectively be known as the Platform. The services we provide
                to you via the Platform shall be known as the Services.
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
                  href="https://www.challanpay.in/terms-and-condition"
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
          {/* 4. HOW WE USE YOUR INFORMATION */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3">
              4. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-800 text-sm space-y-2">
              <li>
                To verify your identity and process challan-related services;
              </li>
              <li>
                To enable challan payment, contestation, or tracking through
                authorized government portals;
              </li>
              <li>
                To provide customer support, assistance, and troubleshooting;
              </li>
              <li>
                To communicate with you about your transactions, updates, or
                notifications;
              </li>
              <li>
                To manage our operations, internal record keeping, and improve
                services;
              </li>
              <li>
                To send promotional offers, surveys, and marketing
                communications (only with consent);
              </li>
              <li>
                To ensure compliance with applicable laws, court orders, and
                regulatory requirements;
              </li>
              <li>
                To detect, prevent, and investigate fraudulent or unauthorized
                activities;
              </li>
              <li>
                To personalize your experience and recommend relevant services;
              </li>
              <li>
                To perform analytics and research to improve platform
                performance;
              </li>
              <li>
                To enforce our Terms of Use and protect the rights, property, or
                safety of users and others.
              </li>
            </ul>
          </section>

          {/* 5. RIGHTS WITH RESPECT TO YOUR INFORMATION */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3 mt-6">
              5. RIGHTS WITH RESPECT TO YOUR INFORMATION
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-800 text-sm space-y-2">
              <li>
                <strong>Access:</strong> You may request access to the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You may request correction or
                updates to inaccurate or incomplete information.
              </li>
              <li>
                <strong>Erasure:</strong> You may request deletion of your
                personal data, subject to legal obligations.
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> You may withdraw consent
                previously given for processing your data.
              </li>
              <li>
                <strong>Grievance Redressal:</strong> You can contact our
                Grievance Officer for concerns or clarifications.
              </li>
            </ul>
          </section>

          {/* 6. INFORMATION RETENTION AND DELETION */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3 mt-6">
              6. INFORMATION RETENTION AND DELETION
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              We retain your personal and non-personal data for as long as
              necessary to fulfill the purposes described in this Policy,
              including legal, accounting, and reporting obligations. Upon
              completion of your service request, your data may be archived
              securely and retained for up to three (3) years unless a longer
              retention period is required by law.
            </p>
            <p className="text-gray-800 leading-relaxed text-sm">
              You may request deletion of your data at any time, subject to
              legal and regulatory requirements.
            </p>
          </section>

          {/* 7. SECURITY MEASURES AND DISCLAIMER OF LIABILITY */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3 mt-6">
              7. SECURITY MEASURES AND DISCLAIMER OF LIABILITY
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              We implement commercially reasonable technical and organizational
              security measures, including encryption, access controls, regular
              audits, and secure data storage, to protect your personal data.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              Therefore, while we strive to use acceptable means to protect your
              information, we cannot guarantee its absolute security, and we
              disclaim liability for unauthorized access, hacking, data loss, or
              other breaches beyond our control.
            </p>
          </section>

          {/* 8. CHANGES TO THIS PRIVACY POLICY */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3 mt-6">
              8. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              We may modify, revise, or update this Privacy Policy from time to
              time. Such changes will be posted on this page with the updated
              “Effective Date”. Your continued use of the Platform or Services
              after any modification constitutes acceptance of the updated
              Policy.
            </p>
          </section>

          {/* 9. CONTACT US */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3 mt-6">
              9. CONTACT US
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm mb-3">
              For any queries, concerns, or feedback related to this Privacy
              Policy, please contact us at:
            </p>
            <p className="text-gray-800 text-sm">
              <strong>Phone:</strong> 9988441033
            </p>
          </section>

          {/* 10. GRIEVANCE OFFICER */}
          <section>
            <h2 className="text-sm font-bold text-black mb-3 mt-6">
              10. GRIEVANCE OFFICER
            </h2>
            <div className="text-gray-800 text-sm space-y-2">
              <p>
                <strong>Name:</strong> Deeksha Varshney
              </p>
              <p>
                <strong>Mobile:</strong> 8076110124
              </p>
              <p>
                <strong>Email:</strong> Deeksha.varshney@lawyered.in
              </p>
              <p>
                <strong>CIN:</strong> U74900DL2015PTC285360
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
