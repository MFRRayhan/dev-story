"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return <></>;
  if (pathname.startsWith("/login")) return <></>;
  if (pathname.startsWith("/register")) return <></>;

  return (
    <div className="container mx-auto py-5">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}
