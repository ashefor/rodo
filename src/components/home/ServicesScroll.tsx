"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function ServicesScroll() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-36"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <p className="font-mono-utility mb-4">01 · what i cover</p>
            <h2
              className="font-display tracking-tight leading-[0.95] max-w-[16ch]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                color: "var(--color-ink)",
              }}
            >
              Five rooms,{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-accent)",
                  letterSpacing: "-0.025em",
                }}
              >
                one lens.
              </em>
            </h2>
          </div>
          <p className="max-w-sm text-ink-dim text-base md:text-lg leading-relaxed">
            Mobile-first cinematography. Same camera that follows a couple
            down an aisle follows a brand into its first product day.
          </p>
        </motion.div>

        {/* Hairline rows */}
        <ul className="hairline-top">
          {SERVICES.map((service, idx) => (
            <ServiceRow key={service.id} service={service} idx={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ──────────────── Single row ──────────────── */

function ServiceRow({
  service,
  idx,
}: {
  service: (typeof SERVICES)[number];
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const num = String(idx + 1).padStart(2, "0");
  const hasReel = Boolean(service.videoUrl);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.li
      id={service.id}
      className="hairline-bottom relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: idx * 0.05,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <Link
        href={`/contact?from=${service.id}`}
        className="group grid grid-cols-12 items-center gap-4 py-8 md:py-10 relative"
      >
        {/* number */}
        <span
          className="col-span-2 md:col-span-1 font-mono-utility transition-colors duration-(--dur-fast)"
          style={{
            color: hovered ? "var(--color-accent)" : "var(--color-ink-dim)",
          }}
        >
          {num}
        </span>

        {/* title — italic-serif display */}
        <span
          className="col-span-10 md:col-span-4 tracking-tight transition-colors duration-(--dur-fast)"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "var(--text-display-s)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            color: hovered ? "var(--color-accent)" : "var(--color-ink)",
          }}
        >
          {service.title}
        </span>

        {/* description — desktop only */}
        <span className="hidden md:block md:col-span-5 text-ink-dim text-base leading-relaxed">
          {service.description.split(".")[0]}.
        </span>

        {/* affordance */}
        <span
          className="col-span-12 md:col-span-2 flex justify-end items-center gap-2 transition-colors duration-(--dur-fast)"
          style={{
            color: hovered ? "var(--color-accent)" : "var(--color-ink-dim)",
          }}
          aria-hidden
        >
          <span className="font-mono-utility hidden md:inline">book</span>
          <ArrowUpRight
            size={20}
            className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>

        {/* Hover preview — pinned right, desktop, only when videoUrl is set */}
        {hasReel && (
          <motion.div
            aria-hidden
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : 16,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"
            style={{
              right: "10%",
              width: "280px",
              aspectRatio: "16 / 9",
              borderRadius: "var(--radius-figure)",
              border: "1px solid var(--color-paper-edge)",
              background: "var(--color-paper-2)",
            }}
          >
            <video
              ref={videoRef}
              src={service.videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              poster={service.image}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </Link>
    </motion.li>
  );
}
