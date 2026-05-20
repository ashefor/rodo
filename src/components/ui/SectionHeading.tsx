"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  number?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  number,
}: SectionHeadingProps) {
  return (
    <motion.header
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {(label || number) && (
        <div className={`flex gap-3 items-baseline mb-4 ${centered ? "justify-center" : ""}`}>
          {number && <span className="font-mono-utility">{number}</span>}
          {label && <span className="font-mono-utility">{label}</span>}
        </div>
      )}
      <h2
        className="font-display tracking-tight leading-[0.95]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-display)",
          color: "var(--color-ink)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-ink-dim text-base md:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
