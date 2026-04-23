import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { bundleMeals } from "@/data/bundles";
import { menu } from "@/data/menu";

type CartItem = {
  dishId: string;
  quantity: number;
};

type TakeawayContextValue = {
  unlocked: boolean;
  cart: CartItem[];
  unlockWithCode: (code: string) => boolean;
  addToCart: (dishId: string) => void;
  removeFromCart: (dishId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const STORAGE_KEY = "golden-wok-takeaway-state";
export const VIP_ACCESS_CODE = "VIPtest";

const TakeawayContext = createContext<TakeawayContextValue | null>(null);

export const TakeawayProvider = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as { unlocked?: boolean; cart?: CartItem[] };
      setUnlocked(Boolean(parsed.unlocked));
      setCart(Array.isArray(parsed.cart) ? parsed.cart : []);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ unlocked, cart }));
  }, [unlocked, cart]);

  const value = useMemo(() => {
    const addToCart = (dishId: string) => {
      setCart((current) => {
        const existing = current.find((item) => item.dishId === dishId);
        if (existing) {
          return current.map((item) =>
            item.dishId === dishId ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }
        return [...current, { dishId, quantity: 1 }];
      });
    };

    const removeFromCart = (dishId: string) => {
      setCart((current) =>
        current
          .map((item) =>
            item.dishId === dishId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item,
          )
          .filter((item) => item.quantity > 0),
      );
    };

    const clearCart = () => setCart([]);

    const unlockWithCode = (code: string) => {
      const success = code.trim() === VIP_ACCESS_CODE;
      if (success) setUnlocked(true);
      return success;
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => {
      const dish = [...menu, ...bundleMeals].find((entry) => entry.id === item.dishId);
      return sum + (dish?.price ?? 0) * item.quantity;
    }, 0);

    return {
      unlocked,
      cart,
      unlockWithCode,
      addToCart,
      removeFromCart,
      clearCart,
      totalItems,
      totalPrice,
    };
  }, [cart, unlocked]);

  return <TakeawayContext.Provider value={value}>{children}</TakeawayContext.Provider>;
};

export const useTakeaway = () => {
  const context = useContext(TakeawayContext);
  if (!context) {
    throw new Error("useTakeaway must be used within TakeawayProvider");
  }
  return context;
};
