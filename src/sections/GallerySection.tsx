import { SectionHeading } from "../components/SectionHeading";
import { Gallery } from "../components/Gallery";

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream scroll-mt-16">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="The Room & The Plates"
          title="A look at Savoré"
          description="Ambience and signature dishes. Tap any image to view it larger."
        />
        <div className="mt-12">
          <Gallery />
        </div>
      </div>
    </section>
  );
};
