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
      <div style={{ position: 'relative', minHeight: '150vh', marginBottom: '20vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 md:pt-28">
          <SectionHeading
            label="What I Do"
            title="Services"
            subtitle="From concept to creation, I bring your vision to life with passion and precision."
          />
        </div>

        {/* Scroll-tracked card deck only */}
        <section
          ref={containerRef}
          style={{ height: `200vh`, position: 'absolute', top: 0, left: 0, zIndex: 1, width: '100%' }}
        >
          {/* <div style={{ height: 152, overflow: 'clip', flex: 'none', width: '100%', position: 'relative' }}>

          </div> */}
          <div className="sticky top-0 h-screen flex items-center justify-center p-4 overflow-hidden">
            <div
              className="relative max-w-6xl w-full h-[500px]"
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
      </div>
    </>
  );
}
