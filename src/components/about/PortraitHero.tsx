"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PortraitHero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait — editorial overlap with lg:-mr-8 */}
          <motion.div
            className="relative lg:-mr-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#050505] shadow-2xl">
              <Image 
                src="/images/rodo-portrait.png" 
                alt="Portrait of Rodo" 
                fill 
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              About Rodo Lens
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              We create timeless visual stories from{" "}
              <span className="text-primary">life’s most meaningful moments.</span>
            </h1>
            
            <p className="text-on-surface-variant dark:text-on-surface-dark-variant text-base md:text-lg leading-relaxed">
              Hi, I’m Rodo, the visual storyteller behind Rodo Lens. We specialize in transforming ordinary moments into cinematic experiences that last far beyond the day they happen.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
