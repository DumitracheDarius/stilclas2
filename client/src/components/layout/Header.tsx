import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "collections", path: "/collections" },
  { key: "shop", path: "/shop" },
  { key: "contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [location] = useLocation();
  const { t } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  
  // Get cart items count from localStorage
  useEffect(() => {
    const getCartCount = () => {
      try {
        const cartItems = localStorage.getItem('stilclas-cart');
        if (!cartItems) return 0;
        return JSON.parse(cartItems).length;
      } catch (error) {
        console.error("Error getting cart count:", error);
        return 0;
      }
    };
    
    // Initial count
    setCartCount(getCartCount());
    
    // Listen for storage changes
    const handleStorageChange = () => {
      setCartCount(getCartCount());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // This is needed for updates within the same tab
    const interval = setInterval(() => {
      setCartCount(getCartCount());
    }, 2000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Change navbar background and text color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check the background color behind the navbar
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const elementBehind = document.elementFromPoint(
          headerRect.left + headerRect.width / 2,
          headerRect.top + headerRect.height + 1
        );
        
        if (elementBehind) {
          const bgColor = window.getComputedStyle(elementBehind).backgroundColor;
          const rgba = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/);
          
          if (rgba) {
            const [, r, g, b] = rgba.map(Number);
            // Use relative luminance to determine if the background is dark
            // Formula: 0.299*R + 0.587*G + 0.114*B
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsDarkBackground(luminance < 0.5);
          } else {
            // Default to dark background if unable to determine
            setIsDarkBackground(true);
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Run once on initial load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle cart click
  const handleCartClick = () => {
    // For now, we'll just alert that this will open the cart modal
    // In the final version, this would toggle the cart visibility
    alert(t('cart_reservation_coming_soon'));
  };

  return (
    <header 
      ref={headerRef}
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-10 rounded px-2 py-1">
          <img 
            src="/assets/logoStilClas.png" 
            alt="StilClas Logo" 
            className="h-14 md:h-16"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                "font-lato font-semibold tracking-wide transition-luxury",
                location === link.path 
                  ? "text-burgundy" 
                  : isScrolled || isDarkBackground
                    ? "text-white hover:text-burgundy" 
                    : "text-black hover:text-burgundy"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <LanguageSwitcher isDarkBackground={isScrolled || isDarkBackground} />
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Search"
            className={isScrolled || isDarkBackground ? "text-white hover:text-burgundy" : "text-black hover:text-burgundy"}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost"
            size="icon"
            aria-label="Shopping Cart"
            onClick={handleCartClick}
            className={cn(
              "relative",
              isScrolled || isDarkBackground ? "text-white hover:text-burgundy" : "text-black hover:text-burgundy"
            )}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className={cn(
            "lg:hidden z-20",
            isScrolled || isDarkBackground ? "text-white hover:text-burgundy" : "text-black hover:text-burgundy"
          )}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-black bg-opacity-95 z-10 transform lg:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={cn(
                    "text-white text-xl font-semibold transition-luxury",
                    location === link.path ? "text-burgundy" : "hover:text-burgundy"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              
              <div className="flex items-center space-x-6 mt-8">
                <LanguageSwitcher isDarkBackground={true} />
                <Button variant="ghost" size="icon" aria-label="Search" className="text-white hover:text-burgundy">
                  <Search className="h-6 w-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Shopping Cart" 
                  className="relative text-white hover:text-burgundy"
                  onClick={handleCartClick}
                >
                  <ShoppingBag className="h-6 w-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}