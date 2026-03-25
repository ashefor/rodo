import type { NavLink, Service, Testimonial, PortfolioItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    title: "Weddings",
    description:
      "Cinematic mobile video production that captures the essence of every moment. From events to brand stories, I create compelling visual narratives.",
    icon: "Video",
    image: "/images/service-videography.jpg",
  },
  {
    title: "Birthdays",
    description:
      "Scroll-stopping content for social media and digital platforms. Creative concepts, filming, and editing tailored to your brand voice.",
    icon: "Camera",
    image: "/images/service-content.jpg",
  },
  {
    title: "Real Estate Shoots",
    description:
      "End-to-end event coordination that brings your vision to life. From intimate gatherings to large celebrations, every detail is covered.",
    icon: "CalendarHeart",
    image: "/images/service-events.jpg",
  },
  {
    title: "Corporate & Brand",
    description:
      "Crafting visual identities and brand narratives that resonate. From creative direction to full brand kits, I help you stand out.",
    icon: "CalendarHeart",
    image: "/images/service-brand.jpg",
  },
  {
    title: "Fashion",
    description:
      "Professional photo retouching, color grading, and compositing that transforms raw captures into polished visual masterpieces.",
    icon: "Camera",
    image: "/images/service-editing.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amaka O.",
    role: "Brand Owner",
    quote:
      "Divine captured our product launch beautifully. The videos were cinematic and the content drove real engagement on our socials.",
  },
  {
    name: "Chidi N.",
    role: "Groom",
    quote:
      "Our wedding video still makes us emotional every time we watch it. Rodo Lens understood exactly what we wanted.",
  },
  {
    name: "Fatima A.",
    role: "Event Host",
    quote:
      "From planning to execution, everything was seamless. The event coverage content was ready to post the very next day!",
  },
  {
    name: "Kelechi M.",
    role: "Influencer",
    quote:
      "Working with Rodo Lens elevated my content game. Professional, creative, and always delivers on time.",
  },
  {
    name: "Tunde B.",
    role: "CEO, StartUp Lagos",
    quote:
      "The corporate event recap video was exactly what we needed for our investors. Clean, professional, storytelling at its finest.",
  },
  {
    name: "Blessing E.",
    role: "Birthday Celebrant",
    quote:
      "My birthday party looked like a movie! Divine has an eye for capturing the perfect moments.",
  },
  {
    name: "Obinna K.",
    role: "Restaurant Owner",
    quote:
      "The food content videos tripled our Instagram following in just two months. Absolutely worth every penny.",
  },
  {
    name: "Zainab U.",
    role: "Fashion Designer",
    quote:
      "The lookbook video was stunning. Rodo Lens brings a unique creative vision that sets them apart from the rest.",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Lagos Brand Launch",
    category: "video",
    thumbnail: "/images/portfolio/project-01.jpg",
    videoUrl: "#",
  },
  {
    id: "2",
    title: "Wedding Highlights",
    category: "video",
    thumbnail: "/images/portfolio/project-02.jpg",
    videoUrl: "#",
  },
  {
    id: "3",
    title: "Food Content Series",
    category: "instagram",
    thumbnail: "/images/portfolio/project-03.jpg",
    instagramUrl: "#",
  },
  {
    id: "4",
    title: "Fashion Lookbook",
    category: "instagram",
    thumbnail: "/images/portfolio/project-04.jpg",
    instagramUrl: "#",
  },
  {
    id: "5",
    title: "Corporate Event Recap",
    category: "video",
    thumbnail: "/images/portfolio/project-05.jpg",
    videoUrl: "#",
  },
  {
    id: "6",
    title: "Lifestyle Vlog",
    category: "instagram",
    thumbnail: "/images/portfolio/project-06.jpg",
    instagramUrl: "#",
  },
  {
    id: "7",
    title: "Birthday Celebration",
    category: "video",
    thumbnail: "/images/portfolio/project-07.jpg",
    videoUrl: "#",
  },
  {
    id: "8",
    title: "Product Showcase",
    category: "instagram",
    thumbnail: "/images/portfolio/project-08.jpg",
    instagramUrl: "#",
  },
  {
    id: "9",
    title: "Music Video BTS",
    category: "video",
    thumbnail: "/images/portfolio/project-09.jpg",
    videoUrl: "#",
  },
];

export const SKILLS = [
  "Storytelling",
  "Mobile Cinematography",
  "Event Coordination",
  "Content Strategy",
  "Video Editing",
  "Social Media",
  "Brand Identity",
  "Color Grading",
  "Sound Design",
  "Motion Graphics",
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/_rodos__lens_",
  twitter: "https://twitter.com/rodolens",
  tiktok: "https://tiktok.com/@rodolens",
  email: "hello@rodolens.com",
  phone: "+234 800 000 0000",
};

export const SERVICE_OPTIONS = [
  "Mobile Videography",
  "Content Creation",
  "Event Planning",
  "Full Package",
  "Other",
];
