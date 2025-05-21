import { Collection, Product, BrandValue, Testimonial, Category } from "./types";

// Collection data
export function getCollections(): Collection[] {
  return [
    {
      id: "c1",
      title: "the_bordeaux_edit",
      description: "bordeaux_description",
      imageUrl: "/assets/collection1.jpg",
      translationKey: "the_bordeaux_edit"
    },
    {
      id: "c2",
      title: "black_tie_essentials",
      description: "black_tie_description",
      imageUrl: "/assets/collection2.jpg",
      translationKey: "black_tie_essentials"
    },
    {
      id: "c3",
      title: "summer_sophistication",
      description: "summer_description",
      imageUrl: "/assets/collection3.jpg",
      translationKey: "summer_sophistication"
    },
    {
      id: "c4",
      title: "urban_classics",
      description: "urban_description",
      imageUrl: "/assets/collection4.jpg",
      translationKey: "urban_classics"
    }
  ];
}

// Main category data
export function getCategories(): Category[] {
  return [
    {
      id: "cat1",
      name: "suits",
      description: "",
      imageUrl: "",
      subcategories: [
        {
          id: "subcat1",
          name: "ceremony",
          description: "",
          imageUrl: "/assets/suit-ceremony.jpg"
        },
        {
          id: "subcat2",
          name: "business",
          description: "",
          imageUrl: "/assets/suit-business.jpg"
        },
        {
          id: "subcat3",
          name: "casual",
          description: "",
          imageUrl: "/assets/suit-casual.jpg"
        }
      ]
    },
    {
      id: "cat2",
      name: "blazers",
      description: "",
      imageUrl: "",
      subcategories: [
        {
          id: "subcat4",
          name: "business",
          description: "",
          imageUrl: "/assets/blazer-business.jpg"
        },
        {
          id: "subcat5",
          name: "casual",
          description: "",
          imageUrl: "/assets/blazer-casual.jpg"
        }
      ]
    },
    {
      id: "cat3",
      name: "trousers",
      description: "",
      imageUrl: "/assets/trousers.jpg",
      subcategories: []
    },
    {
      id: "cat4",
      name: "shirts",
      description: "",
      imageUrl: "/assets/shirts.jpg",
      subcategories: []
    },
    {
      id: "cat5",
      name: "ties",
      description: "",
      imageUrl: "/assets/ties.jpg",
      subcategories: []
    },
    {
      id: "cat6",
      name: "cufflinks",
      description: "",
      imageUrl: "/assets/cufflinks.jpg",
      subcategories: []
    },
    {
      id: "cat7",
      name: "bow_ties",
      description: "",
      imageUrl: "/assets/bowties.jpg",
      subcategories: []
    },
    {
      id: "cat8",
      name: "belts",
      description: "",
      imageUrl: "/assets/belts.jpg",
      subcategories: []
    }
  ];
}

