import { useCallback, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import type { PortfolioItem } from "~/data/types";
import { useMotionConfig } from "~/hooks/useScrollReveal";

interface LightboxGalleryProps {
  items: PortfolioItem[];
}

const aspectClasses = {
  portrait: "row-span-2",
  landscape: "col-span-2",
  square: "",
};

export function LightboxGallery({ items }: LightboxGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { transition, viewport } = useMotionConfig();

  const openLightbox = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const slides = items.map((item) => ({
    src: item.imageUrl,
    alt: item.title,
    title: item.title,
  }));

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ ...transition, delay: (i % 8) * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(i)}
            className={`group relative overflow-hidden border border-ivory/10 ${aspectClasses[item.aspectRatio]} cursor-pointer transition-all duration-300 hover:border-gold/40 hover:gold-glow`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-matte-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm text-ivory">{item.title}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(15, 15, 15, 0.95)" },
        }}
      />
    </>
  );
}
