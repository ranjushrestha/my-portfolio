"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger className="flex h-10 w-10 shrink-0 items-center justify-center focus:outline-none">
        <CiMenuFries className="text-[32px] text-[var(--color-accent)]" />
      </SheetTrigger>

      {/* Content */}
      <SheetContent
        className="
          bg-[var(--color-primary)] text-white
          p-6
          [&>button]:top-6 
          [&>button]:right-6 
          [&>button]:text-[var(--color-accent)] 
          [&>button]:focus:outline-none 
          [&>button]:focus:ring-0
        "
      >
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

        {/* Top */}
        <div className="mt-6 mb-20">
          <SheetClose asChild>
            <Link href="/" className="block">
              <h1 className="text-xl font-bold">Ranju Shrestha</h1>
            </Link>
          </SheetClose>

          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, idx) => (
            <SheetClose asChild key={idx}>
              <Link
                href={link.path}
                className={`text-xl capitalize transition-all ${
                  link.path === pathname
                    ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                    : "text-gray-400 hover:text-[var(--color-accent-hover)]"
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;