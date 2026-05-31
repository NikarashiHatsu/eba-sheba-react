import type { Stat } from "./types";
import { awards } from "./awards";
import { filmography } from "./filmography";

export const heroStats: Stat[] = [
  {
    id: "experience",
    label: "Years of Experience",
    value: 15,
    suffix: "+",
  },
  {
    id: "awards",
    label: "Awards & Nominations",
    value: awards.length,
    suffix: "+",
  },
  {
    id: "productions",
    label: "Film & Television Productions",
    value: filmography.length,
    suffix: "+",
  },
  {
    id: "collaborations",
    label: "Creative Collaborations",
    value: 50,
    suffix: "+",
  },
];
