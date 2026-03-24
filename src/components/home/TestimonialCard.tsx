import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[380px] md:w-[440px] flex gap-4 p-5 rounded-3xl bg-surface-dark-container text-white">
      {/* Avatar placeholder */}
      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface-dark-container-high overflow-hidden flex items-center justify-center">
        <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
          {testimonial.name.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <p className="text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="text-xs text-on-surface-dark-variant italic">
              {testimonial.role}
            </p>
          </div>
          <Quote size={16} className="text-primary/60 flex-shrink-0 mt-0.5" />
        </div>
        <p className="text-sm text-white/70 leading-relaxed mt-2 line-clamp-3">
          {testimonial.quote}
        </p>
      </div>
    </div>
  );
}
