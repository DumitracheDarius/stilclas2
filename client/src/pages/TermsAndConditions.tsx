import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const { t } = useTranslation();
  
  // Set page title
  document.title = `${t('terms_and_conditions')} - StilClas`;
  
  return (
    <section className={cn(sectionContainerVariants({ variant: "white" }), "pt-32")}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold mb-8">
            {t('terms_and_conditions')}
          </h1>
          
          <div className="prose max-w-none">
            <h2>{t('terms_introduction_heading')}</h2>
            <p>{t('terms_introduction_text')}</p>
            
            <h2>{t('terms_use_heading')}</h2>
            <p>{t('terms_use_text')}</p>
            
            <h2>{t('terms_intellectual_property_heading')}</h2>
            <p>{t('terms_intellectual_property_text')}</p>
            
            <h2>{t('terms_user_accounts_heading')}</h2>
            <p>{t('terms_user_accounts_text')}</p>
            
            <h2>{t('terms_products_heading')}</h2>
            <p>{t('terms_products_text')}</p>
            
            <h2>{t('terms_reservations_heading')}</h2>
            <p>{t('terms_reservations_text')}</p>
            
            <h2>{t('terms_liability_heading')}</h2>
            <p>{t('terms_liability_text')}</p>
            
            <h2>{t('terms_governing_law_heading')}</h2>
            <p>{t('terms_governing_law_text')}</p>
            
            <h2>{t('terms_changes_heading')}</h2>
            <p>{t('terms_changes_text')}</p>
            
            <h2>{t('terms_contact_heading')}</h2>
            <p>{t('terms_contact_text')}</p>
            
            <div className="mt-8 text-sm text-gray-600">
              <p>{t('terms_last_updated')}: {t('terms_last_updated_date')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}