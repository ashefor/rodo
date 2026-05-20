"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

import { SERVICE_OPTIONS, SERVICES } from "@/lib/constants";

const contactSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Required"),
  service: z.string().min(1, "Please select one"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldLabel = "font-mono-utility block mb-2";
const fieldInput =
  "w-full bg-transparent border-0 border-b text-base text-ink py-3 focus:outline-none transition-colors duration-(--dur-fast) placeholder:text-[color:var(--color-ink-quiet)]";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // Deep-link from a service row: /contact?from=<service-id>
  const searchParams = useSearchParams();
  const fromService = searchParams.get("from");

  const { prefilledMessage, fromTitle } = useMemo(() => {
    if (!fromService) return { prefilledMessage: "", fromTitle: null };
    const matched = SERVICES.find((s) => s.id === fromService);
    if (!matched) return { prefilledMessage: "", fromTitle: null };
    const singular = matched.title.replace(/s$/, "");
    return {
      prefilledMessage: `I'd like to discuss ${singular.toLowerCase()} coverage. `,
      fromTitle: matched.title,
    };
  }, [fromService]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: SERVICE_OPTIONS[0],
      message: prefilledMessage,
    },
  });

  const selectedService = watch("service");

  const onSubmit = async (_data: ContactFormData) => {
    void _data;
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className="py-16 hairline-top"
      >
        <p className="font-mono-utility mb-4">sent · {new Date().toLocaleDateString()}</p>
        <p
          className="font-display tracking-tight leading-none max-w-[20ch]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-3xl)",
            color: "var(--color-ink)",
          }}
        >
          Thank you — I’ll reply within{" "}
          <span style={{ color: "var(--color-accent)" }}>24 hours.</span>
        </p>
        <p className="mt-4 text-ink-dim max-w-md">
          If your shoot date is sooner than that, message Instagram directly —
          I check it faster.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hairline-top pt-10 space-y-10">
      {fromTitle && (
        <p className="font-mono-utility -mt-4">
          arriving from · {fromTitle.toLowerCase()}
        </p>
      )}
      {/* Names row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className={fieldLabel} htmlFor="firstName">first name</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={fieldInput}
            style={{ borderColor: errors.firstName ? "var(--color-danger)" : "var(--color-paper-edge)" }}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="mt-2 text-sm" style={{ color: "var(--color-danger)" }}>{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className={fieldLabel} htmlFor="lastName">last name</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={fieldInput}
            style={{ borderColor: errors.lastName ? "var(--color-danger)" : "var(--color-paper-edge)" }}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="mt-2 text-sm" style={{ color: "var(--color-danger)" }}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className={fieldLabel} htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={fieldInput}
            style={{ borderColor: errors.email ? "var(--color-danger)" : "var(--color-paper-edge)" }}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-2 text-sm" style={{ color: "var(--color-danger)" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className={fieldLabel} htmlFor="phone">phone</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={fieldInput}
            style={{ borderColor: errors.phone ? "var(--color-danger)" : "var(--color-paper-edge)" }}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-2 text-sm" style={{ color: "var(--color-danger)" }}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service */}
      <fieldset>
        <legend className={fieldLabel}>what are we shooting</legend>
        <div className="flex flex-wrap gap-x-5 gap-y-3 mt-1">
          {SERVICE_OPTIONS.map((opt) => {
            const active = selectedService === opt;
            return (
              <label key={opt} className="inline-flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="radio"
                  value={opt}
                  {...register("service")}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className="w-3.5 h-3.5 inline-flex items-center justify-center transition-colors duration-(--dur-fast)"
                  style={{
                    border: `1px solid ${active ? "var(--color-accent)" : "var(--color-paper-edge)"}`,
                    background: active ? "var(--color-accent)" : "transparent",
                    borderRadius: "9999px",
                  }}
                >
                  {active && <Check size={9} strokeWidth={4} style={{ color: "var(--color-paper)" }} />}
                </span>
                <span
                  className="text-sm transition-colors duration-(--dur-fast)"
                  style={{ color: active ? "var(--color-accent)" : "var(--color-ink)" }}
                >
                  {opt}
                </span>
              </label>
            );
          })}
        </div>
        {errors.service && (
          <p className="mt-3 text-sm" style={{ color: "var(--color-danger)" }}>{errors.service.message}</p>
        )}
      </fieldset>

      {/* Message — textarea */}
      <div>
        <label className={fieldLabel} htmlFor="message">a sentence about the day</label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Where, when, who’s involved, what you want to come home with…"
          className={`${fieldInput} resize-none`}
          style={{ borderColor: "var(--color-paper-edge)" }}
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="font-mono-utility">all fields except message are required</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 px-7 py-3.5 transition-colors duration-(--dur-fast) ease-out disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-paper)",
            borderRadius: "var(--radius-figure)",
          }}
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden />
              <span className="text-base">Sending…</span>
            </>
          ) : (
            <>
              <span className="text-base">Send</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
