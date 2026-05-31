import { useMemo, useState } from "react";
import { filmography } from "~/data/filmography";
import { FilmCard } from "~/components/ui/FilmCard";
import { FilterTabs } from "~/components/ui/FilterTabs";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";

const filterTabs = [
  { id: "all", label: "All" },
  { id: "film", label: "Film" },
  { id: "television", label: "Television" },
  { id: "commercial", label: "Commercial" },
  { id: "production", label: "Production" },
];

export function FilmographySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredFilms = useMemo(() => {
    if (activeFilter === "all") return filmography;
    return filmography.filter((f) => f.type === activeFilter);
  }, [activeFilter]);

  return (
    <SectionWrapper id="filmography">
      <SectionHeading
        title="Filmography & Creative Works"
        subtitle="A cinematic portfolio spanning film, television, commercial, and production"
      />

      <div className="mb-12">
        <FilterTabs
          tabs={filterTabs}
          activeId={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredFilms.map((film, index) => (
          <FilmCard key={film.id} film={film} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
