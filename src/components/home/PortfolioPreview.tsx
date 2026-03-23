"use client";

import { ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioItem } from "./PortfolioItem";

export function PortfolioPreview() {
  const previewItems = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="My Work"
          title="Portfolio"
          subtitle="A glimpse into the stories I&rsquo;ve told and the moments I&rsquo;ve captured."
          centered={false}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {previewItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-12 text-center">
          <Button
            href={SOCIAL_LINKS.instagram}
            external
            variant="outline"
          >
            View More on Instagram
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
