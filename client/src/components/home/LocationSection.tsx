import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import { cn } from "@/lib/utils";

export default function LocationSection() {
  const { t } = useTranslation();
  
  return (
    <section className={cn(sectionContainerVariants({ variant: "light" }))}>
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-8" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('where_to_find_us')}
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-700 max-w-2xl mx-auto mb-12 font-lato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Amplasat în incinta APACA, Cotroceni Business Center Str. Iuliu Maniu, Nr. 7, corpul U, etaj 1 București 061072, România
        </motion.p>
        
        {/* Google Map Integration with custom pin */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-xl h-[400px] relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.824370944172!2d26.0582195!3d44.43071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e97a3bc039%3A0xfcf3cb6d87b70c52!2sCotroceni%20Business%20Center%2C%20Strada%20Iuliu%20Maniu%207%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1665412658690!5m2!1sen!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="StilClas Store Location"
            aria-label="StilClas Store Location Map"
          ></iframe>
          
          {/* Custom pin label */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-burgundy text-white px-4 py-2 rounded-md shadow-lg z-10 font-medium">
            {t('here_you_can_find_us')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}