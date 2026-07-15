import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
      <h2 className="text-5xl">404 | Page not found</h2>
      <Link href={"/"} className="underline">
        Go to Home
      </Link>
    </div>
  );
}
