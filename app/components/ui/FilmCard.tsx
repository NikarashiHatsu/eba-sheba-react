import { motion } from "framer-motion";
import type { FilmographyEntry } from "~/data/types";
import { useMotionConfig } from "~/hooks/useScrollReveal";

interface FilmCardProps {
  film: FilmographyEntry;
  index: number;
}

export function FilmCard({ film, index }: FilmCardProps) {
  const { transition, viewport } = useMotionConfig();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay: (index % 8) * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group overflow-hidden border border-ivory/10 bg-charcoal transition-all duration-300 hover:border-gold/40 hover:gold-glow"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-charcoal-light">
        {film.posterUrl ? (
          <img
            src={film.posterUrl}
            alt={`${film.title} poster`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-charcoal-light to-charcoal p-6">
            <span className="text-center font-serif text-lg text-ivory/40">
              {film.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rounded border border-gold/50 bg-matte-black/80 px-3 py-1 text-xs tracking-widest uppercase text-gold">
          {film.role}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg text-ivory">{film.title}</h3>
          <span className="shrink-0 text-sm text-gold">{film.year}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-soft-gray">
          {film.description}
        </p>
        <span className="mt-3 inline-block text-xs tracking-widest uppercase text-ivory/50">
          {film.role}
        </span>
      </div>
    </motion.article>
  );
}
