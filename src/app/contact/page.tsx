import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactVisual } from "@/components/contact/ContactVisual";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about the moment you want held. Reels, short film, and event content from Rodo Lens in Abuja, Lagos, and worldwide.",
};

export default function ContactPage() {
  return (
    <section
      className="pt-32 md:pt-44 pb-20 md:pb-28"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top meta */}
        <div className="flex justify-between items-baseline mb-12 md:mb-16">
          <p className="font-mono-utility">contact</p>
          <p className="font-mono-utility">reply within 24 hours</p>
        </div>

        {/* Bookend: statement left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Statement panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <ContactVisual />
          </div>

          {/* Form panel */}
          <div className="lg:col-span-7">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
