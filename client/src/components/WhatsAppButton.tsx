import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "0752078888";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Show tooltip after a delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      // Hide tooltip after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {(showTooltip || isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full right-0 mb-3 p-3 bg-white text-gray-800 rounded-xl shadow-xl text-sm whitespace-nowrap font-medium"
            style={{ 
              minWidth: "200px", 
              textAlign: "center",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <span className="font-semibold">
              {i18n.language === "ro"
                ? "Hai să vorbim pe WhatsApp!"
                : "Let's talk on WhatsApp!"}
            </span>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button with animation effects */}
      <div className="relative">
        {/* Subtle pulse effect for attention */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-pulse" 
             style={{ animationDuration: "3s" }}></div>
        
        {/* Main button with gradient and shadow */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg border border-white/30"
          style={{
            boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 25px -5px rgba(37, 211, 102, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
          }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Contact us on WhatsApp"
        >
          {/* WhatsApp logo with better centering and sizing */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 175.216 175.552" 
            className="w-9 h-9 fill-white" 
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}
          >
            <path d="M89.4,0.5C41.4,0.5,2.5,39.5,2.5,87.4c0,14.7,3.7,28.6,10.3,40.8l-11.1,40c-0.5,1.9,0.2,4,1.8,5.3c1.1,0.9,2.5,1.4,3.8,1.4 c0.6,0,1.2-0.1,1.8-0.3l41.8-14.5c12.6,6.9,27.1,10.9,42.6,10.9c48,0,87-39,87-86.9S137.4,0.5,89.4,0.5z M144.8,124.8 c-2.2,6.1-8.9,11.6-14.8,13c-3.9,0.9-9,1.7-26.2-5.6c-22-9.3-36.4-32.1-37.4-33.5c-1-1.5-8.1-10.8-8.1-20.7 c0-9.8,5.2-14.7,7-16.7c1.9-2,4-2.5,5.4-2.5c1.3,0,2.6,0,3.8,0.1c1.2,0.1,2.8-0.5,4.4,3.4c1.6,3.9,5.5,13.7,6,14.7 c0.5,1,0.8,2.1,0.1,3.4c-0.7,1.3-1,2.1-2,3.3c-1,1.2-2,2.6-2.9,3.5c-1,1-2,2-0.9,4c1.1,2,5.1,8.4,10.9,13.6 c7.5,6.7,13.7,8.8,15.7,9.8c2,1,3.1,0.8,4.3-0.5c1.2-1.3,5-5.8,6.4-7.8c1.3-2,2.7-1.7,4.6-1c1.9,0.7,12,5.7,14.1,6.7 c2.1,1,3.4,1.5,3.9,2.3C147.3,113.9,147,118.7,144.8,124.8z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}