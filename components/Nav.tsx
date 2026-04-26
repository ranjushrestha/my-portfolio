"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`transition-all capitalize ${
            link.path === pathname
              ? "text-[var(--color-accent)] border-b-2 "
              : "text-gray-400 hover:text-[var(--color-accent-hover)]"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
