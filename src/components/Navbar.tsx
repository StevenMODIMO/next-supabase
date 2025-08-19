"use client";
import { useEffect } from "react";
import { Moon, Sun, PanelRightClose } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function Navbar() {
  const supabase = createClient();
  const { setTheme } = useTheme();
  useEffect(() => {
    const getUserProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    };
    getUserProfile();
  }, []);
  return (
    <div className="p-2 font-medium text-sm">
      <nav className="flex items-center justify-between">
        <div className="relative w-8 h-8">
          <Image src="/logo.svg" alt="logo" fill={true} />
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="p-2 rounded hover:bg-gray-100 transition-all duration-150 ease-in-out"
            href="/"
          >
            Home
          </Link>
          <Link
            className="p-2 rounded hover:bg-gray-100 transition-all duration-150 ease-in-out"
            href="/account"
          >
            Account
          </Link>
          <Link
            className="p-2 rounded hover:bg-gray-100 transition-all duration-150 ease-in-out"
            href="/settings"
          >
            Settings
          </Link>
          <Link
            className="p-2 rounded hover:bg-gray-100 transition-all duration-150 ease-in-out"
            href="/signup"
          >
            Signup
          </Link>
          <Link
            className="p-2 rounded hover:bg-gray-100 transition-all duration-150 ease-in-out"
            href="/login"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
