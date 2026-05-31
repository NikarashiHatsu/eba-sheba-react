import { useMemo, useState } from "react";
import { mediaItems, mediaTypes } from "~/data/media";
import { MediaCard } from "~/components/ui/MediaCard";
import { FilterTabs } from "~/components/ui/FilterTabs";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";

export function MediaSection() {
  const [activeType, setActiveType] = useState("all");

  const filteredMedia = useMemo(() => {
    if (activeType === "all") return mediaItems;
    return mediaItems.filter((item) => item.type === activeType);
  }, [activeType]);

  return (
    <SectionWrapper id="media">
      <SectionHeading
        title="Media & Recognition"
        subtitle="Press features, interviews, and industry recognition"
      />

      <div className="mb-12">
        <FilterTabs
          tabs={mediaTypes}
          activeId={activeType}
          onChange={setActiveType}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredMedia.map((item, index) => (
          <MediaCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
