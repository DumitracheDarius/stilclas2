import HeroSection from "@/components/home/HeroSection";
import NewCollections from "@/components/home/NewCollections";
import BestSellers from "@/components/home/BestSellers";
import BrandValues from "@/components/home/BrandValues";
import Testimonials from "@/components/home/Testimonials";

import { getCollections, getBestSellingProducts, getBrandValues, getTestimonials } from "@/lib/data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  // Fetch data
  const collections = getCollections().slice(0, 3); // Get first 3 collections for display
  const bestSellers = getBestSellingProducts();
  const brandValues = getBrandValues();
  const testimonials = getTestimonials();
  
  // Set page title and description
  useEffect(() => {
    document.title = `StilClas - ${t('hero_title')}`;
  }, [t, i18n.language]);

  return (
    <>
      <HeroSection />
      <NewCollections collections={collections} />
      <BestSellers products={bestSellers} />
      <BrandValues values={brandValues} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
