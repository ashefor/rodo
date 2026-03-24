"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
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
      "bg-gradient-to-r from-primary to-primary-container text-white hover:shadow-[0_0_24px_rgba(164,56,0,0.3)] hover:scale-105",
    secondary:
      "bg-secondary-container text-secondary backdrop-blur-md hover:backdrop-blur-xl hover:shadow-[0_0_20px_rgba(91,0,223,0.2)] hover:scale-105",
    outline:
      "border-2 border-outline-variant text-foreground hover:border-primary hover:text-primary hover:scale-105 dark:border-outline-variant-dark",
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
