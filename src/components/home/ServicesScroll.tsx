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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section>
      {/* Section heading (outside the scroll area) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <SectionHeading
          label="What I Do"
          title="Services"
          subtitle="From concept to creation, I bring your vision to life with passion and precision."
        />
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${SERVICES.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 pl-[10vw]"
            style={{ x }}
          >
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
