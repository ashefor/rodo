"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
  isExpanded: boolean;
  onHover: () => void;
}

const bgColors = [
  "bg-[#b05b15]", // Brown/Orange
  "bg-[#087b8f]", // Teal
  "bg-[#8a0d78]", // Purple/Magenta
  "bg-[#1a5e3a]", // Deep Green
  "bg-[#2d3a8c]", // Navy Blue
];

export function ServiceCard({ service, index, isExpanded, onHover }: ServiceCardProps) {
  const bgColor = bgColors[index % bgColors.length];

  return (
    <div className="service-card">
      <motion.div
        onMouseEnter={onHover}
        layout
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className={`content relative h-[480px] lg:h-full w-full lg:w-auto lg:flex-1 lg:flex-none cursor-pointer overflow-hidden rounded-[2.5rem] group ${bgColor}`}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-overlay"
          // style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative h-full w-full p-8 md:p-10 flex flex-col justify-between text-white overflow-hidden">
          {/* Expanded State (Desktop) & Always Mobile */}
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between pointer-events-none lg:pointer-events-auto">
            {/* Top Row: Index & Title (Horizontal) */}
            <motion.div
              initial={false}
              animate={{
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 20,
                // On mobile, always show
              }}
              transition={{ duration: 0.5, delay: isExpanded ? 0.2 : 0 }}
              className="flex flex-col lg:items-start mobile-always-show"
            >
              <span className="text-xl font-bold opacity-80 block mb-3 leading-none">0{index + 1}</span>
              <h3 className="text-3xl font-heading md:text-5xl font-black tracking-tighter uppercase max-w-xl leading-[0.9] whitespace-nowrap">
                {service.title}
              </h3>
            </motion.div>

            {/* Bottom Row: Description & CTA */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 w-full mt-auto">
              <motion.p
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : 20
                }}
                transition={{ duration: 0.5, delay: isExpanded ? 0.3 : 0 }}
                className="max-w-xs text-white/90 font-brand font-medium text-base md:text-lg leading-snug lg:block mobile-always-show"
              >
                {service.description}
              </motion.p>

              {/* <motion.div
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  scale: isExpanded ? 1 : 0.8
                }}
                transition={{ duration: 0.5, delay: isExpanded ? 0.4 : 0 }}
                className="bg-white text-black px-8 py-5 rounded-full flex items-center gap-2 font-bold text-sm whitespace-nowrap shadow-lg translate-y-[5px] mobile-always-show"
              >
                View case <ArrowUpRight size={18} />
              </motion.div> */}
            </div>
          </div>

          {/* Collapsed State Title (Vertical) - Hidden on mobile, shown on LG when not expanded */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                key="vertical-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none"
              >
                <h3
                  className="text-4xl font-heading xl:text-5xl font-black text-white/40 uppercase whitespace-nowrap select-none"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)"
                  }}
                >
                  {service.title}
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Force visibility on mobile for the "expanded" layout parts */}
        <style jsx>{`
        @media (max-width: 1023px) {
          .mobile-always-show, :global(.mobile-always-show) {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
      </motion.div>
    </div>
  );
}
