import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

interface CartButtonProps {
  onClick: () => void;
  className?: string;
  itemCount?: number;
}

export function CartButton({ onClick, className, itemCount = 0 }: CartButtonProps) {
  const { t } = useTranslation();
  const [animateCount, setAnimateCount] = useState(false);
  const [previousCount, setPreviousCount] = useState(itemCount);
  
  // Animate count when it changes
  useEffect(() => {
    if (itemCount > previousCount) {
      setAnimateCount(true);
      const timeout = setTimeout(() => setAnimateCount(false), 300);
      return () => clearTimeout(timeout);
    }
    setPreviousCount(itemCount);
  }, [itemCount, previousCount]);
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={onClick}
      aria-label={t('open_cart')}
      className={className}
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <AnimatePresence>
          <motion.span 
            className={`absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${animateCount ? 'animate-bounce' : ''}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {itemCount}
          </motion.span>
        </AnimatePresence>
      )}
    </Button>
  );
}