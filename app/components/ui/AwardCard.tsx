import { motion } from "framer-motion";
import { FaAward, FaStar } from "react-icons/fa";
import type { Award } from "~/data/types";
import { useMotionConfig } from "~/hooks/useScrollReveal";

interface AwardCardProps {
  award: Award;
  index: number;
}

export function AwardCard({ award, index }: AwardCardProps) {
  const { transition, viewport } = useMotionConfig();
  const isWinner = award.result === "winner";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay: index * 0.08 }}
      className={`group relative border p-6 transition-all duration-300 hover:gold-glow ${
        isWinner
          ? "border-gold/40 bg-gold/5"
          : "border-ivory/10 bg-charcoal hover:border-ivory/20"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 text-xs tracking-widest uppercase ${
            isWinner
              ? "bg-gold/20 text-gold"
              : "border border-soft-gray/30 text-soft-gray"
          }`}
        >
          {isWinner ? <FaAward /> : <FaStar />}
          {isWinner ? "Winner" : "Nominee"}
        </span>
        <span className="font-serif text-2xl text-gold">{award.year}</span>
      </div>

      <h3 className="font-serif text-xl text-ivory">{award.name}</h3>
      <p className="mt-2 text-sm text-soft-gray">{award.organization}</p>
      <p className="mt-1 text-xs tracking-wide text-ivory/60">
        {award.category}
      </p>
      {award.project && (
        <p className="mt-3 border-t border-ivory/10 pt-3 text-sm text-gold">
          {award.project}
        </p>
      )}
    </motion.div>
  );
}
