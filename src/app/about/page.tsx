import type { Metadata } from "next";
import { PortraitHero } from "@/components/about/PortraitHero";
import { StorySection } from "@/components/about/StorySection";
import { SkillsTags } from "@/components/about/SkillsTags";
import { TestimonialMarquee } from "@/components/home/TestimonialMarquee";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Divine Agbanigbi — the creative mind behind Rodo Lens. Content creator, mobile videographer, and event planner based in Abuja, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PortraitHero />
      <StorySection />
      <SkillsTags />
      <TestimonialMarquee showHeading />
      <CTASection />
    </>
  );
}
