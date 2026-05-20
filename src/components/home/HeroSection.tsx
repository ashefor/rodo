"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "var(--color-paper)",
        color: "var(--color-ink)",
      }}
    >
      {/* Full-bleed reel */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/wedding-shoot.png"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        {/* Atmospheric darkening — type read first, footage second */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(14% 0.008 60 / 0.65) 0%, oklch(14% 0.008 60 / 0.50) 40%, oklch(14% 0.008 60 / 0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 min-h-svh flex flex-col justify-end">
        {/* Top meta */}
        <div className="absolute top-32 md:top-36 left-6 md:left-10 right-6 md:right-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <p className="font-mono-utility">visual storyteller · est. 2020</p>
          <p className="font-mono-utility">abuja · lagos · worldwide</p>
        </div>

        {/* Display headline */}
        <h1
          className="font-display tracking-tight leading-[0.92] max-w-[16ch]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-xl)",
            color: "var(--color-ink)",
            fontVariationSettings: "'opsz' 96, 'wdth' 100",
          }}
        >
          The moment,
          <br />
          <span style={{ color: "var(--color-accent)" }}>then again.</span>
        </h1>

        {/* Bottom row: tagline + CTA */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <p className="max-w-md text-ink text-lg md:text-xl leading-relaxed">
            I shoot reels, short film, and event content for people who want
            their day to stay watchable years later.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-base text-ink hover:text-accent transition-colors duration-(--dur-fast)"
            >
              <span className="border-b border-ink group-hover:border-accent transition-colors duration-(--dur-fast) pb-0.5">
                See the work
              </span>
              <ArrowUpRight size={18} className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-base text-ink-dim hover:text-accent transition-colors duration-(--dur-fast)"
            >
              <span>Start a project</span>
            </Link>
          </div>
        </div>

        {/* Footer rule + timecode */}
        <div className="mt-16 md:mt-20 pt-4 hairline-top flex justify-between items-baseline">
          <span className="font-mono-utility">reel · 00 : 00 : 42</span>
          <span className="font-mono-utility">scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
