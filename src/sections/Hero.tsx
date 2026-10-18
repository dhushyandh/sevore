import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroSlides } from "../data/content";

const Hero3D = ({ reduced }: { reduced: boolean }) => {
  const [Comp, setComp] = useState<React.ComponentType<{ reduced: boolean }> | null>(null);
  useEffect(() => {
    let active = true;
    import("../components/Hero3D").then((m) => {
      if (active) setComp(() => m.Hero3D);
    });
    return () => {
      active = false;
    };
  }, []);
  if (!Comp) return null;
  return <Comp reduced={reduced} />;
};


const AUTO_MS = 2500;

export const Hero = () => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      AUTO_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = heroSlides[index];

  const go = (n: number) =>
    setIndex((n + heroSlides.length) % heroSlides.length);

  const scrollToMenu = () =>
    document
      .querySelector("#menu")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  const scrollToReserve = () =>
    document
      .querySelector("#reserve")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/55 to-espresso/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 to-transparent" />

      {/* 3D particle overlay */}
      <div className="absolute inset-0 z-[1] opacity-80">
        <Hero3D reduced={!!reduce} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-content flex-col justify-center container-px pt-24 pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <motion.span
              variants={item}
              className="block text-[11px] uppercase tracking-eyebrow font-medium text-amber-soft"
            >
              {slide.eyebrow}
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-5 max-w-3xl font-serif text-[2.5rem] leading-[1.08] text-cream sm:text-6xl lg:text-[4.25rem] text-balance"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-cream/80"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <motion.button
            variants={item}
            onClick={scrollToMenu}
            className="rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-espresso hover:bg-amber-soft transition-colors active:scale-[0.98]"
          >
            Explore Menu
          </motion.button>
          <motion.button
            variants={item}
            onClick={scrollToReserve}
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream hover:border-amber hover:text-amber-soft transition-colors active:scale-[0.98]"
          >
            Reserve a Table
          </motion.button>
        </motion.div>

        {/* Carousel controls */}
        <div className="mt-12 flex items-center gap-3">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-amber"
                  : "w-3 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/70 hover:text-amber-soft transition-colors"
        aria-label="Scroll to menu"
      >
        <ChevronDown className="animate-scroll-bob" size={26} />
      </button>
    </section>
  );
};
