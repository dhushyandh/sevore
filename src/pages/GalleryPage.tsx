import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { GallerySection } from "../sections/GallerySection";
import { ReservationSection } from "../sections/ReservationSection";

const headerImage =
  "https://images.pexels.com/photos/19456977/pexels-photo-19456977.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400";

export const GalleryPage = () => (
  <>
    <PageHeader
      eyebrow="Gallery"
      title="The room and the plates"
      description="A look at the Savoré ambience and signature dishes. Tap any image to view it larger."
      image={headerImage}
      alt="Chic restaurant interior with velvet chairs and warm lighting"
    />
    <Reveal>
      <GallerySection />
    </Reveal>
    <ReservationSection />
  </>
);
