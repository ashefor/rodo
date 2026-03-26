import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { fontVariableClass } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rodo Lens | Visual Storyteller in Abuja & Lagos",
    template: "%s | Rodo Lens",
  },
  description:
    "Rodo Lens — visual storyteller, event content creator, brands, and lifestyle. Based in Abuja & Lagos, available to travel globally.",
  keywords: [
    "Abuja videographer",
    "Lagos videographer",
    "mobile videography Nigeria",
    "event planner Abuja & Lagos",
    "content creator Abuja",
    "content creator Lagos",
    "traveling videographer",
    "visual storyteller",
    "Rodo Lens",
    "Rodo",
  ],
  openGraph: {
    title: "Rodo Lens | Creative Portfolio",
    description:
      "Visual storytelling, events, brands, and lifestyle in Abuja, Lagos, and worldwide.",
    type: "website",
    locale: "en_NG",
    siteName: "Rodo Lens",
    images: ["/images/rodo-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/rodo-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" className="h-full" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${fontVariableClass} min-h-full flex flex-col antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

