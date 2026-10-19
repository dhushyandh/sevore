import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { restaurantConfig } from "../config/restaurant";

interface NavLink {
  label: string;
  to: string;
}

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/story" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // On non-home pages the header always needs a solid background
  const solid = scrolled || !isHome;

  const goReserve = () => {
    setOpen(false);
    if (isHome) {
      document
        .querySelector("#reserve")
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    } else {
      navigate("/?section=reserve");
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "bg-espresso/95 backdrop-blur-sm shadow-[0_1px_0_rgba(217,154,69,0.15)]"
          : "bg-transparent",
      )}
    >
      <nav className="container-px mx-auto flex h-16 items-center justify-between lg:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label={`${restaurantConfig.name} — home`}
        >
          <img
            src="/logo-emblem.png"
            alt=""
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain drop-shadow transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl text-cream tracking-wide leading-none group-hover:text-amber-soft transition-colors">
              {restaurantConfig.name}
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-amber-soft/80 font-sans mt-0.5">
              Restaurant & Café
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-amber-soft"
                      : "text-cream/80 hover:text-amber-soft",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={goReserve}
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-espresso hover:bg-amber-soft transition-colors active:scale-[0.98]"
          >
            Reserve a Table
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 bg-espresso"
          >
            <motion.ul
              initial={reduce ? {} : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col gap-2 px-6 pt-8 pb-12"
            >
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block w-full text-left py-3 text-lg font-serif text-cream border-b border-cream/10 hover:text-amber-soft transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={goReserve}
                  className="w-full rounded-full bg-amber py-3 text-sm font-medium text-espresso"
                >
                  Reserve a Table
                </button>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
