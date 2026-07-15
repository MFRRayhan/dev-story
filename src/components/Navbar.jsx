import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/stories">Stories</NavLink>
        </li>
        <li>
          <NavLink href="/tutorials">Tutorials</NavLink>
        </li>
        <li>
          <NavLink href="/login">Login</NavLink>
        </li>
        <li>
          <NavLink href="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}
