import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Collections", path: "/collections" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
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

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-10 bg-white/30 backdrop-blur-sm rounded px-2 py-1">
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
                "text-white font-lato font-light tracking-wide transition-luxury",
                location === link.path ? "text-burgundy" : "hover:text-burgundy"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping Bag" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className="lg:hidden z-20" 
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
                    "text-white text-xl transition-luxury",
                    location === link.path ? "text-burgundy" : "hover:text-burgundy"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-6 mt-8">
                <Button variant="ghost" size="icon" aria-label="Search">
                  <Search className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Shopping Bag" className="relative">
                  <ShoppingBag className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
