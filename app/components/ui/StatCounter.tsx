import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "~/hooks/useReducedMotion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, reducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-serif text-4xl text-gold md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xs tracking-widest uppercase text-soft-gray">
        {label}
      </div>
    </motion.div>
  );
}
