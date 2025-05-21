import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  // Set page title
  document.title = `${t('privacy_policy')} - StilClas`;
  
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
            {t('privacy_policy')}
          </h1>
          
          <div className="prose max-w-none">
            <p className="lead">{t('privacy_introduction')}</p>
            
            <h2>{t('privacy_information_collection_heading')}</h2>
            <p>{t('privacy_information_collection_text')}</p>
            
            <h3>{t('privacy_personal_data_heading')}</h3>
            <p>{t('privacy_personal_data_text')}</p>
            <ul>
              <li>{t('privacy_personal_data_name')}</li>
              <li>{t('privacy_personal_data_email')}</li>
              <li>{t('privacy_personal_data_phone')}</li>
              <li>{t('privacy_personal_data_address')}</li>
            </ul>
            
            <h3>{t('privacy_usage_data_heading')}</h3>
            <p>{t('privacy_usage_data_text')}</p>
            
            <h2>{t('privacy_data_use_heading')}</h2>
            <p>{t('privacy_data_use_text')}</p>
            <ul>
              <li>{t('privacy_data_use_process_reservations')}</li>
              <li>{t('privacy_data_use_provide_service')}</li>
              <li>{t('privacy_data_use_communications')}</li>
              <li>{t('privacy_data_use_improve_service')}</li>
            </ul>
            
            <h2>{t('privacy_data_retention_heading')}</h2>
            <p>{t('privacy_data_retention_text')}</p>
            
            <h2>{t('privacy_data_security_heading')}</h2>
            <p>{t('privacy_data_security_text')}</p>
            
            <h2>{t('privacy_cookies_heading')}</h2>
            <p>{t('privacy_cookies_text')}</p>
            
            <h2>{t('privacy_third_party_heading')}</h2>
            <p>{t('privacy_third_party_text')}</p>
            
            <h2>{t('privacy_childrens_privacy_heading')}</h2>
            <p>{t('privacy_childrens_privacy_text')}</p>
            
            <h2>{t('privacy_changes_heading')}</h2>
            <p>{t('privacy_changes_text')}</p>
            
            <h2>{t('privacy_contact_heading')}</h2>
            <p>{t('privacy_contact_text')}</p>
            
            <div className="mt-8 text-sm text-gray-600">
              <p>{t('privacy_last_updated')}: {t('privacy_last_updated_date')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}