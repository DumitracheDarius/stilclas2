import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/lib/types";
import { ReservationForm } from "./ReservationForm";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { t, i18n } = useTranslation();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  
  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("stilclas-cart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        setCartItems([]);
      }
    }
  }, []);
  
  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("stilclas-cart", JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);
  
  // Remove item from cart
  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Clear cart 
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Open reservation modal
  const handleReserveInStore = () => {
    setReservationModalOpen(true);
  };
  
  // No items in cart view
  if (cartItems.length === 0) {
    return (
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-playfair">{t("shopping_cart")}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-lg font-medium mb-2">{t("empty_cart")}</p>
            <p className="text-gray-500 mb-6">{t("empty_cart_message")}</p>
            <Button 
              className="bg-burgundy text-white hover:bg-burgundy/90"
              onClick={onClose}
            >
              {t("continue_shopping")}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-playfair">{t("shopping_cart")}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-4">
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center p-4 border-b"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="ml-4 flex-grow">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-burgundy font-medium mt-1">{formatPrice(item.price)}</p>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="flex-shrink-0 text-gray-400 hover:text-burgundy"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">{t("total")}</span>
              <span className="font-semibold text-burgundy">{formatPrice(totalPrice)}</span>
            </div>
            
            <Button 
              className="w-full py-6 bg-burgundy hover:bg-burgundy/90 text-white"
              onClick={handleReserveInStore}
            >
              {t("reserve_in_store")}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Reservation Form Modal */}
      <ReservationForm
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        cartItems={cartItems}
        clearCart={clearCart}
      />
    </>
  );
}