"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

interface TestimonialMarqueeProps {
  showHeading?: boolean;
}

/**
 * Atmospheric voice asks for one pulled quote, not eight scrolling cards.
 * If the route wants more weight (About page), we surface a small stack of
 * three sequential pulls underneath the lead quote.
 */
export function TestimonialMarquee({ showHeading = true }: TestimonialMarqueeProps) {
  const lead = TESTIMONIALS[0];
  const supporting = TESTIMONIALS.slice(1, 4);

  return (
    <section
      className="relative py-24 md:py-36"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {showHeading && (
          <p className="font-mono-utility mb-12 md:mb-16">03 · in their words</p>
        )}

        {/* Lead pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p
            className="tracking-tight leading-[1.1]"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "var(--text-display-s)",
              color: "var(--color-ink)",
              letterSpacing: "-0.025em",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>“</span>
            {lead.quote.replace(/^[“"]|[”"]$/g, "")}
            <span style={{ color: "var(--color-accent)" }}>”</span>
          </p>
          <footer className="mt-8 flex items-baseline gap-4">
            <span className="text-ink text-base">{lead.name}</span>
            <span className="font-mono-utility">{lead.role}</span>
          </footer>
        </motion.blockquote>

        {/* Supporting stack — short attributions only */}
        {supporting.length > 0 && (
          <ul className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 hairline-top pt-12">
            {supporting.map((t, idx) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <p className="text-ink text-base md:text-lg leading-relaxed">
                  {t.quote}
                </p>
                <p className="mt-4 font-mono-utility">
                  {t.name} · {t.role}
                </p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
