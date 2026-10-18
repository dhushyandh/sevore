import { Search } from "lucide-react";
import { menuCategories, type MenuCategory } from "../data/menu";
import { cn } from "../lib/utils";

interface MenuFiltersProps {
  active: "All" | MenuCategory;
  onChange: (c: "All" | MenuCategory) => void;
  query: string;
  onQuery: (q: string) => void;
}

export const MenuFilters = ({
  active,
  onChange,
  query,
  onQuery,
}: MenuFiltersProps) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:flex-wrap sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Menu categories"
      >
        {menuCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => onChange(c)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              active === c
                ? "bg-espresso text-cream"
                : "bg-white text-muted-dark border border-espresso/10 hover:border-amber/50 hover:text-espresso",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="relative w-full lg:w-72">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          aria-hidden
        />
        <label htmlFor="menu-search" className="sr-only">
          Search dishes
        </label>
        <input
          id="menu-search"
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search dishes…"
          className="w-full rounded-full border border-espresso/15 bg-white py-2.5 pl-10 pr-4 text-sm text-espresso placeholder:text-muted focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber transition-colors"
        />
      </div>
    </div>
  );
};
