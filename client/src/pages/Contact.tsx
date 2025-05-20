import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  // Set page title and description
  useEffect(() => {
    document.title = "Contact Us - StilClas";
  }, []);

  return (
    <>
      {/* Contact Hero */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">Contact Us</h1>
            <div className={dividerVariants()}></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto font-lato">
              We'd love to hear from you. Reach out to us with any questions about our products or services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className={sectionContainerVariants({ variant: "gray" })}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="glass-card rounded-md p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-playfair mb-6">Get in Touch</h3>
                <p className="text-gray-800 mb-8 font-lato">
                  Visit our flagship store or contact our customer service team for personalized assistance with your style needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Store Location</h4>
                      <p className="text-gray-800">123 Fashion Avenue, Luxury District, City, Country</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-800">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-800">client@stilclas.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <p className="text-gray-800">Monday-Friday: 10AM - 8PM<br />Saturday: 10AM - 6PM<br />Sunday: 12PM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-playfair mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-burgundy transition-luxury">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-burgundy transition-luxury">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-burgundy transition-luxury">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Map (Placeholder) */}
          <div className="mt-12 rounded-md overflow-hidden shadow-lg h-96 bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="h-10 w-10 mx-auto mb-2" />
                <p>Store Location Map (Google Maps Integration)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
