import { useEffect, useState, useCallback } from "react";
import { useRoute, Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import { Product } from "@/lib/types";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);
  const { t } = useTranslation();
  const { toast } = useToast();
  
  // Set page title and description
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - StilClas`;
      
      // Set all images once product is loaded
      const imageUrls = [product.imageUrl, ...(product.gallery || [])];
      setAllImages(imageUrls);
    }
  }, [product]);
  
  // Navigate to previous image
  const prevImage = useCallback(() => {
    if (allImages.length <= 1) return;
    
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  }, [allImages]);
  
  // Navigate to next image
  const nextImage = useCallback(() => {
    if (allImages.length <= 1) return;
    
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  }, [allImages]);
  
  // Fetch product data
  useEffect(() => {
    if (params && params.id) {
      const fetchedProduct = getProductById(params.id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setCurrentImageIndex(0);
        
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
  
  // Handle thumbnail click
  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);
  
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

  // Get current image
  const currentImage = allImages[currentImageIndex] || product.imageUrl;

  return (
    <>
      {/* Product Detail */}
      <section className={cn(sectionContainerVariants({ variant: "white" }), "pt-32")}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative">
                <motion.div 
                  className="mb-4 overflow-hidden rounded-md shadow-md"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  key={`image-${currentImageIndex}`} // Key to force re-render
                >
                  <img 
                    src={currentImage} 
                    alt={`${product.name} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-auto object-cover transition-all duration-300"
                  />
                </motion.div>
                
                {/* Navigation Arrows - only show if there are multiple images */}
                {allImages.length > 1 && (
                  <>
                    <button 
                      type="button"
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      type="button"
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Gallery - only show if there are multiple images */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {allImages.map((image, index) => (
                    <button 
                      key={`thumb-${index}`}
                      type="button"
                      className={cn(
                        "cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 transform hover:scale-105 focus:outline-none",
                        currentImageIndex === index ? "border-burgundy shadow-md" : "border-transparent hover:border-gray-300"
                      )}
                      onClick={() => handleThumbnailClick(index)}
                      title={index === 0 ? t('main_image') : `${t('view')} ${index}`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} ${t('thumbnail')} ${index + 1}`} 
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-playfair font-semibold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-burgundy mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600 text-sm">{product.reviewCount} reviews</span>
              </div>
              
              <p className="text-2xl text-burgundy font-medium mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-8 font-lato leading-relaxed">{product.description}</p>
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className="min-w-[3rem]"
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
                  <h3 className="text-sm font-medium mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={cn(
                          "w-8 h-8 rounded-full border",
                          selectedColor === color ? "ring-2 ring-burgundy ring-offset-2" : "ring-0"
                        )}
                        style={{ backgroundColor: color.toLowerCase() }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decreaseQuantity} 
                    disabled={quantity <= 1}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 font-medium text-lg min-w-[2rem] text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increaseQuantity}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart & Wishlist */}
              <div className="flex items-center gap-4 mb-8">
                <Button 
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Reservation
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-12 w-12 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-12 w-12"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Product Meta */}
              <div className="border-t border-b py-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">SKU:</span> {product.sku || `SC-${product.id}`}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Category:</span> {product.category}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Tags:</span> {product.tags?.join(", ") || "Luxury, Menswear"}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 font-lato leading-relaxed mb-4">
                    {product.fullDescription || 
                      `The ${product.name} exemplifies our commitment to quality and craftsmanship. 
                      Each piece is meticulously tailored using premium materials to ensure exceptional 
                      fit, comfort, and durability.`
                    }
                  </p>
                  <p className="text-gray-700 font-lato leading-relaxed">
                    {`Our attention to detail is evident in every stitch, button, and seam. 
                    The result is a garment that not only looks exceptional but also stands 
                    the test of time, both in durability and style.`}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="specs" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-playfair text-lg mb-4">Materials & Composition</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-medium w-32">Fabric:</span>
                        <span>{product.fabric || "Premium Italian wool"}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium w-32">Lining:</span>
                        <span>{product.lining || "Silk blend"}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium w-32">Buttons:</span>
                        <span>{product.buttons || "Horn buttons"}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-lg mb-4">Care Instructions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-medium w-32">Cleaning:</span>
                        <span>Dry clean only</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium w-32">Storage:</span>
                        <span>Hang on a quality hanger in a cool, dry place</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium w-32">Travel:</span>
                        <span>Use a garment bag for protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-8">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-playfair text-lg">{review.title}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex text-burgundy mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-700 mb-2 font-lato">{review.comment}</p>
                        <p className="text-sm text-gray-600">By {review.author}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-xl mb-2">No reviews yet</h3>
                    <p className="text-gray-600 mb-4">Be the first to review this product</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-playfair font-medium mb-8 text-center">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <motion.div 
                    key={relatedProduct.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link href={`/product/${relatedProduct.id}`} className="block">
                      <div className="overflow-hidden rounded-md mb-3">
                        <img 
                          src={relatedProduct.imageUrl} 
                          alt={relatedProduct.name} 
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-medium mb-1">{relatedProduct.name}</h3>
                      <div className="flex text-burgundy mb-1">
                        {renderStars(relatedProduct.rating)}
                      </div>
                      <p className="font-medium text-burgundy">${relatedProduct.price.toFixed(2)}</p>
                    </Link>
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