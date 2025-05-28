import { useEffect, useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import ProductGallery from "@/components/product/ProductGallery";
import { LazyImage } from "@/components/ui/LazyImage";
import { Product, ProductReview } from "@/lib/types";
import { getProductById, getRelatedProducts } from "@/lib/data";
import { Heart, Minus, Plus, Star, StarHalf, ShoppingCart, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { t } = useTranslation();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  
  // Set page title and description
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - StilClas`;
    }
  }, [product]);
  
  // Fetch product data
  useEffect(() => {
    if (params && params.id) {
      const fetchedProduct = getProductById(params.id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        
        // Set default selections
        if (fetchedProduct.sizes && fetchedProduct.sizes.length > 0) {
          setSelectedSize(fetchedProduct.sizes[0]);
        }
        
        if (fetchedProduct.colors && fetchedProduct.colors.length > 0) {
          setSelectedColor(fetchedProduct.colors[0]);
        }
        
        // Get related products
        setRelatedProducts(getRelatedProducts(fetchedProduct.id, fetchedProduct.categoryId));
      }
    }
  }, [params]);
  
  // Quantity handlers
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Add to cart handler
  const handleAddToCart = () => {
    if (!product) return;
    
    // Check if size is selected when available
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: t('cart_error'),
        description: t('please_select_size'),
        variant: "destructive",
      });
      return;
    }
    
    // Check if color is selected when available
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast({
        title: t('cart_error'),
        description: t('please_select_color'),
        variant: "destructive",
      });
      return;
    }
    
    // Add to cart
    try {
      // Create cart item
      const cartItem = {
        ...product,
        quantity: quantity,
        selectedSize: selectedSize,
        selectedColor: selectedColor
      };
      
      // Get existing cart
      const existingCart = localStorage.getItem('stilclas-cart');
      let cart = existingCart ? JSON.parse(existingCart) : [];
      
      // Check if item already exists
      const existingItemIndex = cart.findIndex((item: any) => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += quantity;
      } else {
        // Add new item to cart
        cart.push(cartItem);
      }
      
      // Save cart to localStorage
      localStorage.setItem('stilclas-cart', JSON.stringify(cart));
      
      // Show success message
      toast({
        title: t('success'),
        description: t('product_added_to_cart'),
        variant: "default",
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({
        title: t('cart_error'),
        description: t('error_adding_to_cart'),
        variant: "destructive",
      });
    }
  };
  
  // Handle adding to wishlist
  const handleAddToWishlist = () => {
    toast({
      title: t("success"),
      description: t("product_added_to_favorites"),
    });
  };
  
  // Render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-burgundy text-burgundy" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-burgundy text-burgundy" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-burgundy stroke-burgundy fill-transparent" />);
    }
    
    return stars;
  };
  
  if (!product) {
    return (
      <section className={cn(sectionContainerVariants({ variant: "white" }), "pt-32")}>
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <h2 className="text-2xl font-playfair mb-4">Product not found</h2>
            <Button asChild variant="default">
              <Link href="/shop">Back to Shop</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Product Detail */}
      <section className={cn(sectionContainerVariants({ variant: "white" }), "pt-32")}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images using our new gallery component */}
            <ProductGallery 
              mainImage={product.imageUrl}
              gallery={product.gallery}
              productName={product.name}
            />
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-playfair font-semibold mb-2">
                {t(`product_${product.id}_name`)}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-burgundy mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600 text-sm">
                  {product.reviewCount} {t("reviews")}
                </span>
              </div>
              
              <p className="text-2xl text-burgundy font-medium mb-6">
                {formatPrice(product.price)}
              </p>
              
              <p className="text-gray-700 mb-8 font-lato leading-relaxed">
                {t(`product_${product.id}_desc`)}
              </p>
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">{t("select_size")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => setSelectedSize(size)}
                        className="w-12 h-12"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">{t("select_color")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? "default" : "outline"}
                        onClick={() => setSelectedColor(color)}
                        className="w-12 h-12"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-2">{t("quantity")}</h3>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <div className="flex gap-4 mb-8">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t("add_to_cart")}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleAddToWishlist}
                  className="flex-none"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="flex-none">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Product Info */}
              <div className="border-t border-b py-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">SKU:</span>{" "}
                  {product.sku || `SC-${product.id}`}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{t("category")}:</span>{" "}
                  {t(`category_${product.categoryId}`)}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{t("tags")}:</span>{" "}
                  {product.tags?.map(tag => t(`tag_${tag}`)).join(", ") || t("default_tags")}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl">
                <TabsTrigger value="description">{t("product_details")}</TabsTrigger>
                <TabsTrigger value="specs">{t("specifications")}</TabsTrigger>
                <TabsTrigger value="reviews">
                  {t("reviews")} ({product.reviewCount})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 font-lato leading-relaxed mb-4">
                    {t(`product_${product.id}_full_desc`) || 
                      t("default_product_description", { productName: product.name })}
                  </p>
                  <p className="text-gray-700 font-lato leading-relaxed">
                    {t("product_quality_description")}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="specs" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.fabric && (
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t("fabric")}</h3>
                      <p className="text-gray-700">{t(`fabric_${product.fabric}`)}</p>
                    </div>
                  )}
                  
                  {product.lining && (
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t("lining")}</h3>
                      <p className="text-gray-700">{t(`lining_${product.lining}`)}</p>
                    </div>
                  )}
                  
                  {product.buttons && (
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t("buttons")}</h3>
                      <p className="text-gray-700">{t(`buttons_${product.buttons}`)}</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex text-burgundy mr-2">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-gray-600 text-sm">
                            {review.author}
                          </span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">{t("no_reviews_yet")}</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-playfair font-semibold mb-8">
                {t("related_products")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    className="product-card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="relative overflow-hidden rounded-md shadow-md mb-4 cursor-pointer"
                      onClick={() => setLocation(`/product/${relatedProduct.id}`)}
                    >
                      <LazyImage
                        src={relatedProduct.imageUrl}
                        alt={t(`product_${relatedProduct.id}_name`) || relatedProduct.name}
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
                      onClick={() => setLocation(`/product/${relatedProduct.id}`)}
                    >
                      {t(`product_${relatedProduct.id}_name`)}
                    </h3>
                    <p className="text-burgundy font-medium">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}