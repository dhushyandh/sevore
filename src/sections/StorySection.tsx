import { motion, useReducedMotion } from "framer-motion";

const storyImage =
  "https://images.pexels.com/photos/17086289/pexels-photo-17086289.jpeg?auto=compress&cs=tinysrgb&h=900&w=700";

export const StorySection = () => {
  const reduce = useReducedMotion();
  const scrollToReserve = () =>
    document
      .querySelector("#reserve")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <section id="story" className="py-20 sm:py-28 bg-espresso scroll-mt-16">
      <div className="mx-auto max-w-content container-px grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={storyImage}
              alt="A chef working over a flaming pan in the kitchen"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-3 hidden sm:block rounded-xl bg-amber px-5 py-4 shadow-lg">
            <p className="font-serif text-3xl text-espresso leading-none">S</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-espresso/70">
              Est. as a concept
            </p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-amber-soft"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 font-serif text-3xl sm:text-4xl leading-tight text-cream text-balance"
          >
            A small kitchen with a big love for the craft
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-cream/75 leading-relaxed"
          >
            Savoré began as an idea between two friends who believed a meal
            should feel like a slow Sunday — unhurried, generous, and made with
            care. Our kitchen leans on seasonal produce, simple techniques done
            well, and a dining room designed for long, easy conversation.
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-cream/65 leading-relaxed text-sm"
          >
            This is a fictional brand created to showcase how a small restaurant
            might present itself online — not a real business.
          </motion.p>
          <motion.button
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={scrollToReserve}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-espresso hover:bg-amber-soft transition-colors active:scale-[0.98]"
          >
            Reserve a table
          </motion.button>
        </div>
      </div>
    </section>
  );
};