// Best selling products
export function getBestSellingProducts(): Product[] {
  return [
    {
      id: "p1",
      name: "Royal Navy Suit",
      description: "Premium tailored navy suit for professional settings",
      price: 1299.00,
      imageUrl: "/assets/bestseller1.jpg",
      rating: 4.5,
      reviewCount: 24,
      categoryId: "wedding",
      category: "Suits",
      colors: ["#1a365d", "#2d3748", "#1c1917"],
      sizes: ["48", "50", "52", "54"],
      createdAt: "2023-06-15T10:00:00Z",
      gallery: [
        "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80",
        "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80",
        "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80"
      ],
      fabric: "Super 120s Italian Wool",
      lining: "Silk blend",
      buttons: "Mother of Pearl",
      tags: ["Suit", "Navy", "Business", "Formal"],
      reviews: [
        {
          author: "James Wilson",
          rating: 5,
          title: "Impeccable Quality",
          date: "May 20, 2023",
          comment: "The attention to detail in this suit is extraordinary. Perfect tailoring and elegant style."
        },
        {
          author: "Michael Thompson",
          rating: 4,
          title: "Great Fit",
          date: "April 15, 2023",
          comment: "Excellent quality and the fit is nearly perfect off the rack. Minimal alterations needed."
        }
      ]
    },
    {
      id: "p2",
      name: "Executive Charcoal Suit",
      description: "Professional charcoal gray suit with subtle pinstripe pattern",
      price: 1199.00,
      imageUrl: "/assets/bestseller2.jpg",
      rating: 5.0,
      reviewCount: 36,
      categoryId: "business",
      category: "Suits",
      colors: ["#1f2937", "#374151", "#4b5563"],
      sizes: ["46", "48", "50", "52", "54"],
      createdAt: "2023-05-20T10:00:00Z",
      gallery: [
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80"
      ],
      fabric: "Super 130s English Wool",
      lining: "Premium Bemberg",
      buttons: "Buffalo Horn",
      tags: ["Suit", "Charcoal", "Pinstripe", "Business"],
      reviews: [
        {
          author: "Robert Chen",
          rating: 5,
          title: "CEO Approved",
          date: "June 5, 2023",
          comment: "As a CEO, my appearance matters. This suit has become my signature look—exceptional quality and perfect fit."
        },
        {
          author: "David Parker",
          rating: 5,
          title: "Worth Every Penny",
          date: "May 22, 2023",
          comment: "The craftsmanship of this suit is evident in every detail. It drapes beautifully and the fabric is luxurious."
        }
      ]
    },
    {
      id: "p3",
      name: "Bordeaux Evening Jacket",
      description: "Elegant burgundy jacket perfect for formal evening events",
      price: 899.00,
      imageUrl: "/assets/bestseller3.jpg",
      rating: 5.0,
      reviewCount: 29,
      categoryId: "wedding",
      category: "Jackets",
      colors: ["#7E1F2D", "#5f1d28", "#4a0d16"],
      sizes: ["48", "50", "52", "54", "56"],
      createdAt: "2023-07-05T10:00:00Z",
      gallery: [
        "https://pixabay.com/get/gcc09748e058ad2737b8310f58623674d72c363a4a5b27fc64cbe25e32cdcedacb6fa43477a401c77c0d6b2f64403a029a91b7aefa399433f75719cb3f544536c_1280.jpg",
        "https://pixabay.com/get/gcc09748e058ad2737b8310f58623674d72c363a4a5b27fc64cbe25e32cdcedacb6fa43477a401c77c0d6b2f64403a029a91b7aefa399433f75719cb3f544536c_1280.jpg"
      ],
      fabric: "Italian Velvet",
      lining: "Silk",
      buttons: "Covered Buttons",
      tags: ["Jacket", "Burgundy", "Evening", "Formal"],
      reviews: [
        {
          author: "Jonathan Reid",
          rating: 5,
          title: "Stunning Piece",
          date: "July 15, 2023",
          comment: "This jacket makes a statement. The burgundy color is rich and elegant, perfect for black tie events."
        },
        {
          author: "Alexander White",
          rating: 5,
          title: "Exceptional Quality",
          date: "June 30, 2023",
          comment: "The velvet is sumptuous and the cut is impeccable. Worth every penny for special occasions."
        }
      ]
    },
    {
      id: "p4",
      name: "Signature White Shirt",
      description: "Premium cotton dress shirt with elegant French cuffs",
      price: 199.00,
      imageUrl: "/assets/bestseller4.jpg",
      rating: 4.0,
      reviewCount: 42,
      categoryId: "business",
      category: "Shirts",
      colors: ["#ffffff", "#f8fafc", "#ecf0f3"],
      sizes: ["15", "15.5", "16", "16.5", "17"],
      createdAt: "2023-04-10T10:00:00Z",
      gallery: [
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80",
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750&q=80"
      ],
      fabric: "Egyptian Cotton (120s)",
      buttons: "Mother of Pearl",
      tags: ["Shirt", "White", "French Cuffs", "Formal"],
      reviews: [
        {
          author: "Thomas Grant",
          rating: 4,
          title: "Classic Essential",
          date: "May 5, 2023",
          comment: "A perfect white shirt is hard to find, but this one hits all the marks. Great fabric and construction."
        },
        {
          author: "William Scott",
          rating: 4,
          title: "Business Standard",
          date: "April 22, 2023",
          comment: "I've purchased several of these shirts. They launder well and maintain their crisp appearance."
        }
      ]
    }
  ];
}

