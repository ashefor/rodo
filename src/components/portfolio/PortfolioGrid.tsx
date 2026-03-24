"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import type { PortfolioItem } from "@/types";
import { FilterToggle } from "./FilterToggle";
import { VideoModal } from "./VideoModal";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | "instagram" | "video">("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    filter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <FilterToggle activeFilter={filter} onFilterChange={setFilter} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() =>
                item.category === "video"
                  ? setSelectedItem(item)
                  : undefined
              }
            >
              {/* Background placeholder */}
              <div
                className={`absolute inset-0 ${
                  index % 4 === 0
                    ? "bg-gradient-to-br from-gray-700 to-gray-900"
                    : index % 4 === 1
                    ? "bg-gradient-to-br from-neutral-600 to-neutral-900"
                    : index % 4 === 2
                    ? "bg-gradient-to-br from-zinc-600 to-zinc-900"
                    : "bg-gradient-to-br from-stone-600 to-stone-900"
                }`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category === "video" ? (
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium truncate">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-3 rounded-full text-sm font-medium bg-surface-container dark:bg-surface-dark-container hover:bg-primary hover:text-white transition-all cursor-pointer"
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
