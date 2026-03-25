export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  videoUrl?: string;
  card: React.ComponentType<{ id: string, imageUrl?: string }>;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "instagram" | "video";
  thumbnail: string;
  videoUrl?: string;
  instagramUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
