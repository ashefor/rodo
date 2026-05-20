import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SOCIAL_LINKS, PORTFOLIO_ITEMS } from "@/lib/constants";
import { getInstagramVideos } from "@/lib/instagram";

export const metadata: Metadata = {
  title: "Portfolio — selected work",
  description:
    "Selected work by Rodo Lens — reels, short film, and event content from Abuja, Lagos, and worldwide. Weddings, brand days, real estate, fashion.",
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

export default async function PortfolioPage() {
  const liveVideos = await getInstagramVideos();
  const items = liveVideos.length > 0 ? liveVideos : PORTFOLIO_ITEMS;

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

        <p className="mt-8 max-w-xl text-ink-dim text-base md:text-lg leading-relaxed">
          Reels, event content, and short film. The freshest pieces are pulled
          live from Instagram when the feed key is set; the studio cut is
          shown otherwise. <span className="font-mono-utility align-middle ml-1">{items.length.toString().padStart(2, "0")} pieces</span>
        </p>

        {/* Catalogue rule */}
        <div className="mt-16 md:mt-20 hairline-top pt-8">
          <PortfolioGrid initialItems={items} />
        </div>

        {/* Bottom — link out */}
        <div className="mt-24 md:mt-32 pt-10 hairline-top flex flex-col md:flex-row justify-between gap-6">
          <p className="text-ink-dim text-base max-w-md">
            More day-of footage lives on the feed. Reels go up the same week
            they’re shot.
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
