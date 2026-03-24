"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactVisual() {
  return (
    <div className="relative h-full w-full min-h-[500px] bg-primary text-white overflow-hidden p-8 md:p-12 lg:p-14 flex flex-col justify-between">
      {/* Decorative Circles matching the screenshot */}
      <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] rounded-full bg-red-400/90 mix-blend-multiply" />
      <div className="absolute -bottom-10 right-10 w-48 h-48 rounded-full bg-primary-container/90 mix-blend-multiply" />

      {/* Content Top */}
      <div className="relative z-10 w-full">
        <h3 className="font-heading text-2xl font-bold mb-4">
          Contact Information
        </h3>
        <p className="text-white/80 text-sm mb-12 max-w-[250px] leading-relaxed">
          Fill up the form and our Team will get back to you within 24 hours.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <Phone size={18} className="text-white/70" />
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-sm font-medium hover:text-white/70 transition-colors">
              {SOCIAL_LINKS.phone}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Mail size={18} className="text-white/70" />
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm font-medium hover:text-white/70 transition-colors">
              {SOCIAL_LINKS.email}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <MapPin size={18} className="text-white/70" />
            <p className="text-sm font-medium">Abuja, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Content Bottom: Socials */}
      <div className="relative z-10 flex items-center gap-4 mt-20">
        <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
          <span className="font-serif italic font-bold">f</span>
        </a>
        <a href={SOCIAL_LINKS.twitter} aria-label="Twitter" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
          <Share2 size={16} />
        </a>
        <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <Globe size={16} />
        </a>
        <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
          <span className="font-serif italic font-bold">in</span>
        </a>
      </div>
    </div>
  );
}
