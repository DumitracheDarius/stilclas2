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
      "testimonial1_quote": "Atenția la detalii în costumul meu de nuntă a fost extraordinară. StilClas a livrat exact ceea ce mi-am imaginat—eleganță fără timp cu o croială perfectă.",
      "testimonial2_quote": "Ca CEO, aspectul meu contează. Costumele StilClas au devenit imaginea mea de marcă—calitate excepțională, potrivire perfectă și stil sofisticat.",
      "testimonial3_quote": "Colecția smart casual combină confortul cu rafinamentul perfect. Aceste piese mi-au îmbunătățit substanțial stilul de zi cu zi.",
      
      // Google Reviews
      "google_reviews": "Recenzii Clienți",
      "google_reviews_subtitle": "Vedeți ce spun clienții noștri despre experiența lor cu StilClas",
      "view_all_reviews": "Vezi toate recenziile pe Google",
      
      // Reservation form
      "reserve_in_store": "Rezervă în magazin",
      "reservation_description": "Completați formularul pentru a rezerva produsele selectate. Veți fi notificat când produsele sunt gata pentru a fi ridicate.",
      "full_name": "Nume complet",
      "full_name_placeholder": "Ion Popescu",
      "preferred_pickup_date": "Data dorită pentru achiziție",
      "select_date": "Selectați o dată",
      "submit_reservation": "Trimite rezervarea",
      "reservation_sending": "Se trimite...",
      "reservation_success_title": "Rezervare trimisă!",
      "reservation_success_message": "Rezervarea a fost trimisă cu succes! Veți primi un email de confirmare în curând.",
      "reservation_error_title": "Eroare",
      "reservation_error_message": "A apărut o eroare la trimiterea rezervării. Vă rugăm să încercați din nou.",
      
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
      
      // Categories page
      "discover_our_exquisite_collections": "Descoperă colecțiile noastre exclusiviste de îmbrăcăminte pentru bărbați create cu pasiune și măiestrie",
      
      // Contact
      "contact_title": "Contactează-ne",
      "contact_subtitle": "Suntem aici pentru a te ajuta cu întrebările și nevoile tale de îmbrăcăminte formală",
      "name": "Nume",
      "email": "Email",
      "subject": "Subiect",
      "message": "Mesaj",
      "send_message": "Trimite Mesaj",
      "get_in_touch": "Contactează-ne",
      "contact_info_description": "Vizitați magazinul nostru sau contactați echipa de servicii clienți pentru asistență personalizată în alegerea stilului potrivit.",
      "store_location": "Locația Magazinului",
      "store_address": "Amplasat în incinta APACA, Cotroceni Business Center\nStr. Iuliu Maniu, Nr. 7, corpul U, etaj 1\nBucurești 061072, România",
      "phone": "Telefon",
      "phone_number": "0752 078 888",
      "email_address": "client@stilclas.ro",
      "business_hours": "Program",
      "weekday_hours": "Luni-Vineri: 10:00 - 20:00",
      "saturday_hours": "Sâmbătă: 10:00 - 18:00",
      "sunday_hours": "Duminică: 12:00 - 17:00",
      "follow_us": "Urmărește-ne",
      "name_placeholder": "Ion Popescu",
      "email_placeholder": "adresa@email.ro",
      "subject_placeholder": "Întrebare despre produsele dvs.",
      "message_placeholder": "Mesajul tău aici...",
      "contact_sending": "Se trimite...",
      "message_sent": "Mesaj Trimis",
      "message_sent_description": "Îți mulțumim pentru mesaj. Te vom contacta în curând.",
      "error": "Eroare",
      "message_error_description": "A apărut o problemă la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.",
      
      // Product details
      "add_to_cart": "Adaugă în coș",
      "select_color": "Selectează culoarea",
      "select_size": "Selectează mărimea",
      "product_details": "Detalii produs",
      "related_products": "Produse similare",
      "quick_view": "Previzualizare",
      "reviews": "recenzii",

      // Shop page
      "shop_heading": "Magazin",
      "shop_description": "Explorați colecția noastră completă de costume și îmbrăcăminte pentru bărbați premium, create pentru gentlemanul modern.",
      "all_products": "Toate produsele",
      "active_filters": "Filtre active",
      "sort_by": "Sortează după",
      "newest": "Cele mai noi",
      "price_low_to_high": "Preț: crescător",
      "price_high_to_low": "Preț: descrescător",
      "highest_rated": "Cele mai bine cotate",
      "price_range": "Interval de preț",
      "reset_filters": "Resetează filtrele",
      "no_products_found": "Nu s-au găsit produse",
      "try_adjust_filters": "Încercați să ajustați filtrele pentru a găsi ce căutați"
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
      "testimonial1_quote": "The attention to detail in my wedding suit was extraordinary. StilClas delivered exactly what I envisioned—timeless elegance with perfect tailoring.",
      "testimonial2_quote": "As a CEO, my appearance matters. StilClas suits have become my signature look—exceptional quality, perfect fit, and sophisticated style.",
      "testimonial3_quote": "The smart casual collection combines comfort with sophistication perfectly. These pieces have elevated my everyday style substantially.",
      
      // Google Reviews
      "google_reviews": "Customer Reviews",
      "google_reviews_subtitle": "See what our clients are saying about their experience with StilClas",
      "view_all_reviews": "View all reviews on Google",
      
      // Reservation form
      "reserve_in_store": "Reserve in Store",
      "reservation_description": "Complete the form to reserve your selected products. You will be notified when the products are ready for pickup.",
      "full_name": "Full Name",
      "full_name_placeholder": "John Doe",
      "preferred_pickup_date": "Preferred Pickup Date",
      "select_date": "Select a date",
      "submit_reservation": "Submit Reservation",
      "reservation_sending": "Sending...",
      "reservation_success_title": "Reservation Sent!",
      "reservation_success_message": "Your reservation has been successfully sent! You will receive a confirmation email shortly.",
      "reservation_error_title": "Error",
      "reservation_error_message": "There was an error sending your reservation. Please try again.",
      
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
      
      // Categories page
      "discover_our_exquisite_collections": "Discover our exquisite collections of menswear created with passion and craftsmanship",
      
      // Contact
      "contact_title": "Contact Us",
      "contact_subtitle": "We're here to help with any questions and formal wear needs you may have",
      "name": "Name",
      "email": "Email",
      "subject": "Subject",
      "message": "Message",
      "send_message": "Send Message",
      "get_in_touch": "Get in Touch",
      "contact_info_description": "Visit our flagship store or contact our customer service team for personalized assistance with your style needs.",
      "store_location": "Store Location",
      "store_address": "Amplasat în incinta APACA, Cotroceni Business Center\nStr. Iuliu Maniu, Nr. 7, corpul U, etaj 1\nBucharest 061072, Romania",
      "phone": "Phone",
      "phone_number": "0752 078 888",
      "email_address": "client@stilclas.ro",
      "business_hours": "Business Hours",
      "weekday_hours": "Monday-Friday: 10AM - 8PM",
      "saturday_hours": "Saturday: 10AM - 6PM",
      "sunday_hours": "Sunday: 12PM - 5PM",
      "follow_us": "Follow Us",
      "name_placeholder": "John Doe",
      "email_placeholder": "your@email.com",
      "subject_placeholder": "Inquiry about your products",
      "message_placeholder": "Your message here...",
      "sending": "Sending...",
      "message_sent": "Message Sent",
      "message_sent_description": "Thank you for your message. We'll get back to you shortly.",
      "error": "Error",
      "message_error_description": "There was a problem sending your message. Please try again later.",
      
      // Product details
      "add_to_cart": "Add to Cart",
      "select_color": "Select Color",
      "select_size": "Select Size",
      "product_details": "Product Details",
      "related_products": "Related Products",
      "quick_view": "Quick View",
      "reviews": "reviews",

      // Shop page
      "shop_heading": "Shop",
      "shop_description": "Browse our complete collection of premium suits and menswear, crafted for the modern gentleman.",
      "all_products": "All Products",
      "active_filters": "Active Filters",
      "sort_by": "Sort by",
      "newest": "Newest",
      "price_low_to_high": "Price: Low to High",
      "price_high_to_low": "Price: High to Low",
      "highest_rated": "Highest Rated",
      "price_range": "Price Range",
      "reset_filters": "Reset Filters",
      "no_products_found": "No products found",
      "try_adjust_filters": "Try adjusting your filters to find what you're looking for"
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