"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
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
            <div className="w-8 h-8 bg-tertiary rounded-sm flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter uppercase text-[#fff5f8] group-hover:text-tertiary transition-colors">
              RODO
            </span>
          </Link>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 text-[#fff5f8] hover:text-tertiary ${pathname === link.href ? "text-tertiary border-b-2 border-tertiary" : "text-[#fff5f8]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Status Bubble (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-2.5">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-[#17FF00] rounded-full" />
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#17FF00] rounded-full"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Open to work</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-gray-200"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} className="text-[#fff5f8]" />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

