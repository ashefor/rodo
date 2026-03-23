"use client";

import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with fallback gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Floating animated elements */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-20 h-20 rounded-full bg-accent/20 blur-xl"
        animate={{ y: [-20, 20, -20], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[10%] w-32 h-32 rounded-full bg-accent/10 blur-2xl"
        animate={{ y: [20, -20, 20], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-6">
            Rodo Lens &mdash; Abuja
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Capturing Moments.{" "}
          <span className="text-accent">Creating Experiences.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Mobile videography, content creation, and event planning in Abuja.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="/portfolio" variant="primary">
            <Play size={18} />
            View Portfolio
          </Button>
          <Button href="/contact" variant="outline" className="!border-white/30 !text-white hover:!border-accent">
            <Calendar size={18} />
            Book a Session
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
