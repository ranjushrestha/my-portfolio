import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-6 border-b border-white/10 bg-[var(--color-primary)]/60 backdrop-blur-2xl">
      {" "}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div>
          <Link href="/" className="block">
            <h1 className="text-xl font-bold">Ranju Shrestha</h1>
          </Link>
          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>

        <div>
          {/* desktop navbar */}
          <div className="hidden lg:flex">
            <Nav />
          </div>

          {/* mobile navbar */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
