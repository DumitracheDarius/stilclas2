import { cn } from "@/lib/utils";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import { BrandValue } from "@/lib/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Import Lucide React icons
import { Wrench, Sparkles, LayoutGrid, Leaf } from "lucide-react";

interface BrandValuesProps {
  values: BrandValue[];
  className?: string;
}

export default function BrandValues({ values, className }: BrandValuesProps) {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Function to render appropriate icon based on iconName
  const renderIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case 'tool':
        return <Wrench className="text-4xl text-burgundy" />;
      case 'sparkles':
        return <Sparkles className="text-4xl text-burgundy" />;
      case 'layout':
        return <LayoutGrid className="text-4xl text-burgundy" />;
      case 'leaf':
        return <Leaf className="text-4xl text-burgundy" />;
      default:
        return <div className="w-8 h-8 bg-burgundy rounded-full"></div>;
    }
  };

  return (
    <section className={cn(
      sectionContainerVariants({ variant: "white" }),
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">{t('brand_values')}</h2>
          <div className={dividerVariants()}></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={value.id} 
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
                <img 
                  src={`/assets/value${index + 1}.jpg`} 
                  alt={t(value.title.toLowerCase())}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-3">{t(value.title.toLowerCase())}</h3>
              <p className="text-gray-800 font-lato">
                {t(value.title.toLowerCase() + '_desc')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
