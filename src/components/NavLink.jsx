import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname.startsWith(href) && "bg-sky-600 px-4 py-2"}`}
    >
      {children}
    </Link>
  );
}
