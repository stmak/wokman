import duckImage from "@/assets/menu/duck.jpg";
import generalStirFryImage from "@/assets/menu/general-stir-fry.jpg";
import noodlesImage from "@/assets/menu/noodles.jpg";
import prawnCrackersImage from "@/assets/menu/prawn-crackers.jpg";
import prawnsImage from "@/assets/menu/prawns.jpg";
import tofuImage from "@/assets/menu/tofu.jpg";
import type { Dish } from "@/data/menu";

const categoryImages = {
  Starters: generalStirFryImage,
  Soups: generalStirFryImage,
  Chicken: generalStirFryImage,
  Beef: generalStirFryImage,
  Pork: generalStirFryImage,
  Duck: duckImage,
  Seafood: prawnsImage,
  Vegetarian: tofuImage,
  Rice: generalStirFryImage,
  Noodles: noodlesImage,
} as const;

const dishImageOverrides: Record<string, string> = {
  "Prawn Crackers": prawnCrackersImage,
  "Sesame Prawn Toast": prawnsImage,
  "Aromatic Crispy Duck": duckImage,
  "Aromatic Crispy Duck Starter": duckImage,
  "King Prawn Chow Mein": noodlesImage,
  "King Prawn Fried Rice": prawnsImage,
  "King Prawn Fried Rice Deluxe": prawnsImage,
  "King Prawn Udon": noodlesImage,
  "Sweet and Sour King Prawn": prawnsImage,
  "Prawn Foo Yung": prawnsImage,
  "Ma Po Tofu": tofuImage,
  "Salt and Pepper Tofu": tofuImage,
  "Tofu with Mixed Vegetables": tofuImage,
  "Aubergine in Garlic Sauce": tofuImage,
  "Chicken Chow Mein": noodlesImage,
  "Beef Chow Mein": noodlesImage,
  "Duck Chow Mein": noodlesImage,
  "Special Chow Mein": noodlesImage,
  "Singapore Chow Mein": noodlesImage,
};

export const resolveDishImage = (dish: Dish) => dishImageOverrides[dish.name] ?? categoryImages[dish.category] ?? dish.image;

export const resolveDishImageAlt = (dish: Dish) => `${dish.name} dish photo`;