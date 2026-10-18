import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { testimonials } from "../data/content";

export const TestimonialsSection = () => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (n: number) => {
    setDir(n > index || (index === testimonials.length - 1 && n === 0) ? 1 : -1);
    setIndex((n + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6500,
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  const t = testimonials[index];

  return (
    <section className="py-20 sm:py-28 bg-espresso relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber/5 blur-3xl" />

      <div className="mx-auto max-w-content container-px relative">
        <SectionHeading
          eyebrow="Guest Voices"
          title="Evenings at Savoré"
          description="Fictional sample testimonials created for this portfolio demo — not real customer endorsements."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={t.id}
                custom={dir}
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: dir > 0 ? 60 : -60 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: dir > 0 ? -60 : 60 }
                }
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="rounded-2xl bg-cream/5 border border-cream/10 p-7 sm:p-9 backdrop-blur-sm"
              >
                <Quote
                  className="text-amber/60 mb-4"
                  size={28}
                  aria-hidden
                />
                <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed text-cream/90 text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-amber/30"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cream">
                      {t.name}
                    </p>
                    <p className="text-xs text-cream/50">{t.detail}</p>
                  </div>
                  <div
                    className="flex gap-0.5"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber text-amber"
                      />
                    ))}
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/70 hover:text-amber-soft hover:border-amber/50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-6 bg-amber" : "w-2.5 bg-cream/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/70 hover:text-amber-soft hover:border-amber/50 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
