"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return <></>;

  return (
    <div className="container mx-auto py-5">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl font-bold">
          Dev Story
        </Link>
        <Navbar />
      </div>
    </div>
  );
}
