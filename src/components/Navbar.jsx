import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/stories">Stories</Link>
        </li>
        <li>
          <Link href="/tutorials">Tutorials</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
