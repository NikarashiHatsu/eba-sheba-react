import { motion } from "framer-motion";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";
import { profileImage } from "~/data/site";
import { useMotionConfig } from "~/hooks/useScrollReveal";

export function AboutSection() {
  const { transition, viewport } = useMotionConfig();

  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Eba Sheba"
        subtitle="Renowned Indonesian Make-Up Artist and internationally recognized creative professional"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={transition}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 h-full w-full border border-gold/30" />
          <img
            src={profileImage}
            alt="Eba Sheba portrait"
            className="relative aspect-[3/4] w-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ ...transition, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-ivory/90">
            Eba Sheba is one of Indonesia&apos;s most recognized Make-Up Artists,
            whose artistry has graced the screens of international film festivals
            and the faces of celebrated performers across Southeast Asia.
          </p>
          <p className="leading-relaxed text-soft-gray">
            With over fifteen years of industry experience, she has established
            herself as a trusted creative partner on major film and television
            productions — from award-winning comedies and historical epics to
            internationally acclaimed art-house cinema.
          </p>
          <p className="leading-relaxed text-soft-gray">
            Beyond makeup artistry, Eba Sheba serves as Executive Producer on
            visionary projects, demonstrating a rare ability to bridge beauty,
            storytelling, and production excellence. Her work on{" "}
            <em className="text-gold">The Seen and Unseen</em> exemplifies her
            commitment to elevating Indonesian cinema on the world stage.
          </p>
          <p className="leading-relaxed text-soft-gray">
            A multiple Festival Film Indonesia award winner and nominee, Eba
            Sheba continues to shape the visual language of Indonesian
            entertainment — on set, on screen, and on the runway.
          </p>

          <blockquote className="border-l-2 border-gold py-2 pl-6">
            <p className="font-serif text-xl italic text-ivory/90">
              &ldquo;Makeup is not merely enhancement — it is the invisible
              architecture of character, emotion, and story.&rdquo;
            </p>
            <footer className="mt-3 text-sm tracking-widest uppercase text-gold">
              — Eba Sheba
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
