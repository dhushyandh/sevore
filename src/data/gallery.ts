export interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/28059309/pexels-photo-28059309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Candlelit dining room with an elegantly set table",
    span: "wide",
  },
  {
    src: "https://images.pexels.com/photos/8112966/pexels-photo-8112966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Artfully plated steak served with chopsticks",
    span: "tall",
  },
  {
    src: "https://images.pexels.com/photos/19456977/pexels-photo-19456977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chic restaurant interior with velvet chairs and warm lighting",
  },
  {
    src: "https://images.pexels.com/photos/5865244/pexels-photo-5865244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Gourmet dish plated on a dark plate with rustic backdrop",
  },
  {
    src: "https://images.pexels.com/photos/14965698/pexels-photo-14965698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Warm rustic restaurant interior with wooden furniture",
    span: "wide",
  },
  {
    src: "https://images.pexels.com/photos/29978698/pexels-photo-29978698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Gourmet chocolate dessert with ice cream",
    span: "tall",
  },
  {
    src: "https://images.pexels.com/photos/18058331/pexels-photo-18058331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Elegant table setting with warm evening lighting",
  },
  {
    src: "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chef plating a dish in a dimly lit kitchen",
  },
];
