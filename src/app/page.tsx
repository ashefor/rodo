import { HeroSection } from "@/components/home/HeroSection";
import { ServicesScroll } from "@/components/home/ServicesScroll";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesScroll />
      <PortfolioPreview />
      <TestimonialMarquee />
      <CTASection />
    </>
  );
}
