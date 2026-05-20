"use client";

import { motion } from "framer-motion";

// NOTE — copy below is honest placeholder. Replace each block with your own
// words; the structure (three short chapters, plain language, no metrics) is
// the design. Don't add numbers, ranks, or invented stories.
const chapters = [
  {
    num: "I",
    heading: "The brief",
    body: "Most of what I shoot is something happening once. A wedding day. A brand launch. A birthday that won’t come back. The brief is the same every time — return the day to the people who lived it while it’s still warm.",
  },
  {
    num: "II",
    heading: "The method",
    body: "Mobile-first cinematography. Two phones, a small kit, one person on the floor. I keep the camera close enough that nobody performs at it and far enough that the moment still gets to be the moment.",
  },
  {
    num: "III",
    heading: "The handover",
    body: "I cut the same week. Short edit first, ready for the feed. Long-form reel after. Files come to you without watermark and without a monthly hand-back schedule. Once it’s yours, it’s yours.",
  },
];

export function StorySection() {
  return (
    <section
      className="relative py-20 md:py-32 hairline-top"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="font-mono-utility mb-12 md:mb-16">the letter, continued</p>

        <ol className="space-y-16 md:space-y-24">
          {chapters.map((c, idx) => (
            <motion.li
              key={c.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-mono-utility">{c.num}</span>
                <h3
                  className="tracking-tight leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "var(--text-3xl)",
                    color: "var(--color-ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.heading}
                </h3>
              </div>
              <p className="text-ink text-lg md:text-xl leading-relaxed">
                {c.body}
              </p>
            </motion.li>
          ))}
        </ol>

        {/* Sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-20 md:mt-28 pt-10 hairline-top"
        >
          <p
            className="tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "var(--text-2xl)",
              color: "var(--color-ink)",
              letterSpacing: "-0.02em",
            }}
          >
            — Divine
          </p>
          <p className="mt-2 font-mono-utility">rodo lens · abuja & lagos</p>
        </motion.div>
      </div>
    </section>
  );
}
