import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profileImage } from "~/data/site";
import { heroStats } from "~/data/stats";
import { Button } from "~/components/ui/Button";
import { StatCounter } from "~/components/ui/StatCounter";
import { useReducedMotion } from "~/hooks/useReducedMotion";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["0%", "0%"] : ["0%", "30%"],
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={profileImage}
          alt="Eba Sheba"
          className="h-full w-full object-cover object-top"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/80 to-matte-black/40" />
      <div className="absolute inset-0 bg-matte-black/30" />
      <div className="cinematic-grain absolute inset-0" />

      <div className="relative z-10 container-luxury w-full px-6 pt-32 pb-20 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6 h-px w-20 bg-gold" />
          <h1 className="font-serif text-6xl text-ivory md:text-7xl lg:text-8xl">
            Eba Sheba
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 space-y-1"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold">
            Award-Winning Make-Up Artist
          </p>
          <p className="text-sm tracking-[0.3em] uppercase text-ivory/80">
            Creative Visionary
          </p>
          <p className="text-sm tracking-[0.3em] uppercase text-ivory/80">
            Executive Producer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-soft-gray"
        >
          Celebrating decades of excellence in beauty, film, television, and
          creative artistry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#portfolio">View Portfolio</Button>
          <Button href="#achievements" variant="ghost">
            Explore Achievements
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-ivory/10 pt-12 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
