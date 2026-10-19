import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { heroSlides } from "../data/content";
import { cn } from "../lib/utils";

const AUTO_MS = 6000; // Unhurried 6s smooth background crossfade

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Background image auto-crossfade (pauses when hover or when modal is open)
  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      if (document.body.style.overflow === "hidden" || document.hidden) return;
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const go = (n: number) => {
    setIndex((n + heroSlides.length) % heroSlides.length);
  };

  const scrollToMenu = () =>
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });

  const scrollToReserve = () =>
    document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-espresso select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 
        GPU-composited Background Image Carousel
        All slides exist in the DOM with hardware-accelerated opacity crossfades.
        Zero layout shifts, zero DOM unmounting, 100% fluid.
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
                className="h-full w-full object-cover transform-gpu"
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
      <div
        className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-amber/10 blur-[100px] pointer-events-none z-[2]"
        aria-hidden
      />

      {/* 
        Solid, Stable Hero Content
        No repeated text re-layouts or text-balance recalculations.
        Completely rock-solid and butter smooth on all devices.
      */}
      <div className="relative z-10 mx-auto flex min-h-screen min-h-[100dvh] max-w-content flex-col justify-center container-px pt-24 pb-28">
        <div>
          <span className="block text-[11px] uppercase tracking-eyebrow font-medium text-amber-soft">
            Good Food. Great Company.
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.5rem] leading-[1.08] text-cream sm:text-6xl lg:text-[4.25rem]">
            Flavors That Bring People Together
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-cream/80">
            Handcrafted plates, warm hospitality, and a room made for long evenings.
            Savoré is a contemporary dining room where every dish is made to order and every guest is looked after.
          </p>
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
