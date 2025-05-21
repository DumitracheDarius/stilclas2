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
        className="bg-transparent hover:bg-primary/10 border border-gray-300 dark:border-gray-700 text-sm font-medium"
      >
        {currentLang === 'ro' ? 'RO' : 'EN'} 
        <span className="ml-1 text-xs opacity-50">
          | {currentLang === 'ro' ? 'EN' : 'RO'}
        </span>
      </Button>
    </motion.div>
  );
}