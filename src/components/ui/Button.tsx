"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  external,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark shadow-lg hover:shadow-xl hover:scale-105",
    outline:
      "border-2 border-foreground/20 text-foreground hover:border-accent hover:text-accent hover:scale-105 dark:border-white/20",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
