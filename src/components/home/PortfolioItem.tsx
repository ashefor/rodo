"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { PortfolioItem as PortfolioItemType } from "@/types";

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

export function PortfolioItem({ item, index }: PortfolioItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Masonry-like heights
  const heights = ["h-64", "h-80", "h-72", "h-96", "h-64", "h-80"];
  const heightClass = heights[index % heights.length];

  return (
    <motion.div
      className={`relative ${heightClass} rounded-2xl overflow-hidden group cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient placeholder */}
      <div
        className={`absolute inset-0 ${
          index % 3 === 0
            ? "bg-gradient-to-br from-gray-800 to-gray-900"
            : index % 3 === 1
            ? "bg-gradient-to-br from-neutral-700 to-neutral-900"
            : "bg-gradient-to-br from-zinc-700 to-zinc-900"
        }`}
      />

      {/* Video preview (plays on hover) */}
      {item.videoUrl && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
          <p className="text-white font-medium text-sm">{item.title}</p>
          <p className="text-white/50 text-xs mt-1 capitalize">{item.category}</p>
        </div>
      </div>

      {/* Play icon for video items */}
      {item.category === "video" && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
