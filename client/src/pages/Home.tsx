import HeroSection from "@/components/home/HeroSection";
import NewCollections from "@/components/home/NewCollections";
import BestSellers from "@/components/home/BestSellers";
import BrandValues from "@/components/home/BrandValues";
import GoogleReviews from "@/components/home/GoogleReviews";
import LocationSection from "@/components/home/LocationSection";

import { getCollections, getBestSellingProducts, getBrandValues } from "@/lib/data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  // Fetch data
  const collections = getCollections().slice(0, 3); // Get first 3 collections for display
  const bestSellers = getBestSellingProducts();
  const brandValues = getBrandValues();
  
  // Set page title and description
  useEffect(() => {
    document.title = `StilClas - ${t('hero_title')}`;
  }, [t, i18n.language]);

  return (
    <>
      <HeroSection />
      <LocationSection />
      <NewCollections collections={collections} />
      <BestSellers products={bestSellers} />
      <BrandValues values={brandValues} />
      <GoogleReviews />
    </>
  );
}