import Logo from "@/components/Logo";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="col-span-3 border-r-2 pr-5">
        <Logo />
        <nav className="mt-5">
          <ul className="space-y-5">
            <li>
              <Link
                href="/dashboard/add-story"
                className="bg-gray-400 py-2 px-6 rounded w-full inline-block"
              >
                Add Story
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="bg-gray-400 py-2 px-6 rounded w-full inline-block"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="bg-gray-400 py-2 px-6 rounded w-full inline-block"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-9">{children}</div>
    </section>
  );
}
