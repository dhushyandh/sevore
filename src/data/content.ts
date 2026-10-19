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
  highlightPhrase?: string;
  image: string;
  rating: number;
  category: "romance" | "tasting" | "brunch" | "celebration";
  table?: string;
  favoriteDish?: string;
  visitDate?: string;
  metrics?: {
    food: number;
    hospitality: number;
    ambience: number;
  };
}

// Curated sample testimonials showcasing authentic dining moods and memories
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav & Meera Mehta",
    detail: "5th Anniversary Dinner · Table 12",
    quote:
      "The candlelit corner, the slow unhurried pacing, the wood-fired butter chicken and truffle sourdough — it felt like the evening was choreographed exclusively for us. We didn't look at our phones once the entire night.",
    highlightPhrase: "We didn't look at our phones once the entire night.",
    image:
      "https://images.pexels.com/photos/24357593/pexels-photo-24357593.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    rating: 5,
    category: "romance",
    table: "Corner Alcove 12",
    favoriteDish: "Wood-Fired Butter Chicken & Smoked Sourdough",
    visitDate: "Verified Visit · Autumn 2026",
    metrics: { food: 5.0, hospitality: 5.0, ambience: 5.0 },
  },
  {
    id: "t2",
    name: "Ishita Rao",
    detail: "Sunday Long Brunch · Sunlit Verandah",
    quote:
      "The truffle mushroom rigatoni is pure poetry. Sun-dappled tables, gentle acoustic warmth, and a service team that genuinely cares whether every single bite brings joy. My definitive weekend sanctuary.",
    highlightPhrase: "The truffle mushroom rigatoni is pure poetry.",
    image:
      "https://images.pexels.com/photos/8680484/pexels-photo-8680484.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    rating: 5,
    category: "brunch",
    table: "Verandah Table 4",
    favoriteDish: "Truffle Rigatoni & Cold-Pressed Citrus",
    visitDate: "Verified Visit · October 2026",
    metrics: { food: 5.0, hospitality: 4.9, ambience: 5.0 },
  },
  {
    id: "t3",
    name: "Chef Rohan Das",
    detail: "Chef's Tasting Table · Private Room",
    quote:
      "Booked for eight, stayed for nearly four unforgettable hours. The 70% dark chocolate fondant alone warrants a pilgrimage. Easily the most soulful hospitality and culinary precision in the city.",
    highlightPhrase: "Easily the most soulful hospitality in the city.",
    image:
      "https://images.pexels.com/photos/21077136/pexels-photo-21077136.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    rating: 5,
    category: "tasting",
    table: "Chef's Counter",
    favoriteDish: "Valrhona Chocolate Fondant & Smoked Negroni",
    visitDate: "Verified Visit · September 2026",
    metrics: { food: 5.0, hospitality: 5.0, ambience: 5.0 },
  },
  {
    id: "t4",
    name: "Dr. Priya & Kabir Sen",
    detail: "40th Family Milestone · Dining Suite",
    quote:
      "Hosted my parents' 40th anniversary here with our family. From customized commemorative menus to discreet, impeccable wine service, Savoré treated us like royalty. Every guest left completely enchanted.",
    highlightPhrase: "Savoré treated us like royalty. Every guest left completely enchanted.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    rating: 5,
    category: "celebration",
    table: "Private Heritage Suite",
    favoriteDish: "Burrata Caprese & Slow-Braised Lamb",
    visitDate: "Verified Visit · August 2026",
    metrics: { food: 5.0, hospitality: 5.0, ambience: 5.0 },
  },
  {
    id: "t5",
    name: "Arjun & Tara Kapoor",
    detail: "Late Evening Dinner & Cocktails",
    quote:
      "The saffron risotto paired with house rosemary infusions after 10 PM is transcendent. Intimate low lighting, warm brass accents, and a kitchen that never cuts corners, no matter how late.",
    highlightPhrase: "Intimate low lighting and a kitchen that never cuts corners.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    rating: 5,
    category: "romance",
    table: "Mezzanine Booth 7",
    favoriteDish: "Saffron Risotto & Smoked Botanical Gin",
    visitDate: "Verified Visit · October 2026",
    metrics: { food: 4.9, hospitality: 5.0, ambience: 5.0 },
  },
  {
    id: "t6",
    name: "Ananya Deshmukh",
    detail: "Solo Evening & Journaling",
    quote:
      "Dining alone at Savoré feels like a rare luxury. Warm artisanal brioche, an immaculate Pinot Noir, and staff who strike that magical balance between attentive care and giving you peaceful space.",
    highlightPhrase: "Dining alone at Savoré feels like a rare luxury.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    rating: 5,
    category: "brunch",
    table: "Window Library Nook",
    favoriteDish: "Artisanal Brioche & Pan-Seared Sea Bass",
    visitDate: "Verified Visit · October 2026",
    metrics: { food: 5.0, hospitality: 5.0, ambience: 4.9 },
  },
];
