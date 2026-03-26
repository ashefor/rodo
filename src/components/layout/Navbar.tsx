"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/10 backdrop-blur-md py-4" : "py-8"
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">

          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center text-white">
              <img src="/images/rodo-logo.png" alt="Rodo Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter uppercase text-white group-hover:text-tertiary transition-colors">
              RODO LENS
            </span>
          </Link>

          {/* Center: Status (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#17FF00]"></span>
              </div>
              <span className="text-[11px] font-medium text-white/90">Available for Freelance</span>
            </div>
          </div>

          {/* Right: Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <span className="hidden md:block text-sm font-bold text-white uppercase tracking-wider group-hover:text-tertiary transition-colors">
                Menu
              </span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-tertiary transition-colors">
                <Menu size={20} />
              </div>
            </button>
          </div>
        </div>

      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

