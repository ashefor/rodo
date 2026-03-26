"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsTags() {
  return (
    <section className="py-16 md:py-24 bg-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          label="Expertise"
          title="Skills & Specialties"
          centered
        />

        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill, index) => (
            <motion.span
              key={skill}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-surface-container-high hover:bg-secondary hover:text-white transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
