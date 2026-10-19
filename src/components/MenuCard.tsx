import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Eye } from "lucide-react";
import type { MenuItem } from "../data/menu";
import { restaurantConfig } from "../config/restaurant";

interface MenuCardProps {
  item: MenuItem;
  onView: (item: MenuItem) => void;
  featured?: boolean;
}

export const MenuCard = ({ item, onView, featured }: MenuCardProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.article
      layout
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-espresso/8 shadow-[0_2px_20px_-12px_rgba(33,23,16,0.25)] hover:shadow-lg transition-shadow duration-300"
    >
      {/* Clickable Image Container that triggers product popup modal */}
      <div
        onClick={() => onView(item)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onView(item);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Open details for ${item.name}`}
        className="relative overflow-hidden aspect-[4/3] cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-medium text-espresso shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
            <Eye size={13} className="text-amber-dark" /> Quick View
          </span>
        </div>
        {item.signature && (
          <span className="absolute top-3 left-3 rounded-full bg-espresso/85 px-3 py-1 text-[10px] uppercase tracking-widest text-amber-soft font-medium backdrop-blur-sm">
            Signature
          </span>
        )}
        {item.vegetarian && (
          <span
            className="absolute top-3 right-3 grid place-items-center h-7 w-7 rounded-full bg-cream/90 text-forest shadow-sm"
            title="Vegetarian"
            aria-label="Vegetarian"
          >
            <Leaf size={14} />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3
            onClick={() => onView(item)}
            className="font-serif text-xl text-espresso leading-snug cursor-pointer hover:text-amber-dark transition-colors"
          >
            {item.name}
          </h3>
          <span className="shrink-0 font-medium text-amber-dark tabular-nums">
            {restaurantConfig.currency}
            {item.price}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-dark leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <button
          onClick={() => onView(item)}
          className="mt-auto pt-4 self-start text-sm font-medium text-espresso border-b border-amber/40 pb-0.5 hover:border-amber hover:text-amber-dark transition-colors"
        >
          View details
        </button>
      </div>
    </motion.article>
  );
};
