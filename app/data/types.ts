export type AwardResult = "winner" | "nominee";

export interface Award {
  id: string;
  name: string;
  organization: string;
  category: string;
  year: number;
  result: AwardResult;
  project?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export type FilmRole =
  | "Make-Up Artist"
  | "Department Head"
  | "Executive Producer";

export type FilmType = "film" | "television" | "commercial" | "production";

export interface FilmographyEntry {
  id: string;
  title: string;
  year: number;
  role: FilmRole;
  type: FilmType;
  description: string;
  posterUrl?: string;
}

export interface FeaturedProject {
  title: string;
  year: number;
  director: string;
  role: FilmRole;
  tagline: string;
  description: string;
  posterUrl?: string;
  festivals: string[];
  awards: string[];
  details: string[];
}

export type PortfolioCategory =
  | "bridal"
  | "fashion"
  | "editorial"
  | "film"
  | "television"
  | "celebrity";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export type MediaType =
  | "interview"
  | "publication"
  | "press"
  | "recognition";

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  publication: string;
  date: string;
  excerpt: string;
  url?: string;
  comingSoon?: boolean;
}

export type TestimonialRole =
  | "Director"
  | "Producer"
  | "Celebrity"
  | "Client";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: TestimonialRole;
  title: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "imdb";
}
