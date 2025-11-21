"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-200 lg:bg-white">
      <div className="container mx-auto px-2 py-2 grid grid-cols-1 lg:flex lg:justify-between md:grid-cols-4 gap-4 lg:px-33">
        {/* About / Logo Section */}
        <Card className="p-2 shadow-none flex flex-col items-start">
          <Image
            src="/logo/text-logo-png.png" // Path to your logo in public folder
            alt="ChallanPay Logo"
            width={200} // Adjust width
            height={40} // Adjust height
            className="object-contain"
          />
          <div className="text-[#0A0A0A] text-sm font-bold">
            {"India's most trusted platform for traffic"}
            <br />
            <span>challan resolution.</span>
          </div>
          <div className="text-[13px] mt-2">
            ChallanPay by{" "}
            <Link href={"https://lawyered.in/"} className="text-blue-700">
              LAWYERED
            </Link>
            <br /> Sproutech Solutions Private Limited
            <br />
            India Accelerator Coworking, Lower Ground Floor, LG-007-02, MGF{" "}
            <br />
            Metropolis Mall, MG Road, Gurugram, Haryana, 122002
          </div>
        </Card>

        {/* Quick Links */}
        <div className="flex justify-between lg:hidden">
          <Card className="p-2 shadow-none">
            <h3 className="text-base font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Track Challan
                </Link>
              </li>
              {/* <li>
                <Link href="/blogs" className="hover:text-blue-500">
                  Blogs
                </Link>
              </li> */}
            </ul>
          </Card>
          <Card className="p-2 shadow-none">
            <h3 className="text-base font-bold mb-2">Support</h3>
            <ul className="space-y-2 mb-4">
              {/* <li>
                Call:{" "}
                <Link href="tel:9199884411033" className="hover:text-blue-500">
                  99884411033
                </Link>
              </li> */}
              <li>
                <Link
                  href="mailto:challan.support@lawyered.in"
                  className="hover:text-blue-500"
                >
                  challan.support@lawyered.in
                </Link>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-2 shadow-none hidden lg:flex">
          <h3 className="text-base font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Track Challan
              </Link>
            </li>
          </ul>
        </Card>
        <Card className="p-2 shadow-none hidden lg:flex">
          <h3 className="text-base font-bold mb-2">Support</h3>
          <ul className="space-y-2 mb-4">
            {/* <li>
                Call:{" "}
                <Link href="tel:9199884411033" className="hover:text-blue-500">
                  99884411033
                </Link>
              </li> */}
            <li>
              <Link
                href="mailto:challan.support@lawyered.in"
                className="hover:text-blue-500"
              >
                challan.support@lawyered.in
              </Link>
            </li>
          </ul>
        </Card>
        {/* Legal */}
        <Card className="p-2 pt-0 shadow-none lg:pt-2">
          <h3 className="text-base font-bold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="hover:text-blue-500">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </Card>
      </div>
      <Card>
        <ul className="mt-1 flex items-center justify-center">
          <li className="flex items-center space-x-3">
            <Link
              href="https://x.com/challanpay25389?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                className="text-black"
              />
            </Link>

            <Link
              href="https://www.instagram.com/challanpay.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={32} />
            </Link>

            <Link
              href="https://www.facebook.com/share/17kdM2BvuV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook size={32} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/challanpay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={32} />
            </Link>
          </li>
        </ul>
      </Card>

      <div className="bg-black text-center text-sm py-4">
        &copy; {new Date().getFullYear()} ChallanPay. All Rights Reserved.
      </div>
    </footer>
  );
}
