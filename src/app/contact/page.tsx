import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactVisual } from "@/components/contact/ContactVisual";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rodo Lens for mobile videography, visual storytelling, and content creation services in Abuja, Lagos, and worldwide. Book your session today.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Contact Me"
          subtitle="Ready to bring your vision to life? Let's talk."
        />

        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row mx-auto w-full">
          {/* Form */}
          <div className="order-2 lg:order-1 w-full lg:w-[60%] p-8 md:p-12 lg:p-14">
            <ContactForm />
          </div>

          {/* Visual panel */}
          <div className="order-1 lg:order-2 w-full lg:w-[40%]">
            <ContactVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
