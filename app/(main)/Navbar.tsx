"use client";

import { ModeToggle } from "@/components/ThemeDropDown";
import logo from "@/public/logo.svg";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="shadow-sm bg-slate-100 dark:bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">
            Resume Builder
          </span>
        </Link>
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems></UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
