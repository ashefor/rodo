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

  return (
    <motion.div
      className="flex-shrink-0 w-[75vw] md:w-[55vw] lg:w-[45vw] aspect-video relative rounded-3xl overflow-hidden group cursor-pointer snap-start"
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
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-4">
          <div className="transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
            <p className="text-white font-heading font-bold text-lg md:text-xl">
              {item.title}
            </p>
            <p className="text-white/50 text-sm mt-1 capitalize">
              {item.category}
            </p>
          </div>

          {/* Learn more button */}
          <span className="hidden md:inline-flex px-5 py-2 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Learn More
          </span>
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
