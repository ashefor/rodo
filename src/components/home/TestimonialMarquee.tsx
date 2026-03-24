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
  // Split testimonials into 3 rows
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);
  const row3 = TESTIMONIALS.slice(6);
  // Pad row3 if it has fewer items
  const row3Padded = row3.length < 3 ? [...row3, ...TESTIMONIALS.slice(0, 3 - row3.length)] : row3;

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

      {/* Row 1 - scrolls right to left */}
      <div className="marquee-row mb-5">
        <div className="flex gap-5 animate-marquee-left">
          {[...row1, ...row1, ...row1, ...row1].map((testimonial, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls left to right (faster) */}
      <div className="marquee-row mb-5">
        <div className="flex gap-5 animate-marquee-right-fast">
          {[...row2, ...row2, ...row2, ...row2].map((testimonial, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 3 - scrolls right to left */}
      <div className="marquee-row">
        <div className="flex gap-5 animate-marquee-left">
          {[...row3Padded, ...row3Padded, ...row3Padded, ...row3Padded].map((testimonial, i) => (
            <TestimonialCard key={`r3-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
