import type { MediaItem } from "./types";

export const mediaItems: MediaItem[] = [
  {
    id: "media-1",
    title: "The Art of Transformation: Eba Sheba on Film Makeup",
    type: "interview",
    publication: "Film Indonesia Magazine",
    date: "2023",
    excerpt:
      "An in-depth conversation about bridging beauty artistry with cinematic storytelling in Indonesian cinema.",
    comingSoon: true,
  },
  {
    id: "media-2",
    title: "Behind the Scenes: Festival Film Indonesia Winners",
    type: "publication",
    publication: "Cinema Indonesia",
    date: "2022",
    excerpt:
      "Feature profile highlighting award-winning makeup artistry across multiple FFI-winning productions.",
    comingSoon: true,
  },
  {
    id: "media-3",
    title: "Executive Producer Spotlight — The Seen and Unseen",
    type: "press",
    publication: "Variety Asia",
    date: "2018",
    excerpt:
      "International press coverage of the acclaimed art-house production and its creative team.",
    comingSoon: true,
  },
  {
    id: "media-4",
    title: "Indonesia's Finest: Makeup Artists in Cinema",
    type: "recognition",
    publication: "Industry Recognition",
    date: "2024",
    excerpt:
      "Named among Indonesia's most influential makeup artists in film and television production.",
    comingSoon: true,
  },
  {
    id: "media-5",
    title: "Beauty Meets Cinema: A Masterclass",
    type: "interview",
    publication: "Jakarta Post",
    date: "2021",
    excerpt:
      "Exclusive interview on the evolution of makeup artistry in Indonesia's golden age of cinema.",
    comingSoon: true,
  },
  {
    id: "media-6",
    title: "Red Carpet & Runway: Dual Mastery",
    type: "press",
    publication: "Elle Indonesia",
    date: "2024",
    excerpt:
      "Editorial feature showcasing the intersection of high fashion and film makeup artistry.",
    comingSoon: true,
  },
];

export const mediaTypes = [
  { id: "all", label: "All" },
  { id: "interview", label: "Interviews" },
  { id: "publication", label: "Publications" },
  { id: "press", label: "Press Features" },
  { id: "recognition", label: "Industry Recognition" },
] as const;
