"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactVisual() {
  return (
    <motion.div
      className="relative h-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-dark" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Let&rsquo;s work together
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-sm leading-relaxed">
            Have a project in mind? Fill out the form and I&rsquo;ll get back to
            you within 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-white/60">Email</p>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm font-medium hover:underline"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-white/60">Phone</p>
              <a
                href={`tel:${SOCIAL_LINKS.phone}`}
                className="text-sm font-medium hover:underline"
              >
                {SOCIAL_LINKS.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-white/60">Location</p>
              <p className="text-sm font-medium">Abuja, Nigeria</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Globe size={18} />
            </div>
            <div>
              <p className="text-xs text-white/60">Instagram</p>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
              >
                @rodolens
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
