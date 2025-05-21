import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { t } = useTranslation();
  
  // Set page title
  document.title = `${t('faqs')} - StilClas`;
  
  // FAQ categories
  const categories = [
    {
      title: 'faq_category_general',
      questions: [
        { 
          question: 'faq_general_q1', 
          answer: 'faq_general_a1' 
        },
        { 
          question: 'faq_general_q2', 
          answer: 'faq_general_a2' 
        },
        { 
          question: 'faq_general_q3', 
          answer: 'faq_general_a3' 
        }
      ]
    },
    {
      title: 'faq_category_products',
      questions: [
        { 
          question: 'faq_products_q1', 
          answer: 'faq_products_a1' 
        },
        { 
          question: 'faq_products_q2', 
          answer: 'faq_products_a2' 
        },
        { 
          question: 'faq_products_q3', 
          answer: 'faq_products_a3' 
        },
        { 
          question: 'faq_products_q4', 
          answer: 'faq_products_a4' 
        }
      ]
    },
    {
      title: 'faq_category_reservations',
      questions: [
        { 
          question: 'faq_reservations_q1', 
          answer: 'faq_reservations_a1' 
        },
        { 
          question: 'faq_reservations_q2', 
          answer: 'faq_reservations_a2' 
        },
        { 
          question: 'faq_reservations_q3', 
          answer: 'faq_reservations_a3' 
        }
      ]
    },
    {
      title: 'faq_category_shipping',
      questions: [
        { 
          question: 'faq_shipping_q1', 
          answer: 'faq_shipping_a1' 
        },
        { 
          question: 'faq_shipping_q2', 
          answer: 'faq_shipping_a2' 
        }
      ]
    },
    {
      title: 'faq_category_returns',
      questions: [
        { 
          question: 'faq_returns_q1', 
          answer: 'faq_returns_a1' 
        },
        { 
          question: 'faq_returns_q2', 
          answer: 'faq_returns_a2' 
        },
        { 
          question: 'faq_returns_q3', 
          answer: 'faq_returns_a3' 
        }
      ]
    }
  ];
  
  return (
    <section className={cn(sectionContainerVariants({ variant: "white" }), "pt-32")}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-center mb-12">
            {t('faqs')}
          </h1>
          
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('faq_intro')}
          </p>
          
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2 className="text-2xl font-playfair mb-6">{t(category.title)}</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-lg font-medium">
                        {t(item.question)}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <div className="pt-2 pb-4 prose">
                          {t(item.answer)}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700">
              {t('faq_contact_text')} <a href="/contact" className="text-burgundy hover:underline">{t('contact_us')}</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}