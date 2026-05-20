"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

// Stagger the nav items in on open, reverse them on close. Subtle 8px lift +
// opacity. Drawer fade leads; items follow 80ms later.
const listVariants: Variants = {
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.18, ease: [0.55, 0.06, 0.68, 0.19] },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] },
  },
};

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
            className="fixed inset-0 z-50 bg-[oklch(8%_0.010_250/0.85)] backdrop-blur-sm"
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
              <motion.ul
                className="flex flex-col gap-6"
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block text-4xl sm:text-5xl tracking-tight transition-colors duration-(--dur-fast)"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          letterSpacing: "-0.025em",
                          color: active ? "var(--color-accent)" : "var(--color-ink)",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
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
