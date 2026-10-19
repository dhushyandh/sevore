import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { MenuCard } from "../components/MenuCard";
import { MenuFilters } from "../components/MenuFilters";
import { DishModal } from "../components/DishModal";
import { menuItems, type MenuCategory, type MenuItem } from "../data/menu";

const DEFAULT_LIMIT = 8;

export const MenuSection = () => {
  const [active, setActive] = useState<"All" | MenuCategory>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [showAll, setShowAll] = useState(false);

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

  // Filter to 8 dishes
  const displayedItems = useMemo(() => {
    if (showAll) return filtered;
    return filtered.slice(0, DEFAULT_LIMIT);
  }, [filtered, showAll]);

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
            onChange={(cat) => {
              setActive(cat);
              setShowAll(false);
            }}
            query={query}
            onQuery={(q) => {
              setQuery(q);
              setShowAll(false);
            }}
          />
        </div>

        {/* Counter indicator */}
        <div className="mt-6 flex items-center justify-between text-xs text-muted-dark">
          <span>
            Showing {displayedItems.length}{" "}
            {displayedItems.length === 1 ? "dish" : "dishes"}
            {filtered.length > DEFAULT_LIMIT &&
              !showAll &&
              ` (filtered to 8 dishes)`}
          </span>
          {filtered.length > DEFAULT_LIMIT && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="font-medium text-amber-dark hover:text-espresso transition-colors underline underline-offset-4"
            >
              {showAll ? "Show 8 dishes" : `View all ${filtered.length} dishes`}
            </button>
          )}
        </div>

        <div className="mt-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {displayedItems.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedItems.map((item) => (
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
                    setShowAll(false);
                  }}
                  className="mt-5 rounded-full border border-espresso/20 px-5 py-2 text-sm font-medium text-espresso hover:border-amber hover:text-amber-dark transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Expand / Collapse Button if more than 8 */}
        {filtered.length > DEFAULT_LIMIT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-espresso/20 bg-white px-7 py-3 text-sm font-medium text-espresso hover:border-amber hover:text-amber-dark transition-all shadow-sm"
            >
              {showAll ? "Show 8 Dishes" : `View All ${filtered.length} Dishes`}
            </button>
          </div>
        )}
      </div>

      <DishModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
