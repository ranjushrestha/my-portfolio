"use client";

import { Mail, MapPin } from "lucide-react";
import Form from "@/components/Form";
import { motion } from "framer-motion";

const info = [
  {
    icon: <Mail />,
    title: "Email",
    description: "ranjustha8844@gmail.com",
  },
  {
    icon: <MapPin />,
    title: "Location",
    description: "Kalimati, KTM",
  },
];

const Contact = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 lg:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-accent)]">
            Get in Touch
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/60">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:gap-12 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 space-y-5 lg:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">
              Let’s Connect
            </h3>

            <p className="max-w-md text-sm sm:text-base text-white/60">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4 text-white/70">
              {info.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-xl 
                    border border-white/5 bg-[var(--color-primary)] text-xl text-[var(--color-accent)]"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1"
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;