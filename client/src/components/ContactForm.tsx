import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-800 mb-2 font-lato">Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-burgundy transition-luxury"
                  placeholder="John Doe"
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
              <FormLabel className="block text-gray-800 mb-2 font-lato">Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-burgundy transition-luxury"
                  placeholder="your@email.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-800 mb-2 font-lato">Subject</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-burgundy transition-luxury"
                  placeholder="Inquiry about your products"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-800 mb-2 font-lato">Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-burgundy transition-luxury resize-none"
                  placeholder="Your message here..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit"
          variant="default"
          className="w-full py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
