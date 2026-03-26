import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-lg bg-[#242424] shadow-sm border border-gray-100">
      <Quote size={20} className="text-tertiary mb-3" />
      <p className="text-sm text-slate-50 leading-relaxed mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {/* <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
          <span className="text-tertiary font-bold text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div> */}
        <div>
          <p className="text-sm font-semibold text-tertiary">{testimonial.name}</p>
          {/* <p className="text-xs text-tertiary">
            {testimonial.role}
          </p> */}
        </div>
      </div>
    </div>
  );
}
