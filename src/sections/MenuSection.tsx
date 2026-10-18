import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { MenuCard } from "../components/MenuCard";
import { MenuFilters } from "../components/MenuFilters";
import { DishModal } from "../components/DishModal";
import { menuItems, type MenuCategory, type MenuItem } from "../data/menu";

export const MenuSection = () => {
  const [active, setActive] = useState<"All" | MenuCategory>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCat = active === "All" || item.category === active;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [active, query]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-dark/60 scroll-mt-16">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="The Menu"
          title="Explore the full table"
          description="Filter by course or search for a favourite. Prices are demo values in Indian Rupees."
        />

        <div className="mt-10">
          <MenuFilters
            active={active}
            onChange={setActive}
            query={query}
            onQuery={setQuery}
          />
        </div>

        <div className="mt-10 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((item) => (
                  <MenuCard key={item.id} item={item} onView={setSelected} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No dishes match your search
                </p>
                <p className="mt-2 text-sm text-muted-dark">
                  Try a different keyword or clear the filters.
                </p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActive("All");
                  }}
                  className="mt-5 rounded-full border border-espresso/20 px-5 py-2 text-sm font-medium text-espresso hover:border-amber hover:text-amber-dark transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <DishModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
