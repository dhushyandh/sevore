import { Hero } from "../sections/Hero";
import { FeaturedDishes } from "../sections/FeaturedDishes";
import { MenuSection } from "../sections/MenuSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { StorySection } from "../sections/StorySection";
import { GallerySection } from "../sections/GallerySection";
import { ReservationSection } from "../sections/ReservationSection";
import { ContactSection } from "../sections/ContactSection";

export const HomePage = () => (
  <>
    <Hero />
    <FeaturedDishes />
    <MenuSection />
    <TestimonialsSection />
    <StorySection />
    <GallerySection />
    <ReservationSection />
    <ContactSection />
  </>
);
