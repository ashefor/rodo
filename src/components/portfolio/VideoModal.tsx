"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/types";

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function VideoModal({ item, onClose }: VideoModalProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${item.title}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            onClick={onClose}
            style={{
              background: "oklch(8% 0.005 60 / 0.88)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Figure */}
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {/* Header rule */}
            <div className="flex justify-between items-baseline mb-4">
              <p className="font-mono-utility">now playing</p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 font-mono-utility hover:text-accent transition-colors duration-(--dur-fast)"
                aria-label="Close video"
              >
                <span>close</span>
                <X size={14} />
              </button>
            </div>

            {/* Video frame */}
            <div
              className="relative w-full aspect-video overflow-hidden"
              style={{
                background: "var(--color-paper-2)",
                borderRadius: "var(--radius-figure)",
              }}
            >
              {item.videoUrl && item.videoUrl !== "#" ? (
                <video
                  src={item.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <p
                    className="font-display tracking-tight mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-2xl)",
                      color: "var(--color-ink)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p className="text-ink-dim text-sm">
                    The full reel lives on Instagram.
                  </p>
                  {item.instagramUrl && item.instagramUrl !== "#" && (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-accent hover:underline"
                    >
                      <span>Open on Instagram</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p
                className="font-display tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  color: "var(--color-ink)",
                }}
              >
                {item.title}
              </p>
              <p className="font-mono-utility">{item.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
