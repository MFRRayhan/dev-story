import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
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
