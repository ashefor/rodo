"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// The service options mapped to what's likely offered or common in standard templates
const RADIO_OPTIONS = ["Web Design", "Web Development", "Logo Design", "Other"];

const contactSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Required"),
  service: z.string().min(1, "Please select at least one"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "Web Development",
    }
  });

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <Check size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2 text-gray-900">
          Message Sent!
        </h3>
        <p className="text-gray-500">
          Thank you for reaching out. We'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  const labelStyle = "text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1";
  const inputStyle = "w-full border-0 border-b border-gray-300 px-0 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-0 transition-colors bg-transparent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Grid: Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label className={labelStyle}>First Name</label>
          <input {...register("firstName")} type="text" className={inputStyle} />
          {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
        </div>
        <div className="flex flex-col">
          <label className={labelStyle}>Last Name</label>
          <input {...register("lastName")} type="text" className={inputStyle} />
          {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
        </div>
      </div>

      {/* Grid: Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label className={labelStyle}>Email</label>
          <input {...register("email")} type="email" className={inputStyle} />
          {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col">
          <label className={labelStyle}>Phone</label>
          <input {...register("phone")} type="tel" className={inputStyle} />
          {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
        </div>
      </div>

      {/* Radio Service Group */}
      <div className="pt-2">
        <label className="text-sm font-bold text-gray-900 mb-4 block">What type of website do you need?</label>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {RADIO_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                value={opt}
                {...register("service")}
                className="hidden"
              />
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedService === opt ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'}`}>
                {selectedService === opt && <Check size={10} className="text-white" strokeWidth={4} />}
              </div>
              <span className={`text-sm ${selectedService === opt ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{opt}</span>
            </label>
          ))}
        </div>
        {errors.service && <span className="text-red-500 text-xs mt-2 block">{errors.service.message}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col pt-2">
        <label className={labelStyle}>Message</label>
        <input {...register("message")} type="text" placeholder="Write your message.." className={`${inputStyle} placeholder:text-gray-300 placeholder:font-normal`} />
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3.5 rounded-lg bg-indigo-900 text-white font-medium text-sm hover:bg-indigo-800 transition-colors disabled:opacity-50 min-w-[160px]"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 mx-auto border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "Send Message"
          )}
        </motion.button>
      </div>
    </form>
  );
}
