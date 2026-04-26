"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ranjustha8844@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Kalimati, KTM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData); // later send to API

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 xl:px-0">
        {/* heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-semibold text-[var(--color-accent)]">
            Get in Touch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        {/* content */}
        <div className="flex flex-col gap-12 lg:flex-row">
          
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>

            <p className="max-w-md text-white/60">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4 text-white/70">
              {info.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center 
                    w-[40px] h-[40px] 
                    rounded-xl 
                    bg-[var(--color-primary)] 
                    text-[var(--color-accent)] 
                    text-xl
                    border border-white/5"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-6 sm:p-10"
            >
              <div className="grid gap-4">
                
                {/* name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/70">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/70">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-white/70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can I help you?"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* button */}
              <Button
                type="submit"
                size="lg"
                className="bg-[var(--color-accent)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
              >
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;