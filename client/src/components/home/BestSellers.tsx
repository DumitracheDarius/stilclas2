import { useState, useEffect, useRef } from "react";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import { Product } from "@/lib/types";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";
import { toast } from "@/hooks/use-toast";

interface BestSellersProps {
  products: Product[];
  className?: string;
}

export default function BestSellers({ products, className }: BestSellersProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Calculate number of items per page based on screen size
  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 items
      if (window.innerWidth >= 768) return 2; // Tablet: 2 items
      return 1; // Mobile: 1 item
    };
    
    const calculateTotalPages = () => {
      const itemsPerPage = calculateItemsPerPage();
      return Math.ceil(products.length / itemsPerPage);
    };
    
    const handleResize = () => {
      setTotalPages(calculateTotalPages());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [products.length]);
  
  // Navigate carousel
  const goToPage = (index: number) => {
    // Calculate index bounds to prevent out of range
    const boundedIndex = Math.max(0, Math.min(index, totalPages - 1));
    setCurrentIndex(boundedIndex);
    
    // Update carousel position
    if (carouselRef.current) {
      const translateValue = -boundedIndex * 100;
      carouselRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  };
  
  const nextPage = () => goToPage(currentIndex + 1);
  const prevPage = () => goToPage(currentIndex - 1);

  // Render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-burgundy text-burgundy" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-burgundy text-burgundy" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-burgundy stroke-burgundy fill-transparent" />);
    }
    
    return stars;
  };

  return (
    <section className={cn(
      sectionContainerVariants({ variant: "gray" }),
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">{t('best_sellers')}</h2>
          <div className={dividerVariants()}></div>
        </div>
        
        <div className="relative">
          {/* Carousel Controls */}
          <Button 
            variant="default" 
            size="icon" 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 text-black hover:bg-burgundy hover:text-white rounded-full"
            onClick={prevPage}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="default" 
            size="icon" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 text-black hover:bg-burgundy hover:text-white rounded-full"
            onClick={nextPage}
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
                  <div className="bg-white rounded-md shadow-md overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-80 object-cover product-image"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                        <Button 
                          variant="default"
                          className="transform -translate-y-4 group-hover:translate-y-0 transition-luxury"
                          onClick={() => window.location.href = `/product/${product.id}`}
                        >
                          {t('quick_view')}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl mb-2">{product.name}</h3>
                      <p className="text-burgundy font-medium mb-3">{formatPrice(product.price)}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex text-burgundy">
                          {renderStars(product.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-800">{product.reviewCount} {t('reviews')}</span>
                      </div>
                      <Button
                        variant="default"
                        className="w-full py-3 bg-gray-900 hover:bg-burgundy"
                        onClick={() => {
                          try {
                            // Prepare cart item
                            const cartItem = {
                              ...product,
                              quantity: 1
                            };
                            
                            // Get existing cart
                            const existingCart = localStorage.getItem('stilclas-cart');
                            let cart = existingCart ? JSON.parse(existingCart) : [];
                            
                            // Check if product already exists in cart
                            const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
                            
                            if (existingItemIndex >= 0) {
                              // Update quantity if item exists
                              cart[existingItemIndex].quantity += 1;
                            } else {
                              // Add new item to cart
                              cart.push(cartItem);
                            }
                            
                            // Save cart to localStorage
                            localStorage.setItem('stilclas-cart', JSON.stringify(cart));
                            
                            // Show success message
                            toast({
                              title: t('success'),
                              description: t('product_added_to_cart'),
                              variant: "default",
                            });
                            
                            // Trigger storage event for cart counter update
                            window.dispatchEvent(new Event('storage'));
                          } catch (error) {
                            console.error("Error adding to cart:", error);
                            toast({
                              title: t('cart_error'),
                              description: t('error_adding_to_cart'),
                              variant: "destructive",
                            });
                          }
                        }}
                      >
                        {t('add_to_cart')}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-8 rounded-full transition-luxury",
                  index === currentIndex ? "bg-burgundy" : "bg-gray-300 hover:bg-burgundy"
                )}
                onClick={() => goToPage(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
