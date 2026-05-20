"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS, SERVICES } from "@/lib/constants";

export function PortfolioPreview() {
  // 4 selected tiles; fall back to service shoot images if portfolio thumbnails are missing
  const items = PORTFOLIO_ITEMS.slice(0, 4).map((it, idx) => ({
    ...it,
    poster: SERVICES[idx % SERVICES.length].image,
  }));

  return (
    <section
      className="relative py-24 md:py-36"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono-utility mb-4">02 · selected work</p>
            <h2
              className="font-display tracking-tight leading-[0.95] max-w-[14ch]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                color: "var(--color-ink)",
              }}
            >
              A few frames
              <br />
              from this year.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-base text-ink hover:text-accent transition-colors duration-(--dur-fast) self-start md:self-end"
          >
            <span className="border-b border-ink group-hover:border-accent transition-colors duration-(--dur-fast) pb-0.5">
              See all work
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* 4-up grid; alternating tall + wide tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {items.map((item, idx) => {
            const ratio = idx % 4 === 0 || idx % 4 === 3 ? "aspect-[4/5]" : "aspect-[5/6]";
            const num = String(idx + 1).padStart(2, "0");
            return (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                className="group relative"
              >
                <Link href="/portfolio" className="block">
                  <div
                    className={`relative w-full ${ratio} overflow-hidden`}
                    style={{
                      borderRadius: "var(--radius-figure)",
                      background: "var(--color-paper-2)",
                    }}
                  >
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    {/* hover veil for legibility */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-(--dur-base) ease-out"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, oklch(8% 0.005 60 / 0.55) 100%)",
                      }}
                    />
                    <span className="absolute top-3 left-3 font-mono-utility text-ink">
                      {num}
                    </span>
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className="text-ink text-base">{item.title}</span>
                    <span className="font-mono-utility">{item.category}</span>
                  </figcaption>
                </Link>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
