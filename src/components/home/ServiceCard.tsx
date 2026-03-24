"use client";

import { useRef, useEffect } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
  totalCards: number;
  scrollIndex: MotionValue<number>;
}

const colors = [
  "bg-[#b05b15]", // Brown/Orange
  "bg-[#087b8f]", // Teal
  "bg-[#8a0d78]", // Purple/Magenta
];

export function ServiceCard({ service, index, totalCards, scrollIndex }: ServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // --- Stack peek: cards waiting below are slightly offset & scaled ---
  const yOffset = useTransform(
    scrollIndex,
    [index - 2, index - 1, index, index + 0.4, index + 1],
    [60, 30, 0, 0, -300]
  );

  const scale = useTransform(
    scrollIndex,
    [index - 2, index - 1, index],
    [0.88, 0.94, 1]
  );

  // --- 3D exit: card tilts backward (rotateX) as it peels away ---
  const rotateX = useTransform(
    scrollIndex,
    [index, index + 0.3, index + 1],
    [0, 0, 45]
  );

  // --- Fade out as card exits ---
  const opacity = useTransform(
    scrollIndex,
    [index, index + 0.6, index + 1],
    [1, 1, 0]
  );

  // First card on top (highest z-index)
  const zIndex = totalCards - index;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const bgColor = colors[index % colors.length];

  return (
    <motion.div
      className={`absolute inset-0 max-w-6xl w-[90vw] mx-auto rounded-[32px] overflow-hidden shadow-2xl ${bgColor} flex flex-col md:flex-row p-6 md:p-12 gap-8 md:gap-16 sm:h-auto h-full max-h-[85vh] my-auto`}
      style={{
        y: yOffset,
        scale,
        rotateX,
        opacity,
        zIndex,
        transformOrigin: "center top",
      }}
    >
      {/* Left Column - Text Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 text-white pt-4 md:pt-0">
        <div className="mb-6">
          <span className="text-xl md:text-3xl font-black">{`0${index + 1}`}</span>
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest mt-1 opacity-80">
            SERVICE
          </p>
        </div>

        <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
          {service.title}
        </h3>

        <p className="text-white/90 text-sm md:text-lg lg:text-xl max-w-lg leading-relaxed font-medium">
          {service.description}
        </p>
      </div>

      {/* Right Column - Media */}
      <div className="flex-1 w-full rounded-2xl md:rounded-[32px] overflow-hidden relative aspect-square md:aspect-auto bg-black/20 shrink-0">
        {service.videoUrl ? (
          <video
            ref={videoRef}
            src={service.videoUrl}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              backgroundImage: `url(${service.image || "/images/placeholder.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
