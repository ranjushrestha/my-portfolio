"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      num: "01",
      category: "UI Library",
      title: "Amnil Technology",
      description:
        "Built a reusable UI system with modern components, responsive layouts, and scalable architecture. Focused on performance and maintainability.",
      stack: ["React", "Tailwind"],
      image: "/project1.png",
      live:"",
      github: "",
    },
    {
      num: "02",
      category: "Portfolio",
      title: "Frontend Freelance",
      description:
        "Designed and developed modern portfolio interfaces with smooth animations, optimized performance, and clean UI patterns.",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
      image: "/portfolio.png",
      live:"  https://rajushrestha.vercel.app/",
      github: "https://github.com/ranjushrestha/Email-Portfolio",
    },
    {
      num: "03",
      category: "Student Fee Management",
      title: "Amnil Technology",
      description:
        "Created a dashboard-based system for managing student fees, including charts, analytics, and admin controls.",
      stack: ["React", "Chart.js", "Tailwind"],
      image: "/project3.png",
      live:"",
      github: "#",
    },
  ];

  return (
    <section className="py-18">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold">Projects</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A collection of{" "}
            <span className="text-[var(--color-accent)]">
              frontend work
            </span>{" "}
            showcasing responsive design, performance optimization, and clean UI
            architecture.
          </p>
        </div>

        {/* projects */}
        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <div
              key={project.num}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* TEXT */}
              <div>
                {/* number + line */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-white/40">
                    — {project.num}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* title */}
                <h3 className="text-3xl xl:text-5xl font-semibold leading-tight">
                  {project.category}
                </h3>

                {/* category */}
                <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-accent)]">
                  {project.title}
                </p>

                {/* description */}
                <p className="mt-6 text-white/60 leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* stack */}
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

                {/* link */}
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 text-sm group hover:text-[var(--color-accent)] transition"
                >
                  View project
                  <BsArrowUpRight className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>

              {/* IMAGE */}
              <div className="relative w-full h-[260px] xl:h-[320px] rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover object-[10%_10%] hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;