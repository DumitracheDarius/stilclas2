import { Link } from "wouter";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <img src="/assets/logoStilClas.png" alt="StilClas Logo" className="h-12 mb-6" />
            <p className="text-gray-300 mb-6 font-lato">
              {t('company_description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-burgundy transition-luxury" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-burgundy transition-luxury" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-burgundy transition-luxury" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair mb-6">{t('quick_links')}</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-burgundy transition-luxury">{t('home')}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-burgundy transition-luxury">{t('about')}</Link></li>
              <li><Link href="/collections" className="text-gray-300 hover:text-burgundy transition-luxury">{t('collections')}</Link></li>
              <li><Link href="/shop" className="text-gray-300 hover:text-burgundy transition-luxury">{t('shop')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-burgundy transition-luxury">{t('contact')}</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-playfair mb-6">{t('customer_service')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-burgundy transition-luxury">{t('faq')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-burgundy transition-luxury">{t('shipping')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-burgundy transition-luxury">{t('returns')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-burgundy transition-luxury">{t('sizing_guide')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-burgundy transition-luxury">{t('privacy_policy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-burgundy transition-luxury">{t('terms')}</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-playfair mb-6">{t('newsletter')}</h4>
            <p className="text-gray-300 mb-4 font-lato">
              {t('newsletter_desc')}
            </p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder={t('email')} 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-sm focus:outline-none focus:border-burgundy transition-luxury"
                />
                <Button type="submit" variant="default" size="icon" className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('copyright')} Made with ♥ by website.ro
            </p>
            <div className="flex space-x-6">
              {/* Payment method icons */}
              <div className="h-6 w-10 bg-gray-700 rounded"></div>
              <div className="h-6 w-10 bg-gray-700 rounded"></div>
              <div className="h-6 w-10 bg-gray-700 rounded"></div>
              <div className="h-6 w-10 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
