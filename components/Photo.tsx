"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[260px] xl:min-h-[380px]">
      <motion.div
        className="absolute z-0 w-[280px] h-[280px] xl:w-[380px] xl:h-[380px] 
        rounded-full blur-3xl opacity-60"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 shrink-0 w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 
      rounded-full overflow-hidden border-4 border-[var(--color-accent)]">
        <Image
          src="/ranju.png"
          fill
          alt="profile picture"
          className="object-cover  object-[60%_40%]"
          priority
        />
      </div>
    </div>
  );
};

export default Photo;