import type { FeaturedProject } from "./types";
import { moviePosters } from "./posters";

export const featuredProject: FeaturedProject = {
  title: "The Seen and Unseen",
  year: 2017,
  director: "Kamila Andini",
  role: "Executive Producer",
  tagline: "A poetic journey through childhood, imagination, and invisible worlds.",
  description:
    "The Seen and Unseen (Sekala Niskala) is a visually stunning Indonesian art-house film that follows a young girl navigating her twin brother's serious illness through the lens of Balinese mythology and childhood wonder. As Executive Producer, Eba Sheba played a pivotal role in bringing this internationally acclaimed vision to life — bridging creative artistry with production excellence.",
  posterUrl: moviePosters["the-seen-and-unseen"],
  festivals: [
    "Venice International Film Festival — Official Selection",
    "Toronto International Film Festival — Contemporary World Cinema",
    "Busan International Film Festival — A Window on Asian Cinema",
    "Tokyo International Film Festival — Special Screenings",
  ],
  awards: [
    "Multiple Festival Film Indonesia nominations",
    "International critical acclaim across Asia-Pacific festivals",
    "Recognized as a landmark of contemporary Indonesian cinema",
  ],
  details: [
    "Executive Producer overseeing full production lifecycle",
    "Collaboration with director Kamila Andini and cinematographer Anggi Frisca",
    "Balinese cultural authenticity in visual storytelling",
    "Premiered to standing ovations at major international festivals",
    "Demonstrates Eba Sheba's range beyond makeup artistry into creative production",
  ],
};
