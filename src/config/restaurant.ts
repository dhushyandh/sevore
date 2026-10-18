export const restaurantConfig = {
  name: "Savoré",
  tagline: "Contemporary Dining & Café",
  // Placeholder — owner must replace with the restaurant's real WhatsApp number
  // (country code + number, digits only). Demo value shown deliberately.
  whatsappNumber: "910000000000",
  email: "hello@savore-demo.example",
  phoneDisplay: "+91 00000 00000",
  // Fictional sample information — replace before production use
  address: {
    line1: "12 Lantern Street, Bandra West",
    line2: "Mumbai 400050, India",
    note: "Fictional sample address",
  },
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday – Thursday", time: "12:00 – 23:00" },
    { day: "Friday – Saturday", time: "12:00 – 00:30" },
    { day: "Sunday", time: "10:00 – 22:30" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  currency: "₹",
  // No real booking backend — enquiries go to WhatsApp only
  isConcept: true,
} as const;

export type RestaurantConfig = typeof restaurantConfig;
