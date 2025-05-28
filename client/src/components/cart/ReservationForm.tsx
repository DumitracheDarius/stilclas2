import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Loader2 } from "lucide-react";
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

interface ReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  clearCart: () => void;
}

// Helper function to format WhatsApp message
const formatWhatsAppMessage = (data: FormValues, cartItems: Product[], totalPrice: number) => {
  const itemsList = cartItems.map(item => `${item.name} - ${formatPrice(item.price)}`).join('\n');
  
  return encodeURIComponent(
    `*Rezervare nouă de la ${data.fullName}*\n\n` +
    `📧 Email: ${data.email}\n` +
    `📱 Telefon: ${data.phone}\n` +
    `📍 Adresă: ${data.address}\n` +
    `📅 Data preferată: ${data.preferredDate || 'Nespecificat'}\n` +
    `⏰ Ora preferată: ${data.preferredTime || 'Nespecificat'}\n` +
    `📝 Note: ${data.notes || 'Nicio notă'}\n\n` +
    `*Produse selectate:*\n${itemsList}\n\n` +
    `*Total: ${formatPrice(totalPrice)}*`
  );
};

export function ReservationForm({ isOpen, onClose, cartItems, clearCart }: ReservationFormProps) {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  
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
        items: cartItems.map(item => `${item.name} - ${formatPrice(item.price)}`).join('\n'),
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

      // Format WhatsApp message and create link
      const whatsappMessage = formatWhatsAppMessage(data, cartItems, totalPrice);
      const phoneNumber = "40769245781";
      const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      setWhatsappUrl(url);
      
      // Clear cart but don't close the form yet
      clearCart();
      form.reset();
      
      toast({
        title: t('reservation_success'),
        description: t('reservation_success_message'),
        variant: "default",
      });
      
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t('reservation_title')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('reservation_description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          {/* Selected items section */}
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-semibold mb-3">{t('selected_items')}</h3>
            <div className="space-y-3 max-h-[200px] overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span>{formatPrice(item.price)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
              <span className="font-semibold">{t('total')}</span>
              <span className="font-bold text-burgundy">{formatPrice(totalPrice)}</span>
            </div>
          </div>
          
          {/* Reservation form */}
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
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('email_placeholder')} {...field} />
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
                      <FormLabel>{t('phone')}</FormLabel>
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
              
              <DialogFooter className="flex-col space-y-4 sm:space-y-0">
                {whatsappUrl ? (
                  <div className="flex flex-col items-center w-full space-y-4">
                    <p className="text-sm text-center text-muted-foreground">
                      {t('whatsapp_success')}
                    </p>
                    <p className="text-sm text-center text-muted-foreground">
                      {t('whatsapp_description')}
                    </p>
                    <div className="flex gap-4 w-full">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md transition-colors"
                        onClick={(e) => {
                          // Prevent the default action
                          e.preventDefault();
                          
                          // Open WhatsApp in a new window
                          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                          
                          // Close the dialog after a short delay
                          setTimeout(() => {
                            setWhatsappUrl(null);
                            onClose();
                          }, 500);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 175.216 175.552"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M89.4,0.5C41.4,0.5,2.5,39.5,2.5,87.4c0,14.7,3.7,28.6,10.3,40.8l-11.1,40c-0.5,1.9,0.2,4,1.8,5.3c1.1,0.9,2.5,1.4,3.8,1.4 c0.6,0,1.2-0.1,1.8-0.3l41.8-14.5c12.6,6.9,27.1,10.9,42.6,10.9c48,0,87-39,87-86.9S137.4,0.5,89.4,0.5z M144.8,124.8 c-2.2,6.1-8.9,11.6-14.8,13c-3.9,0.9-9,1.7-26.2-5.6c-22-9.3-36.4-32.1-37.4-33.5c-1-1.5-8.1-10.8-8.1-20.7 c0-9.8,5.2-14.7,7-16.7c1.9-2,4-2.5,5.4-2.5c1.3,0,2.6,0,3.8,0.1c1.2,0.1,2.8-0.5,4.4,3.4c1.6,3.9,5.5,13.7,6,14.7 c0.5,1,0.8,2.1,0.1,3.4c-0.7,1.3-1,2.1-2,3.3c-1,1.2-2,2.6-2.9,3.5c-1,1-2,2-0.9,4c1.1,2,5.1,8.4,10.9,13.6 c7.5,6.7,13.7,8.8,15.7,9.8c2,1,3.1,0.8,4.3-0.5c1.2-1.3,5-5.8,6.4-7.8c1.3-2,2.7-1.7,4.6-1c1.9,0.7,12,5.7,14.1,6.7 c2.1,1,3.4,1.5,3.9,2.3C147.3,113.9,147,118.7,144.8,124.8z" />
                        </svg>
                        {t('continue_on_whatsapp')}
                      </a>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setWhatsappUrl(null);
                          onClose();
                        }}
                      >
                        {t('close')}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 w-full">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={onClose}
                      disabled={isSubmitting}
                    >
                      {t('cancel')}
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={cn(
                        "flex-1 bg-burgundy hover:bg-burgundy/90",
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
                )}
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}