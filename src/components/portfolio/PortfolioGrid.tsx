"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import type { PortfolioItem } from "@/types";
import { VideoModal } from "./VideoModal";

interface PortfolioGridProps {
  initialItems: PortfolioItem[];
}

export function PortfolioGrid({ initialItems }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const visible = initialItems.slice(0, visibleCount);
  const hasMore = visibleCount < initialItems.length;

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              className="relative break-inside-avoid block w-full group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container with varied aspect ratios to build the masonry */}
              <div
                className={`relative w-full rounded-lg overflow-hidden ${index % 5 === 0
                  ? "aspect-video"
                  : index % 5 === 1
                    ? "aspect-[4/5]"
                    : index % 5 === 2
                      ? "aspect-square"
                      : index % 5 === 3
                        ? "aspect-[3/4]"
                        : "aspect-[4/3]"
                  }`}
              >
                {/* As requested, cards are effectively videos, keeping consistent thumbnail structure for performance/mocking, but treating as a video playable thumbnail */}
                <div
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#242424'
                  }}
                />

                {/* Hover overlay with icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-xl">
                      <Play size={20} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info Below Image */}
              <div className="mt-3 px-1 mb-2">
                <h3 className="font-bold text-base md:text-lg text-background dark:text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-dark-variant mt-1 capitalize font-medium tracking-wide">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-8 py-3 rounded-full text-sm font-medium bg-surface-dark-container text-white hover:bg-tertiary hover:text-white transition-all cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}

      <VideoModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
