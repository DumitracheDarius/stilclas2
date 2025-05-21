import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useLocation } from "wouter";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/lib/types";
import { Loader2, ShoppingBag, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Form schema
const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Reservation() {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [, navigate] = useLocation();
  
  // Load cart items from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('stilclas-cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        // If no items in cart, redirect to home page
        navigate('/');
        toast({
          title: t('your_cart'),
          description: t('cart_empty_message'),
        });
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      setCartItems([]);
    }
  }, [navigate, t]);
  
  const defaultValues: Partial<FormValues> = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  };
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    
    // Update localStorage
    localStorage.setItem('stilclas-cart', JSON.stringify(updatedCart));
    
    if (updatedCart.length === 0) {
      // If cart is now empty, go back to home
      navigate('/');
      toast({
        title: t('your_cart'),
        description: t('cart_empty_message'),
      });
    }
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('stilclas-cart', JSON.stringify([]));
    navigate('/');
  };
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create email template parameters
      const templateParams = {
        to_name: "StilClas",
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        address: data.address,
        preferred_date: data.preferredDate || "Not specified",
        preferred_time: data.preferredTime || "Not specified",
        notes: data.notes || "None",
        items: cartItems.map(item => `${item.name} - ${formatPrice(item.price)}`).join('\\n'),
        total: formatPrice(totalPrice),
        language: i18n.language,
        reply_to: data.email,
      };
      
      // Using EmailJS to send email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_RESERVATION_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: t('reservation_success'),
        description: t('reservation_success_message'),
        variant: "default",
      });
      
      // Clear form and cart
      form.reset();
      clearCart();
      
      // Redirect to home page after successful reservation
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error("Error sending reservation:", error);
      toast({
        title: t('reservation_error'),
        description: t('reservation_error_message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container max-w-5xl mx-auto px-4 py-20 mt-16 mb-10">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {t('reserve_in_store')}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        {t('reservation_description')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Selected items section */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="border border-gray-200 rounded-lg shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              {t('selected_items')}
            </h2>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                  <div className="flex space-x-3">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-500">
                        {item.category}
                      </span>
                      <span className="font-bold text-burgundy mt-1">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-500 hover:text-burgundy"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{t('total')}</span>
                <span className="text-lg font-bold text-burgundy">{formatPrice(totalPrice)}</span>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full flex items-center justify-center hover:text-burgundy mb-4"
                onClick={clearCart}
              >
                <Trash2 size={16} className="mr-2" />
                {t('clear_cart')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Reservation form */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              {t('reservation_title')}
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('full_name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('full_name_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('res_email')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t('res_email_placeholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('res_phone')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('phone_placeholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('address')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('address_placeholder')} 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('preferred_date')}</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('preferred_time')}</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('notes')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('notes_placeholder')} 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end space-x-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate("/")}
                    disabled={isSubmitting}
                  >
                    {t('cancel')}
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                      "bg-burgundy hover:bg-burgundy/90",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      t('complete_reservation')
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}