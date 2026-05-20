import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Variable serif with optical sizing and a true italic.
// Used as the display face — italic emphases pull from the same family.
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const fontVariableClass = `${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`;
