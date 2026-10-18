import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { ContactSection } from "../sections/ContactSection";
import { ReservationSection } from "../sections/ReservationSection";

const headerImage =
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400";

export const ContactPage = () => (
  <>
    <PageHeader
      eyebrow="Contact"
      title="Visit, call, or message"
      description="All details below are clearly-labelled demo information for this portfolio concept."
      image={headerImage}
      alt="Restaurant interior with elegant table setting and candlelight"
    />
    <Reveal>
      <ContactSection />
    </Reveal>
    <ReservationSection />
  </>
);
