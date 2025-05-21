import { useTranslation } from "react-i18next";
import { getCategories } from "@/lib/data";
import { Subcategory, Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Categories() {
  const { t } = useTranslation();
  const categories = getCategories();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const renderSubcategory = (subcategory: Subcategory, index: number) => (
    <motion.div 
      key={subcategory.id}
      variants={itemVariants}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={subcategory.imageUrl} 
          alt={t(subcategory.name)} 
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-playfair font-medium mb-2">{t(subcategory.name)}</h3>
        {subcategory.description && (
          <p className="text-sm text-gray-100 font-lato">{t(subcategory.description)}</p>
        )}
      </div>
    </motion.div>
  );

  const renderCategory = (category: Category, index: number) => (
    <motion.div 
      key={category.id} 
      variants={itemVariants}
      className="mb-16"
    >
      <h2 className="text-3xl font-playfair font-semibold mb-2 text-gray-900 after:content-[''] after:block after:w-24 after:h-1 after:bg-burgundy after:mt-2">{t(category.name)}</h2>
      
      {/* If the category has subcategories */}
      {category.subcategories && category.subcategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {category.subcategories.map(renderSubcategory)}
        </div>
      ) : (
        /* For categories without subcategories */
        <div className="mt-8">
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl max-w-md mx-auto">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={category.imageUrl} 
                alt={t(category.name)} 
                className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-2xl font-playfair font-medium mb-2">{t(category.name)}</h3>
              {category.description && (
                <p className="text-sm text-gray-100 font-lato">{t(category.description)}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            {t('collections')}
          </h1>
          <div className="w-24 h-1 bg-burgundy mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            {t('discover_our_exquisite_collections')}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map(renderCategory)}
        </motion.div>
      </div>
    </div>
  );
}