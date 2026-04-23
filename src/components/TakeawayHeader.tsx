import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTakeaway } from "@/context/TakeawayContext";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Checkout", to: "/checkout" },
];

export const TakeawayHeader = () => {
  const { totalItems, unlocked } = useTakeaway();
  const navigate = useNavigate();
  const location = useLocation();

  const goToMenu = () => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return;
    }

    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-panel shadow-lacquer">
            <span className="font-display text-lg text-primary">福</span>
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl text-foreground">Golden Wok House</p>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Classical Chinese takeaway</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "inline-flex h-11 items-center rounded-full px-4 text-sm transition-all",
                  isActive ? "bg-secondary text-secondary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={goToMenu}
            className="inline-flex h-11 items-center rounded-full px-4 text-sm text-muted-foreground transition-all hover:text-foreground"
          >
            Menu
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 text-sm text-muted-foreground lg:flex">
            <Sparkles className={cn("h-4 w-4", unlocked ? "text-primary" : "text-muted-foreground")} />
            {unlocked ? "VIP access unlocked" : "VIP code required"}
          </div>
          <Button asChild variant="hero" size="lg" className="px-5">
            <Link to="/checkout">
              <ShoppingBag className="h-4 w-4" />
              Cart {totalItems > 0 ? `(${totalItems})` : ""}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
