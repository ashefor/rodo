"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
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

  return (
    <section
      ref={containerRef}
      className="bg-background relative z-10"
      style={{ height: `${(SERVICES.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0 mb-8 md:mb-12">
          <SectionHeading
            label="What I Do"
            title="Services"
            subtitle="From concept to creation, I bring your vision to life with passion and precision."
          />
        </div>

        <div
          className="relative w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
