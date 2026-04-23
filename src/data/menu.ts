import { resolveDishImage, resolveDishImageAlt } from "@/lib/menu-images";

export type MenuCategory =
  | "Starters"
  | "Soups"
  | "Chicken"
  | "Beef"
  | "Pork"
  | "Duck"
  | "Seafood"
  | "Vegetarian"
  | "Rice"
  | "Noodles";
export type Dish = {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  ingredients: string;
  description: string;
  popular: boolean;
  image: string;
  imageAlt: string;
};
const categoryArtwork: Record<MenuCategory, { motif: string; hueA: string; hueB: string }> = {
  Starters: { motif: "fan", hueA: "12 65% 52%", hueB: "38 78% 62%" },
  Soups: { motif: "bowl", hueA: "15 58% 48%", hueB: "34 72% 58%" },
  Chicken: { motif: "wok", hueA: "9 62% 45%", hueB: "28 82% 58%" },
  Beef: { motif: "cleaver", hueA: "6 56% 34%", hueB: "22 70% 52%" },
  Pork: { motif: "seal", hueA: "346 48% 44%", hueB: "18 74% 58%" },
  Duck: { motif: "lantern", hueA: "1 52% 38%", hueB: "36 78% 60%" },
  Seafood: { motif: "wave", hueA: "188 51% 35%", hueB: "28 74% 58%" },
  Vegetarian: { motif: "leaf", hueA: "120 26% 32%", hueB: "41 58% 58%" },
  Rice: { motif: "bowl", hueA: "42 46% 46%", hueB: "45 70% 66%" },
  Noodles: { motif: "chopsticks", hueA: "25 58% 42%", hueB: "44 78% 62%" },
};
const makeDishImage = (name: string, category: MenuCategory, popular: boolean) => {
  const art = categoryArtwork[category];
  const border = popular ? "48 90% 62%" : "42 34% 72%";
  const label = name.length > 22 ? `${name.slice(0, 20)}…` : name;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" role="img" aria-label="${label}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="hsl(${art.hueA})" />
        <stop offset="100%" stop-color="hsl(${art.hueB})" />
      </linearGradient>
      <radialGradient id="plate" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="rgba(255,248,232,0.95)" />
        <stop offset="100%" stop-color="rgba(246,225,192,0.78)" />
      </radialGradient>
    </defs>
    <rect width="600" height="440" rx="28" fill="url(#bg)" />
    <rect x="18" y="18" width="564" height="404" rx="22" fill="none" stroke="hsl(${border})" stroke-width="3" stroke-dasharray="14 10" opacity="0.9" />
    <ellipse cx="300" cy="238" rx="176" ry="110" fill="url(#plate)" />
    <ellipse cx="300" cy="238" rx="132" ry="78" fill="rgba(115,34,20,0.18)" />
    <path d="M170 110c24 10 40 30 52 56" stroke="rgba(255,247,234,0.42)" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M226 88c22 14 34 34 40 58" stroke="rgba(255,247,234,0.35)" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M380 98c18 12 30 30 40 52" stroke="rgba(255,247,234,0.34)" stroke-width="9" stroke-linecap="round" fill="none"/>
    <g opacity="0.94">
      <rect x="456" y="96" width="10" height="188" rx="5" fill="rgba(83,34,18,0.65)" transform="rotate(18 456 96)" />
      <rect x="482" y="88" width="10" height="188" rx="5" fill="rgba(120,59,31,0.82)" transform="rotate(18 482 88)" />
    </g>
    <text x="52" y="74" fill="rgba(255,248,240,0.92)" font-family="Georgia, serif" font-size="26" letter-spacing="2">${category.toUpperCase()}</text>
    <text x="52" y="378" fill="rgba(255,248,240,0.96)" font-family="Georgia, serif" font-size="34">${label}</text>
    <text x="52" y="408" fill="rgba(255,236,214,0.78)" font-family="Arial, sans-serif" font-size="16">${art.motif} • crafted for the takeaway table</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
const menuSeeds = [
  { name: 'Crispy Seaweed', category: 'Starters', price: 4.2, ingredients: 'shredded greens, sesame seeds, sweet seasoning', description: 'A sweet-salty little crunch bomb that disappears faster than the kettle boils. Featuring shredded greens, sesame seeds, sweet seasoning, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Vegetable Spring Rolls', category: 'Starters', price: 4.6, ingredients: 'cabbage, carrot, glass noodles, crisp pastry', description: 'Golden, crackly and packed with veggie goodness for a proper opening act. Built with cabbage, carrot, glass noodles, crisp pastry, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Sesame Prawn Toast', category: 'Starters', price: 5.8, ingredients: 'king prawn paste, sesame seeds, toast triangles', description: 'Rich, savoury and gloriously retro in the very best British takeaway way. Expect king prawn paste, sesame seeds, toast triangles in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Salt and Pepper Ribs', category: 'Starters', price: 6.9, ingredients: 'pork ribs, garlic, chilli, onion', description: 'Sticky fingers guaranteed with these punchy, moreish ribs. Made with pork ribs, garlic, chilli, onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Salt and Pepper Chicken Wings', category: 'Starters', price: 6.4, ingredients: 'chicken wings, garlic, spring onion, chilli', description: 'Crispy, feisty and built for people who like their starters to swagger. Featuring chicken wings, garlic, spring onion, chilli, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Prawn Crackers', category: 'Starters', price: 2.9, ingredients: 'prawn starch wafers, oil, seasoning', description: 'The classic airy cruncher that turns every order into a party. Built with prawn starch wafers, oil, seasoning, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Mini Vegetable Pancake Rolls', category: 'Starters', price: 4.9, ingredients: 'mixed vegetables, soy, crisp pancake wrap', description: 'Light, crispy and ridiculously easy to keep nibbling. Expect mixed vegetables, soy, crisp pancake wrap in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Chicken Satay Skewers', category: 'Starters', price: 6.2, ingredients: 'marinated chicken, peanut satay sauce, cucumber', description: 'Tender skewers with nutty, smoky sauce for instant takeaway joy. Made with marinated chicken, peanut satay sauce, cucumber, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Aromatic Crispy Duck Starter', category: 'Starters', price: 9.8, ingredients: 'shredded duck, pancakes, cucumber, spring onion, hoisin', description: 'A celebratory little feast with crisp duck and sweet hoisin magic. Featuring shredded duck, pancakes, cucumber, spring onion, hoisin, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Salt and Pepper Chips', category: 'Starters', price: 4.8, ingredients: 'chips, garlic, onion, chilli, five-spice', description: 'A cult takeaway side that delivers chip-shop comfort with wok-side attitude. Built with chips, garlic, onion, chilli, five-spice, it brings big takeaway comfort and plenty of savoury swagger.', popular: true },
  { name: 'Chicken and Sweetcorn Soup', category: 'Soups', price: 4.5, ingredients: 'shredded chicken, sweetcorn, egg ribbons, stock', description: 'Silky, cosy and exactly the sort of spoonful that warms up a rainy UK evening. Expect shredded chicken, sweetcorn, egg ribbons, stock in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Hot and Sour Soup', category: 'Soups', price: 4.8, ingredients: 'tofu, bamboo shoots, mushroom, egg, vinegar, pepper', description: 'Tangy, peppery and full of lively little kicks in every sip. Made with tofu, bamboo shoots, mushroom, egg, vinegar, pepper, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Crab Meat and Sweetcorn Soup', category: 'Soups', price: 4.9, ingredients: 'crab meat, sweetcorn, egg ribbons, stock', description: 'Sweet, delicate and wonderfully soothing with a seaside wink. Featuring crab meat, sweetcorn, egg ribbons, stock, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Won Ton Soup', category: 'Soups', price: 5.2, ingredients: 'pork wontons, greens, clear broth', description: 'Plump dumplings bobbing in a clean, savoury broth — comfort by the bowl. Built with pork wontons, greens, clear broth, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Vegetable Tofu Soup', category: 'Soups', price: 4.6, ingredients: 'tofu, napa cabbage, carrot, mushroom, broth', description: 'Gentle, fragrant and full of clean, homely flavour. Expect tofu, napa cabbage, carrot, mushroom, broth in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Sweet and Sour Chicken Hong Kong Style', category: 'Chicken', price: 8.9, ingredients: 'battered chicken, pineapple, peppers, onion, sweet and sour sauce', description: 'A glossy, tangy crowd-pleaser that lands somewhere between comfort food and celebration. Made with battered chicken, pineapple, peppers, onion, sweet and sour sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: true },
  { name: 'Sweet and Sour Chicken Balls', category: 'Chicken', price: 8.7, ingredients: 'battered chicken balls, dipping sauce', description: 'One of the all-time takeaway legends: crisp shells, juicy chicken and dunkable fun. Featuring battered chicken balls, dipping sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: true },
  { name: 'Chicken Chow Mein', category: 'Chicken', price: 8.8, ingredients: 'egg noodles, chicken, beansprouts, onion', description: 'A UK takeaway superstar loaded with smoky noodles and wok-tossed comfort. Built with egg noodles, chicken, beansprouts, onion, it brings big takeaway comfort and plenty of savoury swagger.', popular: true },
  { name: 'Chicken Fried Rice', category: 'Chicken', price: 8.4, ingredients: 'rice, chicken, egg, peas, spring onion', description: 'Simple, satisfying and brilliantly dependable when hunger means business. Expect rice, chicken, egg, peas, spring onion in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Chicken Curry', category: 'Chicken', price: 8.6, ingredients: 'chicken, onion, peas, curry sauce', description: 'A chip-dipping, rice-loving favourite with mellow spice and silky sauce. Made with chicken, onion, peas, curry sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: true },
  { name: 'Kung Po Chicken', category: 'Chicken', price: 9.2, ingredients: 'chicken, peanuts, peppers, chilli, onion', description: 'Nutty, saucy and cheekily spicy with loads of wok-fired personality. Featuring chicken, peanuts, peppers, chilli, onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Chicken with Green Pepper in Black Bean Sauce', category: 'Chicken', price: 9.1, ingredients: 'chicken, green pepper, onion, fermented black beans', description: 'Deep, savoury black bean flavour makes this one a proper takeaway heavyweight. Built with chicken, green pepper, onion, fermented black beans, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Chicken with Cashew Nuts', category: 'Chicken', price: 9.3, ingredients: 'chicken, cashews, carrot, water chestnut, onion', description: 'Crunchy, glossy and full of sweet-savoury balance. Expect chicken, cashews, carrot, water chestnut, onion in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Lemon Chicken', category: 'Chicken', price: 9.0, ingredients: 'crispy chicken fillet, lemon sauce', description: 'Bright, zingy and gloriously sticky in a way that keeps everyone reaching for more. Made with crispy chicken fillet, lemon sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Chicken with Mushroom', category: 'Chicken', price: 8.9, ingredients: 'chicken, mushrooms, ginger, light gravy', description: 'Tender slices and earthy mushrooms in a mellow, silky sauce. Featuring chicken, mushrooms, ginger, light gravy, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Chicken with Ginger and Spring Onion', category: 'Chicken', price: 9.1, ingredients: 'chicken, ginger, spring onion, light soy sauce', description: 'Fresh, aromatic and all about clean wok fragrance. Built with chicken, ginger, spring onion, light soy sauce, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Chicken with Mixed Vegetables', category: 'Chicken', price: 8.9, ingredients: 'chicken, broccoli, carrot, baby corn, pak choi', description: 'A colourful, feel-good favourite that still tastes like a Friday night treat. Expect chicken, broccoli, carrot, baby corn, pak choi in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Chicken in Oyster Sauce', category: 'Chicken', price: 9.0, ingredients: 'chicken, greens, oyster sauce, onion', description: 'Savvy, savoury and glossy with proper takeaway richness. Made with chicken, greens, oyster sauce, onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Salt and Pepper Chicken', category: 'Chicken', price: 9.4, ingredients: 'crispy chicken pieces, garlic, chilli, onion', description: 'Crunchy, punchy and built for salt-and-pepper loyalists. Featuring crispy chicken pieces, garlic, chilli, onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Szechuan Chicken', category: 'Chicken', price: 9.3, ingredients: 'chicken, peppers, chilli, garlic, spicy sauce', description: 'A lively, fiery favourite that brings the heat without losing the flavour. Built with chicken, peppers, chilli, garlic, spicy sauce, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Beef with Green Pepper in Black Bean Sauce', category: 'Beef', price: 9.4, ingredients: 'beef, green pepper, onion, fermented black beans', description: 'Another UK takeaway hero with punchy sauce and tender slices of beef. Expect beef, green pepper, onion, fermented black beans in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: true },
  { name: 'Beef Chow Mein', category: 'Beef', price: 9.2, ingredients: 'egg noodles, beef, beansprouts, onion', description: 'Smoky noodles and savoury beef make this one pure late-night satisfaction. Made with egg noodles, beef, beansprouts, onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Beef Curry', category: 'Beef', price: 9.3, ingredients: 'beef, onion, peas, curry sauce', description: 'Rich, warming and brilliant with chips, rice or both if you are feeling bold. Featuring beef, onion, peas, curry sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Beef with Mushroom', category: 'Beef', price: 9.2, ingredients: 'beef, mushrooms, ginger, gravy', description: 'Comforting, savoury and deeply satisfying with every glossy bite. Built with beef, mushrooms, ginger, gravy, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Beef in Oyster Sauce', category: 'Beef', price: 9.4, ingredients: 'beef, onion, greens, oyster sauce', description: 'A savoury classic with restaurant-style richness and takeaway ease. Expect beef, onion, greens, oyster sauce in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Shredded Chilli Beef', category: 'Beef', price: 9.6, ingredients: 'crispy shredded beef, chilli, carrot, sweet sticky glaze', description: 'A sweet-hot crunch monster and one of the nation’s most-ordered favourites. Made with crispy shredded beef, chilli, carrot, sweet sticky glaze, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: true },
  { name: 'Szechuan Beef', category: 'Beef', price: 9.5, ingredients: 'beef, peppers, chilli, garlic, spicy sauce', description: 'Bold, warming and perfect when your order needs a little drama. Featuring beef, peppers, chilli, garlic, spicy sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Beef with Broccoli', category: 'Beef', price: 9.3, ingredients: 'beef, broccoli, ginger, light sauce', description: 'Tender beef and bright broccoli in a clean, glossy sauce that never goes out of style. Built with beef, broccoli, ginger, light sauce, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Mongolian Beef', category: 'Beef', price: 9.7, ingredients: 'beef, onion, spring onion, savoury brown sauce', description: 'Sweet, savoury and packed with sizzling wok flavour. Expect beef, onion, spring onion, savoury brown sauce in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Beef with Ginger and Spring Onion', category: 'Beef', price: 9.4, ingredients: 'beef, ginger, spring onion, soy sauce', description: 'Fragrant, classic and elegantly savoury. Made with beef, ginger, spring onion, soy sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Sweet and Sour Pork Hong Kong Style', category: 'Pork', price: 8.9, ingredients: 'pork, peppers, pineapple, onion, sweet and sour sauce', description: 'A proper old-school favourite with sticky, tangy charm. Featuring pork, peppers, pineapple, onion, sweet and sour sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Char Siu with BBQ Sauce', category: 'Pork', price: 9.1, ingredients: 'roast pork, barbecue glaze, sesame', description: 'Sweet, sticky slices of Cantonese-style roast pork that taste wonderfully celebratory. Built with roast pork, barbecue glaze, sesame, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Roast Pork Chow Mein', category: 'Pork', price: 9.0, ingredients: 'egg noodles, roast pork, beansprouts, onion', description: 'Smoky noodles meet savoury char siu for a beautifully moreish combo. Expect egg noodles, roast pork, beansprouts, onion in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Roast Pork Fried Rice', category: 'Pork', price: 8.8, ingredients: 'rice, roast pork, egg, peas, spring onion', description: 'Hearty, homely and ideal when you want maximum comfort from one tub. Made with rice, roast pork, egg, peas, spring onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Pork with Green Pepper in Black Bean Sauce', category: 'Pork', price: 9.1, ingredients: 'pork, green pepper, onion, black bean sauce', description: 'Salty-savoury black bean depth lifts every bite of tender pork. Featuring pork, green pepper, onion, black bean sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Pork in Satay Sauce', category: 'Pork', price: 9.2, ingredients: 'pork, onion, peppers, satay peanut sauce', description: 'Nutty, silky and gloriously rich for satay fans. Built with pork, onion, peppers, satay peanut sauce, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Sweet Chilli Pork', category: 'Pork', price: 9.0, ingredients: 'pork strips, chilli sauce, onion, peppers', description: 'Sticky, sweet and perked up with a warm chilli kick. Expect pork strips, chilli sauce, onion, peppers in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Pork with Mushrooms', category: 'Pork', price: 8.9, ingredients: 'pork, mushroom, ginger, gravy', description: 'A mellow, savoury classic that feels like takeaway comfort turned up nicely. Made with pork, mushroom, ginger, gravy, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Aromatic Crispy Duck', category: 'Duck', price: 12.9, ingredients: 'half duck, pancakes, cucumber, spring onion, hoisin', description: 'The big-night takeaway centrepiece with crisp skin and build-your-own pancake fun. Featuring half duck, pancakes, cucumber, spring onion, hoisin, this one is wok-warm, generous and made for a proper cosy night in.', popular: true },
  { name: 'Duck in Plum Sauce', category: 'Duck', price: 10.8, ingredients: 'duck, plum sauce, onion, peppers', description: 'Sweet, fruity and lush with that unmistakable roast duck richness. Built with duck, plum sauce, onion, peppers, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Duck with Orange Sauce', category: 'Duck', price: 10.9, ingredients: 'duck, orange sauce, spring onion', description: 'Bright citrus sparkle keeps this duck dish wonderfully elegant. Expect duck, orange sauce, spring onion in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Roast Duck Cantonese Style', category: 'Duck', price: 10.7, ingredients: 'duck, mixed vegetables, rich savoury sauce', description: 'Savvy and glossy, with comforting roast depth in every bite. Made with duck, mixed vegetables, rich savoury sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Duck with Green Pepper in Black Bean Sauce', category: 'Duck', price: 10.9, ingredients: 'duck, green pepper, onion, black bean sauce', description: 'Punchy black bean sauce gives roast duck a brilliantly bold edge. Featuring duck, green pepper, onion, black bean sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Duck with Ginger and Spring Onion', category: 'Duck', price: 10.8, ingredients: 'duck, ginger, spring onion, soy sauce', description: 'Fragrant, savoury and beautifully balanced. Built with duck, ginger, spring onion, soy sauce, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Szechuan Duck', category: 'Duck', price: 10.9, ingredients: 'duck, peppers, chilli, garlic, spicy sauce', description: 'A fiery little number for duck lovers who enjoy a spicy flourish. Expect duck, peppers, chilli, garlic, spicy sauce in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Duck Chow Mein', category: 'Duck', price: 10.5, ingredients: 'egg noodles, duck, beansprouts, onion', description: 'Roast duck and smoky noodles are an outrageously tasty pairing. Made with egg noodles, duck, beansprouts, onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'King Prawn Chow Mein', category: 'Seafood', price: 9.9, ingredients: 'egg noodles, king prawns, beansprouts, onion', description: 'Big juicy prawns and smoky noodles make this one a proper treat. Featuring egg noodles, king prawns, beansprouts, onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'King Prawn Fried Rice', category: 'Seafood', price: 9.7, ingredients: 'rice, king prawns, egg, peas, spring onion', description: 'Light, savoury and loaded with plump prawns. Built with rice, king prawns, egg, peas, spring onion, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'King Prawn with Cashew Nuts', category: 'Seafood', price: 10.2, ingredients: 'king prawns, cashews, carrot, onion, water chestnut', description: 'Crunchy, glossy and full of sweet seaside flavour. Expect king prawns, cashews, carrot, onion, water chestnut in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'King Prawn in Black Bean Sauce', category: 'Seafood', price: 10.3, ingredients: 'king prawns, green pepper, onion, black bean sauce', description: 'Briny sweetness meets bold fermented bean depth — a very smart combo. Made with king prawns, green pepper, onion, black bean sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'King Prawn Curry', category: 'Seafood', price: 10.1, ingredients: 'king prawns, onion, peas, curry sauce', description: 'Silky curry sauce turns juicy prawns into a comfort-food winner. Featuring king prawns, onion, peas, curry sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'King Prawn with Ginger and Spring Onion', category: 'Seafood', price: 10.2, ingredients: 'king prawns, ginger, spring onion, soy sauce', description: 'Fresh, fragrant and all about clean wok aroma. Built with king prawns, ginger, spring onion, soy sauce, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Squid with Salt and Pepper', category: 'Seafood', price: 9.8, ingredients: 'squid, garlic, chilli, onion, five-spice', description: 'Tender-crisp squid with that addictive salt-and-pepper sparkle. Expect squid, garlic, chilli, onion, five-spice in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Mixed Seafood in Oyster Sauce', category: 'Seafood', price: 10.6, ingredients: 'prawns, squid, mussels, greens, oyster sauce', description: 'A glossy seafood medley that feels deliciously generous. Made with prawns, squid, mussels, greens, oyster sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Sweet and Sour King Prawn', category: 'Seafood', price: 10.1, ingredients: 'king prawns, peppers, pineapple, onion, sweet and sour sauce', description: 'Tangy, glossy and packed with juicy bites of prawn. Featuring king prawns, peppers, pineapple, onion, sweet and sour sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Prawn with Mushrooms', category: 'Seafood', price: 9.9, ingredients: 'prawns, mushrooms, ginger, light gravy', description: 'Mellow, savoury and wonderfully comforting. Built with prawns, mushrooms, ginger, light gravy, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Singapore King Prawn', category: 'Seafood', price: 10.4, ingredients: 'king prawns, peppers, chilli, curry spices', description: 'A bright, spicy favourite with serious holiday energy. Expect king prawns, peppers, chilli, curry spices in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Prawn Foo Yung', category: 'Seafood', price: 9.6, ingredients: 'egg omelette, prawns, beansprouts, onion, gravy', description: 'Fluffy, savoury and gloriously old-school in the best takeaway tradition. Made with egg omelette, prawns, beansprouts, onion, gravy, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Ma Po Tofu', category: 'Vegetarian', price: 8.3, ingredients: 'tofu, chilli bean sauce, spring onion, Sichuan pepper', description: 'Soft tofu and bold sauce make this one silky, spicy and deeply satisfying. Featuring tofu, chilli bean sauce, spring onion, Sichuan pepper, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Salt and Pepper Tofu', category: 'Vegetarian', price: 8.1, ingredients: 'crispy tofu, garlic, chilli, onion', description: 'Golden tofu cubes with crisp edges and lively seasoning. Built with crispy tofu, garlic, chilli, onion, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Tofu with Mixed Vegetables', category: 'Vegetarian', price: 8.0, ingredients: 'tofu, broccoli, carrot, baby corn, pak choi', description: 'Colourful, nourishing and still very much a Friday-night treat. Expect tofu, broccoli, carrot, baby corn, pak choi in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Aubergine in Garlic Sauce', category: 'Vegetarian', price: 8.2, ingredients: 'aubergine, garlic sauce, spring onion', description: 'Silky aubergine soaks up garlicky sauce like an absolute champion. Made with aubergine, garlic sauce, spring onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Mushroom Chow Mein', category: 'Vegetarian', price: 7.9, ingredients: 'egg noodles, mushrooms, beansprouts, onion', description: 'Earthy mushrooms and smoky noodles make a lovely, savoury tangle. Featuring egg noodles, mushrooms, beansprouts, onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Vegetable Chow Mein', category: 'Vegetarian', price: 7.7, ingredients: 'egg noodles, cabbage, carrot, beansprouts, onion', description: 'A cheerful wok-tossed noodle classic with plenty of crunch. Built with egg noodles, cabbage, carrot, beansprouts, onion, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Vegetable Fried Rice', category: 'Vegetarian', price: 7.5, ingredients: 'rice, egg, peas, carrot, spring onion', description: 'A simple favourite that always turns up when comfort is calling. Expect rice, egg, peas, carrot, spring onion in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Broccoli in Oyster-Style Sauce', category: 'Vegetarian', price: 7.8, ingredients: 'broccoli, garlic, savoury vegetarian sauce', description: 'Bright green, glossy and full of gentle savoury depth. Made with broccoli, garlic, savoury vegetarian sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Stir-Fried Pak Choi with Garlic', category: 'Vegetarian', price: 7.6, ingredients: 'pak choi, garlic, soy sauce', description: 'Fresh, fragrant and beautifully clean alongside richer dishes. Featuring pak choi, garlic, soy sauce, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Vegetarian Spring Roll Platter', category: 'Vegetarian', price: 7.4, ingredients: 'spring rolls, seaweed, dip, salad garnish', description: 'Crisp little bites for anyone who likes to graze in style. Built with spring rolls, seaweed, dip, salad garnish, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Egg Fried Rice', category: 'Rice', price: 4.4, ingredients: 'rice, egg, spring onion, peas', description: 'One of the true icons of the UK Chinese order: simple, fluffy and endlessly lovable. Expect rice, egg, spring onion, peas in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: true },
  { name: 'Special Fried Rice', category: 'Rice', price: 8.9, ingredients: 'rice, chicken, pork, prawns, egg, peas', description: 'A proper all-in favourite packed with little treasures in every spoonful. Made with rice, chicken, pork, prawns, egg, peas, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: true },
  { name: 'Yangzhou Fried Rice', category: 'Rice', price: 9.0, ingredients: 'rice, char siu, prawns, egg, peas, spring onion', description: 'Colourful, savoury and famously generous. Featuring rice, char siu, prawns, egg, peas, spring onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Mushroom Fried Rice', category: 'Rice', price: 7.2, ingredients: 'rice, mushrooms, egg, spring onion', description: 'Mellow, savoury and brilliantly versatile with saucy mains. Built with rice, mushrooms, egg, spring onion, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Singapore Fried Rice', category: 'Rice', price: 8.5, ingredients: 'rice, chicken, prawns, curry spices, vegetables', description: 'Bright, golden and lightly spiced for a cheerful lift. Expect rice, chicken, prawns, curry spices, vegetables in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Chicken and Pineapple Fried Rice', category: 'Rice', price: 8.6, ingredients: 'rice, chicken, pineapple, egg, peas', description: 'Sweet little bursts of pineapple keep this rice playful and moreish. Made with rice, chicken, pineapple, egg, peas, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Beef Fried Rice', category: 'Rice', price: 8.7, ingredients: 'rice, beef, egg, peas, spring onion', description: 'Hearty, savoury and built for proper appetite days. Featuring rice, beef, egg, peas, spring onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'King Prawn Fried Rice Deluxe', category: 'Rice', price: 9.8, ingredients: 'rice, king prawns, egg, peas, spring onion', description: 'A deluxe prawn-loaded favourite with plenty of seaside sweetness. Built with rice, king prawns, egg, peas, spring onion, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Steamed Jasmine Rice', category: 'Rice', price: 3.8, ingredients: 'jasmine rice', description: 'Soft, fragrant and perfect for soaking up every last drop of sauce. Expect jasmine rice in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Boiled Rice', category: 'Rice', price: 3.6, ingredients: 'long grain rice', description: 'Plain by design and gloriously useful next to bolder dishes. Made with long grain rice, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Singapore Chow Mein', category: 'Noodles', price: 9.1, ingredients: 'thin noodles, chicken, prawns, curry spices, peppers', description: 'A spicy-tinted takeaway legend with plenty of wok perfume. Featuring thin noodles, chicken, prawns, curry spices, peppers, this one is wok-warm, generous and made for a proper cosy night in.', popular: true },
  { name: 'Special Chow Mein', category: 'Noodles', price: 9.3, ingredients: 'egg noodles, chicken, pork, prawns, vegetables', description: 'The greatest-hits version of chow mein, piled high and full of flavour. Built with egg noodles, chicken, pork, prawns, vegetables, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'House Special Udon', category: 'Noodles', price: 9.5, ingredients: 'udon noodles, chicken, beef, prawns, vegetables', description: 'Thick noodles and a generous mix of proteins make this deeply satisfying. Expect udon noodles, chicken, beef, prawns, vegetables in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Beef Ho Fun', category: 'Noodles', price: 9.4, ingredients: 'flat rice noodles, beef, beansprouts, spring onion', description: 'Slippery, smoky noodles with tender beef and restaurant-style flair. Made with flat rice noodles, beef, beansprouts, spring onion, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'Chicken Ho Fun', category: 'Noodles', price: 9.1, ingredients: 'flat rice noodles, chicken, beansprouts, spring onion', description: 'Wide noodles catch every bit of savoury sauce for maximum comfort. Featuring flat rice noodles, chicken, beansprouts, spring onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Vegetable Singapore Noodles', category: 'Noodles', price: 8.0, ingredients: 'vermicelli, curry spices, mixed vegetables', description: 'Light, springy and full of sunny spice. Built with vermicelli, curry spices, mixed vegetables, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Plain Chow Mein', category: 'Noodles', price: 6.9, ingredients: 'egg noodles, beansprouts, onion', description: 'A minimalist noodle classic that lets the wok flavour shine. Expect egg noodles, beansprouts, onion in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Mushroom Udon', category: 'Noodles', price: 8.3, ingredients: 'udon noodles, mushrooms, soy sauce, greens', description: 'Chewy noodles and earthy mushrooms are a lovely, cosy pairing. Made with udon noodles, mushrooms, soy sauce, greens, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
  { name: 'King Prawn Udon', category: 'Noodles', price: 9.9, ingredients: 'udon noodles, king prawns, pak choi, onion', description: 'Big noodles, juicy prawns and glossy sauce — hard to argue with that. Featuring udon noodles, king prawns, pak choi, onion, this one is wok-warm, generous and made for a proper cosy night in.', popular: false },
  { name: 'Chicken Singapore Vermicelli', category: 'Noodles', price: 8.8, ingredients: 'rice vermicelli, chicken, curry spices, peppers', description: 'Fine noodles and warm spice make this one fast, fragrant and lively. Built with rice vermicelli, chicken, curry spices, peppers, it brings big takeaway comfort and plenty of savoury swagger.', popular: false },
  { name: 'Crispy Noodles with Seafood', category: 'Noodles', price: 10.2, ingredients: 'crispy noodles, seafood medley, savoury sauce', description: 'Crunchy underneath, saucy on top and very satisfying to tuck into. Expect crispy noodles, seafood medley, savoury sauce in a dish that is cheerful, satisfying and brilliantly easy to crave again.', popular: false },
  { name: 'Saucy Noodles with Black Bean Beef', category: 'Noodles', price: 9.6, ingredients: 'egg noodles, beef, green pepper, black bean sauce', description: 'A rich, glossy noodle bowl that tastes like a takeaway classic turned luxurious. Made with egg noodles, beef, green pepper, black bean sauce, it serves up glossy sauce, lovely texture and irresistible Friday-night energy.', popular: false },
] as const;
export const categories: MenuCategory[] = [
  "Starters",
  "Soups",
  "Chicken",
  "Beef",
  "Pork",
  "Duck",
  "Seafood",
  "Vegetarian",
  "Rice",
  "Noodles",
];
export const menu: Dish[] = menuSeeds.map((dish) => ({
  ...dish,
  id: slugify(dish.name),
  image: resolveDishImage({
    ...dish,
    id: slugify(dish.name),
    image: makeDishImage(dish.name, dish.category, dish.popular),
    imageAlt: `${dish.name} illustrated menu artwork`,
  }),
  imageAlt: resolveDishImageAlt({
    ...dish,
    id: slugify(dish.name),
    image: makeDishImage(dish.name, dish.category, dish.popular),
    imageAlt: `${dish.name} illustrated menu artwork`,
  }),
}));
export const popularityReference = "Popular badges are based on recurring UK takeaway favourites widely highlighted in British ordering roundups and menus, including Just Eat's long-running order trends reported by The Independent, plus staple dishes repeatedly featured by UK takeaway menus such as chow mein, sweet and sour chicken, egg fried rice, black bean dishes and crispy chilli beef.";
function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
