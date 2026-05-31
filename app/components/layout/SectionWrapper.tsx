import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionConfig } from "~/hooks/useScrollReveal";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  const { transition, viewport } = useMotionConfig();

  return (
    <section
      id={id}
      className={`section-padding ${dark ? "bg-charcoal" : "bg-matte-black"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={transition}
        className="container-luxury"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`mb-4 h-px w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
      <h2 className="font-serif text-4xl text-ivory md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-soft-gray">{subtitle}</p>
      )}
    </div>
  );
}
