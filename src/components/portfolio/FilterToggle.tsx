"use client";

import { motion } from "framer-motion";

interface FilterToggleProps {
  activeFilter: "all" | "instagram" | "video";
  onFilterChange: (filter: "all" | "instagram" | "video") => void;
}

const filters = [
  { key: "all" as const, label: "All" },
  { key: "instagram" as const, label: "Instagram Feed" },
  { key: "video" as const, label: "Video Projects" },
];

export function FilterToggle({ activeFilter, onFilterChange }: FilterToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex gap-1 p-1 rounded-full bg-surface-container dark:bg-surface-dark-container">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeFilter === filter.key
                ? "text-white"
                : "text-on-surface-variant dark:text-on-surface-dark-variant hover:text-foreground dark:hover:text-white"
            }`}
          >
            {activeFilter === filter.key && (
              <motion.div
                layoutId="filter-pill"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
