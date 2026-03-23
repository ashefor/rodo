import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse the portfolio of Rodo Lens — mobile videography, content creation, and event coverage projects in Abuja and beyond.",
};

export default function PortfolioPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="My Work"
          subtitle="Explore a collection of projects that showcase my creative journey and storytelling skills."
        />

        <PortfolioGrid />

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-muted dark:text-text-dark-muted mb-4">
            Want to see more of my work?
          </p>
          <Button href={SOCIAL_LINKS.instagram} external variant="primary">
            View Full Portfolio on Instagram
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
