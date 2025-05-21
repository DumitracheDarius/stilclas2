import { cn } from "@/lib/utils";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import { Testimonial } from "@/lib/types";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function Testimonials({ testimonials, className }: TestimonialsProps) {
  const { t } = useTranslation();
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={cn(
          "h-5 w-5",
          index < rating ? "fill-burgundy text-burgundy" : "text-gray-300"
        )} 
      />
    ));
  };

  return (
    <section className={cn(
      sectionContainerVariants({ variant: "dark" }),
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3 text-white">{t('testimonials')}</h2>
          <div className={dividerVariants()}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="glass-card rounded-md p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex text-burgundy mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-800 mb-6 italic font-lato">
                "{t(`testimonial${index+1}_quote`)}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-400 mr-4 overflow-hidden">
                  {testimonial.avatarUrl && (
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-black font-medium">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
