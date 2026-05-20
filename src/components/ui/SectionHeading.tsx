"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  number?: string;
  /** Italicize the last word of the title using the display serif italic. */
  italicTail?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  number,
  italicTail = true,
}: SectionHeadingProps) {
  const words = title.split(" ");
  const head = italicTail && words.length > 1 ? words.slice(0, -1).join(" ") : title;
  const tail = italicTail && words.length > 1 ? words[words.length - 1] : null;

  return (
    <motion.header
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {(label || number) && (
        <div
          className={`flex gap-3 items-baseline mb-4 ${
            centered ? "justify-center" : ""
          }`}
        >
          {number && <span className="font-mono-utility">{number}</span>}
          {label && <span className="font-mono-utility">{label}</span>}
        </div>
      )}
      <h2
        className="tracking-tight leading-[0.95]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-display)",
          color: "var(--color-ink)",
          letterSpacing: "-0.025em",
        }}
      >
        {head}
        {tail && (
          <>
            {" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-accent)",
              }}
            >
              {tail}
            </em>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-ink-dim text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
