import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FouitaPortfolioEmbed } from "@/components/portfolio/FouitaPortfolioEmbed";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio — selected work",
  description:
    "A live portfolio stream from Rodo Lens — reels, event coverage, and studio work from Abuja, Lagos, and beyond.",
  keywords: [
    "Rodo Lens",
    "Abuja content creator",
    "Lagos videographer",
    "event content creator Nigeria",
    "mobile videography Nigeria",
    "wedding reel Abuja",
    "brand content Lagos",
  ],
};

export default function PortfolioPage() {
  return (
    <section
      className="pt-32 md:pt-44 pb-20 md:pb-28"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Catalogue header */}
        <div className="flex justify-between items-baseline mb-8">
          <p className="font-mono-utility">selected work</p>
          <p className="font-mono-utility">2020 — present</p>
        </div>

        <h1
          className="tracking-tight leading-[0.9] max-w-[14ch]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-xl)",
            color: "var(--color-ink)",
            letterSpacing: "-0.03em",
            fontVariationSettings: "'opsz' 144",
          }}
        >
          The work,
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "var(--color-accent)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 50",
            }}
          >
            in motion.
          </em>
        </h1>

        <p className="mt-8 max-w-2xl text-ink-dim text-base md:text-lg leading-relaxed">
          The latest reels, event coverage, and studio work live here as one
          continuous feed. Browse the portfolio without leaving the site, then
          jump out to Instagram when you want the full account view.
        </p>

        {/* Catalogue rule */}
        <div className="mt-16 md:mt-20 hairline-top pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono-utility">embedded portfolio feed</p>
              <p className="mt-2 text-sm text-ink-dim max-w-xl">
                Updated from the studio Instagram widget to keep the work in one
                place while preserving the native feed layout.
              </p>
            </div>
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-ink hover:text-accent transition-colors duration-(--dur-fast) self-start"
            >
              <span className="border-b border-ink group-hover:border-accent transition-colors duration-(--dur-fast) pb-0.5">
                Open Instagram
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="mt-8">
            <FouitaPortfolioEmbed />
          </div>
        </div>

        {/* Bottom — link out */}
        <div className="mt-24 md:mt-32 pt-10 hairline-top flex flex-col md:flex-row justify-between gap-6">
          <p className="text-ink-dim text-base max-w-md">
            Prefer the native app experience? The full account feed, stories,
            and post context still live on Instagram.
          </p>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-ink hover:text-accent transition-colors duration-(--dur-fast) self-start md:self-end"
          >
            <span className="border-b border-ink group-hover:border-accent transition-colors duration-(--dur-fast) pb-0.5">
              Open Instagram — @rodos_lens_
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
