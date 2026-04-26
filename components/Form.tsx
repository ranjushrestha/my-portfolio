"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import { contactSchema } from "@/validation/contactSchema";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Form = () => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await emailjs.send(
          "service_2nt3qim",
          "template_0uduvnv",
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          {
            publicKey: "LpHjbhNZFWTD7fl6K",
          }
        );

        console.log("Email sent:", res);
        resetForm();
      } catch (error) {
        console.log("Email failed:", error);
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-6 sm:p-10"
    >
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-white/70">
            Your Name
          </label>

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.name && touched.name && (
            <p className="text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-white/70">
            Email Address
          </label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.email && touched.email && (
            <p className="text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-white/70">
            Message
          </label>

          <Textarea
            id="message"
            name="message"
            placeholder="How can I help you?"
            rows={2}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.message && touched.message && (
            <p className="text-sm text-red-400">{errors.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="bg-[var(--color-accent)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default Form;