"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StackCard({
  index,
  total,
  scrollYProgress,
  children,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  children: React.ReactNode;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = (index + 1) * segmentSize;

  // Card enters from below and settles in place
  const y = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 1]
      : [start - segmentSize * 0.1, start + segmentSize * 0.5, end],
    index === 0
      ? ["0%", "-5%"]
      : ["100%", "0%", "-5%"]
  );

  // Rotation: card arrives straight, then tilts back as next card pushes it
  const rotate = useTransform(
    scrollYProgress,
    index === 0
      ? [0, end]
      : [start, start + segmentSize * 0.5, end],
    index === 0
      ? [0, -3]
      : [6, 0, -3]
  );

  // Scale down slightly as card gets pushed back
  const scale = useTransform(
    scrollYProgress,
    index === 0
      ? [0, end]
      : [start, start + segmentSize * 0.5, end],
    index === 0
      ? [1, 0.95]
      : [0.92, 1, 0.95]
  );

  // Opacity: last card stays fully visible
  const opacity = useTransform(
    scrollYProgress,
    index === total - 1
      ? [start, start + segmentSize * 0.5]
      : [start, start + segmentSize * 0.3, end + segmentSize * 0.2],
    index === total - 1
      ? [0, 1]
      : [index === 0 ? 1 : 0, 1, 0.6]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center will-change-transform"
      style={{
        y,
        rotate,
        scale,
        opacity,
        zIndex: index + 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section>
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <SectionHeading
          label="What I Do"
          title="Services"
          subtitle="From concept to creation, I bring your vision to life with passion and precision."
        />
      </div>

      {/* Stack scroll container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${(SERVICES.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {SERVICES.map((service, index) => (
            <StackCard
              key={service.title}
              index={index}
              total={SERVICES.length}
              scrollYProgress={scrollYProgress}
            >
              <ServiceCard service={service} index={index} />
            </StackCard>
          ))}
        </div>
      </div>
    </section>
  );
}
