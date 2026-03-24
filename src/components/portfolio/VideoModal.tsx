"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#1a1c1d]/85 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-[#1a1c1d] shadow-float"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Video: ${item.title}`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1a1c1d]/60 flex items-center justify-center text-white hover:bg-[#1a1c1d]/80 transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            {/* Video player placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <p className="text-white font-heading text-xl font-bold mb-2">
                  {item.title}
                </p>
                <p className="text-white/50 text-sm">
                  Video player — add your video source
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
