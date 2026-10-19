import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { restaurantConfig } from "../config/restaurant";
import { InteractiveMap } from "../components/InteractiveMap";

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

        {/* Embedded Map */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="font-serif text-xl text-espresso flex items-center gap-2">
                <MapPin className="text-amber-dark" size={20} />
                <span>Our Location</span>
              </h3>
              <p className="text-xs text-muted-dark mt-0.5">
                {restaurantConfig.address.line1}, {restaurantConfig.address.line2}
              </p>
            </div>
            <a
              href={buildWhatsappGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1FB855] transition-colors shadow-sm"
            >
              <MessageCircle size={16} /> WhatsApp Concierge
            </a>
          </div>

          <InteractiveMap />
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
