"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export function SkillsTags() {
  return (
    <section
      className="relative py-20 md:py-28 hairline-top"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="font-mono-utility mb-4">disciplines</p>
            <h2
              className="tracking-tight leading-[0.95]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-3xl)",
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Things I bring{" "}
              <em
                style={{ fontStyle: "italic", color: "var(--color-accent)" }}
              >
                to set.
              </em>
            </h2>
          </div>

          <ul className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
            {SKILLS.map((skill, idx) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: idx * 0.03, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-baseline gap-3 py-2 hairline-bottom"
              >
                <span className="font-mono-utility">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-ink text-base">{skill}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
