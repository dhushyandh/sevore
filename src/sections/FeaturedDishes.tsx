import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { MenuCard } from "../components/MenuCard";
import { DishModal } from "../components/DishModal";
import { featuredItems, type MenuItem } from "../data/menu";

export const FeaturedDishes = () => {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="Signature Highlights"
          title="A few dishes we're known for"
          description="Chef's picks from across the menu — plated with intent and made to order."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full flex flex-col"
            >
              <MenuCard item={item} onView={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>

      <DishModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
