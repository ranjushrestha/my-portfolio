import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[var(--color-primary)]/60 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 h-20 flex items-center justify-between">
        <div className="shrink-0">
          <Link href="/" className="block">
            <h1 className="text-xl font-bold leading-none">Ranju Shrestha</h1>
          </Link>
          <p className="mt-1 text-sm leading-none text-gray-400">
            Frontend Developer
          </p>
        </div>

        <div className="flex h-10 w-10 lg:w-auto items-center justify-end shrink-0">
          <div className="hidden lg:flex">
            <Nav />
          </div>

          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;