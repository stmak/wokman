import bundleOnePersonImage from "@/assets/bundle-one-person.jpg";
import bundleTwoPersonImage from "@/assets/bundle-two-person-clean.jpg";
import bundleFourPersonImage from "@/assets/bundle-four-person.jpg";

type BundleSeed = {
  id: string;
  name: string;
  category: "Bundles";
  price: number;
  ingredients: string;
  description: string;
  popular: boolean;
  image: string;
  imageAlt: string;
  serves: string;
  badge: string;
  includes: string[];
};

export const bundleMeals: BundleSeed[] = [
  {
    id: "bundle-solo-feast",
    name: "Golden Fortune Solo Feast",
    category: "Bundles",
    price: 15.8,
    ingredients: "Chicken chow mein, egg fried rice, vegetable spring rolls",
    description:
      "A neatly judged solo supper with smoky noodles, fluffy rice and a crisp starter for one very happy night in.",
    popular: true,
    image: bundleOnePersonImage,
    imageAlt: "One person Chinese takeaway bundle with chow mein, spring rolls and egg fried rice",
    serves: "Serves 1",
    badge: "One person meal",
    includes: ["Chicken Chow Mein", "Egg Fried Rice", "2 Vegetable Spring Rolls"],
  },
  {
    id: "bundle-supper-for-two",
    name: "Golden Fortune Supper for Two",
    category: "Bundles",
    price: 31.8,
    ingredients: "Aromatic crispy duck, pancakes, beef in black bean sauce, special fried rice, salt and pepper chips",
    description:
      "A proper sharing order with duck pancakes, glossy black bean beef and enough favourites to make Friday feel rather grand.",
    popular: true,
    image: bundleTwoPersonImage,
    imageAlt: "Two person Chinese takeaway bundle with crispy duck, black bean beef, rice and chips",
    serves: "Serves 2",
    badge: "Two person meal",
    includes: [
      "Aromatic Crispy Duck with Pancakes",
      "Beef with Green Pepper in Black Bean Sauce",
      "Special Fried Rice",
      "Salt and Pepper Chips",
    ],
  },
  {
    id: "bundle-banquet-for-four",
    name: "Golden Fortune Banquet for Four",
    category: "Bundles",
    price: 63.5,
    ingredients: "Duck, sweet and sour chicken, shredded chilli beef, king prawn chow mein, egg fried rice, ribs, spring rolls",
    description:
      "The big-table centrepiece: glossy classics, noodles, rice and starters arranged for a lively family-style banquet.",
    popular: true,
    image: bundleFourPersonImage,
    imageAlt: "Four person Chinese takeaway banquet with duck, chicken, beef, noodles, rice and starters",
    serves: "Serves 4",
    badge: "Four person banquet",
    includes: [
      "Aromatic Crispy Duck",
      "Sweet and Sour Chicken Hong Kong Style",
      "Shredded Chilli Beef",
      "King Prawn Chow Mein",
      "Egg Fried Rice",
      "Salt and Pepper Ribs",
      "Vegetable Spring Rolls",
    ],
  },
];

export const bundleImageMap = Object.fromEntries(bundleMeals.map((bundle) => [bundle.name, bundle.image]));

export type BundleMeal = (typeof bundleMeals)[number];