"use client";

import { motion } from "framer-motion";

const storyBlocks = [
  {
    title: "The Passion",
    text: "Our brand was built from a passion for capturing life as it unfolds: the laughter, the elegance, the quiet emotions, and the unforgettable celebrations. Through intentional storytelling and refined visuals, we ensure your most beautiful moments are remembered forever.",
    gradient: "from-[#a43800]/20 to-[#cd4800]/20",
  },
  {
    title: "The Experience",
    text: "Over the years, we've had the absolute privilege of capturing luxury decor and premium events alongside prestigious vendors like Blue Velvet, Alveena, Perfect Integrated Decor, Wedding Guru, Exquisite Luxury, and The Planning Comp.",
    gradient: "from-[#5b00df]/20 to-[#7c3aed]/20",
  },
  {
    title: "The Vision",
    text: "Every frame we create is intentional. Every story we tell is peculiar. Our vision is simple: to craft visuals that not only document moments, but elevate them into lasting experiences.",
    gradient: "from-blue-400/20 to-teal-500/20",
  },
];

export function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {storyBlocks.map((block, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={block.title}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-24 items-center mb-20 md:mb-40 last:mb-0`}
            >
              {/* Image box - slides from side */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${block.gradient} dark:opacity-60 shadow-sm`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-foreground/5 dark:text-white/5">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text content - staggered fade in */}
              <div className="w-full lg:w-1/2">
                <motion.h3
                  className="font-heading text-3xl text-tertiary md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {block.title}
                </motion.h3>
                <motion.p
                  className="text-white text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {block.text}
                </motion.p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
