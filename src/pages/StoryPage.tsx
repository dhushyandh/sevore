import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { StorySection } from "../sections/StorySection";
import { GallerySection } from "../sections/GallerySection";
import { ReservationSection } from "../sections/ReservationSection";

const headerImage =
  "https://images.pexels.com/photos/24357593/pexels-photo-24357593.jpeg?auto=compress&cs=tinysrgb&h=1100&w=800";

export const StoryPage = () => (
  <>
    <PageHeader
      eyebrow="Our Story"
      title="A small kitchen with a big love for the craft"
      description="How Savoré came to be — a fictional restaurant concept created for this portfolio demo."
      image={headerImage}
      alt="A chef preparing food in a cozy kitchen"
    />
    <Reveal>
      <StorySection />
    </Reveal>
    <Reveal>
      <GallerySection />
    </Reveal>
    <ReservationSection />
  </>
);
