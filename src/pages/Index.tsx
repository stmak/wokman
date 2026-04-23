import { useMemo, useState } from "react";
import { Crown, Flame, ScrollText, ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/takeaway-hero.jpg";
import { DishCard } from "@/components/DishCard";
import { TakeawayHeader } from "@/components/TakeawayHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTakeaway } from "@/context/TakeawayContext";
import { categories, menu, popularityReference } from "@/data/menu";
import { cn } from "@/lib/utils";

const Index = () => {
  const { unlocked, cart, addToCart, removeFromCart, unlockWithCode, totalItems } = useTakeaway();
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number] | "All">("All");

  const filteredMenu = useMemo(() => {
    if (activeCategory === "All") return menu;
    return menu.filter((dish) => dish.category === activeCategory);
  }, [activeCategory]);

  const handleLockedAdd = () => {
    const code = window.prompt("Enter your VIP code to unlock ordering:", "");
    if (code === null) return;

    if (unlockWithCode(code)) {
      window.alert("VIP unlocked — all Add to cart buttons are now available.");
    } else {
      window.alert("That VIP code is not recognised. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TakeawayHeader />

      <main>
        <section className="border-b border-border/60">
          <div className="container grid gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Golden Wok House • United Kingdom</p>
              <h1 className="max-w-2xl font-display text-5xl leading-tight text-foreground md:text-7xl">
                Classical Chinese takeaway, served with warmth and a proper Friday-night flourish.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                A tasteful, traditional menu of British Chinese takeaway favourites — from chow mein and crispy duck to sweet and sour classics, with 100 dishes ready for the table.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  <ScrollText className="h-4 w-4" />
                  Browse menu
                </Button>
                <Button variant="outline" size="lg" onClick={handleLockedAdd}>
                  <Crown className="h-4 w-4" />
                  Unlock VIP ordering
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="border-border/60 bg-panel shadow-soft">
                  <CardContent className="p-4">
                    <p className="font-display text-3xl text-primary">100</p>
                    <p className="mt-1 text-sm text-muted-foreground">Typical takeaway dishes</p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-panel shadow-soft">
                  <CardContent className="p-4">
                    <p className="font-display text-3xl text-primary">{menu.filter((dish) => dish.popular).length}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Marked popular favourites</p>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-panel shadow-soft">
                  <CardContent className="p-4">
                    <p className="font-display text-3xl text-primary">{totalItems}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Items currently in basket</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-lacquer">
              <img
                src={heroImage}
                alt="Classic Chinese takeaway dishes including chow mein, sweet and sour chicken, duck pancakes and egg fried rice"
                width={1920}
                height={1080}
                className="h-full min-h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-lg rounded-[1.75rem] border border-border/50 bg-card/80 p-5 shadow-lacquer backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">House favourites</p>
                  <p className="mt-3 font-display text-3xl text-foreground">Chow mein, crispy duck, sweet & sour classics and black bean favourites.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-secondary/35 py-8">
          <div className="container grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full border border-primary/30 bg-highlight p-3 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-3xl">VIP ordering gate</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Add to cart stays greyed out until the VIP code is entered. Use <span className="font-medium text-foreground">VIPtest</span> to unlock every dish instantly.
                </p>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-border/60 bg-card/90 p-4 text-sm leading-6 text-muted-foreground shadow-soft">
              <span className="inline-flex items-center gap-2 font-medium text-foreground">
                <Star className="h-4 w-4 text-primary" /> Popular labels
              </span>
              <p className="mt-2">{popularityReference}</p>
            </div>
          </div>
        </section>

        <section id="menu" className="container py-12 md:py-16">
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Menu</p>
              <h2 className="mt-2 font-display text-5xl text-foreground">A full takeaway board of classics</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                Typical UK Chinese takeaway dishes with friendly descriptions, classic pricing in GBP and tasteful illustrated menu cards for each item.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  activeCategory === "All"
                    ? "border-primary/40 bg-highlight text-highlight-foreground shadow-soft"
                    : "border-border/70 bg-panel text-muted-foreground hover:text-foreground",
                )}
              >
                All dishes
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-all",
                    activeCategory === category
                      ? "border-primary/40 bg-highlight text-highlight-foreground shadow-soft"
                      : "border-border/70 bg-panel text-muted-foreground hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredMenu.map((dish) => {
              const quantity = cart.find((item) => item.dishId === dish.id)?.quantity ?? 0;
              return (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  unlocked={unlocked}
                  quantity={quantity}
                  onAdd={() => addToCart(dish.id)}
                  onRemove={() => removeFromCart(dish.id)}
                  onLockedAdd={handleLockedAdd}
                />
              );
            })}
          </div>
        </section>

        <section className="border-t border-border/60 bg-secondary/30 py-12">
          <div className="container grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Flame,
                title: "Tasteful classics",
                text: "Traditional red, lacquered tones, warm gold accents and a menu shaped for a proper neighbourhood takeaway.",
              },
              {
                icon: Crown,
                title: "VIP unlock",
                text: "A simple VIP prompt keeps ordering gated until the right code is entered, just as requested.",
              },
              {
                icon: ShieldCheck,
                title: "Static-site ready",
                text: "Built entirely in the frontend with static routing so it is ready for GitHub Pages hosting.",
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-border/60 bg-card/90 shadow-soft">
                <CardContent className="p-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <p className="mt-4 font-display text-3xl">{feature.title}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
