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

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2 ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo/text-logo.svg" // Path to your logo in public folder
            alt="Challan Pay Logo"
            width={108} // Adjust width
            height={28} // Adjust height
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-blue-600">
                    How It Work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-blue-600">
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-gray-700 hover:text-blue-600">
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="default">Check Challan Status</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="w-9  flex border-1 rounded-lg justify-center item-center ">
              <Button variant="ghost" size="icon" className="md:hidden mt-0">
                <Menu className="h-6 w-6 " />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-[240px] rounded-b-xl">
            <nav className="flex flex-col  mx-3 gap-4 mt-3">
              <SheetClose asChild>
                <Link href="/">
                  <Image
                    src="/logo/text-logo.svg" // Path to your logo in public folder
                    alt="Challan Pay Logo"
                    width={108} // Adjust width
                    height={28} // Adjust height
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
                <Link href="/" className="text-gray-900 hover:text-blue-600">
                  How it Works
                </Link>
              </SheetClose>
              {/* <SheetClose asChild>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-blue-600"
                >
                  Blogs
                </Link>
              </SheetClose> */}
              <SheetClose asChild>
                <Link href="#" className="text-gray-900 hover:text-blue-600">
                  Support
                </Link>
              </SheetClose>
              <Button className="bg-cyan-600 w-40 rounded-md">
                Track Status
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
