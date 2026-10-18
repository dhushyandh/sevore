export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image:
      "https://images.pexels.com/photos/24186303/pexels-photo-24186303.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600",
    alt: "Cinematic close-up of a gourmet plated dish on a dark table",
    eyebrow: "Good Food. Great Company.",
    title: "Flavors That Bring People Together",
    description:
      "Handcrafted plates, warm hospitality, and a room made for long evenings. Savoré is a contemporary dining room where every dish is made to order and every guest is looked after.",
  },
  {
    image:
      "https://images.pexels.com/photos/6715103/pexels-photo-6715103.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600",
    alt: "Dimly lit dining room set with candles and wine",
    eyebrow: "An Evening, Made Slow",
    title: "A Room Built for Long Conversations",
    description:
      "Candlelight, warm wood, and a kitchen that takes its time. Settle in — the night belongs to you and the table.",
  },
  {
    image:
      "https://images.pexels.com/photos/35896396/pexels-photo-35896396.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600",
    alt: "Freshly baked gourmet pizza on a rustic wooden board",
    eyebrow: "From the Wood-Fire Oven",
    title: "Crafted Over Open Flame",
    description:
      "Wood-fired pizzas, charred vegetables, and smoked mains — fire is at the heart of how we cook at Savoré.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  detail: string;
  quote: string;
  image: string;
  rating: number;
}

// Clearly fictional sample testimonials — not real customer endorsements.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    detail: "Anniversary dinner · Demo guest",
    quote:
      "The candlelit corner, the slow service, the butter chicken — it felt like the evening was designed for us. We didn't look at our phones once.",
    image:
      "https://images.pexels.com/photos/24357593/pexels-photo-24357593.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    rating: 5,
  },
  {
    id: "t2",
    name: "Ishita Rao",
    detail: "Sunday brunch · Demo guest",
    quote:
      "The truffle mushroom rigatoni is unreal. Bright room, easy music, and staff who actually care whether you're enjoying it.",
    image:
      "https://images.pexels.com/photos/8680484/pexels-photo-8680484.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    rating: 5,
  },
  {
    id: "t3",
    name: "Rohan Das",
    detail: "Team dinner · Demo guest",
    quote:
      "Booked for eight, stayed for three hours. The fondant alone is worth the trip. Easily the warmest room in the neighbourhood.",
    image:
      "https://images.pexels.com/photos/21077136/pexels-photo-21077136.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    rating: 5,
  },
];
