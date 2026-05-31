import type { Route } from "./+types/home";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { HeroSection } from "~/components/sections/HeroSection";
import { AboutSection } from "~/components/sections/AboutSection";
import { AchievementsSection } from "~/components/sections/AchievementsSection";
import { FilmographySection } from "~/components/sections/FilmographySection";
import { FeaturedProjectSection } from "~/components/sections/FeaturedProjectSection";
import { PortfolioSection } from "~/components/sections/PortfolioSection";
import { MediaSection } from "~/components/sections/MediaSection";
import { TestimonialsSection } from "~/components/sections/TestimonialsSection";
import { ContactSection } from "~/components/sections/ContactSection";
import { awards } from "~/data/awards";
import { filmography } from "~/data/filmography";
import { profileImage } from "~/data/site";

const siteUrl = "https://ebasheba.com";
const ogImage = `${siteUrl}${profileImage}`;
const title = "Eba Sheba | Award-Winning Indonesian Make-Up Artist";
const description =
  "Official portfolio of Eba Sheba, internationally recognized Indonesian Make-Up Artist, award nominee, film professional, and Executive Producer.";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Eba Sheba, makeup artist, Indonesian MUA, film makeup, executive producer, Festival Film Indonesia" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
}

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Eba Sheba",
        jobTitle: "Make-Up Artist",
        description,
        url: siteUrl,
        knowsAbout: [
          "Makeup Artistry",
          "Film Production",
          "Television Makeup",
          "Executive Producing",
        ],
        award: awards
          .filter((a) => a.result === "winner")
          .map(
            (a) =>
              `${a.name} — ${a.organization} (${a.year})`,
          ),
        sameAs: ["https://www.imdb.com/name/nm4878050/"],
      },
      {
        "@type": "CreativeWork",
        name: "The Seen and Unseen",
        creator: { "@id": `${siteUrl}/#person` },
        datePublished: "2017",
        genre: "Drama",
      },
      ...filmography.slice(0, 5).map((film) => ({
        "@type": "Movie",
        name: film.title,
        datePublished: String(film.year),
        contributor: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          jobTitle: film.role,
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <FilmographySection />
        <FeaturedProjectSection />
        <PortfolioSection />
        <MediaSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
