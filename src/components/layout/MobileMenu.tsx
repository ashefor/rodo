"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

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
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-background shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-foreground/10 dark:border-white/10">
              <span className="font-heading text-2xl font-bold">RL</span>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col gap-2 p-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 text-lg font-medium transition-colors hover:text-accent ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-foreground/70 dark:text-white/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-6 border-t border-foreground/10 dark:border-white/10">
              <Button href="/contact" variant="primary" className="w-full">
                Book Me
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
