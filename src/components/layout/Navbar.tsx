"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
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
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <div className="w-full max-w-5xl flex justify-between items-center pointer-events-none">
          {/* Left: Logo */}
          <motion.div 
            className="pointer-events-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="bg-white shadow-sm border border-gray-100 rounded-full w-14 h-14 flex items-center justify-center font-heading text-xl font-bold tracking-tighter hover:text-primary transition-colors"
            >
              RL
            </Link>
          </motion.div>

          {/* Middle: Menu */}
          <motion.nav
            className={`hidden md:flex pointer-events-auto items-center gap-8 px-8 h-14 rounded-full ${
              scrolled 
                ? "bg-white/95 backdrop-blur-md shadow-md border border-gray-100" 
                : "bg-white shadow-sm border border-transparent"
            }`}
            style={{ transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s, backdrop-filter 0.3s" }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Right: Actions */}
          <motion.div 
            className="pointer-events-auto flex items-center gap-2 md:gap-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hidden md:block shadow-sm rounded-full overflow-hidden">
              <Button href="/contact" variant="primary">
                Book Me
              </Button>
            </div>
            <button
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} className="text-black" />
            </button>
          </motion.div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
