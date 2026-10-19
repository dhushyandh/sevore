import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { testimonials } from "../data/content";

const ITEMS_PER_PAGE = 3;
const SLIDE_INTERVAL_MS = 2800; // Auto-slides every 2.8 seconds (2-3 seconds)

export const TestimonialsSection = () => {
  const reduce = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Autoplay slide for each 2-3 seconds
  useEffect(() => {
    if (reduce || isHovered || totalPages <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [reduce, isHovered, totalPages]);

  const currentItems = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white text-espresso">
      <div className="mx-auto max-w-content container-px">
        {/* Clean Light Section Heading */}
        <SectionHeading
          eyebrow="Guest Voices"
          title="Evenings at Savoré"
          description="True reflections gathered from candlelit alcoves, celebratory milestones, and unhurried weekend tables."
          theme="light"
        />

        {/* Testimonials 3-Card Grid with 2.8s sliding */}
        <div
          className="mt-14 min-h-[360px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction > 0 ? 35 : -35 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction > 0 ? -35 : 35 }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-[#FAFAFA] border border-stone-200/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-amber/40 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    {/* 5-Star Rating */}
                    <div
                      className="flex items-center gap-1 text-amber"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-amber text-amber"
                        />
                      ))}
                    </div>

                    {/* Guest Quote */}
                    <blockquote className="mt-5 font-serif text-base sm:text-[1.05rem] text-espresso/90 leading-relaxed italic">
                      “{item.quote}”
                    </blockquote>

                    {/* Favorite Dish Mention (if available) */}
                    {item.favoriteDish && (
                      <p className="mt-4 text-xs text-amber-dark font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                        <span className="truncate">{item.favoriteDish}</span>
                      </p>
                    )}
                  </div>

                  {/* Guest Profile Footer */}
                  <footer className="mt-6 pt-5 border-t border-stone-200/70 flex items-center gap-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-11 w-11 rounded-full object-cover ring-1 ring-amber/30 flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h3 className="font-serif text-base font-semibold text-espresso truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-dark truncate mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </footer>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Pagination Navigation */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              aria-label="Previous testimonials"
              className="h-9 w-9 rounded-full border border-stone-300 flex items-center justify-center text-espresso/70 hover:text-espresso hover:border-espresso transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentPage ? 1 : -1);
                    setCurrentPage(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "w-6 bg-amber"
                      : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              aria-label="Next testimonials"
              className="h-9 w-9 rounded-full border border-stone-300 flex items-center justify-center text-espresso/70 hover:text-espresso hover:border-espresso transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
