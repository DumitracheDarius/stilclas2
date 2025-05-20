import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn(
      "relative h-screen bg-black flex items-center",
      className
    )}>
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight mb-6">
            Elegance Redefined for the Modern Gentleman
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-lato font-light mb-8">
            Premium suits and menswear crafted with precision and passion
          </p>
          <Button
            asChild
            variant="default"
            size="xl"
            className="transform hover:-translate-y-1"
          >
            <Link href="/collections">
              Explore Collection
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
