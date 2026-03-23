"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
          <Check size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">
          Message Sent!
        </h3>
        <p className="text-on-surface-variant dark:text-on-surface-dark-variant">
          Thank you for reaching out. I&rsquo;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "peer w-full px-4 py-3 pt-6 rounded-3xl border-0 bg-surface-container-high dark:bg-surface-dark-container-high focus:bg-surface-bright dark:focus:bg-surface-dark-bright focus:ring-2 focus:ring-secondary/40 focus:outline-none transition-all text-sm";

  const labelClasses =
    "absolute left-4 top-2 text-xs text-on-surface-variant dark:text-on-surface-dark-variant peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary transition-all pointer-events-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="relative">
        <input
          {...register("name")}
          type="text"
          placeholder=" "
          className={inputClasses}
          id="name"
        />
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <input
          {...register("email")}
          type="email"
          placeholder=" "
          className={inputClasses}
          id="email"
        />
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div className="relative">
        <select
          {...register("service")}
          className="w-full px-4 py-3 pt-6 rounded-3xl border-0 bg-surface-container-high dark:bg-surface-dark-container-high focus:bg-surface-bright dark:focus:bg-surface-dark-bright focus:ring-2 focus:ring-secondary/40 focus:outline-none transition-all text-sm appearance-none cursor-pointer"
          id="service"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <label
          htmlFor="service"
          className="absolute left-4 top-2 text-xs text-on-surface-variant dark:text-on-surface-dark-variant pointer-events-none"
        >
          Service
        </label>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          {...register("message")}
          placeholder=" "
          rows={4}
          className={`${inputClasses} resize-none`}
          id="message"
        />
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-white font-medium text-sm hover:shadow-[0_0_24px_rgba(164,56,0,0.3)] transition-all disabled:opacity-50 cursor-pointer"
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}
