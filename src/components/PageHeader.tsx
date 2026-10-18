import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  children?: ReactNode;
}

/** Shared page hero for interior pages: tall banner image + heading. */
export const PageHeader = ({
  eyebrow,
  title,
  description,
  image,
  alt,
  children,
}: PageHeaderProps) => {
  const reduce = useReducedMotion();
  return (
    <header className="relative flex min-h-[52vh] w-full items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content container-px pb-14">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-amber-soft"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-cream text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-cream/80 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </header>
  );
};
