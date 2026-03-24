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
      className="relative w-[85vw] md:w-auto md:aspect-video h-[450px] md:h-[500px] flex-shrink-0 snap-center rounded-[32px] overflow-hidden group cursor-pointer bg-black"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient placeholder */}
      <div
        className={`absolute inset-0 ${
          index % 3 === 0
            ? "bg-gradient-to-br from-[#111] to-[#333]"
            : index % 3 === 1
            ? "bg-gradient-to-br from-[#222] to-[#444]"
            : "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
        }`}
      />

      {/* Image thumbnail mimicking the screenshot style */}
      {item.thumbnail && (
        <div 
          className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage: `url(${item.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
      )}

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

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent md:from-black md:via-black/70 md:to-transparent" />

      {/* Content mimicking the screenshot */}
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
        <div className="w-[85%] md:w-2/3 transform group-hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-white font-black text-[2.5rem] leading-[1.05] tracking-tight mb-2 md:text-[3.5rem]">
            {item.title}
          </h2>
          <p className="text-white/60 text-sm md:text-base uppercase font-bold tracking-[0.2em]">{item.category}</p>
        </div>

        <div className="transform group-hover:-translate-y-1 transition-transform duration-300 mt-auto">
          <div className="bg-white text-black font-extrabold text-sm uppercase tracking-wide px-6 py-3.5 rounded-xl inline-block shadow-lg hover:bg-gray-200 transition-colors">
            Learn More
          </div>
        </div>
      </div>

      {/* Play icon for video items */}
      {item.category === "video" && (
        <div className="absolute top-6 right-6 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
            <Play size={20} className="text-white ml-1" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
