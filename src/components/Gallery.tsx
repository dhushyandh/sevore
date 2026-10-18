import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "../data/gallery";

export const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);
  const prev = () =>
    setOpen((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setOpen((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px]">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl bg-espresso/5 ${
              img.span === "wide"
                ? "col-span-2"
                : img.span === "tall"
                ? "row-span-2"
                : ""
            }`}
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-espresso/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-3 left-3 right-3 text-left text-xs text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
              {img.alt}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full text-cream hover:bg-cream/10 transition-colors"
            >
              <X size={22} />
            </button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[open].src}
              alt={galleryImages[open].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[82vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 grid h-11 w-11 place-items-center rounded-full text-cream/80 hover:text-amber-soft hover:bg-cream/10 transition-colors text-2xl"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 grid h-11 w-11 place-items-center rounded-full text-cream/80 hover:text-amber-soft hover:bg-cream/10 transition-colors text-2xl"
            >
              ›
            </button>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-xl px-4 text-center text-xs text-cream/70">
              {galleryImages[open].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
