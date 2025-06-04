import {
  Collection,
  Product,
  BrandValue,
  Testimonial,
  Category,
} from "./types";

// Collection data - Reorganized for a luxury fashion experience
export function getCollections(): Collection[] {
  return [
    {
      id: "c1",
      title: "formal_elegance",
      description: "formal_elegance_description",
      imageUrl: "/assets/Costume Business StilClas/Costume Business .43 (2).jpeg",
      translationKey: "formal_elegance",
    },
    {
      id: "c2",
      title: "casual_sophistication",
      description: "casual_sophistication_description",
      imageUrl: "/assets/Costume Casual StilClas/Costume Casual.05 (2).jpeg",
      translationKey: "casual_sophistication",
    },
    {
      id: "c3",
      title: "essential_accessories",
      description: "essential_accessories_description",
      imageUrl: "/assets/Palarii StilClas/Palarii 11.01.16.jpeg",
      translationKey: "essential_accessories",
    },
    {
      id: "c4",
      title: "seasonal_outerwear",
      description: "seasonal_outerwear_description",
      imageUrl: "/assets/Pardesie StilClas/pardesiu-1.jpeg",
      translationKey: "seasonal_outerwear",
    },
  ];
}

// Main category data - Restructured for better organization
export function getCategories(): Category[] {
  return [
    {
      id: "business-suits",
      name: "Business Suits",
      description: "Costume business elegante pentru un aspect profesional impecabil",
      imageUrl: "/assets/Costume Business StilClas/Costume Business .43 (5).jpeg",
      subcategories: [
        {
          id: "classic-business",
          name: "Classic Business",
          description: "Costume business clasice pentru un look profesional",
          imageUrl: "/assets/Costume Business StilClas/Costume Business .43 (5).jpeg"
        },
        {
          id: "modern-business",
          name: "Modern Business",
          description: "Costume business moderne cu un twist contemporan",
          imageUrl: "/assets/Costume Business StilClas/Costume Business .43 (7).jpeg"
        },
        {
          id: "ceremonial-business",
          name: "Ceremonial",
          description: "Costume de ceremonie moderne",
          imageUrl: "/assets/Costum Ceremonie 1.jpeg"
        }
      ]
    },
    {
      id: "casual-suits",
      name: "Casual Suits",
      description: "Costume casual pentru un stil relaxat dar elegant",
      imageUrl: "/assets/Costume Casual StilClas/costum-casual-1.jpeg",
      subcategories: [
        {
          id: "smart-casual",
          name: "Smart Casual",
          description: "Costume pentru ocazii semi-formale",
          imageUrl: "/assets/Costume Casual StilClas/Costume Casual.03 (1).jpeg"
        },
        {
          id: "weekend-casual",
          name: "Weekend Casual",
          description: "Costume pentru un weekend stilat",
          imageUrl: "/assets/Costume Casual StilClas/Costume Casual.05.jpeg"
        }
      ]
    },
    {
      id: "blazers",
      name: "Blazers",
      description: "Sacouri elegante pentru orice ocazie",
      imageUrl: "/assets/Sacouri StilClas/Sacouri .50.jpeg",
      subcategories: [
        {
          id: "formal-blazers",
          name: "Formal Blazers",
          description: "Sacouri pentru ocazii formale",
          imageUrl: "/assets/Sacouri StilClas/Sacouri .49.jpeg"
        },
        {
          id: "casual-blazers",
          name: "Casual Blazers",
          description: "Sacouri pentru un look relaxat",
          imageUrl: "/assets/Sacouri StilClas/Sacouri .48.jpeg"
        }
      ]
    },
    {
      id: "shirts",
      name: "Shirts",
      description: "Cămăși rafinate pentru orice ocazie",
      imageUrl: "/assets/Camasi StilClas/camasa-1.jpeg",
      subcategories: [
        {
          id: "formal-shirts",
          name: "Formal Shirts",
          description: "Cămăși pentru ocazii formale",
          imageUrl: "/assets/Camasi StilClas/Camasi .22 (1).jpeg"
        },
        {
          id: "casual-shirts",
          name: "Casual Shirts",
          description: "Cămăși pentru zi de zi",
          imageUrl: "/assets/Camasi StilClas/Camasi .23 (1).jpeg"
        }
      ]
    },
    {
      id: "overcoats",
      name: "Overcoats",
      description: "Pardesie elegante pentru sezonul rece",
      imageUrl: "/assets/Pardesie StilClas/pardesiu-1.jpeg",
      subcategories: [
        {
          id: "classic-overcoats",
          name: "Classic Overcoats",
          description: "Pardesie clasice atemporale",
          imageUrl: "/assets/Pardesie StilClas/Pardesie .20 (1).jpeg"
        }
      ]
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Accesorii pentru completarea ținutei",
      imageUrl: "/assets/Palarii StilClas/Palarii 11.01.16.jpeg",
      subcategories: [
        {
          id: "hats",
          name: "Hats",
          description: "Pălării elegante",
          imageUrl: "/assets/Palarii StilClas/Palarii 11.01.17.jpeg"
        },
        {
          id: "caps",
          name: "Caps",
          description: "Șepci moderne",
          imageUrl: "/assets/Sepci StilClas/Sepci 11.01.55.jpeg"
        },
        {
          id: "ties",
          name: "ties",
          description: "",
          imageUrl: "/assets/cravatacolection.jpg",
        },
        {
          id: "cufflinks",
          name: "cufflinks",
          description: "",
          imageUrl: "/assets/butoni2.jpg",
        },
        {
          id: "bow_ties",
          name: "bow_ties",
          description: "",
          imageUrl: "/assets/papion.jpg",
        },
        {
          id: "belts",
          name: "belts",
          description: "",
          imageUrl: "/assets/bestseller2.jpg",
        },
      ]
    },
    {
      id: "shoes",
      name: "Shoes",
      description: "Încălțăminte elegantă din piele",
      imageUrl: "/assets/Pantofi StilClas/Pantofi 11.07.44.jpeg",
      subcategories: [
        {
          id: "formal-shoes",
          name: "Formal Shoes",
          description: "Pantofi pentru ocazii formale",
          imageUrl: "/assets/Pantofi StilClas/Pantofi 11.07.44 (1).jpeg"
        }
      ]
    }
  ];
}

