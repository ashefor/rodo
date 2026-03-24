"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-4 left-0 right-0 z-50 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className={`max-w-5xl mx-auto flex items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "glass shadow-float"
              : "bg-surface-bright/80 dark:bg-surface-dark-container/80 backdrop-blur-xl shadow-ambient"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-bold tracking-tighter hover:text-primary transition-colors pl-3"
          >
            RL
          </Link>

          {/* Desktop nav pill */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-surface-container/80 dark:bg-surface-dark-container-high/80 px-2 py-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-foreground/70 dark:text-white/70 hover:text-primary hover:bg-surface-container-high/60 dark:hover:bg-surface-dark-bright/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button href="/contact" variant="primary">
                Book Me
              </Button>
            </div>
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
