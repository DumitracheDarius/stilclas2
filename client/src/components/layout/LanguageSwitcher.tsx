import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  isDarkBackground?: boolean;
}

export default function LanguageSwitcher({ isDarkBackground = true }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'ro' ? 'en' : 'ro';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <Button 
        onClick={toggleLanguage}
        variant="outline" 
        size="sm"
        className={cn(
          "bg-transparent hover:bg-primary/10 border text-sm font-semibold",
          isDarkBackground 
            ? "border-gray-500 text-white hover:text-white" 
            : "border-gray-400 text-black hover:text-black"
        )}
      >
        {currentLang === 'ro' ? 'RO' : 'EN'} 
        <span className={cn(
          "ml-1 text-xs", 
          isDarkBackground ? "text-gray-300" : "text-gray-600"
        )}>
          | {currentLang === 'ro' ? 'EN' : 'RO'}
        </span>
      </Button>
    </motion.div>
  );
}