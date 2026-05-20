"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "tertiary" | "ghost";
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  external,
  type = "button",
  onClick,
  className = "",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-tight rounded-[2px] " +
    "transition-colors duration-(--dur-fast) ease-out cursor-pointer whitespace-nowrap " +
    "focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-paper hover:bg-accent-hover focus-visible:outline-[var(--color-focus)]",
    secondary:
      "bg-paper-2 text-ink hairline border hairline hover:bg-paper-3",
    tertiary:
      "bg-accent text-paper hover:bg-accent-hover",
    outline:
      "border border-[var(--color-paper-edge)] text-ink hover:border-[var(--color-accent)] hover:text-accent bg-transparent",
    ghost:
      "text-ink hover:text-accent bg-transparent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
