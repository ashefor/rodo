"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PORTFOLIO_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioItem } from "./PortfolioItem";

export function PortfolioPreview() {
  const previewItems = PORTFOLIO_ITEMS.slice(0, 6);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const track = trackRef.current;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;

      let closestElement: HTMLElement | null = null;
      let closestDistance = Infinity;

      const items = Array.from(track.children[0].children) as HTMLElement[];

      items.forEach((child) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(childCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestElement = child;
        }
      });

      if (closestElement) {
        const activeIndex = items.indexOf(closestElement);
        const nextIndex = direction === "left"
          ? Math.max(0, activeIndex - 1)
          : Math.min(items.length - 1, activeIndex + 1);

        const nextElement = items[nextIndex];
        if (nextElement) {
          const targetScrollLeft = nextElement.offsetLeft - track.clientWidth / 2 + nextElement.clientWidth / 2;
          track.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="flex-1 [&>div]:mb-0">
            <SectionHeading
              label="My Work"
              title="Our Programs"
              subtitle="A glimpse into the stories I&rsquo;ve told and the moments I&rsquo;ve captured."
              centered={false}
            />
          </div>
          <div className="hidden md:flex gap-3 pb-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-lg border border-outline-variant dark:border-outline-variant-dark flex items-center justify-center hover:bg-surface-container dark:hover:bg-surface-dark-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-lg border border-outline-variant dark:border-outline-variant-dark flex items-center justify-center hover:bg-surface-container dark:hover:bg-surface-dark-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory"
        ref={trackRef}
        onScroll={checkScroll}
      >
        <div className="flex gap-5 md:gap-8 pb-8 w-max px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {previewItems.map((item, index) => (
            <div key={item.id} data-portfolio-item className="snap-center shrink-0">
              <PortfolioItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* View More CTA */}
        <div className="mt-8 text-center">
          <Button
            href={SOCIAL_LINKS.instagram}
            external
            variant="outline"
          >
            View More on Instagram
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