// Get all products
export function getProducts(): Product[] {
  const bestSellers = getBestSellingProducts();
  
  const additionalProducts = [
    {
      id: "p5",
      name: "Classic Black Suit",
      description: "Timeless black suit suitable for any formal occasion",
      price: 1199.00,
      imageUrl: "https://images.unsplash.com/photo-1619603364904-c0498317e145?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80",
      rating: 5.0,
      reviewCount: 18,
      categoryId: "wedding",
      category: "Suits",
      colors: ["#000000", "#0f0f0f", "#1a1a1a"],
      sizes: ["48", "50", "52", "54"],
      createdAt: "2023-03-15T10:00:00Z"
    },
    {
      id: "p6",
      name: "White Dress Shirt",
      description: "Essential white dress shirt for business and formal wear",
      price: 179.00,
      imageUrl: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80",
      rating: 4.0,
      reviewCount: 24,
      categoryId: "business",
      category: "Shirts",
      colors: ["#ffffff", "#f8fafc", "#ecf0f3"],
      sizes: ["15", "15.5", "16", "16.5", "17", "17.5"],
      createdAt: "2023-02-20T10:00:00Z"
    },
    {
      id: "p7",
      name: "Burgundy Silk Tie",
      description: "Premium silk tie in our signature burgundy shade",
      price: 129.00,
      imageUrl: "https://pixabay.com/get/gf424d6b510f36c3c0de2c6ec2b2d4ac863020d37aeb5631bae2f79cebe3a5b0e640f10df40ff54371213ff7f1ab36df6215c7c71e0921b07ba74ea4985af499b_1280.jpg",
      rating: 4.5,
      reviewCount: 32,
      categoryId: "accessories",
      category: "Accessories",
      colors: ["#7E1F2D", "#5f1d28", "#4a0d16"],
      createdAt: "2023-06-10T10:00:00Z"
    },
    {
      id: "p8",
      name: "Oxford Leather Shoes",
      description: "Classic leather Oxford shoes in rich brown",
      price: 349.00,
      imageUrl: "https://pixabay.com/get/g78f9d34a864593a0ee21cd046b467ae7e3952fed70df1c4543f73c1bc0d759da11492037c7223ab347cb4434af961c039393740c495704f932a9683f0cfe8f69_1280.jpg",
      rating: 5.0,
      reviewCount: 40,
      categoryId: "accessories",
      category: "Footwear",
      colors: ["#5c4033", "#3b2919", "#261a0d"],
      sizes: ["40", "41", "42", "43", "44", "45"],
      createdAt: "2023-05-05T10:00:00Z"
    },
    {
      id: "p9",
      name: "Navy Waistcoat",
      description: "Smart navy waistcoat with adjustable back strap",
      price: 299.00,
      imageUrl: "https://images.unsplash.com/photo-1507968837190-2213f325131d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80",
      rating: 4.0,
      reviewCount: 12,
      categoryId: "business",
      category: "Waistcoats",
      colors: ["#1a365d", "#2d3748", "#1c1917"],
      sizes: ["48", "50", "52", "54"],
      createdAt: "2023-07-15T10:00:00Z"
    },
    {
      id: "p10",
      name: "Charcoal Trousers",
      description: "Premium wool trousers with flat front design",
      price: 259.00,
      imageUrl: "https://pixabay.com/get/gb8c0668bc5c19f97f72d08e1ac3044db70061d69f93014b85fcd3eb55703a0a25707aae2ad4149e8cedae0c4216ca2617513f71d3c97da38a2708bbeabe3b88f_1280.jpg",
      rating: 5.0,
      reviewCount: 28,
      categoryId: "business",
      category: "Trousers",
      colors: ["#1f2937", "#374151", "#4b5563"],
      sizes: ["30", "32", "34", "36", "38", "40"],
      createdAt: "2023-04-25T10:00:00Z"
    },
    {
      id: "p11",
      name: "Gold Cufflinks",
      description: "Elegant gold-plated cufflinks with subtle pattern",
      price: 189.00,
      imageUrl: "https://pixabay.com/get/g1707ee029d50a9bd2f5d305a7df8d541eb66a08f124b4b0808342ce9e40c91535885d263bc14bb21cdad7222fd320a6da4b8e0b1b240c3fac8746d629c3268d0_1280.jpg",
      rating: 4.5,
      reviewCount: 15,
      categoryId: "accessories",
      category: "Accessories",
      createdAt: "2023-07-20T10:00:00Z"
    },
    {
      id: "p12",
      name: "Brown Leather Belt",
      description: "Premium leather belt with classic buckle",
      price: 149.00,
      imageUrl: "https://pixabay.com/get/g14dd9e976279061b2719dc7185f87bea4acbe7655b3acab4118f899940e0413479ac069906b76f4dd0fa03d6bd3e9d3072a54df9faa0e7c3bcd2c6b14643f44f_1280.jpg",
      rating: 4.0,
      reviewCount: 20,
      categoryId: "accessories",
      category: "Accessories",
      colors: ["#5c4033", "#3b2919", "#261a0d"],
      sizes: ["85", "90", "95", "100", "105", "110"],
      createdAt: "2023-06-01T10:00:00Z"
    }
  ];
  
  return [...bestSellers, ...additionalProducts];
}

