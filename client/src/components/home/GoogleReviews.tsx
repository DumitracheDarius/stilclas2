import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

// Structure for Google Review data
interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl?: string;
}

// Google reviews sample data (top reviews from StilClas)
const googleReviews: GoogleReview[] = [
  {
    id: "1",
    author: "Alexandru Ionescu",
    rating: 5,
    comment: "Calitate excepțională și servicii excelente! Am cumpărat un costum pentru o ocazie specială și am primit complimente toată seara. Materialele sunt de top și croiala impecabilă. Recomand cu încredere!",
    date: "2023-10-15",
    avatarUrl: "https://ui-avatars.com/api/?name=AI&background=random"
  },
  {
    id: "2",
    author: "Mihai Popescu",
    rating: 5,
    comment: "Servicii de cea mai înaltă calitate și personal foarte profesionist. Domnul care m-a servit a fost extrem de atent la detalii și m-a ajutat să aleg costumul perfect pentru evenimentul meu. Prețurile sunt corecte pentru calitatea oferită.",
    date: "2023-11-20",
    avatarUrl: "https://ui-avatars.com/api/?name=MP&background=random"
  },
  {
    id: "3",
    author: "Daniel Vasilescu",
    rating: 5,
    comment: "Magazin de lux cu produse de calitate superioară. Am cumpărat mai multe cămăși și un costum, toate de o calitate excepțională. Personalul este foarte amabil și de ajutor. Cu siguranță voi reveni.",
    date: "2023-12-05",
    avatarUrl: "https://ui-avatars.com/api/?name=DV&background=random"
  },
  {
    id: "4",
    author: "Cristian Dumitrescu",
    rating: 5,
    comment: "Am descoperit acest magazin printr-o recomandare și nu regret deloc. Costumele sunt elegante, materialele premium, iar asistența în alegerea mărimii perfecte a fost de mare ajutor. Recomand cu căldură tuturor care caută ținute formale de calitate.",
    date: "2024-01-18",
    avatarUrl: "https://ui-avatars.com/api/?name=CD&background=random"
  },
  {
    id: "5",
    author: "George Stanescu",
    rating: 4,
    comment: "O experiență foarte bună la StilClas. Calitatea produselor este excelentă, deși prețurile sunt puțin cam ridicate. Cu toate acestea, merită investiția pentru durabilitate și eleganță. Voi reveni cu siguranță.",
    date: "2024-02-10",
    avatarUrl: "https://ui-avatars.com/api/?name=GS&background=random"
  }
];

// Translation map for English versions of the reviews
const translatedReviews: Record<string, Partial<GoogleReview>> = {
  "1": {
    comment: "Exceptional quality and excellent service! I bought a suit for a special occasion and received compliments all evening. The materials are top-notch and the tailoring is impeccable. Highly recommended!"
  },
  "2": {
    comment: "Service of the highest quality and very professional staff. The gentleman who served me was extremely detail-oriented and helped me choose the perfect suit for my event. The prices are fair for the quality offered."
  },
  "3": {
    comment: "Luxury store with superior quality products. I purchased several shirts and a suit, all of exceptional quality. The staff is very friendly and helpful. I will definitely return."
  },
  "4": {
    comment: "I discovered this store through a recommendation and don't regret it at all. The suits are elegant, the materials premium, and the assistance in choosing the perfect size was very helpful. I warmly recommend them to anyone looking for quality formal wear."
  },
  "5": {
    comment: "A very good experience at StilClas. The quality of the products is excellent, although the prices are a bit high. Nevertheless, it's worth the investment for durability and elegance. I will definitely return."
  }
};

interface GoogleReviewsProps {
  className?: string;
}

export default function GoogleReviews({ className }: GoogleReviewsProps) {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedReviews, setDisplayedReviews] = useState<GoogleReview[]>(googleReviews);
  
  // Translate reviews based on current language
  useEffect(() => {
    if (i18n.language === 'en') {
      const translated = googleReviews.map(review => ({
        ...review,
        comment: translatedReviews[review.id]?.comment || review.comment
      }));
      setDisplayedReviews(translated);
    } else {
      setDisplayedReviews(googleReviews);
    }
  }, [i18n.language]);
  
  // Auto-rotate through reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayedReviews.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [displayedReviews.length]);
  
  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4", 
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        )} 
      />
    ));
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return new Date(dateString).toLocaleDateString(
      i18n.language === 'ro' ? 'ro-RO' : 'en-US', 
      options
    );
  };
  
  // Truncate long comment text
  const truncateComment = (text: string, maxLength = 180) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            {t("google_reviews")}
          </h2>
          <div className="mx-auto w-20 h-0.5 bg-burgundy mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("google_reviews_subtitle")}
          </p>
          <div className="flex items-center justify-center mt-4">
            <img src="/assets/google_logo.svg" alt="Google" className="h-8 mr-2" />
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-gray-700 font-medium">4.9</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div className="flex flex-nowrap transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {displayedReviews.map((review, index) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md relative">
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-100" />
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {review.avatarUrl ? (
                          <img 
                            src={review.avatarUrl} 
                            alt={review.author}
                            className="h-14 w-14 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xl font-medium text-gray-600">
                              {review.author.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{review.author}</h4>
                        <div className="flex items-center mt-1">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                          {formatDate(review.date)}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{truncateComment(review.comment)}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {displayedReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-3 w-3 mx-1 rounded-full transition-all",
                  index === activeIndex ? "bg-burgundy scale-110" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.google.com/search?q=STIL+CLAS+Reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-burgundy hover:text-burgundy-dark transition-colors font-medium"
          >
            {t("view_all_reviews")} <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}