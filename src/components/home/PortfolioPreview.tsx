import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { PORTFOLIO_ITEMS, SOCIAL_LINKS, SERVICES } from "@/lib/constants";
import { getInstagramVideos } from "@/lib/instagram";
import type { PortfolioItem } from "@/types";

/**
 * Selected Work — live Instagram feed grid.
 * Server component: pulls the latest 6 video posts from the IG Graph API at
 * build/request time. Each tile is a static poster (no hover-to-play; IG
 * embeds + Drive shares can't autoplay reliably), with a click-out to the
 * IG permalink. Falls back to PORTFOLIO_ITEMS when the IG token isn't set.
 */
export async function PortfolioPreview() {
  const liveVideos = await getInstagramVideos();
  const usingLiveFeed = liveVideos.length > 0;
  const source = usingLiveFeed ? liveVideos : PORTFOLIO_ITEMS;

  const items = source.slice(0, 6).map((it, idx) => ({
    ...it,
    poster: it.thumbnail || SERVICES[idx % SERVICES.length].image,
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
              className="tracking-tight leading-[0.95] max-w-[14ch]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                color: "var(--color-ink)",
                letterSpacing: "-0.025em",
              }}
            >
              A few frames{" "}
              <em
                style={{ fontStyle: "italic", color: "var(--color-accent)" }}
              >
                from this year.
              </em>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            {usingLiveFeed && (
              <p className="font-mono-utility">live from @rodos_lens_</p>
            )}
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-base text-ink hover:text-accent transition-colors duration-(--dur-fast)"
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
        </div>

        {/* 3-up grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
          {items.map((item, idx) => (
            <FeedTile key={item.id} item={item} idx={idx} />
          ))}
        </ul>

        {/* Footer link out */}
        {usingLiveFeed && (
          <div className="mt-16 md:mt-20 pt-8 hairline-top flex flex-col sm:flex-row gap-4 justify-between items-baseline">
            <p className="text-ink-dim text-sm max-w-md">
              These are the latest reels from the feed. Posts go up the same
              week they're shot.
            </p>
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-ink hover:text-accent transition-colors duration-(--dur-fast)"
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
        )}
      </div>
    </section>
  );
}

/* ──────────────── Tile ──────────────── */

type WithPoster = PortfolioItem & { poster: string };

function FeedTile({ item, idx }: { item: WithPoster; idx: number }) {
  const num = String(idx + 1).padStart(2, "0");
  const isIG = Boolean(item.instagramUrl);
  const href = isIG
    ? (item.instagramUrl as string)
    : "/portfolio";
  const externalProps = isIG
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <li>
      <Link href={href} {...externalProps} className="group block">
        <figure>
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius-figure)",
              background: "var(--color-paper-2)",
            }}
          >
            <img
              src={item.poster}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* index */}
            <span className="absolute top-3 left-3 font-mono-utility text-ink">
              {num}
            </span>

            {/* category chip */}
            {item.category === "video" && (
              <div
                aria-hidden
                className="absolute bottom-3 right-3 w-8 h-8 inline-flex items-center justify-center"
                style={{
                  background: "oklch(8% 0.005 250 / 0.55)",
                  borderRadius: "var(--radius-figure)",
                }}
              >
                <Play size={14} className="text-ink ml-0.5" />
              </div>
            )}

            {/* IG source mark */}
            {isIG && (
              <span
                aria-hidden
                className="absolute top-3 right-3 font-mono-utility"
                style={{
                  color: "var(--color-ink)",
                  background: "oklch(8% 0.005 250 / 0.55)",
                  padding: "2px 6px",
                  borderRadius: "var(--radius-figure)",
                }}
              >
                ig
              </span>
            )}
          </div>
          <figcaption className="mt-3">
            <span
              className="block text-ink text-base leading-snug line-clamp-2"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                fontSize: "var(--text-lg)",
              }}
            >
              {item.title}
            </span>
            <span className="mt-1 font-mono-utility block">
              {item.category}
            </span>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
}
