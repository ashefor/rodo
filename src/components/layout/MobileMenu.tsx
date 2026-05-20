"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-[oklch(8%_0.005_60/0.85)] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-paper"
            style={{ backgroundColor: "var(--color-paper)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 hairline-bottom">
              <span style={{ color: "var(--color-ink)" }}>
                <Logo variant="lockup" size={24} />
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 inline-flex items-center justify-center hover:text-accent transition-colors"
                style={{ color: "var(--color-ink)" }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6">
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block font-display text-4xl sm:text-5xl tracking-tight transition-colors duration-(--dur-fast)"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: active ? "var(--color-accent)" : "var(--color-ink)",
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="px-6 py-6 hairline-top">
              <p className="font-mono-utility mb-2">contact</p>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="block text-base text-ink hover:text-accent transition-colors"
              >
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-ink hover:text-accent transition-colors mt-1"
              >
                Instagram — @rodos_lens_
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
