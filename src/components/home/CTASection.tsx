"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="relative py-32 md:py-44 hairline-top"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="font-mono-utility mb-8">04 · what next</p>
          <h2
            className="font-display tracking-tight leading-[0.95]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              color: "var(--color-ink)",
            }}
          >
            Tell me about the
            <br />
            <span style={{ color: "var(--color-accent)" }}>moment you want held.</span>
          </h2>
          <p className="mt-8 text-ink-dim text-base md:text-lg max-w-xl leading-relaxed">
            Wedding, brand day, opening night, a single afternoon — give me a
            date and a city and I’ll come back with availability and rate.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 transition-colors duration-(--dur-fast) ease-out"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-paper)",
                borderRadius: "var(--radius-figure)",
              }}
            >
              <span className="text-base">Start a project</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-ink hover:text-accent transition-colors duration-(--dur-fast)"
            >
              <span className="border-b border-ink group-hover:border-accent transition-colors duration-(--dur-fast) pb-0.5">
                Or browse the work first
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
