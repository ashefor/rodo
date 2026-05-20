"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="min-h-svh flex items-center justify-center px-6"
      style={{ background: "var(--color-paper)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-xl"
      >
        <p className="font-mono-utility mb-6">404 · page not found</p>
        <h1
          className="tracking-tight leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display)",
            color: "var(--color-ink)",
            letterSpacing: "-0.025em",
          }}
        >
          That frame is{" "}
          <em
            style={{ fontStyle: "italic", color: "var(--color-accent)" }}
          >
            out of focus.
          </em>
        </h1>
        <p className="mt-6 text-ink-dim text-base md:text-lg leading-relaxed">
          The page you’re looking for isn’t here. Walk back to the work.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mt-10 text-ink hover:text-accent transition-colors duration-(--dur-fast)"
        >
          <span className="border-b border-ink group-hover:border-accent transition-colors duration-(--dur-fast) pb-0.5">
            Back to home
          </span>
          <ArrowUpRight
            size={18}
            className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
    </section>
  );
}
