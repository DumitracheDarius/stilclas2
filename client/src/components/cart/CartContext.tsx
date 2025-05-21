import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/lib/types";

// Define the shape of our cart context
interface CartContextType {
  isCartOpen: boolean;
  cartItems: Product[];
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getCartItemsCount: () => number;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props for the CartProvider component
interface CartProviderProps {
  children: ReactNode;
}

// Cart provider component
export function CartProvider({ children }: CartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  
  // Load cart from localStorage on initial mount
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem('stilclas-cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };
    
    loadCart();
    
    // Handle storage events from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'stilclas-cart') {
        loadCart();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab updates
    const handleCustomEvent = () => loadCart();
    window.addEventListener('stilclas-cart-update', handleCustomEvent);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('stilclas-cart-update', handleCustomEvent);
    };
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('stilclas-cart', JSON.stringify(cartItems));
    
    // Dispatch a custom event for other components in the same tab
    window.dispatchEvent(new Event('stilclas-cart-update'));
  }, [cartItems]);
  
  // Cart operations
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);
  
  const addToCart = (product: Product) => {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (!existingItem) {
      // Add new product to cart
      setCartItems(prev => [...prev, product]);
    }
  };
  
  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartItemsCount = () => {
    return cartItems.length;
  };
  
  // Context value
  const value: CartContextType = {
    isCartOpen,
    cartItems,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartItemsCount,
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}