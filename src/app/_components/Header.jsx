"use client";

import React, { use } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import chartDonutSVG from "/public/chart-donut.svg";
import Link from "next/link";

export default function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm bg-red-400">
      <div className="flex flex-row items-center">
        {/*logo*/}
        <Image
          src={chartDonutSVG}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-blue-800 font-bold text-xl">FinanSmart</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full">Get started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
