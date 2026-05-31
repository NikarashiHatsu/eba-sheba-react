import { motion } from "framer-motion";
import { FaAward, FaFilm, FaStar } from "react-icons/fa";
import { featuredProject } from "~/data/featured-project";
import { useMotionConfig } from "~/hooks/useScrollReveal";

export function FeaturedProjectSection() {
  const { transition, viewport } = useMotionConfig();

  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-charcoal letterbox section-padding"
    >
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={transition}
          className="mb-4 text-center"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Featured Project
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={transition}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/20" />
            {featuredProject.posterUrl && (
              <img
                src={featuredProject.posterUrl}
                alt={featuredProject.title}
                className="relative w-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ ...transition, delay: 0.15 }}
          >
            <h2 className="font-serif text-4xl text-ivory md:text-5xl">
              {featuredProject.title}
            </h2>
            <p className="mt-2 text-soft-gray">
              {featuredProject.year} &middot; Directed by{" "}
              {featuredProject.director}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-gold bg-gold/10 px-4 py-2">
              <FaFilm className="text-gold" />
              <span className="text-sm tracking-widest uppercase text-gold">
                {featuredProject.role}
              </span>
            </div>

            <p className="mt-4 font-serif text-xl italic text-ivory/80">
              {featuredProject.tagline}
            </p>

            <p className="mt-6 leading-relaxed text-soft-gray">
              {featuredProject.description}
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xs tracking-widest uppercase text-gold">
                  <FaStar /> Festival Appearances
                </h3>
                <ul className="space-y-2">
                  {featuredProject.festivals.map((festival) => (
                    <li
                      key={festival}
                      className="text-sm text-soft-gray before:mr-2 before:text-gold before:content-['•']"
                    >
                      {festival}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xs tracking-widest uppercase text-gold">
                  <FaAward /> Recognition
                </h3>
                <ul className="space-y-2">
                  {featuredProject.awards.map((award) => (
                    <li
                      key={award}
                      className="text-sm text-soft-gray before:mr-2 before:text-gold before:content-['•']"
                    >
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-8 space-y-3 border-t border-ivory/10 pt-8">
              {featuredProject.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-ivory/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
