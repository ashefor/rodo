"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialMarqueeProps {
  showHeading?: boolean;
}

export function TestimonialMarquee({
  showHeading = true,
}: TestimonialMarqueeProps) {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4);

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      {showHeading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What People Say"
            subtitle="Hear from clients who trusted me with their moments."
          />
        </div>
      )}

      {/* Row 1 - scrolls left */}
      <div className="marquee-row mb-4">
        <div className="flex gap-4 animate-marquee-left">
          {[...row1, ...row1].map((testimonial, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="marquee-row">
        <div className="flex gap-4 animate-marquee-right">
          {[...row2, ...row2].map((testimonial, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
