import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import { getProducts, getCategories } from "@/lib/data";
import { Product, Category } from "@/lib/types";
import { Heart, Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [, setLocation] = useLocation();
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortOption, setSortOption] = useState<string>("newest");
  
  // Get query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const categoryParam = queryParams.get("category");
  
  // Set page title and description
  useEffect(() => {
    document.title = "Shop - StilClas";
    
    // Fetch data
    const allProducts = getProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    setCategories(getCategories());
    
    // Set initial category from URL if available
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  // Apply filters when filter state changes
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.categoryId === selectedCategory);
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortOption, products]);

  // Render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-burgundy text-burgundy" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-burgundy text-burgundy" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-burgundy stroke-burgundy fill-transparent" />);
    }
    
    return stars;
  };

  return (
    <>
      {/* Shop Hero */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">Shop</h1>
            <div className={dividerVariants()}></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto font-lato">
              Browse our complete collection of premium suits and menswear, crafted for the modern gentleman.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Content */}
      <section className={sectionContainerVariants({ variant: "white" })}>
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant={selectedCategory === "" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("")}
                >
                  All Products
                </Button>
                {categories.map(category => (
                  <Button 
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              
              <div className="w-full md:w-48">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div className="bg-gray-50 p-4 rounded-md mb-8">
              <h3 className="font-medium mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 2000]}
                max={2000}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id} 
                  className="product-card group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div 
                    className="relative overflow-hidden rounded-md shadow-md mb-4 cursor-pointer"
                    onClick={() => setLocation(`/product/${product.id}`)}
                  >
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-80 object-cover product-image"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                      <Button variant="default" className="transform -translate-y-4 group-hover:translate-y-0 transition-luxury">
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <h3 
                    className="text-lg font-playfair font-medium mb-1 cursor-pointer hover:text-burgundy transition-luxury"
                    onClick={() => setLocation(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-burgundy font-medium mb-3">${product.price.toFixed(2)}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex text-burgundy text-sm">
                        {renderStars(product.rating)}
                      </div>
                      <span className="ml-1 text-xs text-gray-800">({product.reviewCount})</span>
                    </div>
                    <Button variant="transparent" size="icon" className="text-burgundy hover:text-black transition-luxury">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-playfair mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
              <Button variant="default" onClick={() => {
                setSelectedCategory("");
                setPriceRange([0, 2000]);
                setSortOption("newest");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
