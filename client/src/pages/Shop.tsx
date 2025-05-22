import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  dividerVariants,
  sectionContainerVariants,
} from "@/components/ui/stylesheet";
import { getProducts, getCategories } from "@/lib/data";
import { Product, Category, Subcategory } from "@/lib/types";
import { Heart, Star, StarHalf, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Shop() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [, setLocation] = useLocation();

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [activeCategoryMenu, setActiveCategoryMenu] = useState<string | null>(
    null,
  );

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

  // Toggle category menu
  const toggleCategoryMenu = (categoryId: string) => {
    if (activeCategoryMenu === categoryId) {
      setActiveCategoryMenu(null);
    } else {
      setActiveCategoryMenu(categoryId);
    }
  };

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory("");
    setActiveCategoryMenu(null);
  };

  // Handle subcategory selection
  const handleSubcategorySelect = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setActiveCategoryMenu(null);
  };

  // Apply filters when filter state changes
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory) {
      const category = categories.find(c => c.id === selectedCategory);
      
      if (selectedSubcategory) {
        // If subcategory is selected, filter by subcategory
        const subcategory = category?.subcategories?.find(s => s.id === selectedSubcategory);
        
        if (subcategory) {
          // Filter by category + subcategory
          result = result.filter(product => {
            const productName = product.name.toLowerCase();
            
            // Check if product name contains the main category keyword
            let matchesMainCategory = false;
            
            if (category?.name === "suits" && productName.includes("costum")) {
              matchesMainCategory = true;
            } else if (category?.name === "blazers" && productName.includes("sacou")) {
              matchesMainCategory = true;
            } else if (category?.name === "trousers" && productName.includes("pantaloni")) {
              matchesMainCategory = true;
            } else if (category?.name === "ties" && (productName.includes("cravata") || productName.includes("cravată"))) {
              matchesMainCategory = true;
            } else if (category?.name === "bow_ties" && productName.includes("papion")) {
              matchesMainCategory = true;
            } else if (category?.name === "cufflinks" && productName.includes("butoni")) {
              matchesMainCategory = true;
            } else if (category?.name === "belts" && productName.includes("curea")) {
              matchesMainCategory = true;
            }
            
            // Check if product name contains the subcategory keyword
            let matchesSubcategory = false;
            
            if (subcategory.name === "ceremony" && productName.includes("ceremonie")) {
              matchesSubcategory = true;
            } else if (subcategory.name === "business" && productName.includes("business")) {
              matchesSubcategory = true;
            } else if (subcategory.name === "casual" && productName.includes("casual")) {
              matchesSubcategory = true;
            }
            
            return matchesMainCategory && matchesSubcategory;
          });
        }
      } else {
        // If only main category is selected
        result = result.filter(product => {
          const productName = product.name.toLowerCase();
          
          if (category?.name === "suits" && productName.includes("costum")) {
            return true;
          } else if (category?.name === "blazers" && productName.includes("sacou")) {
            return true;
          } else if (category?.name === "trousers" && productName.includes("pantaloni")) {
            return true;
          } else if (category?.name === "ties" && (productName.includes("cravata") || productName.includes("cravată"))) {
            return true;
          } else if (category?.name === "bow_ties" && productName.includes("papion")) {
            return true;
          } else if (category?.name === "cufflinks" && productName.includes("butoni")) {
            return true;
          } else if (category?.name === "belts" && productName.includes("curea")) {
            return true;
          }
          
          return false;
        });
      }
    }

    // Apply price filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    );

    // Apply sorting
    switch (sortOption) {
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
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
  }, [selectedCategory, selectedSubcategory, priceRange, sortOption, products]);

  // Render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-burgundy text-burgundy"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="h-4 w-4 fill-burgundy text-burgundy"
        />,
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          className="h-4 w-4 text-burgundy stroke-burgundy fill-transparent"
        />,
      );
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
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">
              {t("shop_heading")}
            </h1>
            <div className={dividerVariants()}></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto font-lato">
              {t("shop_description")}
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
              <div className="flex flex-col w-full md:w-auto">
                <div className="flex flex-wrap gap-3 mb-4">
                  <Button
                    variant={selectedCategory === "" ? "default" : "outline"}
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedSubcategory("");
                    }}
                    className="mb-2"
                  >
                    {t("all_products")}
                  </Button>

                  {categories.map((category) => (
                    <div key={category.id} className="relative">
                      <div className="flex mb-2">
                        <Button
                          variant={
                            selectedCategory === category.id &&
                            !selectedSubcategory
                              ? "default"
                              : "outline"
                          }
                          onClick={() => handleCategorySelect(category.id)}
                          className="mr-1"
                        >
                          {t(category.name)}
                        </Button>

                        {category.subcategories &&
                          category.subcategories.length > 0 && (
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => toggleCategoryMenu(category.id)}
                              className="px-2"
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  activeCategoryMenu === category.id &&
                                    "transform rotate-180",
                                )}
                              />
                            </Button>
                          )}
                      </div>

                      {/* Subcategories dropdown */}
                      {activeCategoryMenu === category.id &&
                        category.subcategories &&
                        category.subcategories.length > 0 && (
                          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 py-1">
                            {category.subcategories.map((subcategory) => (
                              <button
                                key={subcategory.id}
                                onClick={() => {
                                  setSelectedCategory(category.id);
                                  handleSubcategorySelect(subcategory.id);
                                }}
                                className={cn(
                                  "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
                                  selectedSubcategory === subcategory.id
                                    ? "bg-burgundy bg-opacity-10 text-white font-medium"
                                    : "",
                                )}
                              >
                                {t(subcategory.name)}
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>

                {/* Active filters display */}
                {(selectedCategory || selectedSubcategory) && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-sm text-gray-600">
                      {t("active_filters")}:
                    </span>
                    {selectedCategory && (
                      <div className="px-3 py-1 bg-burgundy bg-opacity-10 rounded-full text-white text-sm flex items-center">
                        {categories.find((c) => c.id === selectedCategory)
                          ?.name &&
                          t(
                            categories.find((c) => c.id === selectedCategory)
                              ?.name || "",
                          )}
                        {selectedSubcategory && " › "}
                        {selectedSubcategory &&
                          categories
                            .find((c) => c.id === selectedCategory)
                            ?.subcategories?.find(
                              (s) => s.id === selectedSubcategory,
                            )?.name &&
                          t(
                            categories
                              .find((c) => c.id === selectedCategory)
                              ?.subcategories?.find(
                                (s) => s.id === selectedSubcategory,
                              )?.name || "",
                          )}
                        <button
                          onClick={() => {
                            setSelectedCategory("");
                            setSelectedSubcategory("");
                          }}
                          className="ml-2 text-white hover:text-burgundy/80"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="w-full md:w-48">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("sort_by")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">{t("newest")}</SelectItem>
                    <SelectItem value="price-asc">
                      {t("price_low_to_high")}
                    </SelectItem>
                    <SelectItem value="price-desc">
                      {t("price_high_to_low")}
                    </SelectItem>
                    <SelectItem value="rating">{t("highest_rated")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-gray-50 p-4 rounded-md mb-8">
              <h3 className="font-medium mb-4">{t("price_range")}</h3>
              <Slider
                defaultValue={[0, 2000]}
                max={2000}
                step={10}
                value={priceRange}
                onValueChange={(value) =>
                  setPriceRange(value as [number, number])
                }
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
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
                      <Button
                        variant="default"
                        className="transform -translate-y-4 group-hover:translate-y-0 transition-luxury"
                      >
                        {t("quick_view")}
                      </Button>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-playfair font-medium mb-1 cursor-pointer hover:text-burgundy transition-luxury"
                    onClick={() => setLocation(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-burgundy font-medium mb-3">
                    {formatPrice(product.price)}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex text-burgundy text-sm">
                        {renderStars(product.rating)}
                      </div>
                      <span className="ml-1 text-xs text-gray-800">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-burgundy hover:text-black transition-luxury"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-playfair mb-2">
                {t("no_products_found")}
              </h3>
              <p className="text-gray-600 mb-4">{t("try_adjust_filters")}</p>
              <Button
                variant="default"
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedSubcategory("");
                  setPriceRange([0, 1900]);
                  setSortOption("newest");
                }}
              >
                {t("reset_filters")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
