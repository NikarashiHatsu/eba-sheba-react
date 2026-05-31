import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { MediaItem } from "~/data/types";
import { useMotionConfig } from "~/hooks/useScrollReveal";

interface MediaCardProps {
  item: MediaItem;
  index: number;
}

const typeLabels: Record<MediaItem["type"], string> = {
  interview: "Interview",
  publication: "Publication",
  press: "Press Feature",
  recognition: "Industry Recognition",
};

export function MediaCard({ item, index }: MediaCardProps) {
  const { transition, viewport } = useMotionConfig();

  const content = (
    <>
      <span className="text-xs tracking-widest uppercase text-gold">
        {typeLabels[item.type]}
      </span>
      <h3 className="mt-3 font-serif text-xl text-ivory">{item.title}</h3>
      <p className="mt-2 text-sm text-soft-gray">{item.publication}</p>
      <p className="mt-4 text-sm leading-relaxed text-ivory/70">
        {item.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-soft-gray">{item.date}</span>
        {item.comingSoon ? (
          <span className="text-xs tracking-widest uppercase text-ivory/40">
            Coming Soon
          </span>
        ) : item.url ? (
          <FaExternalLinkAlt className="text-gold" />
        ) : null}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay: index * 0.08 }}
      className="border border-ivory/10 bg-charcoal p-6 transition-all duration-300 hover:border-gold/30 hover:gold-glow"
    >
      {item.url && !item.comingSoon ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}
