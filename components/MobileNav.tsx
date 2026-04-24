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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet >
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[var(--color-accent)]" />
      </SheetTrigger>
      <SheetContent className="bg-[var(--color-primary)] text-white">
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

        <div className="mt-6 mb-30 p-4">
          <SheetClose asChild>
            <Link href="/" className="block">
              <h1 className="text-xl font-bold">Ranju Shrestha</h1>
            </Link>
          </SheetClose>

          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>

        <nav className="flex justify-between items-center flex-col gap-8">
          {links.map((link, idx) => (
            <SheetClose asChild key={idx}>
              <Link
                href={link.path}
                className={`text-xl capitalize transition-all ${
                  link.path === pathname
                    ? "text-[var(--color-accent)] border-b-2"
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
