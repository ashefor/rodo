"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import type { PortfolioItem } from "@/types";
import { SERVICES } from "@/lib/constants";
import { VideoModal } from "./VideoModal";
import { FilterToggle } from "./FilterToggle";

type Filter = "all" | "instagram" | "video";

interface PortfolioGridProps {
  initialItems: PortfolioItem[];
}

/**
 * Portfolio catalogue grid.
 * Posters only — no hover-autoplay (IG embeds + Drive shares can't autoplay
 * reliably). On click: IG items open the permalink in a new tab; self-hosted
 * videos open the VideoModal; uncategorised items also open the modal.
 */
export function PortfolioGrid({ initialItems }: PortfolioGridProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const itemsWithPoster = useMemo(
    () =>
      initialItems.map((it, idx) => ({
        ...it,
        poster: it.thumbnail || SERVICES[idx % SERVICES.length].image,
      })),
    [initialItems]
  );

  const filtered = useMemo(
    () =>
      filter === "all"
        ? itemsWithPoster
        : itemsWithPoster.filter((i) => i.category === filter),
    [itemsWithPoster, filter]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <div className="flex justify-between items-baseline mb-8">
        <FilterToggle
          activeFilter={filter}
          onFilterChange={(f) => {
            setFilter(f);
            setVisibleCount(8);
          }}
        />
        <p className="font-mono-utility">
          {filtered.length.toString().padStart(2, "0")} pieces
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <PortfolioTile
              key={item.id}
              item={item}
              index={index}
              onSelect={() => setSelectedItem(item)}
            />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="group inline-flex items-center gap-3 px-6 py-3 text-base text-ink hover:text-accent transition-colors duration-(--dur-fast)"
            style={{
              border: "1px solid var(--color-paper-edge)",
              borderRadius: "var(--radius-figure)",
            }}
          >
            <span>Load more</span>
            <span className="font-mono-utility">
              + {Math.min(8, filtered.length - visibleCount)}
            </span>
          </button>
        </div>
      )}

      <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}

/* ──────────────── Tile ──────────────── */

type WithPoster = PortfolioItem & { poster: string };

function PortfolioTile({
  item,
  index,
  onSelect,
}: {
  item: WithPoster;
  index: number;
  onSelect: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  const ratios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[5/6]"];
  const ratio = ratios[index % ratios.length];

  const isIG = Boolean(item.instagramUrl);

  const body = (
    <>
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
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        <span className="absolute top-3 left-3 font-mono-utility text-ink">
          {num}
        </span>

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
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-3">
        <span className="text-ink text-base leading-snug">{item.title}</span>
        <span className="font-mono-utility shrink-0">{item.category}</span>
      </figcaption>
    </>
  );

  return (
    <motion.figure
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{
        duration: 0.35,
        delay: (index % 8) * 0.04,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className="break-inside-avoid block w-full mb-4 md:mb-6"
    >
      {isIG ? (
        <Link
          href={item.instagramUrl as string}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full text-left cursor-pointer"
        >
          {body}
        </Link>
      ) : (
        <button
          onClick={onSelect}
          className="group block w-full text-left cursor-pointer"
        >
          {body}
        </button>
      )}
    </motion.figure>
  );
}
