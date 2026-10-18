import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
  once?: boolean;
}

/**
 * Reliable scroll-triggered reveal. Uses whileInView with a generous viewport
 * margin so animations fire even on short sections / large screens, and falls
 * back to a no-op initial state when the user prefers reduced motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
  once = true,
}: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: reduce ? {} : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};
