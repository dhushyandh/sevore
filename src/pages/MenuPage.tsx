import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { MenuSection } from "../sections/MenuSection";
import { ReservationSection } from "../sections/ReservationSection";

const headerImage =
  "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400";

export const MenuPage = () => (
  <>
    <PageHeader
      eyebrow="The Menu"
      title="Every plate, made to order"
      description="Search and filter the full Savoré menu. Prices are demo values in Indian Rupees."
      image={headerImage}
      alt="Close-up of spaghetti carbonara with grated parmesan"
    />
    <Reveal>
      <MenuSection />
    </Reveal>
    <ReservationSection />
  </>
);
