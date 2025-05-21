import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  ro: {
    translation: {
      // Navigation
      "home": "Acasă",
      "collections": "Colecții",
      "shop": "Magazin",
      "about": "Despre noi",
      "contact": "Contact",
      
      // Hero Section
      "hero_title": "Eleganță și Rafinament",
      "hero_subtitle": "Costume și îmbrăcăminte pentru bărbați realizate cu precizie și pasiune",
      "explore_collection": "Explorează Colecția",
      
      // Collections
      "the_bordeaux_edit": "Colecția Bordeaux",
      "bordeaux_description": "Tonuri sofisticate de burgundy pentru cunoscători.",
      "black_tie_essentials": "Esențiale Black Tie",
      "black_tie_description": "Eleganță fără timp pentru ocazii formale.",
      "summer_sophistication": "Rafinament de Vară",
      "summer_description": "In ușor pentru eleganță în zilele călduroase.",
      "urban_classics": "Clasici Urbani",
      "urban_description": "Stiluri contemporane pentru gentlemanul modern al orașului.",
      
      // Main Categories
      "suits": "Costume",
      "ceremony": "Ceremonie",
      "business": "Business",
      "casual": "Casual",
      "blazers": "Sacouri",
      "trousers": "Pantaloni",
      "shirts": "Cămăși",
      "ties": "Cravate",
      "cufflinks": "Butoni",
      "bow_ties": "Papioane",
      "belts": "Curele",
      
      // Best Sellers
      "best_sellers": "Cele mai vândute",
      "view_all": "Vezi toate",
      
      // Brand Values
      "brand_values": "Valorile Noastre",
      "craftsmanship": "Măiestrie",
      "craftsmanship_desc": "Fiecare costum este realizat cu atenție meticuloasă la detalii.",
      "quality": "Calitate",
      "quality_desc": "Utilizăm doar cele mai fine materiale pentru a crea îmbrăcăminte care durează.",
      "heritage": "Moștenire",
      "heritage_desc": "Mândri de tradiția și expertiza noastră în croitorie.",
      "innovation": "Inovație",
      "innovation_desc": "Combinăm tehnici tradiționale cu design modern.",
      
      // Testimonials
      "testimonials": "Mărturii",
      
      // Footer
      "company_description": "Creăm costume și îmbrăcăminte pentru bărbați premium cu atenție excepțională la detalii, materiale de calitate și design fără timp.",
      "quick_links": "Linkuri Rapide",
      "customer_service": "Servicii Clienți",
      "faq": "Întrebări Frecvente",
      "shipping": "Livrare",
      "returns": "Returnări",
      "sizing_guide": "Ghid Mărimi",
      "terms": "Termeni și Condiții",
      "privacy_policy": "Politica de Confidențialitate",
      "newsletter": "Abonează-te la newsletter",
      "newsletter_desc": "Abonează-te pentru a primi noutăți despre colecții și oferte exclusive.",
      "subscribe": "Abonează-te",
      "copyright": "© 2024 StilClas. Toate drepturile rezervate.",
      
      // About Us
      "about_title": "Despre StilClas",
      "about_subtitle": "Tradiție și eleganță în fiecare detaliu",
      
      // Contact
      "contact_title": "Contactează-ne",
      "contact_subtitle": "Suntem aici pentru a te ajuta",
      "name": "Nume",
      "email": "Email",
      "subject": "Subiect",
      "message": "Mesaj",
      "send_message": "Trimite Mesaj",
      
      // Product details
      "add_to_cart": "Adaugă în coș",
      "select_color": "Selectează culoarea",
      "select_size": "Selectează mărimea",
      "product_details": "Detalii produs",
      "related_products": "Produse similare"
    }
  },
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "collections": "Collections",
      "shop": "Shop",
      "about": "About Us",
      "contact": "Contact",
      
      // Hero Section
      "hero_title": "Elegance & Refinement",
      "hero_subtitle": "Premium suits and menswear crafted with precision and passion",
      "explore_collection": "Explore Collection",
      
      // Collections
      "the_bordeaux_edit": "The Bordeaux Edit",
      "bordeaux_description": "Sophisticated burgundy tones for the connoisseur.",
      "black_tie_essentials": "Black Tie Essentials",
      "black_tie_description": "Timeless elegance for formal occasions.",
      "summer_sophistication": "Summer Sophistication",
      "summer_description": "Lightweight linen for warm-weather elegance.",
      "urban_classics": "Urban Classics",
      "urban_description": "Contemporary styles for the modern city gentleman.",
      
      // Main Categories
      "suits": "Suits",
      "ceremony": "Ceremony",
      "business": "Business",
      "casual": "Casual",
      "blazers": "Blazers",
      "trousers": "Trousers",
      "shirts": "Shirts",
      "ties": "Ties",
      "cufflinks": "Cufflinks",
      "bow_ties": "Bow Ties",
      "belts": "Belts",
      
      // Best Sellers
      "best_sellers": "Best Sellers",
      "view_all": "View All",
      
      // Brand Values
      "brand_values": "Our Values",
      "craftsmanship": "Craftsmanship",
      "craftsmanship_desc": "Each suit is crafted with meticulous attention to detail.",
      "quality": "Quality",
      "quality_desc": "We use only the finest materials to create clothing that lasts.",
      "heritage": "Heritage",
      "heritage_desc": "Proud of our tradition and expertise in tailoring.",
      "innovation": "Innovation",
      "innovation_desc": "Combining traditional techniques with modern design.",
      
      // Testimonials
      "testimonials": "Testimonials",
      
      // Footer
      "company_description": "Crafting premium suits and menswear with exceptional attention to detail, quality materials, and timeless design.",
      "quick_links": "Quick Links",
      "customer_service": "Customer Service",
      "faq": "FAQ",
      "shipping": "Shipping",
      "returns": "Returns",
      "sizing_guide": "Sizing Guide",
      "terms": "Terms & Conditions",
      "privacy_policy": "Privacy Policy",
      "newsletter": "Subscribe to our newsletter",
      "newsletter_desc": "Subscribe to receive updates on new collections and exclusive offers.",
      "subscribe": "Subscribe",
      "copyright": "© 2024 StilClas. All rights reserved.",
      
      // About Us
      "about_title": "About StilClas",
      "about_subtitle": "Tradition and elegance in every detail",
      
      // Contact
      "contact_title": "Contact Us",
      "contact_subtitle": "We're here to help",
      "name": "Name",
      "email": "Email",
      "subject": "Subject",
      "message": "Message",
      "send_message": "Send Message",
      
      // Product details
      "add_to_cart": "Add to Cart",
      "select_color": "Select Color",
      "select_size": "Select Size",
      "product_details": "Product Details",
      "related_products": "Related Products"
    }
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ro', // Default language
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;