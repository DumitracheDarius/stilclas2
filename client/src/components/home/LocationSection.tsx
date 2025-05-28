import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { sectionContainerVariants } from "@/components/ui/stylesheet";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom CSS for Google Maps-like styling
const customPopupStyle = `
  .custom-popup {
    position: absolute !important;
    left: 20px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    margin-left: 0 !important;
  }
  .custom-popup .leaflet-popup-content-wrapper {
    background: white;
    border-radius: 8px;
    padding: 0;
    box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);
    width: 300px;
  }
  .custom-popup .leaflet-popup-content {
    margin: 0;
    width: 100% !important;
  }
  .custom-popup .leaflet-popup-tip-container {
    display: none;
  }
  .store-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .store-info {
    padding: 16px;
  }
  .store-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    color: #1a73e8;
    margin-bottom: 8px;
  }
  .store-rating {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .store-stars {
    color: #ffd700;
    margin-right: 8px;
  }
  .store-reviews {
    color: #70757a;
    font-size: 14px;
  }
  .store-type {
    color: #70757a;
    font-size: 14px;
    margin-bottom: 12px;
  }
  .store-address {
    color: #202124;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .store-hours {
    color: #188038;
    font-size: 14px;
    margin-bottom: 12px;
  }
  .store-website {
    color: #1a73e8;
    font-size: 14px;
    text-decoration: none;
  }
`;

export default function LocationSection() {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const location = { lat: 44.436214, lng: 26.0593453 };
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Add custom CSS
    const style = document.createElement('style');
    style.textContent = customPopupStyle;
    document.head.appendChild(style);

    // Create map instance
    const map = L.map(mapRef.current).setView([location.lat, location.lng], 17);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles with a cleaner style
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative;">
          <img src="/assets/logoStilClas.png" style="width: 64px; height: 64px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);" />
          <div style="position: absolute; bottom: -30px; left: 80%; transform: translateX(-50%); width: 2px; height: 30px; background: #EA4335;"></div>
          <div style="position: absolute; bottom: -40px; left: 80%; transform: translateX(-50%) rotate(45deg); width: 20px; height: 20px; background: #EA4335;"></div>
        </div>
      `,
      iconSize: [40, 60],
      iconAnchor: [20, 40],
      popupAnchor: [-150, 0] // Position popup to the left of the marker
    });

    // Add marker with custom icon
    const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);

    // Create Google Maps-like popup content
    const popupContent = `
      <div>
        <img src="/assets/hero-image.jpg" alt="STIL CLAS Store" class="store-image" />
        <div class="store-info">
          <div class="store-name">STIL CLAS</div>
          <div class="store-rating">
            <div class="store-stars">★★★★★</div>
            <div class="store-reviews">(48)</div>
          </div>
          <div class="store-type">Magazin de îmbrăcăminte</div>
          <div class="store-address">Amplasat in incinta APACA, Business Center, Str. Iuliu Maniu, 7; corpul U; etaj 1, București 061072</div>
          <div class="store-hours">Deschis · Închide la 18</div>
          <a href="https://stilclas.ro" class="store-website" target="_blank">stilclas.ro</a>
        </div>
      </div>
    `;

    // Add popup with custom class
    const popup = L.popup({
      className: 'custom-popup',
      closeButton: true,
      autoClose: false,
      closeOnEscapeKey: false,
      closeOnClick: false,
      offset: L.point(0, 0)
    }).setContent(popupContent);

    marker.bindPopup(popup).openPopup();

    // Adjust map padding after popup is opened
    map.once('popupopen', () => {
      map.panBy([150, 0]); // Pan the map to the right to make space for the popup
    });

    return () => {
      document.head.removeChild(style);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  
  return (
    <section className={cn(sectionContainerVariants({ variant: "white" }))}>
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
          {t('amplasament')}
        </motion.p>
        
        {/* OpenStreetMap with Leaflet */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-xl h-[400px] relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          ref={mapRef}
        />
      </div>
    </section>
  );
}