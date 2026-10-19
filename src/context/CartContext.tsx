import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data/products";
import { siteConfig } from "../data/config";

export interface CartItem {
  id: string; // unique cart line id, e.g. "prod-variant"
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface Currency {
  code: string;
  symbol: string;
  rateToSAR: number;
  name: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: string) => void;
  removeFromCart: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  subtotalSAR: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  selectedCurrency: Currency;
  setSelectedCurrency: (curr: Currency) => void;
  formatPrice: (amountSAR: number) => string;
}

const CART_STORAGE_KEY = "maison_blush_cart_v1";
const CURRENCY_STORAGE_KEY = "maison_blush_currency_v1";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(() => {
    try {
      const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const match = siteConfig.supportedCurrencies.find((c) => c.code === parsed.code);
        if (match) return match;
      }
    } catch {
      // ignore
    }
    return siteConfig.supportedCurrencies[0];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, JSON.stringify(selectedCurrency));
    } catch (e) {
      console.warn("Could not save currency to localStorage", e);
    }
  }, [selectedCurrency]);

  const addToCart = (product: Product, quantity = 1, variant?: string) => {
    const lineId = variant ? `${product.id}-${variant}` : product.id;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === lineId);
      if (existing) {
        return prev.map((item) =>
          item.id === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: lineId, product, quantity, selectedVariant: variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (lineId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== lineId));
  };

  const updateQuantity = (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(lineId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === lineId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const subtotalSAR = cart.reduce(
    (total, item) => total + item.product.priceSAR * item.quantity,
    0
  );

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const formatPrice = (amountSAR: number): string => {
    const converted = amountSAR * selectedCurrency.rateToSAR;
    if (selectedCurrency.code === "SAR" || selectedCurrency.code === "AED") {
      return `${selectedCurrency.code} ${Math.round(converted).toLocaleString()}`;
    }
    return `${selectedCurrency.symbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotalSAR,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        selectedCurrency,
        setSelectedCurrency,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
