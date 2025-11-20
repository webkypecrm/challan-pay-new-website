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
import { useState } from "react"; // ✅ added

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // ✅ added

  const handleTrackChallanDashboard = () => {
    router.push("/track-challan-login");
  };

  const handleScrollToHowItWorks = () => {
    if (pathname === "/") {
      const section = document.getElementById("how-it-works");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#how-it-works");
    }
  };

  const handleScrollToSupport = () => {
    if (pathname === "/") {
      const section = document.getElementById("support");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#support");
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-2 lg:max-w-7xl lg:py-4">
        {/* Logo */}
        <Link href="/" className="hidden lg:block">
          <Image
            src="/logo/text-logo-png.png"
            alt="Challan Pay Logo"
            width={200}
            height={35}
            className="object-contain "
          />
        </Link>

        <Link href="/" className=" block lg:hidden">
          <Image
            src="/logo/text-logo-png.png"
            alt="Challan Pay Logo"
            width={180}
            height={35}
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
                    e.preventDefault();
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
                    e.preventDefault();
                    handleScrollToSupport();
                  }}
                >
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-cyan-600">
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog-listing">
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-cyan-600">
                    Blogs
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

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          {" "}
          {/* ✅ updated */}
          <SheetTrigger asChild>
            <div className="w-9 lg:hidden  flex border-1 rounded-lg justify-center item-center ">
              <Button variant="ghost" size="icon" className="md:hidden mt-0">
                <Menu className="h-6 w-6 " />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-[290px] rounded-b-xl">
            <nav className="flex flex-col  mx-3 gap-4 mt-3">
              <SheetClose asChild>
                <Link href="/">
                  <Image
                    src="/logo/text-logo-png.png"
                    alt="Challan Pay Logo"
                    width={200}
                    height={35}
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

              {/* ✅ Close Sheet + Scroll */}
              <Link
                href="/"
                className="text-gray-900 hover:text-cyan-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToHowItWorks();
                  setOpen(false); // ✅ close sheet
                }}
              >
                How it Works
              </Link>

              <Link
                href="#"
                className="text-gray-900 hover:text-cyan-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSupport();
                  setOpen(false); // ✅ close sheet
                }}
              >
                Support
              </Link>
              <Link
                href="/blog-listing"
                className="text-gray-900 hover:text-cyan-600"
              >
                Blogs
              </Link>

              <Button
                className="bg-cyan-600 w-40 rounded-md"
                onClick={() => {
                  handleTrackChallanDashboard();
                  setOpen(false); // ✅ close sheet
                }}
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
