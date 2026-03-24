import { HeroSection } from "@/components/home/HeroSection";
import { ServicesScroll } from "@/components/home/ServicesScroll";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { CTASection } from "@/components/home/CTASection";
import { getLatestReel } from "@/lib/instagram";

export default async function Home() {
  const latestReel = await getLatestReel();
  
  return (
    <>
      <HeroSection videoUrl={latestReel?.videoUrl} />
      <ServicesScroll />
      <PortfolioPreview />
      <TestimonialMarquee />
      <CTASection />
    </>
  );
}
