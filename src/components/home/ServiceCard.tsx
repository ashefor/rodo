"use client";

import { motion } from "framer-motion";
import { Video, Camera, CalendarHeart } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Video,
  Camera,
  CalendarHeart,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Video;

  return (
    <div
      className="w-[90vw] md:w-[75vw] lg:w-[60vw] max-w-4xl h-[60vh] md:h-[65vh] relative rounded-3xl overflow-hidden group cursor-pointer shadow-float"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            index === 0
              ? "bg-gradient-to-br from-[#a43800] to-[#cd4800]"
              : index === 1
              ? "bg-gradient-to-br from-[#5b00df] to-[#7c3aed]"
              : "bg-gradient-to-br from-blue-600 to-teal-700"
          }`}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
        <motion.div
          className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <Icon size={28} className="text-white" />
        </motion.div>

        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
          {service.title}
        </h3>
        <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">
          {service.description}
        </p>

        {/* Decorative number */}
        <span className="absolute top-8 right-8 font-heading text-8xl font-bold text-white/5">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}
