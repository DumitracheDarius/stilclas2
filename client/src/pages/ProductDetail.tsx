import { useEffect, useState } from "react";
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
  const [mainImage, setMainImage] = useState("");
  const { t } = useTranslation();
  const { toast } = useToast();
  
  // Set page title and description
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - StilClas`;
      setMainImage(product.imageUrl);
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
            {/* Product Images */}
            <div>
              <motion.div 
                className="mb-4 overflow-hidden rounded-md shadow-md"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Thumbnail Gallery */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  <div 
                    className={cn(
                      "cursor-pointer rounded-md overflow-hidden border-2",
                      mainImage === product.imageUrl ? "border-burgundy" : "border-transparent"
                    )}
                    onClick={() => setMainImage(product.imageUrl)}
                  >
                    <img 
                      src={product.imageUrl} 
                      alt={`${product.name} thumbnail`} 
                      className="w-full h-24 object-cover"
                    />
                  </div>
                  
                  {product.gallery.map((image, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "cursor-pointer rounded-md overflow-hidden border-2",
                        mainImage === image ? "border-burgundy" : "border-transparent"
                      )}
                      onClick={() => setMainImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} thumbnail ${index + 1}`} 
                        className="w-full h-24 object-cover"
                      />
                    </div>
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
                          selectedColor === color ? "ring-2 ring-offset-2 ring-burgundy" : "ring-0"
                        )}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select ${color} color`}
                      ></button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center border border-gray-300 rounded-md w-32">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="text-gray-500 hover:text-burgundy"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center font-medium">{quantity}</div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={increaseQuantity}
                    className="text-gray-500 hover:text-burgundy"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t('add_to_cart')}
                </Button>
                <Button variant="outline" size="lg" className="flex-1 gap-2">
                  <Heart className="h-5 w-5" />
                  {t('add_to_wishlist')}
                </Button>
              </div>
              
              {/* Share */}
              <div className="flex items-center text-gray-600 text-sm gap-2">
                <Share2 className="h-4 w-4" />
                <span>Share:</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-burgundy transition-luxury">Facebook</a>
                  <a href="#" className="hover:text-burgundy transition-luxury">Instagram</a>
                  <a href="#" className="hover:text-burgundy transition-luxury">Pinterest</a>
                </div>
              </div>
              
              {/* Product Meta */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">SKU:</span> {product.sku || `SC-${product.id}`}
                </p>
                <p className="text-sm text-gray-600 mb-1">
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
                        <span>Hang on a padded hanger in a breathable garment bag</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium w-32">Pressing:</span>
                        <span>Low iron if needed, use a pressing cloth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-center mb-2">
                          <div className="flex text-burgundy mr-2">
                            {renderStars(review.rating)}
                          </div>
                          <span className="font-medium">{review.title}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{review.comment}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-medium">{review.author}</span>
                          <span className="mx-2">•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-600">No reviews yet.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className={sectionContainerVariants({ variant: "gray" })}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-semibold mb-2">You May Also Like</h2>
              <div className="w-20 h-0.5 bg-burgundy mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="product-card group">
                  <Link href={`/product/${relatedProduct.id}`}>
                    <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                      <img 
                        src={relatedProduct.imageUrl} 
                        alt={relatedProduct.name} 
                        className="w-full h-80 object-cover product-image"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                        <Button variant="default" className="transform -translate-y-4 group-hover:translate-y-0 transition-luxury">
                          View Product
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-lg font-playfair font-medium mb-1 hover:text-burgundy transition-luxury">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <p className="text-burgundy font-medium">${relatedProduct.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
