"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <span className="text-primary font-medium text-sm tracking-widest uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-on-surface-variant dark:text-on-surface-dark-variant text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
