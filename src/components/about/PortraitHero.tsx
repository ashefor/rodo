"use client";

import { motion } from "framer-motion";

export function PortraitHero() {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-36 bg-foreground overflow-hidden">
      {/* Background Accent (Dotted Matrix) */}
      <div
        className="absolute inset-x-0 top-0 h-[600px] opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-tertiary) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 90%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
             <span className="inline-block px-5 py-2 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] backdrop-blur-sm">
                Focusing on Excellence • Est. 2020 ✈️
             </span>
          </motion.div> */}

          <motion.h1
            className="font-heading text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-14 uppercase"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Capturing life&apos;s most <br />
            <span className="text-tertiary italic">meaningful</span> stories.
          </motion.h1>

          <motion.div
            className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-14"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          <motion.p
            className="text-on-surface-dark-variant text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            At Rodo Lens, we transform fleeting moments into cinematic memories.
            We specialize in capturing the raw emotion and timeless essence of
            your most monumental stories.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

