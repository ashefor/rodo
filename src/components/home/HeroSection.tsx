"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-foreground overflow-hidden flex flex-col justify-center py-20 lg:py-0">

      {/* Background Pattern/Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[20%] left-[10%] w-[60%] aspect-square opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#FF8D28 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-tertiary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content side (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col pt-10 lg:pt-0">

            {/* Satisfied Clients Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-foreground overflow-hidden bg-neutral-800">
                    <img
                      src={`https://i.pravatar.cc/100?u=${i + 10}`}
                      alt="Client"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">120+</p>
                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider font-medium">Total Satisfied Clients</p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-8xl xl:text-[7.5rem] font-heading font-black text-white leading-[0.8] mb-4 tracking-tighter uppercase italic">
                IT'S ME
              </h1>
              <h2 className="text-6xl md:text-8xl xl:text-[8.5rem] font-heading font-black leading-[0.8] mb-10 tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#7c3aed] drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                RODO LENS
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-medium text-lg md:text-xl max-w-xl leading-relaxed mb-16 font-sans italic opacity-80"
            >
              I've earned the trust of over 250 clients and 40 brands, all of whom are very satisfied with my service!
            </motion.p>


            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 md:gap-12"
            >
              <div>
                <p className="text-4xl font-heading font-black text-white mb-2 italic">600+</p>
                <p className="text-white/50 text-sm font-medium leading-tight">Projects<br />Done</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-black text-white mb-2 italic">50+</p>
                <p className="text-white/50 text-sm font-medium leading-tight">Brand<br />Partnership</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-black text-white mb-2 italic">12+</p>
                <p className="text-white/50 text-sm font-medium leading-tight">Years of<br />Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual side (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:h-[80vh]">

            {/* Portrait Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative w-full h-full max-w-lg"
            >
              <img
                src="/images/rodo-portrait.png"
                alt="Rodo Portrait"
                className="w-full h-full object-contain relative z-10"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)'
                }}
              />
            </motion.div>

            {/* Side Navigation links */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 items-end z-20">
              {['Works', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white/60 hover:text-white transition-colors tracking-widest uppercase text-sm font-bold rotate-0"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Schedule a Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-10 lg:bottom-20 right-0 z-30"
            >
              <Link
                href="/contact"
                className="bg-[#7c3aed] text-white px-8 py-5 rounded-3xl flex items-center gap-4 group shadow-xl hover:shadow-[#7c3aed]/20 transition-all hover:scale-105 active:scale-95"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Calendar size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg pr-2">Schedule a Call</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}




