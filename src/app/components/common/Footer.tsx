"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-200 ">
      <div className="container mx-auto px-2 py-2 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* About / Logo Section */}
        <Card className="p-2 shadow-none flex flex-col items-start">
          <Image
            src="/logo/text-logo.svg" // replace with your image path
            alt="Challan Pay Logo"
            width={140}
            height={80}
            className="object-contain"
          />
          <div className="text-[#0A0A0A] text-sm font-bold">
            Indias most trusted platform for traffic
            <br />
            <span>challan resolution.</span>
          </div>
          <div className="text-[13px] mt-2">
            ChallanPay by LAWYERED <br /> Sproutech Solutions Private Limited
            <br />
            India Accelerator Coworking, Lower Ground Floor,
            <br /> LG-007-02,
            <br /> MGF Metropolis Mall, MG Road, Gurugram, Haryana,
            <br /> 122002
          </div>
        </Card>

        {/* Quick Links */}
        <div className="flex justify-between">
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
        {/* Legal */}
        <Card className="p-2 pt-0 shadow-none">
          <h3 className="text-base font-bold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-500">
                Terms of Services
              </Link>
            </li>
          </ul>
        </Card>
      </div>
      <Card>
        <ul className="mt-1 flex items-center justify-center">
          <li className="flex items-center space-x-3">
            <Link
              href="https://wa.me/9199884411033"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp size={32} />
            </Link>

            <Link
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={32} />
            </Link>

            <Link
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook size={32} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/yourpage"
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
        &copy; {new Date().getFullYear()} Challan Pay. All Rights Reserved.
      </div>
    </footer>
  );
}
