import { useReducedMotion } from "./useReducedMotion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function useMotionConfig() {
  const reducedMotion = useReducedMotion();

  return {
    reducedMotion,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    viewport: { once: true, margin: "-80px" as const },
    stagger: reducedMotion ? 0 : 0.1,
  };
}
