"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative xl:min-h-screen bg-foreground overflow-hidden flex flex-col items-center justify-center pt-24 pb-20">

      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h1 className="text-[25vw] font-black text-[#8B1A1A]/[0.02] leading-none uppercase tracking-tighter">
          RODO
        </h1>
      </div>

      {/* Main Brand Title - Positioned absolutely at the top, perfectly centered, z-10 (behind image) */}
      <div className="absolute top-[12%] md:top-[15%] xl:top-[18%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-10">
        <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12.5rem] font-heading font-black text-white leading-none uppercase tracking-tighter drop-shadow-sm whitespace-nowrap">
          RODO LENS
        </h2>
      </div>


      {/* Content Grid (Bio, Image, Services) - Shifted below the title area, z-20 (above title) */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-20 mt-32 md:mt-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Bio & CTA */}
          <div className="md:col-span-4 lg:col-span-3 order-2 md:order-1 relative z-20 h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-between h-full lg:py-[15vh]"
            >
              <p className="text-[#fff5f8] font-bold text-lg md:text-xl leading-relaxed mb-12 max-w-[320px]">
                Hey there! I'm a Visual Storyteller & Cinematographer working in the global marketplace.
              </p>

              <Link
                href="/contact"
                className="group flex items-center gap-3 text-[#fff5f8] font-black text-sm uppercase tracking-[0.2em] hover:text-[#8B1A1A] transition-colors"
              >
                // HIRE ME <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          {/* Center Column: Portrait */}
          <div className="md:col-span-4 lg:col-span-6 order-1 md:order-2 flex justify-center relative z-20">
            <motion.div
              className="relative w-full max-w-[500px] aspect-square md:aspect-[4/5] flex justify-center items-end"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Dotted Pattern Background behind the head */}
              <div
                className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[130%] aspect-square -z-10 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#FF8D28 2px, transparent 2px)',
                  backgroundSize: '20px 20px',
                  maskImage: 'radial-gradient(circle at center, black 25%, transparent 60%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 25%, transparent 60%)'
                }}
              />

              {/* Portrait Image with soft bottom mask fade */}
              <img
                src="/images/rodo-portrait.png"
                alt="Rodo Portrait"
                className="w-full h-auto max-h-full object-contain filter brightness-[1.05] contrast-[1.05] drop-shadow-xl"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
                }}
              />
            </motion.div>
          </div>

          {/* Right Column: Services List */}
          <div className="md:col-span-4 lg:col-span-3 order-3 hidden md:flex flex-col flex-1 lg:py-[15vh] justify-end items-center md:items-start md:pl-8 relative z-20">
            <motion.ul
              className="space-y-4 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {SERVICES.map((service, idx) => (
                <li key={service.id} className="group cursor-default md:text-left text-center">
                  <span className={`text-lg md:text-xl tracking-tight transition-all duration-300 ${idx === 0 ? "text-tertiary font-black" : "text-[#fff5f8] group-hover:text-[#ffffff]"
                    }`}>
                    {service.title}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>

      {/* Bottom Logo Bar / Trusted By */}
      <div className="hidden xl:block absolute bottom-0 left-0 right-0 py-10 md:py-14 bg-transparent backdrop-blur-[4px] z-30">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-between items-center opacity-80 gap-8 md:gap-12 grayscale">
            <div className="flex items-center gap-2 font-black uppercase text-sm text-[#fff5f8]">
              <div className="w-2.5 h-2.5 bg-black rounded-sm " /> Overlay
            </div>
            <div className="flex items-center gap-2 font-black uppercase text-sm text-[#fff5f8]">
              <div className="w-2.5 h-2.5 bg-black rounded-sm rotate-45" /> FrameFlow
            </div>
            <div className="flex items-center gap-2 font-black uppercase text-sm text-[#fff5f8]">
              <div className="w-2.5 h-2.5 bg-black rounded-full" /> DataStack
            </div>
            <div className="flex items-center gap-2 font-black uppercase text-sm   text-[#fff5f8]">
              <div className="w-2.5 h-2.5 bg-black rounded-sm scale-x-150" /> IntelliSpark
            </div>
            <div className="flex items-center gap-2 font-black uppercase text-sm text-[#fff5f8]">
              <div className="w-2.5 h-2.5 bg-black rounded-full border-2 border-black bg-transparent text-[#fff5f8]" /> NeuroLink
            </div>
            <div className="flex items-center gap-2 font-black uppercase text-sm text-[#fff5f8]">
              <div className="w-2.5 h-2.5 bg-black rounded-full border-2 border-black bg-transparent text-[#fff5f8]" /> NeuroLink
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



