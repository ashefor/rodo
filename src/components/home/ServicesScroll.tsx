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
    <>
      {/* Heading — outside scroll tracking, normal flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionHeading
          label="What I Do"
          title="Services"
          subtitle="From concept to creation, I bring your vision to life with passion and precision."
        />
      </div>

      {/* Scroll-tracked card deck only */}
      <section
        ref={containerRef}
        className="relative"
        style={{ height: `calc(100vh + ${SERVICES.length * 40}vh)` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div
            className="relative max-w-6xl w-[90vw] h-[500px]"
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
    </>
  );
}
