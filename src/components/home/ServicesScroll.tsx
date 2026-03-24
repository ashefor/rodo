"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, SERVICES.length]);

  // Heading scrolls away during the first portion of scroll
  const headingY = useTransform(scrollYProgress, [0, 0.15], [0, -300]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="bg-background relative z-10"
      style={{ height: `${(SERVICES.length + 1) * 100}vh` }}
    >
      {/* Heading: scrolls away as cards animate */}
      <div className="sticky top-0 z-20 pointer-events-none">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          <SectionHeading
            label="What I Do"
            title="Services"
            subtitle="From concept to creation, I bring your vision to life with passion and precision."
          />
        </motion.div>
      </div>

      {/* Sticky card stack */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[85vh]"
          style={{ perspective: "1200px" }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              scrollIndex={scrollIndex}
              totalCards={SERVICES.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
