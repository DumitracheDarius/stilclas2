import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ProductGalleryProps {
  mainImage: string;
  gallery?: string[];
  productName: string;
}

export default function ProductGallery({ mainImage, gallery = [], productName }: ProductGalleryProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Combine main image with gallery images
  const allImages = [mainImage, ...gallery];
  const currentImage = allImages[activeIndex];
  
  // Navigation functions
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };
  
  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <div>
      {/* Main Image */}
      <div className="relative">
        <motion.div 
          className="mb-4 overflow-hidden rounded-md shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          key={`active-image-${activeIndex}`}
        >
          <img 
            src={currentImage} 
            alt={`${productName} - Image ${activeIndex + 1}`} 
            className="w-full h-[400px] object-cover transition-all duration-300"
          />
        </motion.div>
        
        {/* Navigation Arrows - Only show if more than one image */}
        {allImages.length > 1 && (
          <>
            <button 
              type="button"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
              onClick={goToNext}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnail Gallery - Only show if more than one image */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {allImages.map((image, index) => (
            <button 
              key={`thumbnail-${index}`}
              type="button"
              className={cn(
                "cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 transform hover:scale-105 focus:outline-none",
                activeIndex === index ? "border-burgundy shadow-md" : "border-transparent hover:border-gray-300"
              )}
              onClick={() => handleThumbnailClick(index)}
              title={index === 0 ? t('main_image') : `${t('view')} ${index}`}
            >
              <img 
                src={image} 
                alt={`${productName} ${t('thumbnail')} ${index + 1}`} 
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}