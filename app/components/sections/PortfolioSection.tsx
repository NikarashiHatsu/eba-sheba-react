import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems } from "~/data/portfolio";
import { LightboxGallery } from "~/components/ui/LightboxGallery";
import { FilterTabs } from "~/components/ui/FilterTabs";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <SectionWrapper id="portfolio" dark>
      <SectionHeading
        title="Selected Works"
        subtitle="A curated gallery spanning bridal, fashion, editorial, film, television, and celebrity artistry"
      />

      <div className="mb-12">
        <FilterTabs
          tabs={portfolioCategories}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LightboxGallery items={filteredItems} />
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
