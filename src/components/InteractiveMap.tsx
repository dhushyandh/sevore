import { ExternalLink } from "lucide-react";
import { restaurantConfig } from "../config/restaurant";

export const InteractiveMap = () => {
  const addressQuery = encodeURIComponent(
    `${restaurantConfig.address.line1}, ${restaurantConfig.address.line2}`
  );
  const embedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-espresso/10 bg-white shadow-sm">
      <div className="relative w-full h-[360px] sm:h-[420px] bg-cream-dark/30">
        <iframe
          title={`${restaurantConfig.name} Location`}
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-white border-t border-espresso/8 text-xs text-muted-dark">
        <span>
          {restaurantConfig.address.line1}, {restaurantConfig.address.line2}
        </span>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-amber-dark hover:text-espresso transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
};
