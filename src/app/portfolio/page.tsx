import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SOCIAL_LINKS, PORTFOLIO_ITEMS } from "@/lib/constants";
import { getInstagramVideos } from "@/lib/instagram";

export const metadata: Metadata = {
  title: "Portfolio | Event Content Creator & Mobile Videography",
  description:
    "Browse the portfolio of Rodo Lens. Expert event content creation, mobile videography, and luxury decor coverage in Abuja, Lagos, and globally. View weddings, setups, and event highlights.",
  keywords: [
    "Rodo Lens",
    "Rodo Event Content Creator",
    "Abuja Content Creator",
    "Event Videography Nigeria",
    "Wedding Content Creator Abuja",
    "Mobile Videography Nigeria",
    "Event Decor Video",
    "Abuja Event Photographer",
    "Instagram Reel Creator Events",
    "Luxury Event Coverage",
    "Decor Setups Videography",
  ],
};

export default async function PortfolioPage() {
  const liveVideos = await getInstagramVideos();
  // If the .env token isn't set or fetching fails, safely fallback to the mock PORTFOLIO_ITEMS
  const itemsToDisplay = liveVideos.length > 0 ? liveVideos : PORTFOLIO_ITEMS;

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="My Work"
          subtitle="Explore a collection of projects that showcase my creative journey and storytelling skills."
        />

        <PortfolioGrid initialItems={itemsToDisplay} />

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white mb-4">
            Want to see more of my work?
          </p>
          <Button href={SOCIAL_LINKS.instagram} external variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-tertiary">
            View Full Portfolio on Instagram
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