// Get product by ID
export function getProductById(id: string): Product | null {
  const allProducts = getProducts();
  return allProducts.find(product => product.id === id) || null;
}

// Get related products
export function getRelatedProducts(productId: string, categoryId: string): Product[] {
  const allProducts = getProducts();
  return allProducts
    .filter(product => product.id !== productId && product.categoryId === categoryId)
    .slice(0, 4);
}

// Brand values
export function getBrandValues(): BrandValue[] {
  return [
    {
      id: "bv1",
      title: "Craftsmanship",
      description: "Each garment is meticulously crafted by skilled artisans with decades of experience in traditional tailoring techniques.",
      icon: null,
      iconName: "tool"
    },
    {
      id: "bv2",
      title: "Premium Materials",
      description: "We source only the finest textiles from renowned mills across Europe, ensuring superior quality in every thread.",
      icon: null,
      iconName: "sparkles"
    },
    {
      id: "bv3",
      title: "Timeless Design",
      description: "Our designs balance contemporary trends with classic elements, creating pieces that transcend seasonal fashions.",
      icon: null,
      iconName: "layout"
    },
    {
      id: "bv4",
      title: "Sustainability",
      description: "We're committed to responsible production practices that minimize environmental impact while maximizing quality.",
      icon: null,
      iconName: "leaf"
    }
  ];
}

// Testimonials
export function getTestimonials(): Testimonial[] {
  return [
    {
      id: "t1",
      name: "James Wilson",
      title: "Wedding Collection Customer",
      quote: "The attention to detail in my wedding suit was extraordinary. StilClas delivered exactly what I envisioned—timeless elegance with perfect tailoring.",
      rating: 5,
      avatarUrl: "/assets/testimonial1.jpg"
    },
    {
      id: "t2",
      name: "Robert Chen",
      title: "Executive Collection Customer",
      quote: "As a CEO, my appearance matters. StilClas suits have become my signature look—exceptional quality, perfect fit, and sophisticated style.",
      rating: 5,
      avatarUrl: "/assets/testimonial2.jpg"
    },
    {
      id: "t3",
      name: "Michael Thompson",
      title: "Smart Casual Collection Customer",
      quote: "The smart casual collection combines comfort with sophistication perfectly. These pieces have elevated my everyday style substantially.",
      rating: 4.5,
      avatarUrl: "/assets/testimonial3.jpg"
    }
  ];
}

// Categories
export function getLegacyCategories(): Category[] {
  return [
    {
      id: "wedding",
      name: "Wedding Suits",
      description: "Exquisite tailoring for your most important day, combining timeless elegance with contemporary details.",
      imageUrl: "/assets/suit-ceremony.jpg"
    },
    {
      id: "business",
      name: "Business Suits",
      description: "Command respect in boardrooms with our precision-tailored business attire, crafted for distinction.",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "casual",
      name: "Smart Casual",
      description: "Refined everyday attire that blends comfort with sophisticated style for the modern gentleman.",
      imageUrl: "https://pixabay.com/get/g6c28212eb889fc25ce619bf0df5d0eca83d75ba2b0c91d5ca4f7ca882af8cb090e9286982765e55e1f63eb821bacecf26b3634469d5a46548118583e5b503e2e_1280.jpg"
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Complete your look with our curated selection of premium ties, cufflinks, pocket squares, and more.",
      imageUrl: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];
}
