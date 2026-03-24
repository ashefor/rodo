import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rodo Lens | Content Creator & Mobile Videographer in Abuja",
    template: "%s | Rodo Lens",
  },
  description:
    "Divine Agbanigbi — content creator, mobile videographer, and event planner based in Abuja. View portfolio, services, and book your next project.",
  keywords: [
    "Abuja videographer",
    "mobile videography Nigeria",
    "event planner Abuja",
    "content creator Abuja",
    "Rodo Lens",
    "Divine Agbanigbi",
  ],
  openGraph: {
    title: "Rodo Lens | Creative Portfolio",
    description:
      "Content creation, mobile videography, and event planning in Abuja.",
    type: "website",
    locale: "en_NG",
    siteName: "Rodo Lens",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
