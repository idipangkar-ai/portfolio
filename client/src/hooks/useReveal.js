import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useReveal(delay = 0) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return {
      initial: false,
      whileInView: undefined,
      viewport: undefined,
      transition: undefined,
    };
  }

  return {
    initial: { opacity: 0, y: 26, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.24 },
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

