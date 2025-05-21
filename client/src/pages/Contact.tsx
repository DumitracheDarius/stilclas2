import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  
  // Set page title and description
  useEffect(() => {
    document.title = t('contact_title') + " - StilClas";
  }, [t]);

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
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">{t('contact_title')}</h1>
            <div className={dividerVariants()}></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto font-lato">
              {t('contact_subtitle')}
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
              <h3 className="text-2xl font-playfair mb-6">{t('send_message')}</h3>
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
                <h3 className="text-2xl font-playfair mb-6">{t('get_in_touch')}</h3>
                <p className="text-gray-800 mb-8 font-lato">
                  {t('contact_info_description')}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{t('store_location')}</h4>
                      <p className="text-gray-800">{t('store_address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{t('phone')}</h4>
                      <p className="text-gray-800">{t('phone_number')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{t('email')}</h4>
                      <p className="text-gray-800">{t('email_address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-burgundy mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{t('business_hours')}</h4>
                      <p className="text-gray-800">{t('weekday_hours')}<br />{t('saturday_hours')}<br />{t('sunday_hours')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-playfair mb-4">{t('follow_us')}</h3>
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
          
          {/* Google Map Integration */}
          <motion.div 
            className="mt-12 rounded-md overflow-hidden shadow-lg h-96"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5011371191865!2d26.0593453!3d44.436214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c5b88b39e3%3A0x7d26991ee0d02fd0!2sStilClas%20-%20Men&#39;s%20Fashion%20Cotroceni!5e0!3m2!1sen!2sus!4v1653985678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="StilClas Store Location"
              aria-label="StilClas Store Location Map"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}
