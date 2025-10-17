"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

interface User {
  subscriber: {
    name?: string;
    imageUrl?: string;
  };
  vehicle: {
    vehicleNo?: string;
  };
}
export default function AuthHeader() {
  const { logout } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <Image
            src="/logo/text-logo.svg"
            alt="Challan Pay Logo"
            width={108}
            height={28}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          {user && (
            <>
              {/* Vehicle Number */}
              <div className="text-gray-700 font-medium">
                Vehicle:{" "}
                <span className="font-semibold">
                  {user?.vehicle?.vehicleNo || "N/A"}
                </span>
              </div>

              {/* User Name */}
              <div className="text-gray-700 font-medium">
                {user?.subscriber?.name || "User"}
              </div>

              {/* User Image */}
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src={user?.subscriber?.imageUrl || "/default-user.png"}
                  alt="User Image"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              {/* Logout */}
              <Button
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="w-full h-[280px] rounded-b-xl">
              <div className="flex justify-between items-center p-2">
                <Link href="/">
                  <Image
                    src="/logo/text-logo.svg"
                    alt="Challan Pay Logo"
                    width={108}
                    height={28}
                    className="object-contain"
                  />
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col gap-4 p-4">
                {user && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={user?.subscriber?.imageUrl || "/default-user.png"}
                        alt="User Image"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        {user?.subscriber?.name || "User"}
                      </div>
                      <div className="text-gray-600 text-sm">
                        Vehicle: {user?.vehicle?.vehicleNo || "N/A"}
                      </div>
                    </div>
                  </div>
                )}

                {user && (
                  <Button
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
