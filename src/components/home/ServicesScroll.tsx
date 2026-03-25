"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesScroll() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <SectionHeading
          label="What I Do"
          title="Services"
          subtitle="From concept to creation, I bring your vision to life with passion and precision."
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div 
          className="services-wrapper"
          onMouseLeave={() => setHoveredIndex(0)}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isExpanded={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
