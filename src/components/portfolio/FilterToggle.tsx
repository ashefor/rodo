"use client";

interface FilterToggleProps {
  activeFilter: "all" | "instagram" | "video";
  onFilterChange: (filter: "all" | "instagram" | "video") => void;
}

const filters = [
  { key: "all" as const, label: "All" },
  { key: "video" as const, label: "Reels & film" },
  { key: "instagram" as const, label: "Feed" },
];

export function FilterToggle({ activeFilter, onFilterChange }: FilterToggleProps) {
  return (
    <div className="inline-flex gap-1" role="tablist" aria-label="Filter work">
      {filters.map((f, idx) => {
        const active = activeFilter === f.key;
        return (
          <button
            key={f.key}
            role="tab"
            aria-selected={active}
            onClick={() => onFilterChange(f.key)}
            className="relative px-3 py-2 text-sm transition-colors duration-(--dur-fast) cursor-pointer"
            style={{
              color: active ? "var(--color-accent)" : "var(--color-ink)",
            }}
          >
            <span>{f.label}</span>
            {active && (
              <span
                aria-hidden
                className="absolute left-3 right-3 -bottom-px h-px"
                style={{ background: "var(--color-accent)" }}
              />
            )}
            {idx < filters.length - 1 && (
              <span aria-hidden className="text-ink-quiet select-none ml-1">·</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
