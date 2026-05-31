import type { NavLink, SocialLink } from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Filmography", href: "#filmography" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  {
    label: "IMDb",
    href: "https://www.imdb.com/name/nm4878050/",
    icon: "imdb",
  },
];

export const contactEmail = "hello@ebasheba.com";

export const profileImage = "/images/eba-sheba.webp";
