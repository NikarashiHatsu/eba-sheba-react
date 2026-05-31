import { useMemo, useState } from "react";
import { awards } from "~/data/awards";
import { AwardCard } from "~/components/ui/AwardCard";
import { FilterTabs } from "~/components/ui/FilterTabs";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";

const filterTabs = [
  { id: "all", label: "All" },
  { id: "winner", label: "Wins" },
  { id: "nominee", label: "Nominations" },
];

export function AchievementsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredAwards = useMemo(() => {
    if (activeFilter === "all") return awards;
    return awards.filter((a) => a.result === activeFilter);
  }, [activeFilter]);

  const winCount = awards.filter((a) => a.result === "winner").length;
  const nomCount = awards.filter((a) => a.result === "nominee").length;

  return (
    <SectionWrapper id="achievements" dark>
      <SectionHeading
        title="Awards & Recognition"
        subtitle="Celebrating excellence across Indonesia's most prestigious film honors"
      />

      <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <FilterTabs
          tabs={filterTabs}
          activeId={activeFilter}
          onChange={setActiveFilter}
        />
        <div className="flex gap-8 text-center">
          <div>
            <div className="font-serif text-3xl text-gold">{winCount}</div>
            <div className="text-xs tracking-widest uppercase text-soft-gray">
              Awards Won
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl text-ivory">{nomCount}</div>
            <div className="text-xs tracking-widest uppercase text-soft-gray">
              Nominations
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredAwards.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
