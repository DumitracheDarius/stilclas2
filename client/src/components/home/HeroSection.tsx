import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className={cn("relative h-screen bg-black flex items-center", className)}
    >
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover opacity-70"
          style={{
            backgroundImage: "url('/assets/category-blazers.jpg')",
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
            {t("hero_title")}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-lato font-light mb-8">
            {t("hero_subtitle")}
          </p>
          <Button
            asChild
            variant="default"
            size="lg"
            className="transform hover:-translate-y-1 text-lg px-12 py-6 font-semibold"
          >
            <Link href="/collections">{t("explore_collection")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
