"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-[var(--color-accent)]">
            Get in Touch
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>

            <p className="text-white/60">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-2 text-white/70">
              <p>Email: your@email.com</p>
              <p>Location: Kathmandu, Nepal</p>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-[var(--color-accent)]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-[var(--color-accent)]"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-[var(--color-accent)]"
            />

            <button
              type="submit"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition px-6 py-3 rounded-md text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;