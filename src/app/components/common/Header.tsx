"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, XIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
//import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const handleTrackChallanDashboard = () => {
    router.push("/track-challan-login");
  };
  const pathname = usePathname();

  const handleScrollToHowItWorks = () => {
    if (pathname === "/") {
      // Already on home — smooth scroll to section
      const section = document.getElementById("how-it-works");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home, then scroll after navigation
      router.push("/#how-it-works");
    }
  };

  const handleScrollToSupport = () => {
    if (pathname === "/") {
      // Already on home — smooth scroll to section
      const section = document.getElementById("support");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home, then scroll after navigation
      router.push("/#support");
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2 lg:max-w-7xl lg:py-6 ">
        {/* Logo */}
        <Link href="/" className="hidden lg:block">
          <Image
            src="/logo/text-logo-png.png" // Path to your logo in public folder
            alt="Challan Pay Logo"
            width={250} // Adjust width
            height={50} // Adjust height
            className="object-contain "
          />
        </Link>

        <Link href="/" className=" block lg:hidden">
          <Image
            src="/logo/text-logo-png.png" // Path to your logo in public folder
            alt="Challan Pay Logo"
            width={180} // Adjust width
            height={35} // Adjust height
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center  space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent actual navigation
                    handleScrollToHowItWorks();
                  }}
                >
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-cyan-600">
                    How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent actual navigation
                    handleScrollToSupport();
                  }}
                >
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-cyan-600">
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="default"
            className="bg-cyan-600"
            onClick={handleTrackChallanDashboard}
          >
            Track Challan Status
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="w-9 lg:hidden  flex border-1 rounded-lg justify-center item-center ">
              <Button variant="ghost" size="icon" className="md:hidden mt-0">
                <Menu className="h-6 w-6 " />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-[260px] rounded-b-xl">
            <nav className="flex flex-col  mx-3 gap-4 mt-3">
              <SheetClose asChild>
                <Link href="/">
                  <Image
                    src="/logo/text-logo-png.png" // Path to your logo in public folder
                    alt="Challan Pay Logo"
                    width={200} // Adjust width
                    height={40} // Adjust height
                    className="object-contain"
                  />
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-6 p-3 border border-gray-200"
                >
                  <XIcon />
                </Button>
              </SheetClose>
              <hr />
              <SheetClose asChild>
                <Link
                  href="/"
                  className="text-gray-900 hover:text-cyan-600"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent actual navigation
                    handleScrollToHowItWorks();
                  }}
                >
                  How it Works
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="#"
                  className="text-gray-900 hover:text-cyan-600"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent actual navigation
                    handleScrollToSupport();
                  }}
                >
                  Support
                </Link>
              </SheetClose>
              <Button
                className="bg-cyan-600 w-40 rounded-md"
                onClick={handleTrackChallanDashboard}
              >
                Track Challan Status
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
