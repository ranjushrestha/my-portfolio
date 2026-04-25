"use client";

import React from "react";

const toolkitData = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind / SCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Web Fundamentals",
    items: [
      "Component architecture",
      "State management",
      "Data fetching",
      "Accessibility (a11y)",
      "Responsive design",
      "SEO basics",
    ],
  },
  {
    title: "Deployment",
    items: [
      "Vercel (deployment, CI/CD)",
      "Build & bundling",
      "Performance optimization",
    ],
  },
];

const Toolkit = () => {
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        {/* header */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-xl tracking-widest uppercase">Toolkit</h2>
          <div className="flex-1 border-b border-white/10"></div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
          {toolkitData.map((section, index) => (
            <div key={index}>
              <h3 className="mb-6 text-[var(--color-accent)] font-medium">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-white/10 pb-2 last:border-none text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
