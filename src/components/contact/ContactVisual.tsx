"use client";

import { Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactVisual() {
  return (
    <div className="relative">
      <h1
        className="tracking-tight leading-[0.95] max-w-[16ch]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-display)",
          color: "var(--color-ink)",
          letterSpacing: "-0.025em",
        }}
      >
        Tell me about
        <br />
        the{" "}
        <em
          style={{ fontStyle: "italic", color: "var(--color-accent)" }}
        >
          moment
        </em>
        <br />
        you want held.
      </h1>

      <p className="mt-10 text-ink-dim text-base md:text-lg leading-relaxed max-w-md">
        A date, a city, and a sentence about what’s happening that day is
        enough to start. I’ll come back with availability and rate.
      </p>

      <ul className="mt-12 space-y-5 max-w-md">
        <li className="flex items-start gap-4">
          <Mail size={16} className="mt-1 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden />
          <div>
            <p className="font-mono-utility mb-1">email</p>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-ink text-base hover:text-accent transition-colors duration-(--dur-fast)"
            >
              {SOCIAL_LINKS.email}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MapPin size={16} className="mt-1 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden />
          <div>
            <p className="font-mono-utility mb-1">based in</p>
            <p className="text-ink text-base">
              Abuja & Lagos · traveling on request
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