// Products with all available images in galleries
export function getProducts(): Product[] {
  return [
    // Business Suits
    {
      id: "business-suit-1",
      name: "Costum Business Elite",
      description: "Costum business elegant, perfect pentru mediul corporativ și întâlniri importante.",
      price: 790.0,
      imageUrl: "/assets/Costume Business StilClas/Costume Business .43 (5).jpeg",
      rating: 5.0,
      reviewCount: 18,
      gallery: [
        "/assets/Costume Business StilClas/Costume Business .43 (6).jpeg",
        "/assets/Costume Business StilClas/Costume Business .43 (7).jpeg",
        "/assets/Costume Business StilClas/Costume Business .43 (8).jpeg",
        "/assets/Costume Business StilClas/Costume Business .43 (9).jpeg"
      ],
      categoryId: "business-suits",
      category: "Business Suits",
      createdAt: "2024-03-20T10:00:00Z",
      isBestSeller: true
    },
    {
      id: "business-suit-2",
      name: "Costum Business Modern",
      description: "Costum business modern cu design contemporani și croială impecabilă.",
      price: 790.0,
      imageUrl: "/assets/Costume Business StilClas/Costume Business .43 (41).jpeg",
      rating: 4.9,
      reviewCount: 15,
      gallery: [
        "/assets/Costume Business StilClas/Costume Business .43 (42).jpeg",
        "/assets/Costume Business StilClas/Costume Business .43 (43).jpeg",
        "/assets/Costume Business StilClas/Costume Business .43 (44).jpeg"
      ],
      categoryId: "business-suits",
      category: "Business Suits",
      createdAt: "2024-03-21T10:00:00Z"
    },
    // Casual Suits
    {
      id: "casual-suit-1",
      name: "Costum Casual Premium",
      description: "Costum casual versatil, perfect pentru evenimente sociale și ocazii semi-formale.",
      price: 790.0,
      imageUrl: "/assets/Costume Casual StilClas/Costume Casual.05 (2).jpeg",
      rating: 4.8,
      reviewCount: 14,
      gallery: [
        "/assets/Costume Casual StilClas/Costume Casual.05 (1).jpeg",
        "/assets/Costume Casual StilClas/Costume Casual.05.jpeg",
        "/assets/Costume Casual StilClas/Costume Casual.06.jpeg"
      ],
      categoryId: "casual-suits",
      category: "Casual Suits",
      createdAt: "2024-03-22T10:00:00Z",
      isBestSeller: true
    },
    {
      id: "casual-suit-2",
      name: "Costum Casual Modern",
      description: "Costum casual modern pentru un look relaxat dar elegant.",
      price: 790.0,
      imageUrl: "/assets/Costume Casual StilClas/Costume Casual.03 (1).jpeg",
      rating: 4.7,
      reviewCount: 12,
      gallery: [
        "/assets/Costume Casual StilClas/Costume Casual.03 (2).jpeg",
        "/assets/Costume Casual StilClas/Costume Casual.03 (3).jpeg",
        "/assets/Costume Casual StilClas/Costume Casual.03.jpeg",
        "/assets/Costume Casual StilClas/costum-casual-roz.jpeg"
      ],
      categoryId: "casual-suits",
      category: "Casual Suits",
      createdAt: "2024-03-23T10:00:00Z"
    },
    // Ceremony Suits
    {
      id: "ceremony-suit-1",
      name: "Costum de Ceremonie Exclusivist",
      description: "Costum de ceremonie elegant, perfect pentru evenimente speciale și ocazii memorabile.",
      price: 1100.0,
      imageUrl: "/assets/Costum Ceremonie 1.jpeg",
      rating: 5.0,
      reviewCount: 20,
      gallery: [
        "/assets/Costum Ceremonie 1.jpeg"
      ],
      categoryId: "ceremonial-business",
      category: "Ceremonial",
      createdAt: "2024-03-24T10:00:00Z",
      isBestSeller: true
    },
    // Blazers
    {
      id: "blazer-1",
      name: "Sacou Business Elite",
      description: "Sacou business elegant, perfect pentru ținute formale.",
      price: 390.0,
      imageUrl: "/assets/Sacouri StilClas/Sacouri .50.jpeg",
      rating: 4.9,
      reviewCount: 16,
      gallery: [
        "/assets/Sacouri StilClas/Sacouri .50 (1).jpeg",
        "/assets/Sacouri StilClas/Sacouri .50 (2).jpeg",
        "/assets/Sacouri StilClas/Sacouri .50 (3).jpeg"
      ],
      categoryId: "blazers",
      category: "Blazers",
      createdAt: "2024-03-25T10:00:00Z"
    },
    {
      id: "blazer-2",
      name: "Sacou Casual Modern",
      description: "Sacou casual versatil pentru un look modern și sofisticat.",
      price: 390.0,
      imageUrl: "/assets/Sacouri StilClas/Sacouri .48.jpeg",
      rating: 4.8,
      reviewCount: 14,
      gallery: [
        "/assets/Sacouri StilClas/Sacouri .48 (1).jpeg",
        "/assets/Sacouri StilClas/Sacouri .48 (2).jpeg",
        "/assets/Sacouri StilClas/Sacouri .48 (3).jpeg"
      ],
      categoryId: "blazers",
      category: "Blazers",
      createdAt: "2024-03-26T10:00:00Z"
    },
    // Shirts
    {
      id: "shirt-1",
      name: "Cămașă Business Premium",
      description: "Cămașă business din bumbac de înaltă calitate.",
      price: 150.0,
      imageUrl: "/assets/Camasi StilClas/Camasi .22 (1).jpeg",
      rating: 4.8,
      reviewCount: 22,
      gallery: [
        "/assets/Camasi StilClas/Camasi .22.jpeg"
      ],
      categoryId: "shirts",
      category: "Shirts",
      createdAt: "2024-03-27T10:00:00Z"
    },
    {
      id: "shirt-2",
      name: "Cămașă Casual Elegantă",
      description: "Cămașă casual pentru un look relaxat dar rafinat.",
      price: 150.0,
      imageUrl: "/assets/Camasi StilClas/Camasi .23 (1).jpeg",
      rating: 4.7,
      reviewCount: 18,
      gallery: [
        "/assets/Camasi StilClas/Camasi .23.jpeg"
      ],
      categoryId: "shirts",
      category: "Shirts",
      createdAt: "2024-03-28T10:00:00Z"
    },
    // Overcoats
    {
      id: "overcoat-1",
      name: "Pardesiu Classic Elite",
      description: "Pardesiu clasic pentru sezonul rece, confecționat din materiale premium.",
      price: 790.0,
      imageUrl: "/assets/Pardesie StilClas/Pardesie .20.jpeg",
      rating: 4.9,
      reviewCount: 15,
      gallery: [
        "/assets/Pardesie StilClas/Pardesie .20 (1).jpeg",
        "/assets/Pardesie StilClas/Pardesie .20 (2).jpeg",
        "/assets/Pardesie StilClas/Pardesie .20 (3).jpeg"
      ],
      categoryId: "overcoats",
      category: "Overcoats",
      createdAt: "2024-03-29T10:00:00Z"
    },
    {
      id: "overcoat-2",
      name: "Pardesiu Modern Premium",
      description: "Pardesiu modern cu design contemporani și materiale de excepție.",
      price: 790.0,
      imageUrl: "/assets/Pardesie StilClas/Pardesie .21.jpeg",
      rating: 4.8,
      reviewCount: 13,
      gallery: [
        "/assets/Pardesie StilClas/Pardesie .21 (1).jpeg"
      ],
      categoryId: "overcoats",
      category: "Overcoats",
      createdAt: "2024-03-30T10:00:00Z"
    },
    // Accessories
    {
      id: "tie-1",
      name: "Cravată Premium",
      description: "Cravată elegantă din mătase naturală.",
      price: 95.0,
      imageUrl: "/assets/cravatacolection.jpg",
      rating: 4.8,
      reviewCount: 25,
      categoryId: "ties",
      category: "Ties",
      createdAt: "2024-03-31T10:00:00Z"
    },
    {
      id: "cufflinks-1",
      name: "Butoni Eleganți",
      description: "Butoni premium pentru ocazii speciale.",
      price: 75.0,
      imageUrl: "/assets/butoni2.jpg",
      rating: 4.9,
      reviewCount: 20,
      categoryId: "cufflinks",
      category: "Cufflinks",
      createdAt: "2024-04-01T10:00:00Z"
    },
    {
      id: "bowtie-1",
      name: "Papion Classic",
      description: "Papion elegant pentru evenimente formale.",
      price: 75.0,
      imageUrl: "/assets/papion.jpg",
      rating: 4.8,
      reviewCount: 18,
      categoryId: "bow_ties",
      category: "Bow Ties",
      createdAt: "2024-04-02T10:00:00Z"
    },
    {
      id: "belt-1",
      name: "Curea din Piele Premium",
      description: "Curea elegantă din piele naturală de înaltă calitate.",
      price: 130.0,
      imageUrl: "/assets/bestseller2.jpg",
      rating: 4.7,
      gallery: [
        "/assets/curel1.jpeg",
        "/assets/curel2.jpeg",
        "/assets/curel3.jpeg",
        "/assets/curel4.jpeg",
        "/assets/curel5.jpeg",
        "/assets/curel6.jpeg",
        "/assets/curel7.jpeg",
        "/assets/curel8.jpeg",
        "/assets/curel9.jpeg",
        "/assets/curel10.jpeg",
        "/assets/curel11.jpeg"
      ],
      reviewCount: 22,
      categoryId: "belts",
      category: "Belts",
      createdAt: "2024-04-03T10:00:00Z"
    },
    // Hats
    {
      id: "hat-1",
      name: "Pălărie Clasică Premium",
      description: "Pălărie elegantă din materiale premium, perfectă pentru completarea ținutelor rafinate.",
      price: 180.0,
      imageUrl: "/assets/Palarii StilClas/Palarii 11.01.16.jpeg",
      rating: 4.9,
      reviewCount: 16,
      gallery: [
        "/assets/Palarii StilClas/Palarii 11.01.16 (1).jpeg",
        "/assets/Palarii StilClas/Palarii 11.01.16 (2).jpeg",
        "/assets/Palarii StilClas/Palarii 11.01.17.jpeg"
      ],
      categoryId: "hats",
      category: "Hats",
      createdAt: "2024-04-04T10:00:00Z",
      isBestSeller: true
    },
    // Caps
    {
      id: "cap-1",
      name: "Șapcă Premium Elegantă",
      description: "Șapcă modernă din materiale de înaltă calitate, perfectă pentru ținute casual-elegante.",
      price: 130.0,
      imageUrl: "/assets/Sepci StilClas/Sepci 11.01.55.jpeg",
      rating: 4.8,
      reviewCount: 15,
      gallery: [
        "/assets/Sepci StilClas/Sepci 11.01.55 (1).jpeg",
        "/assets/Sepci StilClas/Sepci 11.01.55 (2).jpeg",
        "/assets/Sepci StilClas/Sepci 11.01.55 (3).jpeg"
      ],
      categoryId: "caps",
      category: "Caps",
      createdAt: "2024-04-05T10:00:00Z"
    },
    {
      id: "cap-2",
      name: "Șapcă Casual Modern",
      description: "Șapcă casual cu design modern, ideală pentru ținute relaxate.",
      price: 130.0,
      imageUrl: "/assets/Sepci StilClas/Sepci 11.01.56.jpeg",
      rating: 4.7,
      reviewCount: 12,
      gallery: [
        "/assets/Sepci StilClas/Sepci 11.01.56 (1).jpeg",
        "/assets/Sepci StilClas/Sepci 11.01.56 (2).jpeg"
      ],
      categoryId: "caps",
      category: "Caps",
      createdAt: "2024-04-06T10:00:00Z"
    },
    // Shoes
    {
      id: "shoes-1",
      name: "Pantofi Eleganți Premium",
      description: "Pantofi premium din piele naturală, confecționați manual pentru confort și stil suprem.",
      price: 300.0,
      imageUrl: "/assets/Pantofi StilClas/Pantofi 11.07.44.jpeg",
      rating: 5.0,
      reviewCount: 20,
      gallery: [
        "/assets/Pantofi StilClas/Pantofi 11.07.44 (1).jpeg",
        "/assets/Pantofi StilClas/Pantofi 11.07.44 (2).jpeg",
        "/assets/Pantofi StilClas/Pantofi 11.07.45.jpeg"
      ],
      categoryId: "shoes",
      category: "Shoes",
      createdAt: "2024-04-07T10:00:00Z",
      isBestSeller: true
    }
  ];
}

