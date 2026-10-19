import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Leaf, Flame } from "lucide-react";
import type { MenuItem } from "../data/menu";
import { restaurantConfig } from "../config/restaurant";

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishModal = ({ item, onClose }: DishModalProps) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.name} details`}
        >
          <div className="absolute inset-0 bg-espresso/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 grid w-full max-w-3xl overflow-hidden rounded-2xl bg-cream shadow-2xl sm:grid-cols-2 max-h-[90vh] transform-gpu will-change-[transform,opacity]"
          >
            <div className="relative h-56 sm:h-full sm:min-h-[360px]">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl text-espresso leading-tight">
                  {item.name}
                </h3>
                <button
                  onClick={onClose}
                  aria-label="Close details"
                  className="shrink-0 -mr-2 -mt-2 grid h-9 w-9 place-items-center rounded-full text-muted-dark hover:bg-espresso/5 hover:text-espresso transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-espresso/5 px-3 py-1 text-xs font-medium text-muted-dark">
                  {item.category}
                </span>
                {item.vegetarian && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest">
                    <Leaf size={12} /> Vegetarian
                  </span>
                )}
                {item.spicy && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-dark/10 px-3 py-1 text-xs font-medium text-amber-dark">
                    <Flame size={12} /> Spicy
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-dark">
                {item.longDescription}
              </p>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-espresso/10">
                <span className="text-sm text-muted-dark">Price</span>
                <span className="font-serif text-2xl text-amber-dark">
                  {restaurantConfig.currency}
                  {item.price}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
