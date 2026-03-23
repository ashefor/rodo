"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent to-accent-dark p-12 md:p-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <Sparkles size={32} className="text-white/80 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&rsquo;s Create Something
              <br />
              Unforgettable
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10">
              Ready to bring your vision to life? Let&rsquo;s talk about your
              next project and make it extraordinary.
            </p>
            <Button
              href="/contact"
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-accent-dark"
            >
              Book Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
