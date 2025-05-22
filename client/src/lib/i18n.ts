import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  ro: {
    translation: {
      // Navigation
      home: "Acasă",
      collections: "Colecții",
      shop: "Magazin",
      about: "Despre noi",
      contact: "Contact",

      // Product Gallery
      main_image: "Imagine principală",
      thumbnail: "miniatură",
      view: "Vizualizare imagine",

      // Terms and Conditions Page
      terms_introduction_heading: "Introducere",
      terms_introduction_text:
        "Prin utilizarea site-ului nostru web, confirmați că ați citit, înțeles și sunteți de acord să respectați acești Termeni și Condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul nostru.",
      terms_use_heading: "Utilizarea Site-ului",
      terms_use_text:
        "Site-ul StilClas este destinat utilizării personale și necomerciale. Este interzisă utilizarea site-ului pentru activități ilegale sau neautorizate. Ne rezervăm dreptul de a restricționa accesul oricărui utilizator în cazul încălcării acestor termeni.",
      terms_intellectual_property_heading: "Proprietate Intelectuală",
      terms_intellectual_property_text:
        "Toate materialele prezentate pe acest site, inclusiv texte, imagini, design, logo-uri și conținut, sunt proprietatea StilClas și sunt protejate de legile drepturilor de autor și de proprietate intelectuală. Este interzisă reproducerea, distribuirea sau modificarea acestora fără acordul nostru explicit.",
      terms_user_accounts_heading: "Conturi de Utilizator",
      terms_user_accounts_text:
        "Când creați un cont pe site-ul nostru, sunteți responsabil pentru menținerea confidențialității informațiilor de autentificare și pentru toate activitățile care au loc sub contul dumneavoastră. Vă rugăm să ne notificați imediat despre orice utilizare neautorizată a contului dumneavoastră.",
      terms_products_heading: "Produse",
      terms_products_text:
        "Facem eforturi pentru a prezenta cât mai precis produsele noastre, inclusiv culorile, dimensiunile și detaliile. Cu toate acestea, nu putem garanta că afișarea pe ecranul dispozitivului dumneavoastră va fi exactă. Toate produsele sunt supuse disponibilității.",
      terms_reservations_heading: "Rezervări",
      terms_reservations_text:
        "Prin efectuarea unei rezervări pe site-ul nostru, confirmaţi că sunteți de acord să vizitați magazinul nostru în perioada specificată pentru a vedea produsul și a finaliza achiziția. Rezervările sunt valabile pentru perioada specificată și pot fi anulate dacă nu vă prezentați în această perioadă.",
      terms_liability_heading: "Limitarea Răspunderii",
      terms_liability_text:
        "StilClas nu este responsabilă pentru daune directe, indirecte, accidentale sau consecvente care rezultă din utilizarea sau incapacitatea de a utiliza site-ul nostru sau serviciile noastre.",
      terms_governing_law_heading: "Legislație Aplicabilă",
      terms_governing_law_text:
        "Acești termeni și condiții sunt guvernate de legile României. Orice dispută legată de site-ul nostru va fi soluționată în instanțele din România.",
      terms_changes_heading: "Modificări ale Termenilor",
      terms_changes_text:
        "Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările intră în vigoare imediat după publicarea pe site. Utilizarea continuă a site-ului după aceste modificări constituie acceptarea noilor termeni.",
      terms_contact_heading: "Contact",
      terms_contact_text:
        "Dacă aveți întrebări despre Termenii și Condițiile noastre, vă rugăm să ne contactați prin pagina de Contact sau la adresa de email afișată pe site.",
      terms_last_updated: "Ultima actualizare",
      terms_last_updated_date: "21 mai 2025",

      // Privacy Policy Page
      privacy_introduction:
        "La StilClas, respectăm confidențialitatea dumneavoastră și ne angajăm să protejăm datele personale. Această Politică de Confidențialitate explică cum colectăm, utilizăm și protejăm informațiile dumneavoastră când utilizați site-ul nostru.",
      privacy_information_collection_heading: "Informații pe care le colectăm",
      privacy_information_collection_text:
        "Putem colecta diferite tipuri de informații atunci când utilizați site-ul nostru, vă înregistrați pentru un cont sau efectuați o rezervare.",
      privacy_personal_data_heading: "Date personale",
      privacy_personal_data_text: "Putem colecta următoarele date personale:",
      privacy_personal_data_name: "Nume și prenume",
      privacy_personal_data_email: "Adresă de email",
      privacy_personal_data_phone: "Număr de telefon",
      privacy_personal_data_address: "Adresă",
      privacy_usage_data_heading: "Date de utilizare",
      privacy_usage_data_text:
        "Colectăm automat informații despre cum interacționați cu site-ul nostru, cum ar fi paginile vizitate, timpul petrecut pe site, produsele vizualizate și informații despre dispozitivul dumneavoastră.",
      privacy_data_use_heading: "Cum utilizăm datele dumneavoastră",
      privacy_data_use_text:
        "Utilizăm datele dumneavoastră personale pentru următoarele scopuri:",
      privacy_data_use_process_reservations:
        "Pentru a procesa și gestiona rezervările dumneavoastră",
      privacy_data_use_provide_service:
        "Pentru a vă oferi serviciile noastre și pentru a răspunde întrebărilor dumneavoastră",
      privacy_data_use_communications:
        "Pentru a vă trimite comunicări despre produsele și serviciile noastre (cu acordul dumneavoastră)",
      privacy_data_use_improve_service:
        "Pentru a îmbunătăți site-ul nostru și serviciile oferite",
      privacy_data_retention_heading: "Retenția datelor",
      privacy_data_retention_text:
        "Păstrăm datele dumneavoastră personale atât timp cât este necesar pentru a îndeplini scopurile pentru care au fost colectate, inclusiv pentru a satisface cerințele legale sau de raportare.",
      privacy_data_security_heading: "Securitatea datelor",
      privacy_data_security_text:
        "Implementăm măsuri de securitate adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, modificării, divulgării sau distrugerii.",
      privacy_cookies_heading: "Cookie-uri",
      privacy_cookies_text:
        "Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența utilizatorului. Puteți controla utilizarea cookie-urilor prin setările browserului dumneavoastră.",
      privacy_third_party_heading: "Partajarea cu terți",
      privacy_third_party_text:
        "Nu vindem, nu comercializăm și nu transferăm datele dumneavoastră personale unor terțe părți, cu excepția cazului în care avem permisiunea dumneavoastră sau suntem obligați legal să facem acest lucru.",
      privacy_childrens_privacy_heading: "Confidențialitatea copiilor",
      privacy_childrens_privacy_text:
        "Site-ul nostru nu este destinat copiilor sub 16 ani și nu colectăm cu bună știință date personale de la copii.",
      privacy_changes_heading: "Modificări ale politicii de confidențialitate",
      privacy_changes_text:
        "Putem actualiza periodic această politică de confidențialitate. Vă încurajăm să revizuiți această pagină pentru cele mai recente informații despre practicile noastre de confidențialitate.",
      privacy_contact_heading: "Contact",
      privacy_contact_text:
        "Dacă aveți întrebări despre Politica noastră de Confidențialitate, vă rugăm să ne contactați prin pagina de Contact sau la adresa de email afișată pe site.",
      privacy_last_updated: "Ultima actualizare",
      privacy_last_updated_date: "20 mai 2024",

      // FAQ Page
      faq_intro:
        "Aici găsiți răspunsuri la cele mai frecvente întrebări despre produsele și serviciile noastre. Dacă nu găsiți răspunsul la întrebarea dvs., nu ezitați să ne contactați.",
      faq_category_general: "Informații Generale",
      faq_general_q1: "Ce este StilClas?",
      faq_general_a1:
        "StilClas este un brand premium de îmbrăcăminte pentru bărbați, specializat în costume, sacouri și accesorii de înaltă calitate. Suntem dedicați excelenței în croitorie, folosind materiale premium și tehnici tradiționale pentru a crea piese elegante și durabile.",
      faq_general_q2: "Unde se află magazinul fizic StilClas?",
      faq_general_a2:
        "Magazinul nostru se află în București. Consultați pagina noastră de Contact pentru adresele exacte și programul de funcționare.",
      faq_general_q3: "Care este programul de funcționare al magazinelor?",
      faq_general_a3:
        "Magazinele noastre sunt deschise de luni până vineri între orele 09:00 și 18:00, sâmbătă între 10:00 și 18:00, și duminică între 10:00 și 15:30. Programul poate varia în perioada sărbătorilor.",
      faq_category_products: "Produse",
      faq_products_q1: "Ce tipuri de produse oferă StilClas?",
      faq_products_a1:
        "Oferim o gamă completă de îmbrăcăminte formală pentru bărbați, inclusiv costume, sacouri, pantaloni, cămăși, precum și accesorii precum cravate, papioane, butoni și curele. Toate produsele noastre sunt realizate din materiale premium, cu o atenție deosebită la detalii.",
      faq_products_q2: "Cum pot afla mărimea potrivită pentru mine?",
      faq_products_a2:
        "Fiecare produs din magazinul nostru online include un ghid detaliat de mărimi. Pentru o potrivire perfectă, vă recomandăm să vizitați unul dintre magazinele noastre pentru o consultare personalizată și măsurători profesionale.",
      faq_products_q3: "Produsele pot fi personalizate?",
      faq_products_a3:
        "Da, oferim servicii de personalizare pentru majoritatea produselor noastre. Puteți solicita ajustări pentru o potrivire perfectă sau modificări de design pentru a crea o piesă unică. Aceste servicii sunt disponibile în magazinele noastre fizice.",
      faq_products_q4:
        "Care este diferența între costumele de ceremonie și cele de business?",
      faq_products_a4:
        "Costumele de ceremonie sunt concepute pentru ocazii speciale, cum ar fi nunți sau evenimente formale, și prezintă adesea detalii distinctive și materiale premium. Costumele de business sunt create pentru uz profesional, cu un accent pe confort și durabilitate pentru purtare zilnică.",
      faq_category_reservations: "Rezervări",
      faq_reservations_q1: "Cum funcționează sistemul de rezervare online?",
      faq_reservations_a1:
        "Sistemul nostru de rezervare vă permite să selectați produsele dorite online și să le rezervați pentru a le încerca în magazin. Completați formularul de rezervare cu detaliile dumneavoastră și preferințele de vizitare, iar un consultant vă va pregăti produsele pentru când ajungeți.",
      faq_reservations_q2: "Cât timp este valabilă o rezervare?",
      faq_reservations_a2:
        "Rezervările sunt valabile timp de 7 zile de la data confirmării. Dacă nu puteți ajunge în această perioadă, vă rugăm să ne contactați pentru a reprograma vizita.",
      faq_reservations_q3:
        "Există vreun cost pentru efectuarea unei rezervări?",
      faq_reservations_a3:
        "Nu, serviciul de rezervare este complet gratuit. Plătiți doar dacă decideți să achiziționați produsele după ce le încercați în magazin.",
      faq_category_shipping: "Livrare",
      faq_shipping_q1: "Care sunt opțiunile de livrare disponibile?",
      faq_shipping_a1:
        "Există doar opțiunea de ridicare personală din magazinele noastre.",
      faq_shipping_q2: "Cât costă livrarea?",
      faq_shipping_a2: "Nu costă.",
      faq_category_returns: "Returnări și Garanții",
      faq_returns_q1: "Care este politica de returnare?",
      faq_returns_a1:
        "Acceptăm returnări în termen de 14 zile de la primirea produsului, cu condiția ca articolele să fie în starea originală, cu etichetele atașate și ambalajul original. Costurile de returnare sunt suportate de client, cu excepția cazurilor în care produsul prezintă defecte.",
      faq_returns_q2: "Ce garanție oferă produsele StilClas?",
      faq_returns_a2:
        "Toate produsele noastre beneficiază de o garanție de 24 de luni care acoperă defectele de fabricație. Această garanție nu acoperă uzura normală sau daunele cauzate de utilizarea necorespunzătoare.",
      faq_returns_q3: "Cum pot face o reclamație sau returna un produs?",
      faq_returns_a3:
        "Pentru a returna un produs sau a face o reclamație, vă rugăm să contactați serviciul nostru clienți prin email sau telefon. Veți primi instrucțiuni detaliate despre procesul de returnare și documentele necesare.",
      faq_contact_text:
        "Nu ați găsit răspunsul la întrebarea dvs.? Contactați-ne direct la",
      contact_us: "Contactați-ne",

      // Hero Section
      hero_title: "Eleganță și Rafinament",
      hero_subtitle:
        "Costume și îmbrăcăminte pentru bărbați realizate cu precizie și pasiune",
      explore_collection: "Explorează Magazinul",

      // Collections
      the_bordeaux_edit: "Colecția Costume Ceremonie",
      bordeaux_description: "Tonuri sofisticate pentru cunoscători.",
      black_tie_essentials: "Colecția Cravate",
      black_tie_description: "Eleganță pentru ocazii formale.",
      summer_sophistication: "Colecția Butoni",
      summer_description: "Pentru eleganță.",
      urban_classics: "Clasici Urbani",
      urban_description:
        "Stiluri contemporane pentru gentlemanul modern al orașului.",

      // Main Categories
      suits: "Costume",
      ceremony: "Ceremonie",
      business: "Business",
      casual: "Casual",
      blazers: "Sacouri",
      trousers: "Pantaloni",
      shirts: "Cămăși",
      ties: "Cravate",
      cufflinks: "Butoni",
      bow_ties: "Papioane",
      belts: "Curele",

      // Best Sellers
      best_sellers: "Cele mai vândute",
      view_all: "Vezi toate",

      // Brand Values
      brand_values: "Valorile Noastre",
      craftsmanship: "Măiestrie",
      craftsmanship_desc:
        "Fiecare costum este realizat cu atenție meticuloasă la detalii.",
      materials: "Calitate",
      materials_desc:
        "Utilizăm doar cele mai fine materiale pentru a crea îmbrăcăminte care durează.",
      design: "Moștenire",
      design_desc: "Mândri de tradiția și expertiza noastră în croitorie.",
      sustainability: "Inovație",
      sustainability_desc: "Combinăm tehnici tradiționale cu design modern.",

      // Testimonials
      testimonials: "Mărturii",
      testimonial1_quote:
        "Atenția la detalii în costumul meu de nuntă a fost extraordinară. StilClas a livrat exact ceea ce mi-am imaginat—eleganță fără timp cu o croială perfectă.",
      testimonial2_quote:
        "Ca CEO, aspectul meu contează. Costumele StilClas au devenit imaginea mea de marcă—calitate excepțională, potrivire perfectă și stil sofisticat.",
      testimonial3_quote:
        "Colecția smart casual combină confortul cu rafinamentul perfect. Aceste piese mi-au îmbunătățit substanțial stilul de zi cu zi.",

      // Google Reviews
      google_reviews: "Recenzii Clienți",
      google_reviews_subtitle:
        "Vedeți ce spun clienții noștri despre experiența lor cu StilClas",
      view_all_reviews: "Vezi toate recenziile pe Google",

      // Location section
      where_to_find_us: "Unde ne găsiți?",
      here_you_can_find_us: "Aici ne găsești!",
      amplasament:
        "Amplasat în incinta APACA, Cotroceni Business Center Str. Iuliu Maniu, Nr. 7, corpul U, etaj 1 București 061072, România",

      // Reservation form
      reserve_in_store: "Rezervă în magazin",
      reservation_description:
        "Completați formularul pentru a rezerva produsele selectate. Veți fi notificat când produsele sunt gata pentru a fi ridicate.",
      full_name: "Nume complet",
      full_name_placeholder: "Ion Popescu",
      res_email: "Email",
      res_email_placeholder: "adresa@email.ro",
      res_phone: "Telefon",
      phone_placeholder: "0712 345 678",
      address: "Adresă",
      address_placeholder: "Adresa dvs. completă",
      preferred_date: "Data dorită pentru achiziție",
      preferred_time: "Ora dorită pentru achiziție",
      notes: "Note suplimentare",
      notes_placeholder:
        "Orice informații suplimentare pentru rezervarea dvs...",
      selected_items: "Produse selectate",
      subtotal: "Subtotal",
      proceed_to_reservation: "Continuă cu rezervarea",
      complete_reservation: "Finalizează rezervarea",
      cancel: "Anulează",
      submitting: "Se trimite...",
      your_cart: "Coșul tău",
      cart_empty_message: "Coșul tău este gol",
      cart_empty_description:
        "Nu ai niciun produs în coș. Explorează colecțiile noastre și adaugă produse.",
      cart_item_count: "{{count}} produse în coș",
      clear_cart: "Golește coșul",
      open_cart: "Deschide coșul",
      cart_reservation_coming_soon:
        "Sistemul de rezervare va fi disponibil în curând!",
      reservation_title: "Rezervă produsele",
      reservation_success: "Rezervare trimisă!",
      reservation_success_message:
        "Rezervarea a fost trimisă cu succes! Veți primi un email de confirmare în curând.",
      reservation_error: "Eroare",
      reservation_error_message:
        "A apărut o eroare la trimiterea rezervării. Vă rugăm să încercați din nou.",

      // Footer
      company_description:
        "Creăm costume și îmbrăcăminte pentru bărbați premium cu atenție excepțională la detalii, materiale de calitate și design fără timp.",
      quick_links: "Linkuri Rapide",
      customer_service: "Servicii Clienți",
      faq: "Întrebări Frecvente",
      shipping: "Livrare",
      returns: "Returnări",
      sizing_guide: "Ghid Mărimi",
      terms_and_conditions: "Termeni și Condiții",
      privacy_policy: "Politica de Confidențialitate",
      faqs: "Întrebări Frecvente",
      newsletter: "Abonează-te la newsletter",
      newsletter_desc:
        "Abonează-te pentru a primi noutăți despre colecții și oferte exclusive.",
      subscribe: "Abonează-te",
      copyright: "© 2025 StilClas. Toate drepturile rezervate.",

      // Cookie Banner
      cookie_notice: "Notificare privind cookie-urile",
      cookie_description:
        "Acest site utilizează cookie-uri pentru a vă oferi cea mai bună experiență. Prin continuarea navigării, sunteți de acord cu politica noastră de cookie-uri.",
      accept_cookies: "Accept",

      // About Us
      about_title: "Despre StilClas",
      about_subtitle: "Eleganță Românească, Croitorie Autentică",
      our_story: "Povestea Noastră",
      our_story_p1:
        "Fondat în anul 2005, StilClas s-a născut din pasiunea pentru croitoria autentic românească și eleganța clasică. Atelierul nostru combină tradiția croitoriei manuale cu stilul contemporan, oferind articole vestimentare personalizate și rafinate.",
      our_story_p2:
        "Astăzi, StilClas este recunoscut ca un brand premium dedicat bărbaților care apreciază eleganța și calitatea ireproșabilă. Fiecare costum sau articol vestimentar creat în atelierul nostru reflectă angajamentul nostru profund față de detaliu, croiala perfectă și stilul atemporal.",
      our_story_p3:
        "Artizanii noștri români, cu vastă experiență în domeniu, se asigură că fiecare piesă este realizată impecabil, pentru a pune în valoare personalitatea și prezența purtătorului.",
      discover_craftsmanship: "Descoperă Arta Croitoriei Românești",
      our_mission: "Misiunea Noastră",
      mission_description:
        "Misiunea noastră la StilClas este de a oferi clienților noștri articole vestimentare elegante, confortabile și durabile, realizate prin tehnici tradiționale românești. Folosim materiale premium și acordăm atenție fiecărui detaliu pentru a garanta o experiență excepțională la fiecare purtare.",
      our_vision: "Viziunea Noastră",
      vision_description:
        "Ne dorim să promovăm eleganța autentic românească la nivel internațional, transformând îmbrăcarea dintr-o simplă necesitate zilnică într-o formă de exprimare personală. StilClas aspiră să devină sinonim cu rafinamentul, măiestria artizanală și stilul inconfundabil românesc.",
      our_craftsmanship: "Măiestria Noastră",
      art_of_tailoring: "Arta Croitoriei",
      tailoring_p1:
        "La StilClas, croitoria tradițională românească întâlnește inovația. Fiecare articol începe cu selectarea celor mai bune materiale disponibile pe piață, alese special pentru calitatea și rafinamentul lor. Croitorii noștri experimentați lucrează cu o grijă meticuloasă pentru a asigura rezultate excepționale.",
      tailoring_p2:
        "Suntem dedicați tehnicilor clasice de croitorie, de la cusături manuale delicate până la structuri interne bine definite. Rezultatul este o îmbrăcăminte ce se remarcă prin confort superior, stil și rezistență în timp.",
      tailoring_p3:
        "Credem că adevărata eleganță rezidă în detalii: o butonieră perfect lucrată, un rever elegant modelat și finisaje interioare impecabile. Aceste detalii fac diferența și definesc standardul StilClas.",
      // Categories page
      discover_our_exquisite_collections:
        "Descoperă colecțiile noastre exclusiviste de îmbrăcăminte pentru bărbați create cu pasiune și măiestrie",

      // Contact
      contact_title: "Contactează-ne",
      contact_subtitle:
        "Suntem aici pentru a te ajuta cu întrebările și nevoile tale de îmbrăcăminte formală",
      name: "Nume",
      email: "Email",
      subject: "Subiect",
      message: "Mesaj",
      send_message: "Trimite Mesaj",
      get_in_touch: "Contactează-ne",
      contact_info_description:
        "Vizitați magazinul nostru sau contactați echipa de servicii clienți pentru asistență personalizată în alegerea stilului potrivit.",
      store_location: "Locația Magazinului",
      store_address:
        "Amplasat în incinta APACA, Cotroceni Business Center\nStr. Iuliu Maniu, Nr. 7, corpul U, etaj 1\nBucurești 061072, România",
      phone: "Telefon",
      phone_number: "0752 078 888",
      email_address: "client@stilclas.ro",
      business_hours: "Program",
      weekday_hours: "Luni-Vineri: 09:00 - 18:00",
      saturday_hours: "Sâmbătă: 09:00 - 15:30",
      sunday_hours: "Duminică: 10:00 - 15:30",
      follow_us: "Urmărește-ne",
      name_placeholder: "Ion Popescu",
      email_placeholder: "adresa@email.ro",
      subject_placeholder: "Întrebare despre produsele dvs.",
      message_placeholder: "Mesajul tău aici...",
      contact_sending: "Se trimite...",
      message_sent: "Mesaj Trimis",
      message_sent_description:
        "Îți mulțumim pentru mesaj. Te vom contacta în curând.",
      error: "Eroare",
      message_error_description:
        "A apărut o problemă la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.",

      // Cart and Checkout
      shopping_cart: "Coș de cumpărături",
      empty_cart: "Coșul tău este gol",
      empty_cart_message:
        "Explorează colecțiile noastre și adaugă produse în coș",
      continue_shopping: "Continuă cumpărăturile",
      total: "Total",
      add_to_wishlist: "Adaugă la favorite",
      success: "Succes",
      product_added_to_cart: "Produsul a fost adăugat în coș",
      cart_error: "Eroare",
      please_select_size: "Te rugăm să selectezi mărimea",
      please_select_color: "Te rugăm să selectezi culoarea",
      error_adding_to_cart: "A apărut o eroare la adăugarea produsului în coș",
      add_to_cart: "Adaugă în coș",
      select_color: "Selectează culoarea",
      select_size: "Selectează mărimea",
      product_details: "Detalii produs",
      related_products: "Produse similare",
      quick_view: "Previzualizare",
      reviews: "recenzii",

      // Shop page
      shop_heading: "Magazin",
      shop_description:
        "Explorați colecția noastră completă de costume și îmbrăcăminte pentru bărbați premium, create pentru gentlemanul modern.",
      all_products: "Toate produsele",
      active_filters: "Filtre active",
      sort_by: "Sortează după",
      newest: "Cele mai noi",
      price_low_to_high: "Preț: crescător",
      price_high_to_low: "Preț: descrescător",
      highest_rated: "Cele mai bine cotate",
      price_range: "Interval de preț",
      reset_filters: "Resetează filtrele",
      no_products_found: "Nu s-au găsit produse",
      try_adjust_filters:
        "Încercați să ajustați filtrele pentru a găsi ce căutați",
    },
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      collections: "Collections",
      shop: "Shop",
      about: "About Us",
      contact: "Contact",

      // Product Gallery
      main_image: "Main image",
      thumbnail: "thumbnail",
      view: "View image",

      // Hero Section
      hero_title: "Elegance & Refinement",
      hero_subtitle:
        "Premium suits and menswear crafted with precision and passion",
      explore_collection: "Explore our Shop",

      // Collections
      the_bordeaux_edit: "The Ceremony Suit",
      bordeaux_description: "Sophisticated tones for the connoisseur.",
      black_tie_essentials: "The Ties Collection",
      black_tie_description: "Timeless elegance for formal occasions.",
      summer_sophistication: "The Buttons Collection",
      summer_description: "Lightweight linen for warm-weather elegance.",
      urban_classics: "Urban Classics",
      urban_description: "Contemporary styles for the modern city gentleman.",

      // Main Categories
      suits: "Suits",
      ceremony: "Ceremony",
      business: "Business",
      casual: "Casual",
      blazers: "Blazers",
      trousers: "Trousers",
      shirts: "Shirts",
      ties: "Ties",
      cufflinks: "Cufflinks",
      bow_ties: "Bow Ties",
      belts: "Belts",

      // Best Sellers
      best_sellers: "Best Sellers",
      view_all: "View All",

      // Brand Values
      brand_values: "Our Values",
      craftsmanship: "Craftsmanship",
      craftsmanship_desc:
        "Each suit is crafted with meticulous attention to detail.",
      materials: "Quality",
      materials_desc:
        "We use only the finest materials to create clothing that lasts.",
      design: "Heritage",
      design_desc: "Proud of our tradition and expertise in tailoring.",
      sustainability: "Innovation",
      sustainability_desc:
        "Combining traditional techniques with modern design.",

      // Testimonials
      testimonials: "Testimonials",
      testimonial1_quote:
        "The attention to detail in my wedding suit was extraordinary. StilClas delivered exactly what I envisioned—timeless elegance with perfect tailoring.",
      testimonial2_quote:
        "As a CEO, my appearance matters. StilClas suits have become my signature look—exceptional quality, perfect fit, and sophisticated style.",
      testimonial3_quote:
        "The smart casual collection combines comfort with sophistication perfectly. These pieces have elevated my everyday style substantially.",

      // Google Reviews
      google_reviews: "Customer Reviews",
      google_reviews_subtitle:
        "See what our clients are saying about their experience with StilClas",
      view_all_reviews: "View all reviews on Google",

      // Location section
      where_to_find_us: "Where to find us?",
      here_you_can_find_us: "Here you can find us!",
      amplasament:
        "Located in the APACA premises, Cotroceni Business Center Str. Iuliu Maniu, No. 7, building U, 1st floor Bucharest 061072, Romania",

      // Reservation form
      reserve_in_store: "Reserve in Store",
      reservation_description:
        "Complete the form to reserve your selected products. You will be notified when the products are ready for pickup.",
      full_name: "Full Name",
      full_name_placeholder: "John Doe",
      preferred_pickup_date: "Preferred Pickup Date",
      select_date: "Select a date",
      submit_reservation: "Submit Reservation",
      reservation_sending: "Sending...",
      reservation_success_title: "Reservation Sent!",
      reservation_success_message:
        "Your reservation has been successfully sent! You will receive a confirmation email shortly.",
      reservation_error_title: "Error",
      reservation_error_message:
        "There was an error sending your reservation. Please try again.",

      // Footer
      company_description:
        "Crafting premium suits and menswear with exceptional attention to detail, quality materials, and timeless design.",
      quick_links: "Quick Links",
      customer_service: "Customer Service",
      faq: "FAQ",
      shipping: "Shipping",
      returns: "Returns",
      sizing_guide: "Sizing Guide",
      terms: "Terms & Conditions",
      privacy_policy: "Privacy Policy",
      newsletter: "Subscribe to our newsletter",
      newsletter_desc:
        "Subscribe to receive updates on new collections and exclusive offers.",
      subscribe: "Subscribe",
      copyright: "© 2024 StilClas. All rights reserved.",

      // Cookie Banner
      cookie_notice: "Cookie Notice",
      cookie_description:
        "This site uses cookies to provide you with the best experience. By continuing to browse, you agree to our cookie policy.",
      accept_cookies: "Accept",

      // Terms and Conditions Page
      terms_introduction_heading: "Introduction",
      terms_introduction_text:
        "By using our website, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our site.",
      terms_use_heading: "Use of the Site",
      terms_use_text:
        "The StilClas website is intended for personal, non-commercial use. You are prohibited from using the site for any illegal or unauthorized activities. We reserve the right to restrict access for any user who violates these terms.",
      terms_intellectual_property_heading: "Intellectual Property",
      terms_intellectual_property_text:
        "All materials on this site, including text, images, design, logos, and content are the property of StilClas and are protected by copyright and intellectual property laws. Reproduction, distribution, or modification without our explicit consent is prohibited.",
      terms_user_accounts_heading: "User Accounts",
      terms_user_accounts_text:
        "When creating an account on our site, you are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.",
      terms_products_heading: "Products",
      terms_products_text:
        "We make efforts to present our products as accurately as possible, including colors, dimensions, and details. However, we cannot guarantee that the display on your device will be accurate. All products are subject to availability.",
      terms_reservations_heading: "Reservations",
      terms_reservations_text:
        "By making a reservation on our site, you confirm that you agree to visit our store within the specified period to view the product and complete the purchase. Reservations are valid for the specified period and may be canceled if you do not show up during this period.",
      terms_liability_heading: "Limitation of Liability",
      terms_liability_text:
        "StilClas is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our site or services.",
      terms_governing_law_heading: "Governing Law",
      terms_governing_law_text:
        "These terms and conditions are governed by the laws of Romania. Any dispute related to our site will be resolved in the courts of Romania.",
      terms_changes_heading: "Changes to Terms",
      terms_changes_text:
        "We reserve the right to modify these terms at any time. Changes are effective immediately upon posting to the site. Your continued use of the site after such changes constitutes acceptance of the new terms.",
      terms_contact_heading: "Contact",
      terms_contact_text:
        "If you have any questions about our Terms and Conditions, please contact us through the Contact page or at the email address displayed on the site.",
      terms_last_updated: "Last updated",
      terms_last_updated_date: "May 21, 2025",

      // Privacy Policy Page
      privacy_introduction:
        "At StilClas, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.",
      privacy_information_collection_heading: "Information We Collect",
      privacy_information_collection_text:
        "We may collect various types of information when you use our website, register for an account, or make a reservation.",
      privacy_personal_data_heading: "Personal Data",
      privacy_personal_data_text: "We may collect the following personal data:",
      privacy_personal_data_name: "First and last name",
      privacy_personal_data_email: "Email address",
      privacy_personal_data_phone: "Phone number",
      privacy_personal_data_address: "Address",
      privacy_usage_data_heading: "Usage Data",
      privacy_usage_data_text:
        "We automatically collect information about how you interact with our website, such as pages visited, time spent on the site, products viewed, and information about your device.",
      privacy_data_use_heading: "How We Use Your Data",
      privacy_data_use_text:
        "We use your personal data for the following purposes:",
      privacy_data_use_process_reservations:
        "To process and manage your reservations",
      privacy_data_use_provide_service:
        "To provide our services and respond to your inquiries",
      privacy_data_use_communications:
        "To send you communications about our products and services (with your consent)",
      privacy_data_use_improve_service: "To improve our website and services",
      privacy_data_retention_heading: "Data Retention",
      privacy_data_retention_text:
        "We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal or reporting requirements.",
      privacy_data_security_heading: "Data Security",
      privacy_data_security_text:
        "We implement appropriate security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.",
      privacy_cookies_heading: "Cookies",
      privacy_cookies_text:
        "Our website uses cookies to enhance the user experience. You can control the use of cookies through your browser settings.",
      privacy_third_party_heading: "Third-Party Sharing",
      privacy_third_party_text:
        "We do not sell, trade, or transfer your personal data to third parties unless we have your permission or are legally required to do so.",
      privacy_childrens_privacy_heading: "Children's Privacy",
      privacy_childrens_privacy_text:
        "Our website is not intended for children under 16 years of age, and we do not knowingly collect personal data from children.",
      privacy_changes_heading: "Changes to Privacy Policy",
      privacy_changes_text:
        "We may periodically update this privacy policy. We encourage you to review this page for the latest information about our privacy practices.",
      privacy_contact_heading: "Contact",
      privacy_contact_text:
        "If you have questions about our Privacy Policy, please contact us through the Contact page or at the email address displayed on the site.",
      privacy_last_updated: "Last updated",
      privacy_last_updated_date: "May 20, 2024",

      // FAQ Page
      faq_intro:
        "Here you'll find answers to the most frequently asked questions about our products and services. If you don't find the answer to your question, please don't hesitate to contact us.",
      faq_category_general: "General Information",
      faq_general_q1: "What is StilClas?",
      faq_general_a1:
        "StilClas is a premium menswear brand, specializing in high-quality suits, blazers, and accessories. We are dedicated to excellence in tailoring, using premium materials and traditional techniques to create elegant and durable pieces.",
      faq_general_q2: "Where is the StilClas physical store located?",
      faq_general_a2:
        "Our store is located in Bucharest. Check our Contact page for exact addresses and operating hours.",
      faq_general_q3: "What are the store operating hours?",
      faq_general_a3:
        "Our stores are open Monday to Friday from 09:00 AM to 18:00 PM, Saturday from 09:00 AM to 15:30 PM, and Sunday from 10:00 AM to 15:30 PM. Hours may vary during holidays.",
      faq_category_products: "Products",
      faq_products_q1: "What types of products does StilClas offer?",
      faq_products_a1:
        "We offer a complete range of formal menswear, including suits, blazers, trousers, shirts, as well as accessories such as ties, bow ties, cufflinks, and belts. All our products are made from premium materials, with careful attention to detail.",
      faq_products_q2: "How can I find the right size for me?",
      faq_products_a2:
        "Each product in our online store includes a detailed size guide. For a perfect fit, we recommend visiting one of our stores for a personalized consultation and professional measurements.",
      faq_products_q3: "Can products be customized?",
      faq_products_a3:
        "Yes, we offer customization services for most of our products. You can request adjustments for a perfect fit or design modifications to create a unique piece. These services are available in our physical stores.",
      faq_products_q4:
        "What is the difference between ceremony and business suits?",
      faq_products_a4:
        "Ceremony suits are designed for special occasions such as weddings or formal events and often feature distinctive details and premium materials. Business suits are created for professional use, with an emphasis on comfort and durability for daily wear.",
      faq_category_reservations: "Reservations",
      faq_reservations_q1: "How does the online reservation system work?",
      faq_reservations_a1:
        "Our reservation system allows you to select the desired products online and reserve them to try on in-store. Fill out the reservation form with your details and visiting preferences, and a consultant will prepare the products for when you arrive.",
      faq_reservations_q2: "How long is a reservation valid?",
      faq_reservations_a2:
        "Reservations are valid for 7 days from the date of confirmation. If you cannot make it within this period, please contact us to reschedule your visit.",
      faq_reservations_q3: "Is there a cost for making a reservation?",
      faq_reservations_a3:
        "No, the reservation service is completely free. You only pay if you decide to purchase the products after trying them on in-store.",
      faq_category_shipping: "Shipping",
      faq_shipping_q1: "What shipping options are available?",
      faq_shipping_a1:
        "The only option is for personal pickup from our stores.",
      faq_shipping_q2: "How much does shipping cost?",
      faq_shipping_a2: "No cost.",
      faq_category_returns: "Returns and Warranties",
      faq_returns_q1: "What is the return policy?",
      faq_returns_a1:
        "We accept returns within 14 days of receiving the product, provided that the items are in their original condition, with tags attached and original packaging. Return costs are borne by the customer, except in cases where the product is defective.",
      faq_returns_q2: "What warranty do StilClas products have?",
      faq_returns_a2:
        "All our products come with a 24-month warranty covering manufacturing defects. This warranty does not cover normal wear and tear or damage caused by improper use.",
      faq_returns_q3: "How can I make a complaint or return a product?",
      faq_returns_a3:
        "To return a product or make a complaint, please contact our customer service via email or phone. You will receive detailed instructions about the return process and the necessary documents.",
      faq_contact_text:
        "Didn't find the answer to your question? Contact us directly at",
      contact_us: "Contact Us",

      // About Us
      about_title: "About StilClas",
      about_subtitle: "Romanian Elegance, Authentic Tailoring",
      our_story: "Our Story",
      our_story_p1:
        "Established in 2005, StilClas emerged from a passion for authentic Romanian tailoring and classic elegance. Our atelier blends traditional handcrafting techniques with contemporary style, delivering bespoke garments distinguished by refinement and individuality.",
      our_story_p2:
        "Today, StilClas is recognized as a premium brand dedicated to men who value exceptional quality and timeless elegance. Every suit or garment crafted in our atelier embodies our profound commitment to meticulous detail, impeccable fit, and enduring style.",
      our_story_p3:
        "Our Romanian artisans, renowned for their extensive experience, ensure each piece is impeccably made to highlight the wearer’s personality and presence.",
      discover_craftsmanship: "Discover Romanian Tailoring Excellence",
      our_mission: "Our Mission",
      mission_description:
        "At StilClas, our mission is to provide our clients with elegant, comfortable, and durable clothing crafted through traditional Romanian tailoring techniques. We use premium materials and pay close attention to every detail to ensure an exceptional wearing experience.",
      our_vision: "Our Vision",
      vision_description:
        "We aim to internationally promote authentic Romanian elegance, transforming daily dressing into an expression of personal style. StilClas aspires to become synonymous with refinement, artisanal craftsmanship, and distinctive Romanian flair.",
      our_craftsmanship: "Our Craftsmanship",
      art_of_tailoring: "The Art of Tailoring",
      tailoring_p1:
        "At StilClas, traditional Romanian tailoring meets innovation. Each garment begins with the finest materials available, carefully selected for their superior quality and elegance. Our skilled tailors work meticulously to achieve exceptional results.",
      tailoring_p2:
        "We are committed to classic tailoring techniques, from delicate hand stitching to well-defined internal structures. The result is clothing renowned for superior comfort, style, and durability.",
      tailoring_p3:
        "We believe true elegance lies in details: a perfectly crafted buttonhole, elegantly shaped lapels, and impeccable interior finishes. These subtle touches set StilClas apart and define our standard of excellence.",

      // Categories page
      discover_our_exquisite_collections:
        "Discover our exquisite collections of menswear created with passion and craftsmanship",

      // Contact
      contact_title: "Contact Us",
      contact_subtitle:
        "We're here to help with any questions and formal wear needs you may have",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send_message: "Send Message",
      get_in_touch: "Get in Touch",
      contact_info_description:
        "Visit our flagship store or contact our customer service team for personalized assistance with your style needs.",
      store_location: "Store Location",
      store_address:
        "Amplasat în incinta APACA, Cotroceni Business Center\nStr. Iuliu Maniu, Nr. 7, corpul U, etaj 1\nBucharest 061072, Romania",
      phone: "Phone",
      phone_number: "0752 078 888",
      email_address: "client@stilclas.ro",
      business_hours: "Business Hours",
      weekday_hours: "Monday-Friday: 9AM - 6PM",
      saturday_hours: "Saturday: 9AM - 3:30PM",
      sunday_hours: "Sunday: 10PM - 3:30PM",
      follow_us: "Follow Us",
      name_placeholder: "John Doe",
      email_placeholder: "your@email.com",
      subject_placeholder: "Inquiry about your products",
      message_placeholder: "Your message here...",
      contact_sending: "Sending...",
      message_sent: "Message Sent",
      message_sent_description:
        "Thank you for your message. We'll get back to you shortly.",
      error: "Error",
      message_error_description:
        "There was a problem sending your message. Please try again later.",

      // Cart and Checkout
      shopping_cart: "Shopping Cart",
      empty_cart: "Your cart is empty",
      empty_cart_message:
        "Browse our collections and add some items to your cart",
      continue_shopping: "Continue Shopping",
      total: "Total",
      add_to_wishlist: "Add to Wishlist",
      success: "Success",
      product_added_to_cart: "Product added to cart successfully",
      cart_error: "Error",
      please_select_size: "Please select a size",
      please_select_color: "Please select a color",
      error_adding_to_cart: "There was an error adding this product to cart",
      add_to_cart: "Add to Cart",
      select_color: "Select Color",
      select_size: "Select Size",
      product_details: "Product Details",
      related_products: "Related Products",
      quick_view: "Quick View",
      reviews: "reviews",

      // Shop page
      shop_heading: "Shop",
      shop_description:
        "Browse our complete collection of premium suits and menswear, crafted for the modern gentleman.",
      all_products: "All Products",
      active_filters: "Active Filters",
      sort_by: "Sort by",
      newest: "Newest",
      price_low_to_high: "Price: Low to High",
      price_high_to_low: "Price: High to Low",
      highest_rated: "Highest Rated",
      price_range: "Price Range",
      reset_filters: "Reset Filters",
      no_products_found: "No products found",
      try_adjust_filters:
        "Try adjusting your filters to find what you're looking for",
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "ro", // Default language
  fallbackLng: "ro",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
