"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // On the home page above the fold, the navbar sits over the hero's dark
  // video plate — invert ink tokens locally so the links read cream-on-dark.
  // Once scrolled (or on any other page where the background is cream paper),
  // the navbar returns to dark-on-cream automatically.
  const onHeroPlate = pathname === "/" && !scrolled;
  const inkInversion = onHeroPlate
    ? ({
        ["--color-ink" as string]: "var(--color-paper)",
        ["--color-ink-quiet" as string]: "oklch(78% 0.010 60)",
        ["--color-accent" as string]: "oklch(72% 0.165 39)",
      } as React.CSSProperties)
    : undefined;

  return (
    <>
      <nav
        style={inkInversion}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,padding] duration-(--dur-base) ease-out ${
          scrolled
            ? "py-3 bg-[oklch(96.5%_0.008_60/0.82)] backdrop-blur-md hairline-bottom"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo lockup — mark + wordmark, plus mono meta.
              Token utilities use the (--var) syntax so the on-hero inversion
              actually cascades; bare `text-ink` is inlined by @theme inline
              and won't pick up the override. */}
          <Link
            href="/"
            className="group inline-flex items-baseline gap-3 text-(--color-ink) hover:text-(--color-accent) transition-colors duration-(--dur-fast)"
            aria-label="Rodo Lens — home"
          >
            <Logo variant="lockup" size={26} />
            <span
              className="hidden sm:inline font-mono-utility text-[10px] -translate-y-px"
              aria-hidden
            >
              · est. 2020
            </span>
          </Link>

          {/* Center / right: text links separated by mid-dots */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            {NAV_LINKS.map((link, idx) => {
              const active = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <span key={link.label} className="inline-flex items-center">
                  <Link
                    href={link.href}
                    className={`px-3 py-2 transition-colors duration-(--dur-fast) ${
                      active
                        ? "text-(--color-accent)"
                        : "text-(--color-ink) hover:text-(--color-accent)"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {idx < NAV_LINKS.length - 1 && (
                    <span aria-hidden className="text-(--color-ink-quiet) select-none">
                      ·
                    </span>
                  )}
                </span>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 inline-flex items-center justify-center text-(--color-ink) hover:text-(--color-accent) transition-colors duration-(--dur-fast)"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
