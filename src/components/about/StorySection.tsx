"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const storyBlocks = [
  {
    title: "The Journey",
    text: "It all started with a smartphone and a dream. What began as capturing everyday moments for fun quickly evolved into a burning passion for visual storytelling. I discovered that the best stories aren't always told with the most expensive equipment — they're told with heart, creativity, and an understanding of what makes moments special.",
    gradient: "from-[#a43800]/20 to-[#cd4800]/20",
  },
  {
    title: "The Craft",
    text: "Mobile videography isn't a limitation — it's a superpower. The accessibility and intimacy of mobile filmmaking allows me to capture authentic, raw moments that traditional setups might miss. Combined with professional editing and color grading, the results speak for themselves.",
    gradient: "from-[#5b00df]/20 to-[#7c3aed]/20",
  },
  {
    title: "Beyond The Lens",
    text: "Event planning came naturally. Understanding how to capture events led me to understand how to create them. Today, I offer end-to-end services — from conceptualizing and planning events to capturing every beautiful moment and delivering content that keeps the memories alive forever.",
    gradient: "from-blue-400/20 to-teal-500/20",
  },
];

export function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {storyBlocks.map((block, index) => (
          <ScrollReveal
            key={block.title}
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center mb-20 md:mb-32 last:mb-0`}
            >
              {/* Image placeholder — bleeding edges */}
              <div className="w-full lg:w-1/2 lg:-mx-8">
                <div
                  className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${block.gradient} dark:opacity-60`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-foreground/5 dark:text-white/5">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  {block.title}
                </h3>
                <p className="text-on-surface-variant dark:text-on-surface-dark-variant text-base md:text-lg leading-relaxed">
                  {block.text}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