// Get product by ID
export function getProductById(id: string): Product | null {
  const allProducts = getProducts();
  return allProducts.find((product) => product.id === id) || null;
}

// Get related products
export function getRelatedProducts(productId: string, categoryId: string): Product[] {
  const allProducts = getProducts();
  return allProducts
    .filter((product) => product.id !== productId && product.categoryId === categoryId)
    .slice(0, 4);
}

// Brand values
export function getBrandValues(): BrandValue[] {
  return [
    {
      id: "bv1",
      title: "Craftsmanship",
      description: "Fiecare produs este creat cu atenție la detalii de către meșteri cu experiență în tehnici tradiționale de croitorie.",
      icon: null,
      iconName: "tool",
    },
    {
      id: "bv2",
      title: "Premium Materials",
      description: "Folosim doar materiale de cea mai înaltă calitate de la furnizori renumiți din Europa.",
      icon: null,
      iconName: "sparkles",
    },
    {
      id: "bv3",
      title: "Timeless Design",
      description: "Designul nostru îmbină elementele clasice cu tendințele contemporane pentru un stil atemporal.",
      icon: null,
      iconName: "layout",
    },
    {
      id: "bv4",
      title: "Customer Focus",
      description: "Ne dedicăm să oferim o experiență de cumpărare excepțională și produse care depășesc așteptările.",
      icon: null,
      iconName: "heart",
    },
  ];
}

// Legacy categories for compatibility
export function getLegacyCategories(): Category[] {
  return getCategories();
}

// Get best selling products
export function getBestSellingProducts(): Product[] {
  const allProducts = getProducts();
  return allProducts.filter(product => product.isBestSeller);
}
