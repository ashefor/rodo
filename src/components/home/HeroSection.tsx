"use client";

import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  videoUrl?: string;
}

export function HeroSection({ videoUrl }: HeroSectionProps) {
  // Use a high-quality placeholder if no Instagram URL is provided yet
  const defaultVideo = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const finalVideoUrl = videoUrl || defaultVideo;
  return (
    <section className="relative min-h-screen bg-slate-50 flex items-center pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="text-left order-2 lg:order-1 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Rodo Lens &mdash; Abuja & Lagos (Available to ✈️)
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Capturing Moments.{" "}
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent block mt-2">
              Creating Experiences.
            </span>
          </motion.h1>

          <motion.div
            className="mt-6 text-slate-600 text-base md:text-xl max-w-xl leading-relaxed space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
              Visual Storyteller 🎥 <span className="text-slate-300 mx-1">|</span> Events • Brands • Lifestyle
            </p>
            <p>
              Based in Abuja & Lagos <span className="text-slate-300 mx-1">•</span> Available for global travel ✈️
            </p>
            <p className="pt-2 italic border-l-2 border-primary/20 pl-4">
              We tell your story with stunning clarity and endless creativity.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button href="/contact" variant="primary" className="!px-8 !py-4 shadow-xl shadow-primary/20">
              <Calendar size={18} />
              Book a Session
            </Button>
            <Button href="/portfolio" variant="outline" className="!px-8 !py-4 hover:bg-slate-200 transition-colors !border-slate-300 !text-slate-800">
              <Play size={18} />
              View Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Video Frame */}
        <motion.div
          className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-auto lg:h-[75vh] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Subtle gradient overlay to enhance visual richness */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none" />
          
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src={finalVideoUrl} type="video/mp4" />
          </video>
        </motion.div>

      </div>
      
      {/* Background Decorative Blur Elements */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
        animate={{ y: [20, -20, 20], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
