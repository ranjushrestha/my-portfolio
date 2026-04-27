"use client";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Photo from "@/components/Photo";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 mb-20">
          {/* Photo */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Photo />
          </motion.div>

          {/* Text */}
          <motion.div
            className=" text-center xl:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color-accent)] text-white/90">
              Frontend Developer
            </span>

            <h2 className="mt-5 text-3xl xl:text-4xl font-semibold leading-tight">
              <span className="text-[var(--color-accent)]">Ranju Shrestha</span>
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">
              I’m a frontend developer based in Kathmandu, Nepal. I focus on building modern, responsive web interfaces using React, Next.js, and Tailwind, with an emphasis on performance, usability, and clean UI architecture.
            </p>

            <p className="mt-4 text-white/60 leading-relaxed">
              My work sits at the intersection of design and development. I care not just about how things look, but how they feel and behave. From crafting smooth interactions with Framer Motion to structuring scalable component systems, I focus on building interfaces that are fast, accessible, and maintainable.
            </p>
          </motion.div>
        </div>

        <Experience />
        <Education />
      </div>
    </section>
  );
};

export default About;
