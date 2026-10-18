import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { restaurantConfig } from "../config/restaurant";

const links = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/story" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => (
  <footer className="bg-espresso pt-16 pb-8">
    <div className="mx-auto max-w-content container-px">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-2xl text-cream">
            {restaurantConfig.name}
          </p>
          <p className="mt-3 text-sm text-cream/60 leading-relaxed max-w-xs">
            Contemporary dining and a warm room. Handcrafted plates made to
            order, for long, easy evenings.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={restaurantConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 text-cream/70 hover:text-amber-soft hover:border-amber/50 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={restaurantConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 text-cream/70 hover:text-amber-soft hover:border-amber/50 transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-amber-soft">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-amber-soft">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>{restaurantConfig.address.line1}</li>
            <li>{restaurantConfig.address.line2}</li>
            <li>{restaurantConfig.phoneDisplay}</li>
            <li>{restaurantConfig.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-amber-soft">
            Hours
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            {restaurantConfig.hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span>{h.day}</span>
                <span className="text-cream/50 text-xs">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-cream/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {restaurantConfig.name}. All rights
          reserved.
        </p>
        <p className="text-xs text-cream/40">
          Restaurant website concept — a fictional portfolio demo, not a real
          business.
        </p>
      </div>
    </div>
  </footer>
);
