import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroSlides } from "../data/content";
import { cn } from "../lib/utils";

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

const AUTO_MS = 6000; // Unhurried 6s smooth transition

export const Hero = () => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto-play interval with pause on hover or when modals/drawers are open
  useEffect(() => {
    if (paused || reduce) return;
    timerRef.current = window.setInterval(() => {
      // Never transition in background when a modal or menu has locked scroll
      if (document.body.style.overflow === "hidden" || document.hidden) return;
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, reduce]);

  const go = (n: number) => {
    setIndex((n + heroSlides.length) % heroSlides.length);
  };

  const scrollToMenu = () =>
    document
      .querySelector("#menu")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  const scrollToReserve = () =>
    document
      .querySelector("#reserve")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-espresso select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 
        Smooth GPU-composited Background Carousel
        All slides exist in the DOM with hardware-accelerated opacity crossfades.
        Eliminates layout thrashing, DOM unmounting, and image decode jank.
      */}
      <div className="absolute inset-0 pointer-events-none">
        {heroSlides.map((s, i) => {
          const isActive = i === index;
          return (
            <div
              key={s.image}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out transform-gpu will-change-[opacity]",
                isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
              )}
            >
              <img
                src={s.image}
                alt={s.alt}
                className={cn(
                  "h-full w-full object-cover transform-gpu md:transition-transform md:duration-[8000ms] md:ease-out",
                  isActive && !reduce ? "md:scale-105 scale-100" : "scale-100"
                )}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
              />
            </div>
          );
        })}
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-espresso/85 via-espresso/50 to-espresso/90 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-espresso/70 via-espresso/30 to-transparent pointer-events-none" />

      {/* 3D particle accent overlay - desktop only to avoid mobile GPU contention */}
      <div className="hidden md:block absolute inset-0 z-[3] opacity-75 pointer-events-none">
        <Hero3D reduced={!!reduce} />
      </div>

      {/* Content Container with fixed/stable height to prevent navbar & hamburger shaking */}
      <div className="relative z-10 mx-auto flex min-h-screen min-h-[100dvh] max-w-content flex-col justify-center container-px pt-24 pb-28">
        {/* Layered Text Content: Active slide is relative, others absolute so container never collapses */}
        <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]">
          {heroSlides.map((s, i) => {
            const isActive = i === index;
            return (
              <div
                key={s.image}
                aria-hidden={!isActive}
                className={cn(
                  "transition-all duration-700 ease-out transform-gpu will-change-[opacity,transform]",
                  isActive
                    ? "opacity-100 translate-y-0 relative z-10"
                    : "opacity-0 translate-y-3 absolute inset-0 pointer-events-none"
                )}
              >
                <span className="block text-[11px] uppercase tracking-eyebrow font-medium text-amber-soft">
                  {s.eyebrow}
                </span>
                <h1 className="mt-5 max-w-3xl font-serif text-[2.5rem] leading-[1.08] text-cream sm:text-6xl lg:text-[4.25rem] text-balance">
                  {s.title}
                </h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-cream/80">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4 z-10">
          <button
            onClick={scrollToMenu}
            className="rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-espresso hover:bg-amber-soft transition-colors active:scale-[0.98] shadow-lg shadow-amber/20"
          >
            Explore Menu
          </button>
          <button
            onClick={scrollToReserve}
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream hover:border-amber hover:text-amber-soft transition-colors active:scale-[0.98] backdrop-blur-sm"
          >
            Reserve a Table
          </button>
        </div>

        {/* Carousel controls with smooth progress pills */}
        <div className="mt-12 flex items-center gap-3 z-10">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 bg-amber shadow-[0_0_12px_rgba(217,154,69,0.5)]"
                  : "w-3 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Down Indicator */}
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
