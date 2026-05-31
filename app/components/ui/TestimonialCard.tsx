import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import type { Testimonial } from "~/data/types";
import { useMotionConfig } from "~/hooks/useScrollReveal";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { transition, viewport } = useMotionConfig();

  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay: index * 0.1 }}
      className="flex h-full flex-col border border-ivory/10 bg-charcoal p-8 transition-all duration-300 hover:border-gold/30"
    >
      <FaQuoteLeft className="text-2xl text-gold/40" />
      <p className="mt-6 flex-1 font-serif text-lg leading-relaxed text-ivory/90 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-ivory/10 pt-6">
        <cite className="not-italic">
          <div className="font-medium text-ivory">{testimonial.name}</div>
          <div className="mt-1 text-sm text-gold">{testimonial.role}</div>
          <div className="mt-1 text-xs text-soft-gray">{testimonial.title}</div>
        </cite>
      </footer>
    </motion.blockquote>
  );
}
