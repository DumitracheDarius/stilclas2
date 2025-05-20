import HeroSection from "@/components/home/HeroSection";
import NewCollections from "@/components/home/NewCollections";
import BestSellers from "@/components/home/BestSellers";
import BrandValues from "@/components/home/BrandValues";
import Testimonials from "@/components/home/Testimonials";

import { getCollections, getBestSellingProducts, getBrandValues, getTestimonials } from "@/lib/data";
import { useEffect } from "react";

export default function Home() {
  // Fetch data
  const collections = getCollections().slice(0, 3); // Get first 3 collections for display
  const bestSellers = getBestSellingProducts();
  const brandValues = getBrandValues();
  const testimonials = getTestimonials();
  
  // Set page title and description
  useEffect(() => {
    document.title = "StilClas - Elegance Redefined for the Modern Gentleman";
  }, []);

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
