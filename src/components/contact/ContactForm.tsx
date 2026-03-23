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
        <p className="text-text-muted dark:text-text-dark-muted">
          Thank you for reaching out. I&rsquo;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="relative">
        <input
          {...register("name")}
          type="text"
          placeholder=" "
          className="peer w-full px-4 py-3 pt-6 rounded-2xl border border-foreground/10 dark:border-white/10 bg-transparent focus:border-accent focus:outline-none transition-colors text-sm"
          id="name"
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-2 text-xs text-text-muted dark:text-text-dark-muted peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
        >
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
          className="peer w-full px-4 py-3 pt-6 rounded-2xl border border-foreground/10 dark:border-white/10 bg-transparent focus:border-accent focus:outline-none transition-colors text-sm"
          id="email"
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-2 text-xs text-text-muted dark:text-text-dark-muted peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
        >
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
          className="w-full px-4 py-3 pt-6 rounded-2xl border border-foreground/10 dark:border-white/10 bg-transparent focus:border-accent focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
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
          className="absolute left-4 top-2 text-xs text-text-muted dark:text-text-dark-muted pointer-events-none"
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
          className="peer w-full px-4 py-3 pt-6 rounded-2xl border border-foreground/10 dark:border-white/10 bg-transparent focus:border-accent focus:outline-none transition-colors text-sm resize-none"
          id="message"
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-2 text-xs text-text-muted dark:text-text-dark-muted peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
        >
          Message
        </label>
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors disabled:opacity-50 cursor-pointer"
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
