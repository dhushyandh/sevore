import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { ReservationForm } from "../components/ReservationForm";

export const ReservationSection = () => {
  const reduce = useReducedMotion();
  return (
    <section
      id="reserve"
      className="py-20 sm:py-28 bg-cream-dark/60 scroll-mt-16"
    >
      <div className="mx-auto max-w-content container-px grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Reserve a Table"
            title="Book your evening at Savoré"
            description="Send an enquiry and we'll confirm availability over WhatsApp."
            align="left"
          />
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-sm leading-relaxed text-muted-dark max-w-md"
          >
            Fill in your details and we'll open WhatsApp with a ready-made
            message for our team. This is an enquiry — your table is confirmed
            only once we reply.
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-white border border-espresso/8 p-6 sm:p-8 shadow-[0_2px_30px_-18px_rgba(33,23,16,0.3)]"
        >
          <ReservationForm />
        </motion.div>
      </div>
    </section>
  );
};
