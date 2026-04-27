"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      num: "02",
      category: "Portfolio",
      title: "Frontend Freelance",
      description:
        "Designed modern portfolio interfaces with smooth animations and clean UI.",
      stack: ["Tailwind", "React"],
      image: "/portfolio.png",
      live: "https://rajushrestha.vercel.app/",
    },
  ];

  return (
    <section className="py-18">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">Projects</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A collection of{" "}
            <span className="text-[var(--color-accent)]">frontend work</span>{" "}
            showcasing clean UI and performance.
          </p>
        </motion.div>

        <div className="flex flex-col gap-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-white/40">
                      — {project.num}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-3xl xl:text-5xl font-semibold">
                    {project.category}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-accent)]">
                    {project.title}
                  </p>

                  <p className="mt-6 text-white/60 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 mt-6 text-sm group hover:text-[var(--color-accent)]"
                    >
                      View project
                      <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                    </Link>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  className="relative w-full h-[260px] xl:h-[320px] rounded-lg overflow-hidden border border-white/10"
                >
                  <Image
                    src={project.image}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt={project.title}
                    className="object-cover object-[10%_40%] hover:scale-105 transition duration-500"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
