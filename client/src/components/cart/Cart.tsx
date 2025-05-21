import { useState, useEffect } from "react";
import { ShoppingBag, X, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { ReservationForm } from "./ReservationForm";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);
  
  // Load cart items from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('stilclas-cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }
    
    // Listen for storage changes
    const handleStorageChange = () => {
      try {
        const savedCart = localStorage.getItem('stilclas-cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  // Calculate total
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('stilclas-cart', JSON.stringify(updatedCart));
    }
    
    // Trigger storage event for other components to update
    window.dispatchEvent(new Event('storage'));
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('stilclas-cart', JSON.stringify([]));
    }
    
    // Trigger storage event for other components to update
    window.dispatchEvent(new Event('storage'));
  };
  
  // Open reservation form
  const openReservationForm = () => {
    setIsReservationFormOpen(true);
  };
  
  // Close reservation form
  const closeReservationForm = () => {
    setIsReservationFormOpen(false);
  };
  
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-md" side="right">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <ShoppingBag size={20} />
              <span>{t('your_cart')}</span>
            </SheetTitle>
            <SheetDescription>
              {cartItems.length === 0
                ? t('empty_cart_message')
                : t('cart_item_count', { count: cartItems.length })}
            </SheetDescription>
          </SheetHeader>
          
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh]">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-500 text-center">{t('empty_cart_description')}</p>
              <SheetClose asChild>
                <Button className="mt-6 bg-burgundy hover:bg-burgundy/90">
                  {t('continue_shopping')}
                </Button>
              </SheetClose>
            </div>
          ) : (
            <>
              <div className="flex flex-col space-y-4 my-6 max-h-[60vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-start border-b border-gray-200 pb-4"
                  >
                    <div className="flex space-x-3">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-500">
                          {item.category}
                        </span>
                        <span className="font-bold text-burgundy mt-1">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-gray-500 hover:text-burgundy"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X size={18} />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">{t('subtotal')}</span>
                  <span className="font-bold">{formatPrice(totalPrice)}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center w-full justify-center hover:text-burgundy"
                  onClick={clearCart}
                >
                  <Trash2 size={16} className="mr-2" />
                  {t('clear_cart')}
                </Button>
                
                <Dialog open={isReservationFormOpen} onOpenChange={setIsReservationFormOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className={cn(
                        "w-full bg-burgundy hover:bg-burgundy/90",
                        cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                      )}
                      disabled={cartItems.length === 0}
                      onClick={() => {
                        if (cartItems.length > 0) {
                          openReservationForm();
                        }
                      }}
                    >
                      {t('proceed_to_reservation')}
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
      
      {/* Reservation Form */}
      <ReservationForm 
        isOpen={isReservationFormOpen}
        onClose={closeReservationForm}
        cartItems={cartItems}
        clearCart={clearCart}
      />
    </>
  );
}