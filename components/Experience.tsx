"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      date: "September 2025 – November 2025",
      title: "Front-End Developer Intern",
      company: "Amnil Technologies",
      points: [
        "Built responsive and reusable UI components using React, Next.js, and Tailwind CSS",
        "Worked with Next.js features like app routing and optimized rendering for better performance",
        "Integrated APIs to fetch and display dynamic data in the UI",
        "Collaborated with team members to develop and ship production-ready features",
        "Focused on clean code structure and scalable component architecture",
      ],
    },
  ];

  

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <h2 className="text-3xl font-semibold text-[var(--color-accent)] mb-12">
          Experience
        </h2>

        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <p className="text-sm text-white/50">{exp.date}</p>
            </div>

            <div className="col-span-12 md:col-span-9 border-l-0 md:border-l md:border-white/10 md:pl-8 border-b border-white/10 pb-8">
              <h3 className="text-xl font-semibold">{exp.title}</h3>

              <p className="mt-1 text-sm text-[var(--color-accent)]">
                {exp.company}
              </p>

              <ul className="mt-5 space-y-3 text-white/70 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[var(--color-accent)]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      

      
      </div>
    </motion.section>
  );
};

export default Experience;