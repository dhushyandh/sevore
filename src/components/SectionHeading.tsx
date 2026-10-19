import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  theme?: "light" | "dark";
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  theme = "light",
}: SectionHeadingProps) => {
  const reduce = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <motion.span
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={cn("eyebrow", isDark && "text-amber-soft")}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-balance max-w-2xl font-serif",
          isDark ? "text-cream" : "text-espresso"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "text-base leading-relaxed max-w-xl",
            isDark ? "text-cream/70" : "text-muted-dark",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
      <motion.span
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="block h-px w-12 bg-amber/60 origin-left mt-2"
        aria-hidden
      />
    </div>
  );
};
