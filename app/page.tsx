"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Toolkit from "@/components/Toolkit";

export default function Home() {
  return (
    <section>
      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row items-center justify-between ">
          
          {/* TEXT */}
          <div className="text-center xl:text-left max-w-xl">
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] opacity-80">
              Software Developer
            </span>

            <h1 className="mt-4 leading-[1.1] font-semibold">
              Hi, I'm <br />
              <span className="text-[var(--color-accent)]">
                Ranju Shrestha
              </span>
            </h1>

            <p className="mt-6 mb-6 text-white/70 text-base leading-relaxed">
              I craft responsive and scalable user interfaces using React and
              Next.js, ensuring fast performance and seamless user experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition flex items-center gap-2"
                >
                  View Projects
                  <IoArrowForward />
                </Button>
              </Link>

              <Social
                containerStyles="flex gap-4"
                iconsStyles="w-9 h-9 border border-[var(--color-accent)] rounded-full flex justify-center items-center text-[var(--color-accent)] text-base hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-500"
              />
            </div>
          </div>

          {/* PHOTO */}
          <div>
            <Photo />
          </div>
        </div>
      </div>

      {/* TOOLKIT */}
      <Toolkit />
    </section>
  );
}