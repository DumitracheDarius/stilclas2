import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookies-accepted') === 'true';
    
    if (!hasAcceptedCookies) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 pr-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-1">{t('cookie_notice')}</h3>
          <p className="text-sm text-gray-300">{t('cookie_description')}</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            className="border-white text-white hover:bg-white hover:text-black"
            onClick={acceptCookies}
          >
            {t('accept_cookies')}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}