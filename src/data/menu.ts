export type MenuCategory =
  | "Starters"
  | "Main Course"
  | "Pasta & Pizza"
  | "Beverages"
  | "Desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: MenuCategory;
  image: string;
  alt: string;
  vegetarian: boolean;
  spicy?: boolean;
  signature?: boolean;
}

export const menuCategories: ("All" | MenuCategory)[] = [
  "All",
  "Starters",
  "Main Course",
  "Pasta & Pizza",
  "Beverages",
  "Desserts",
];

export const menuItems: MenuItem[] = [
  {
    id: "starter-1",
    name: "Charred Paneer Tikka",
    description: "Smoked cottage cheese, bell pepper, mint chutney.",
    longDescription:
      "Hand-pressed cottage cheese marinated in spiced yogurt and charred over open flame, served with roasted bell peppers and a fresh mint chutney.",
    price: 420,
    category: "Starters",
    image:
      "https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Charred paneer pakora with chutney",
    vegetarian: true,
    spicy: true,
    signature: true,
  },
  {
    id: "starter-2",
    name: "Garden Bruschetta",
    description: "Sourdough, heirloom tomato, basil oil.",
    longDescription:
      "Toasted sourdough topped with marinated heirloom tomatoes, shaved parmesan, and a drizzle of house basil oil.",
    price: 320,
    category: "Starters",
    image:
      "https://images.pexels.com/photos/24186308/pexels-photo-24186308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Bruschetta with greens on a dark plate",
    vegetarian: true,
  },
  {
    id: "starter-3",
    name: "Seared Scallops",
    description: "Cauliflower purée, brown butter, capers.",
    longDescription:
      "Golden-seared scallops over silky cauliflower purée, finished with nutty brown butter and crisp capers.",
    price: 560,
    category: "Starters",
    image:
      "https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Seared scallops plated with foam and microgreens",
    vegetarian: false,
  },
  {
    id: "main-1",
    name: "Smoked Butter Chicken",
    description: "Tandoor chicken, makhani gravy, naan.",
    longDescription:
      "Tandoor-roasted chicken folded into a rich tomato-makhani gravy with a touch of smoked butter, served with warm naan.",
    price: 540,
    category: "Main Course",
    image:
      "https://images.pexels.com/photos/30749024/pexels-photo-30749024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chicken tikka in a black skillet with onion and lemon",
    vegetarian: false,
    spicy: true,
    signature: true,
  },
  {
    id: "main-2",
    name: "Dum Aloo Rogan",
    description: "Slow-cooked baby potato, Kashmiri spices.",
    longDescription:
      "Whole baby potatoes slow-cooked in a fragrant Kashmiri-spiced gravy, finished with fresh herbs and a swirl of cream.",
    price: 460,
    category: "Main Course",
    image:
      "https://images.pexels.com/photos/33643313/pexels-photo-33643313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Dum aloo curry in a traditional bowl",
    vegetarian: true,
    spicy: true,
  },
  {
    id: "main-3",
    name: "Grilled Salmon, Fennel",
    description: "Crispy skin, fennel, cherry tomato.",
    longDescription:
      "Pan-grilled salmon with crisp skin over shaved fennel and blistered cherry tomatoes, lifted with lemon.",
    price: 680,
    category: "Main Course",
    image:
      "https://images.pexels.com/photos/29168406/pexels-photo-29168406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Grilled salmon with cherry tomatoes and greens",
    vegetarian: false,
  },
  {
    id: "pasta-1",
    name: "Truffle Mushroom Rigatoni",
    description: "Creamy parmesan, wild mushroom, truffle.",
    longDescription:
      "Rigatoni in a silky parmesan cream with sautéed wild mushrooms and a generous shaving of black truffle.",
    price: 520,
    category: "Pasta & Pizza",
    image:
      "https://images.pexels.com/photos/8917285/pexels-photo-8917285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Pasta with mushrooms and pesto drizzle",
    vegetarian: true,
    signature: true,
  },
  {
    id: "pasta-2",
    name: "Classic Carbonara",
    description: "Guanciale, egg yolk, pecorino.",
    longDescription:
      "Al dente spaghetti tossed with crisp guanciale, egg yolk, and pecorino for a true Roman carbonara.",
    price: 480,
    category: "Pasta & Pizza",
    image:
      "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Spaghetti carbonara with grated parmesan",
    vegetarian: false,
  },
  {
    id: "pasta-3",
    name: "Margherita, Basil Oil",
    description: "San Marzano, fior di latte, basil.",
    longDescription:
      "Wood-fired Margherita with San Marzano tomato, fior di latte mozzarella, and a basil oil finish.",
    price: 440,
    category: "Pasta & Pizza",
    image:
      "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Pasta with kidney beans and rich sauce",
    vegetarian: true,
  },
  {
    id: "bev-1",
    name: "Saffron Iced Latte",
    description: "Saffron, cardamom, chilled milk.",
    longDescription:
      "Slow-steeped saffron and cardamom over chilled milk, lightly sweetened and served over ice.",
    price: 240,
    category: "Beverages",
    image:
      "https://images.pexels.com/photos/33166521/pexels-photo-33166521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Iced drinks on a tray",
    vegetarian: true,
  },
  {
    id: "bev-2",
    name: "Espresso Martini",
    description: "Vanilla vodka, fresh espresso, bean.",
    longDescription:
      "Vanilla vodka shaken with a fresh espresso shot and coffee liqueur, finished with crema and a coffee bean.",
    price: 380,
    category: "Beverages",
    image:
      "https://images.pexels.com/photos/15750737/pexels-photo-15750737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Bartender preparing an espresso martini",
    vegetarian: true,
    signature: true,
  },
  {
    id: "dessert-1",
    name: "Dark Chocolate Fondant",
    description: "Molten centre, cherry, cocoa nib.",
    longDescription:
      "Warm dark chocolate fondant with a molten centre, tart cherry compote, and crisp cocoa nib.",
    price: 360,
    category: "Desserts",
    image:
      "https://images.pexels.com/photos/33731580/pexels-photo-33731580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chocolate dessert with strawberries and edible flowers",
    vegetarian: true,
    signature: true,
  },
  {
    id: "dessert-2",
    name: "Caramelised Banana",
    description: "Caramel, chocolate crisp, vanilla.",
    longDescription:
      "Caramelised banana with a chocolate crisp, salted caramel, and a scoop of Madagascar vanilla ice cream.",
    price: 320,
    category: "Desserts",
    image:
      "https://images.pexels.com/photos/28438607/pexels-photo-28438607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Plated dessert with caramelised banana and chocolate crisps",
    vegetarian: true,
  },
];

export const featuredItems: MenuItem[] = menuItems.filter((i) => i.signature);
