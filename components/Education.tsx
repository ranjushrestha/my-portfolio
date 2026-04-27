"use client";

import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      date: "2018",
      title: "School",
      name: "Dreamland Public High School",
    },
    {
      date: "2020 – 2021",
      title: "10+2 in Management with Computer Science",
      name: "Nepal Mega College",
    },
    {
      date: "2026",
      title: "Bachelor in Computer Application",
      name: "IGNOU at ICA",
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
        {/* Heading */}
        <div className="flex items-center gap-6 mb-16 mt-20">
          <h2 className="text-3xl font-semibold text-[var(--color-accent)]">
            Education
          </h2>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        {/* Timeline wrapper */}
        <div className=" space-y-10">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-8">
              {/* Date */}
              <div className="w-[120px] shrink-0">
                <p className="text-sm text-white/50">{edu.date}</p>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-md font-semibold">{edu.title}</h3>
                <p className="mt-1 text-sm text-white/60">{edu.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
