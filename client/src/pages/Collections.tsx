import { useEffect, useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import { Category } from "@/lib/types";
import { getLegacyCategories } from "@/lib/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Collections() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { t } = useTranslation();
  
  // Set page title and description
  useEffect(() => {
    document.title = `${t('collections')} - StilClas`;
    setCategories(getLegacyCategories());
  }, [t]);

  return (
    <>
      {/* Collections Hero */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">{t('collections')}</h1>
            <div className={dividerVariants()}></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto font-lato">
              {t('discover_our_exquisite_collections')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Overview */}
      <section className={sectionContainerVariants({ variant: "gray" })}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {categories.slice(0, 2).map((category, index) => (
              <motion.div 
                key={category.id} 
                className="relative overflow-hidden rounded-md shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-96 object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-playfair mb-2">{category.name}</h3>
                  <p className="text-white text-sm md:text-base mb-4 max-w-md font-lato">
                    {category.description}
                  </p>
                  <Button 
                    asChild 
                    variant="default"
                    className="w-auto self-start"
                  >
                    <Link href={`/shop?category=${category.id}`}>
                      Explore Collection
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.slice(2, 4).map((category, index) => (
              <motion.div 
                key={category.id} 
                className="relative overflow-hidden rounded-md shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-96 object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-playfair mb-2">{category.name}</h3>
                  <p className="text-white text-sm md:text-base mb-4 max-w-md font-lato">
                    {category.description}
                  </p>
                  <Button 
                    asChild 
                    variant="default"
                    className="w-auto self-start"
                  >
                    <Link href={`/shop?category=${category.id}`}>
                      Explore Collection
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className={sectionContainerVariants({ variant: "white" })}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">Our Process</h2>
            <div className={dividerVariants()}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center text-white text-2xl font-playfair mx-auto">
                  1
                </div>
                <div className="absolute top-1/2 left-[calc(50%+2rem)] w-full h-0.5 bg-gray-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-playfair font-medium mb-3">Material Selection</h3>
              <p className="text-gray-800 font-lato">
                We source only the finest fabrics from renowned mills in Italy, England and Scotland to ensure exceptional quality in every garment.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center text-white text-2xl font-playfair mx-auto">
                  2
                </div>
                <div className="absolute top-1/2 left-[calc(50%+2rem)] w-full h-0.5 bg-gray-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-playfair font-medium mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-800 font-lato">
                Our master tailors with decades of experience utilize traditional techniques to create garments of exceptional fit and finish.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center text-white text-2xl font-playfair mx-auto">
                  3
                </div>
              </div>
              <h3 className="text-xl font-playfair font-medium mb-3">Meticulous Finishing</h3>
              <p className="text-gray-800 font-lato">
                Each garment undergoes rigorous quality control to ensure that every detail, from stitching to buttons, meets our exacting standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-white">Ready to Experience StilClas?</h2>
              <p className="text-gray-300 mb-8 font-lato">
                Browse our complete collection and discover the perfect addition to your wardrobe.
              </p>
              <Button 
                asChild 
                variant="default"
                size="lg"
                className="transform hover:-translate-y-1"
              >
                <Link href="/shop">
                  Shop Now
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
