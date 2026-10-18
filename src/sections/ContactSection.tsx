import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { restaurantConfig } from "../config/restaurant";

const buildWhatsappGeneral = () => {
  const text = encodeURIComponent(
    "Hello Savoré! I have a general enquiry.",
  );
  return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${text}`;
};

export const ContactSection = () => {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream scroll-mt-16">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit, call, or message"
          description="All contact details below are clearly-labelled demo information."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            icon={<MapPin size={20} />}
            title="Address"
            lines={[restaurantConfig.address.line1, restaurantConfig.address.line2]}
            note={restaurantConfig.address.note}
          />
          <ContactCard
            icon={<Clock size={20} />}
            title="Opening hours"
            lines={restaurantConfig.hours.map((h) => `${h.day} — ${h.time}`)}
            note="Illustrative hours"
          />
          <ContactCard
            icon={<Phone size={20} />}
            title="Phone & Email"
            lines={[restaurantConfig.phoneDisplay, restaurantConfig.email]}
            note="Demo contact values"
          />
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-dashed border-espresso/20 bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 shrink-0 text-amber-dark" size={20} />
            <div>
              <p className="text-sm font-medium text-espresso">
                Map preview not embedded
              </p>
              <p className="text-xs text-muted-dark mt-1 max-w-md">
                A live map would appear here once a real address is configured.
                Showing a labelled demo location block instead to avoid
                misrepresenting a real business.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsappGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1FB855] transition-colors"
          >
            <MessageCircle size={18} /> WhatsApp us
          </a>
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-dark">
          <Mail size={13} />
          <span>
            Social links connect to generic destinations only — configure real
            profiles before production.
          </span>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  note: string;
}

const ContactCard = ({ icon, title, lines, note }: ContactCardProps) => (
  <div className="rounded-2xl border border-espresso/8 bg-white p-6">
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-amber/15 text-amber-dark">
        {icon}
      </span>
      <h3 className="font-serif text-lg text-espresso">{title}</h3>
    </div>
    <div className="mt-4 space-y-1 text-sm text-muted-dark">
      {lines.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
    <p className="mt-3 text-[11px] uppercase tracking-wider text-muted">
      {note}
    </p>
  </div>
);
