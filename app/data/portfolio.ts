import type { PortfolioItem } from "./types";
import { moviePosters } from "./posters";

const placeholder = (name: string) => `/images/placeholders/${name}.svg`;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "bridal-1",
    title: "Ethereal Bridal Elegance",
    category: "bridal",
    imageUrl: placeholder("portfolio-bridal-1"),
    aspectRatio: "portrait",
  },
  {
    id: "bridal-2",
    title: "Traditional Javanese Bride",
    category: "bridal",
    imageUrl: placeholder("portfolio-bridal-2"),
    aspectRatio: "portrait",
  },
  {
    id: "fashion-1",
    title: "Jakarta Fashion Week Runway",
    category: "fashion",
    imageUrl: placeholder("portfolio-fashion-1"),
    aspectRatio: "landscape",
  },
  {
    id: "fashion-2",
    title: "Haute Couture Editorial",
    category: "fashion",
    imageUrl: placeholder("portfolio-fashion-2"),
    aspectRatio: "portrait",
  },
  {
    id: "editorial-1",
    title: "Vogue-Style Beauty Spread",
    category: "editorial",
    imageUrl: placeholder("portfolio-editorial-1"),
    aspectRatio: "landscape",
  },
  {
    id: "editorial-2",
    title: "Monochrome Editorial",
    category: "editorial",
    imageUrl: placeholder("portfolio-editorial-2"),
    aspectRatio: "square",
  },
  {
    id: "film-1",
    title: "Before, Now & Then — Period Look",
    category: "film",
    imageUrl: moviePosters["before-now-then"],
    aspectRatio: "landscape",
  },
  {
    id: "film-2",
    title: "Bebas — Character Design",
    category: "film",
    imageUrl: moviePosters.bebas,
    aspectRatio: "portrait",
  },
  {
    id: "television-1",
    title: "Abracadabra — Television Series",
    category: "television",
    imageUrl: moviePosters.abracadabra,
    aspectRatio: "landscape",
  },
  {
    id: "celebrity-1",
    title: "Red Carpet Glamour",
    category: "celebrity",
    imageUrl: placeholder("portfolio-celebrity-1"),
    aspectRatio: "portrait",
  },
  {
    id: "celebrity-2",
    title: "Award Ceremony Look",
    category: "celebrity",
    imageUrl: placeholder("portfolio-celebrity-2"),
    aspectRatio: "portrait",
  },
  {
    id: "bridal-3",
    title: "Modern Minimalist Bride",
    category: "bridal",
    imageUrl: placeholder("portfolio-bridal-3"),
    aspectRatio: "square",
  },
];

export const portfolioCategories = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "fashion", label: "Fashion" },
  { id: "editorial", label: "Editorial" },
  { id: "film", label: "Film" },
  { id: "television", label: "Television" },
  { id: "celebrity", label: "Celebrity" },
] as const;
