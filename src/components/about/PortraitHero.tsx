"use client";

import { motion } from "framer-motion";

export function PortraitHero() {
  return (
    <section
      className="relative pt-36 md:pt-44 pb-16 md:pb-24"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top meta — letter date + place */}
        <div className="flex justify-between items-baseline mb-12 md:mb-16">
          <p className="font-mono-utility">a letter from rodo lens</p>
          <p className="font-mono-utility">abuja, nigeria</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div
              className="w-full max-w-sm mx-auto lg:max-w-none overflow-hidden"
              style={{
                aspectRatio: "4/5",
                borderRadius: "var(--radius-figure)",
                background: "var(--color-paper-2)",
              }}
            >
              <img
                src="/images/rodo-portrait.png"
                alt="Portrait of Divine, the photographer behind Rodo Lens"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono-utility">
              divine — rodo lens
            </figcaption>
          </motion.figure>

          {/* Opening line */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-display tracking-tight leading-[0.95]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                color: "var(--color-ink)",
              }}
            >
              Most days I am
              <br />
              <span style={{ color: "var(--color-accent)" }}>
                somewhere holding a phone
              </span>
              <br />
              waiting for the moment.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-10 text-ink-dim text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              At Rodo Lens, I shoot reels, short film, and event content for
              couples, brands, hosts, and planners. Mobile-first, edited the
              same week, ready for the feed by Friday.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
