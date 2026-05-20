import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { fontVariableClass } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rodo Lens — Visual storyteller, Abuja & Lagos",
    template: "%s — Rodo Lens",
  },
  description:
    "Rodo Lens is a visual storyteller working in reels, short film, and event content. Based in Abuja and Lagos, available worldwide.",
  keywords: [
    "Abuja videographer",
    "Lagos videographer",
    "mobile videography Nigeria",
    "content creator Abuja",
    "content creator Lagos",
    "traveling videographer",
    "visual storyteller",
    "Rodo Lens",
  ],
  openGraph: {
    title: "Rodo Lens",
    description:
      "Reels, short film, event content. Abuja & Lagos, available worldwide.",
    type: "website",
    locale: "en_NG",
    siteName: "Rodo Lens",
    images: ["/images/rodo-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/rodo-logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fontVariableClass} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col antialiased bg-paper text-ink"
        style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
