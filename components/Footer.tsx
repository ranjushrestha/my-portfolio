import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left">
          <span className="text-sm text-white/60">
            © {new Date().getFullYear()} Ranju Shrestha. All rights reserved.
          </span>

          <Social
            containerStyles="flex gap-4"
            iconsStyles="w-9 h-9 border border-[var(--color-accent)] rounded-full flex justify-center items-center text-[var(--color-accent)] text-base hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-500"
          />

          <a
            href="mailto:ranjustha8844@gmail.com?subject=Let's%20work%20together"
            className="text-sm text-white/70 hover:text-[var(--color-accent)] transition"
          >
            ranjustha8844@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;