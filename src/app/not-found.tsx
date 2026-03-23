"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-accent">
          404
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-heading font-semibold">
          Page Not Found
        </p>
        <p className="mt-2 text-text-muted dark:text-text-dark-muted mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <Button href="/" variant="primary">
          Go Home
        </Button>
      </motion.div>
    </section>
  );
}
