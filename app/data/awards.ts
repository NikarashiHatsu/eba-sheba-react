import type { Award } from "./types";

export const awards: Award[] = [
  {
    id: "ffi-2019-makeup-winner",
    name: "Piala Citra — Best Makeup and Hairstyling",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2019,
    result: "winner",
    project: "My Stupid Boss 2",
  },
  {
    id: "ffi-2020-makeup-nominee",
    name: "Penata Rias Terbaik",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2020,
    result: "nominee",
  },
  {
    id: "ffi-2020-makeup-winner",
    name: "Penata Rias Terbaik",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2020,
    result: "winner",
  },
  {
    id: "ffi-2021-makeup-nominee",
    name: "Penata Rias Terbaik",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2021,
    result: "nominee",
  },
  {
    id: "ffi-2022-makeup-nominee",
    name: "Penata Rias Terbaik",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2022,
    result: "nominee",
  },
  {
    id: "ffi-2022-makeup-winner",
    name: "Penata Rias Terbaik",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2022,
    result: "winner",
  },
  {
    id: "maya-2020-makeup-nominee",
    name: "Piala Maya — Best Makeup & Hairstyling",
    organization: "Maya Awards",
    category: "Best Makeup & Hairstyling",
    year: 2020,
    result: "nominee",
    project: "My Stupid Boss 2",
  },
  {
    id: "ffi-2025-makeup-nominee",
    name: "Penata Rias Terbaik",
    organization: "Festival Film Indonesia",
    category: "Best Makeup and Hairstyling",
    year: 2025,
    result: "nominee",
  },
];

export const awardWins = awards.filter((a) => a.result === "winner");
export const awardNominations = awards.filter((a) => a.result === "nominee");
