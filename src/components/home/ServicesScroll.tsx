"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function ServicesScroll() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 md:py-36"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="font-mono-utility mb-4">01 · what i cover</p>
            <h2
              className="font-display tracking-tight leading-[0.95] max-w-[14ch]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                color: "var(--color-ink)",
              }}
            >
              Five rooms,
              <br />
              one lens.
            </h2>
          </div>
          <p className="max-w-sm text-ink-dim text-base md:text-lg leading-relaxed">
            Mobile-first cinematography. Same camera that follows a couple
            down an aisle follows a brand into its first product day. Tap a
            row to see the work and book the day.
          </p>
        </div>

        {/* Accordion rows */}
        <ul className="hairline-top">
          {SERVICES.map((service, idx) => {
            const isOpen = openIdx === idx;
            const num = String(idx + 1).padStart(2, "0");
            // "Weddings" -> "Wedding"; "Real Estate" -> "Real Estate"; "Brand" -> "Brand"
            const singular = service.title.replace(/s$/, "");
            const panelId = `service-panel-${service.id}`;
            return (
              <li
                key={service.id}
                id={service.id}
                className="hairline-bottom"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group w-full grid grid-cols-12 items-center gap-4 py-6 md:py-8 text-left cursor-pointer"
                >
                  {/* number */}
                  <span
                    className="col-span-2 md:col-span-1 font-mono-utility transition-colors duration-(--dur-fast)"
                    style={{
                      color: isOpen
                        ? "var(--color-accent)"
                        : "var(--color-ink-dim)",
                    }}
                  >
                    {num}
                  </span>

                  {/* title */}
                  <span
                    className="col-span-8 md:col-span-9 font-display tracking-tight transition-colors duration-(--dur-fast)"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-3xl)",
                      color: isOpen
                        ? "var(--color-accent)"
                        : "var(--color-ink)",
                    }}
                  >
                    {service.title}
                  </span>

                  {/* chevron */}
                  <span
                    className="col-span-2 flex justify-end items-center transition-colors duration-(--dur-fast)"
                    style={{
                      color: isOpen
                        ? "var(--color-accent)"
                        : "var(--color-ink-dim)",
                    }}
                    aria-hidden
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                      className="inline-flex"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.section
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-label={`${service.title} — details`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                      className="pb-10 md:pb-14"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                        {/* Image — wide, properly sized, not a tease */}
                        <figure className="md:col-span-7">
                          <div
                            className="relative w-full overflow-hidden"
                            style={{
                              aspectRatio: "16 / 10",
                              borderRadius: "var(--radius-figure)",
                              background: "var(--color-paper-2)",
                            }}
                          >
                            <img
                              src={service.image}
                              alt=""
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <figcaption className="mt-3 font-mono-utility">
                            still · {service.id}
                          </figcaption>
                        </figure>

                        {/* Copy + CTA */}
                        <div className="md:col-span-5 md:pt-2">
                          <p className="font-mono-utility mb-3">
                            {service.title} · coverage
                          </p>
                          <p className="text-ink text-base md:text-lg leading-relaxed">
                            {service.description}
                          </p>
                          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                            <Link
                              href={`/contact?from=${service.id}`}
                              className="group inline-flex items-center gap-3 px-6 py-3 transition-colors duration-(--dur-fast) ease-out"
                              style={{
                                background: "var(--color-accent)",
                                color: "var(--color-paper)",
                                borderRadius: "var(--radius-figure)",
                              }}
                            >
                              <span className="text-sm">
                                Plan a {singular} day
                              </span>
                              <ArrowUpRight
                                size={16}
                                className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </Link>
                            <Link
                              href="/portfolio"
                              className="group inline-flex items-center gap-2 text-ink-dim hover:text-accent transition-colors duration-(--dur-fast)"
                            >
                              <span className="border-b border-transparent group-hover:border-accent pb-0.5 text-sm">
                                See {service.title.toLowerCase()} work
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
