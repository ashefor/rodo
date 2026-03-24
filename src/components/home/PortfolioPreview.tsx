"use client";

import { useRef, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioItem } from "./PortfolioItem";

export function PortfolioPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const previewItems = PORTFOLIO_ITEMS.slice(0, 6);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 400;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <SectionHeading
            label="My Work"
            title="Portfolio"
            subtitle="A glimpse into the stories I&rsquo;ve told and the moments I&rsquo;ve captured."
            centered={false}
          />
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Button href={SOCIAL_LINKS.instagram} external variant="primary">
              View Portfolio
            </Button>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-2xl bg-surface-container dark:bg-surface-dark-container flex items-center justify-center transition-all hover:bg-surface-container-high dark:hover:bg-surface-dark-container-high disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-2xl bg-surface-container dark:bg-surface-dark-container flex items-center justify-center transition-all hover:bg-surface-container-high dark:hover:bg-surface-dark-container-high disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pl-[max(1rem,calc((100vw-80rem)/2+1rem))] pr-6"
      >
        {previewItems.map((item, index) => (
          <PortfolioItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 text-center md:hidden px-4">
        <Button href={SOCIAL_LINKS.instagram} external variant="outline">
          View More on Instagram
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
