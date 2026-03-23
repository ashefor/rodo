"use client";

import { motion } from "framer-motion";

export function PortraitHero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800" />
              {/* Replace with actual portrait */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-6xl font-bold text-white/20">DA</span>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I&rsquo;m{" "}
              <span className="text-accent">Divine Agbanigbi</span>
            </h1>
            <p className="text-text-muted dark:text-text-dark-muted text-base md:text-lg leading-relaxed mb-4">
              I&rsquo;m a passionate content creator, mobile videographer, and
              event planner based in Abuja, Nigeria. Through Rodo Lens, I help
              brands, individuals, and organizations tell their stories through
              captivating visual content.
            </p>
            <p className="text-text-muted dark:text-text-dark-muted text-base md:text-lg leading-relaxed">
              With an eye for detail and a love for storytelling, I transform
              ordinary moments into extraordinary visual experiences that
              resonate with audiences and leave lasting impressions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
