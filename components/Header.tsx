import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="border-b border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* LEFT SIDE */}
        <div>
          <Link href="/" className="block">
            <h1 className="text-xl font-bold">Ranju Shrestha</h1>
          </Link>
          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* desktop navbar */}
          <div className="hidden xl:flex">
            <Nav />
          </div>

          {/* mobile navbar */}
          <div className="xl:hidden">
            <MobileNav/>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;