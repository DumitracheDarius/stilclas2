import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import emailjs from '@emailjs/browser';

// Define form schema
const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  pickupDate: z.date({
    required_error: "Please select a date",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  clearCart: () => void;
}

export function ReservationForm({ isOpen, onClose, cartItems, clearCart }: ReservationFormProps) {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      pickupDate: undefined,
    },
  });

  // Get current date + 1 day as the minimum selectable date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format cart items for email
  const formatCartItems = () => {
    return cartItems.map(item => `${item.name}`).join(", ");
  };

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format date to YYYY-MM-DD
      const formattedDate = format(data.pickupDate, "yyyy-MM-dd");
      
      // Prepare data for EmailJS
      const templateParams = {
        user_name: data.name,
        user_email: data.email,
        product_list: formatCartItems(),
        pickup_date: formattedDate
      };
      
      // Send email using EmailJS
      await emailjs.send(
        "service_29oy11b",
        "template_5qiucuw", 
        templateParams,
        "DfK5Tovpa24FfvJ1q"
      );
      
      // Show success message
      toast({
        title: t("reservation_success_title"),
        description: t("reservation_success_message"),
        variant: "default",
      });
      
      // Clear cart and close modal
      clearCart();
      onClose();
      form.reset();
    } catch (error) {
      console.error("Error sending reservation:", error);
      toast({
        title: t("reservation_error_title"),
        description: t("reservation_error_message"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Dialog close handler with form reset
  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">{t("reserve_in_store")}</DialogTitle>
          <DialogDescription className="pt-2 pb-4">
            {t("reservation_description")}
          </DialogDescription>
          <Button 
            className="absolute top-2 right-2" 
            variant="ghost" 
            size="icon"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">{t("full_name")}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder={t("full_name_placeholder")}
                      className="w-full border-gray-300 focus:border-burgundy"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">{t("email_address")}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email"
                      placeholder={t("email_placeholder")}
                      className="w-full border-gray-300 focus:border-burgundy"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pickupDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-medium">{t("preferred_pickup_date")}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", {
                              locale: i18n.language === "ro" ? ro : undefined
                            })
                          ) : (
                            <span>{t("select_date")}</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < tomorrow}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-burgundy hover:bg-burgundy/90 text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("sending") : t("submit_reservation")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}