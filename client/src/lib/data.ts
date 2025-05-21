import {
  Collection,
  Product,
  BrandValue,
  Testimonial,
  Category,
} from "./types";

// Collection data
export function getCollections(): Collection[] {
  return [
    {
      id: "c1",
      title: "the_bordeaux_edit",
      description: "bordeaux_description",
      imageUrl: "/assets/collection1.jpg",
      translationKey: "the_bordeaux_edit",
    },
    {
      id: "c2",
      title: "black_tie_essentials",
      description: "black_tie_description",
      imageUrl: "/assets/collection2.jpg",
      translationKey: "black_tie_essentials",
    },
    {
      id: "c3",
      title: "summer_sophistication",
      description: "summer_description",
      imageUrl: "/assets/collection3.jpg",
      translationKey: "summer_sophistication",
    },
    {
      id: "c4",
      title: "urban_classics",
      description: "urban_description",
      imageUrl: "/assets/collection4.jpg",
      translationKey: "urban_classics",
    },
  ];
}

// Main category data
export function getCategories(): Category[] {
  return [
    {
      id: "cat1",
      name: "suits",
      description: "",
      imageUrl: "/assets/category-suits.jpg",
      subcategories: [
        {
          id: "subcat1",
          name: "ceremony",
          description: "",
          imageUrl: "/assets/collection1.jpg",
        },
        {
          id: "subcat2",
          name: "business",
          description: "",
          imageUrl: "/assets/business.jpg",
        },
        {
          id: "subcat3",
          name: "casual",
          description: "",
          imageUrl: "/assets/testimonial2.jpg",
        },
      ],
    },
    {
      id: "cat2",
      name: "blazers",
      description: "",
      imageUrl: "/assets/category-blazers.jpg",
      subcategories: [
        {
          id: "subcat4",
          name: "business",
          description: "",
          imageUrl: "/assets/testimonial3.jpg",
        },
        {
          id: "subcat5",
          name: "casual",
          description: "",
          imageUrl: "/assets/value11.jpg",
        },
      ],
    },
    {
      id: "cat3",
      name: "trousers",
      description: "",
      imageUrl: "/assets/pants.png",
      subcategories: [],
    },
    {
      id: "cat4",
      name: "shirts",
      description: "",
      imageUrl: "/assets/camasa.jpg",
      subcategories: [],
    },
    {
      id: "cat5",
      name: "ties",
      description: "",
      imageUrl: "/assets/cravatacolection.jpg",
      subcategories: [],
    },
    {
      id: "cat6",
      name: "cufflinks",
      description: "",
      imageUrl: "/assets/butoni2.jpg",
      subcategories: [],
    },
    {
      id: "cat7",
      name: "bow_ties",
      description: "",
      imageUrl: "/assets/papion.jpg",
      subcategories: [],
    },
    {
      id: "cat8",
      name: "belts",
      description: "",
      imageUrl: "/assets/bestseller2.jpg",
      subcategories: [],
    },
  ];
}

// Best selling products
export function getBestSellingProducts(): Product[] {
  return [
    {
      id: "p19",
      name: "Costum Ceremonie Maro cu Model Special",
      description:
        "Costum sofisticat pentru ceremonii, maro cu un model unic și rafinat.",
      price: 1299.0,
      imageUrl: "/assets/costum-ceremonie-maro-model-special.jpg",
      rating: 5.0,
      reviewCount: 10,
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-06-20T10:00:00Z",
      reviews: [
        {
          author: "Cristian Marin",
          rating: 5,
          title: "Foarte mulțumit",
          date: "Iunie 1, 2024",
          comment:
            "Material și croială excelentă. Recomand tuturor celor care caută un costum special și elegant.",
        },
      ],
    },

    {
      id: "p20",
      name: "Costum Ceremonie Verde cu Model Special",
      description:
        "Costum unic și sofisticat pentru ceremonii, verde cu model distinctiv.",
      price: 1299.0,
      imageUrl: "/assets/costum-ceremonie-verde-cu-model.jpg",
      rating: 5.0,
      reviewCount: 11,
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-06-10T10:00:00Z",
      reviews: [
        {
          author: "Mihai Vasile",
          rating: 5,
          title: "Design excepțional",
          date: "Mai 20, 2024",
          comment:
            "Un costum impresionant cu un design special care m-a ajutat să ies în evidență la eveniment.",
        },
      ],
    },
    {
      id: "p21",
      name: "Costum Ceremonie Albastru cu Model Special",
      description:
        "Costum exclusivist de ceremonie albastru, cu detalii fine și elegante.",
      price: 1299.0,
      imageUrl: "/assets/costum-ceremonie-albastru-model-special.jpg",
      rating: 5.0,
      reviewCount: 13,
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-06-15T10:00:00Z",
      reviews: [
        {
          author: "Alexandru Dumitru",
          rating: 5,
          title: "Eleganță pură",
          date: "Mai 25, 2024",
          comment:
            "Costumul arată superb și se simte excelent. Am primit multe complimente pentru alegerea mea.",
        },
      ],
    },

    {
      id: "p22",
      name: "Costum Ceremonie Verde",
      description:
        "Costum de ceremonie elegant într-o nuanță rafinată de verde.",
      price: 1199.0,
      imageUrl: "/assets/costum-ceremonie-verde.jpg",
      rating: 5.0,
      reviewCount: 14,
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-06-05T10:00:00Z",
      reviews: [
        {
          author: "Andrei Popescu",
          rating: 5,
          title: "Perfect pentru nunta mea",
          date: "Aprilie 12, 2024",
          comment:
            "Costumul a fost exact cum mi-am dorit, elegant și foarte confortabil. Recomand cu încredere!",
        },
        {
          author: "George Ionescu",
          rating: 5,
          title: "Calitate premium",
          date: "Mai 3, 2024",
          comment:
            "Materialele sunt de înaltă calitate, iar finisajele sunt excelente. Un costum minunat pentru ocazii speciale.",
        },
      ],
    },
  ];
}

// Get all products
export function getProducts(): Product[] {
  const bestSellers = getBestSellingProducts();

  const additionalProducts = [
    {
      id: "po",
      name: "Butoni - Modele Diferite",
      description: "Butoni eleganți disponibili în diverse modele și culori.",
      price: 89.0,
      imageUrl: "/assets/butoni2.jpg",
      rating: 4.5,
      reviewCount: 20,
      gallery: ["/assets/butoni10.jpg", "/assets/butoni11.jpg"],
      categoryId: "accessories",
      category: "Accessories",
      createdAt: "2024-01-15T10:00:00Z",
    },
    {
      id: "p1",
      name: "Papion - Modele Diferite",
      description: "Papion elegant disponibil în diverse modele și culori.",
      price: 89.0,
      imageUrl: "/assets/papion.jpg",
      rating: 4.5,
      reviewCount: 20,
      gallery: [
        "/assets/papion2.jpg",
        "/assets/papion3.jpg",
        "/assets/papion4.jpg",
      ],
      categoryId: "accessories",
      category: "Accessories",
      createdAt: "2024-01-15T10:00:00Z",
    },
    {
      id: "p2",
      name: "Cravată - Modele Diferite",
      description:
        "Cravate stilate pentru orice ocazie, disponibile în diverse modele.",
      price: 119.0,
      imageUrl: "/assets/cravatacolection.jpg",
      rating: 4.7,
      reviewCount: 25,
      gallery: [
        "/assets/cravata10.jpg",
        "/assets/cravata11.jpg",
        "/assets/cravata12.jpg",
        "/assets/cravata13.jpg",
        "/assets/cravata14.jpg",
        "/assets/cravata15.jpg",
      ],
      categoryId: "accessories",
      category: "Accessories",
      createdAt: "2024-01-20T10:00:00Z",
    },
    {
      id: "p3",
      name: "Curea - Modele Diferite",
      description:
        "Curea din piele premium, disponibile în diferite modele și culori.",
      price: 149.0,
      imageUrl: "/assets/bestseller2.jpg",
      rating: 4.6,
      reviewCount: 18,
      gallery: [
        "/assets/bestseller1.jpg",
        "/assets/bestseller3.jpg",
        "/assets/bestseller4.jpg",
      ],
      categoryId: "accessories",
      category: "Accessories",
      createdAt: "2024-02-01T10:00:00Z",
    },
    {
      id: "p4",
      name: "Pantaloni - Modele Diferite",
      description:
        "Pantaloni eleganți pentru business sau casual în diferite stiluri.",
      price: 299.0,
      imageUrl: "/assets/pants.png",
      rating: 4.8,
      reviewCount: 22,
      categoryId: "trousers",
      category: "Trousers",
      createdAt: "2024-02-10T10:00:00Z",
    },
    {
      id: "p5",
      name: "Sacou Casual Albastru",
      description: "Sacou casual în nuanță elegantă de albastru.",
      price: 499.0,
      imageUrl: "/assets/sacou-casual-albastru.jpg",
      rating: 4.9,
      reviewCount: 15,
      categoryId: "casual",
      category: "Jackets",
      createdAt: "2024-02-15T10:00:00Z",
    },
    {
      id: "p6",
      name: "Sacou Casual Roșu",
      description: "Sacou casual vibrant, ideal pentru evenimente speciale.",
      price: 499.0,
      imageUrl: "/assets/sacou-casual-rosu.jpg",
      rating: 4.8,
      reviewCount: 12,
      categoryId: "casual",
      category: "Jackets",
      createdAt: "2024-03-01T10:00:00Z",
    },
    {
      id: "p7",
      name: "Sacou Business Turcoaz",
      description: "Sacou elegant pentru mediul business în culoare turcoaz.",
      price: 599.0,
      imageUrl: "/assets/sacou-business-turcoaz.jpg",
      rating: 5.0,
      reviewCount: 10,
      categoryId: "business",
      category: "Jackets",
      createdAt: "2024-03-10T10:00:00Z",
    },
    {
      id: "p8",
      name: "Sacou Business în Carouri Turcoaz",
      description: "Sacou business modern, în carouri turcoaz.",
      price: 649.0,
      imageUrl: "/assets/sacou-business-carouri-turcoaz.jpg",
      rating: 4.9,
      reviewCount: 8,
      categoryId: "business",
      category: "Jackets",
      createdAt: "2024-03-15T10:00:00Z",
    },
    {
      id: "p9",
      name: "Costum Business Verde Închis",
      description: "Costum business rafinat în nuanță verde închis.",
      price: 999.0,
      imageUrl: "/assets/costum-business-verde-inchis.jpg",
      rating: 5.0,
      reviewCount: 14,
      categoryId: "business",
      category: "Suits",
      createdAt: "2024-04-01T10:00:00Z",
    },
    {
      id: "p10",
      name: "Costum Business Negru",
      description: "Costum clasic negru, perfect pentru mediul de afaceri.",
      price: 999.0,
      imageUrl: "/assets/costum-business-negru.jpg",
      rating: 5.0,
      reviewCount: 20,
      categoryId: "business",
      category: "Suits",
      createdAt: "2024-04-05T10:00:00Z",
    },
    {
      id: "p11",
      name: "Costum Casual Verde",
      description: "Costum casual elegant în tonuri de verde.",
      price: 899.0,
      imageUrl: "/assets/costum-casual-verde.jpg",
      rating: 4.7,
      reviewCount: 9,
      categoryId: "casual",
      category: "Suits",
      createdAt: "2024-04-10T10:00:00Z",
    },
    {
      id: "p12",
      name: "Costum Ceremonie Gri",
      description: "Costum de ceremonie elegant în culoare gri.",
      price: 1099.0,
      imageUrl: "/assets/costum-ceremonie-gri.jpg",
      rating: 5.0,
      reviewCount: 11,
      gallery: ["/assets/costum-ceremonie-gri-2.jpg"],
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-05-01T10:00:00Z",
    },
    {
      id: "p13",
      name: "Costum Casual Gri",
      description: "Costum casual elegant în nuanță gri.",
      price: 899.0,
      imageUrl: "/assets/costum-casual-gri.jpg",
      rating: 4.6,
      reviewCount: 10,
      categoryId: "casual",
      category: "Suits",
      createdAt: "2024-05-05T10:00:00Z",
    },
    {
      id: "p14",
      name: "Costum Casual Bej",
      description: "Costum casual confortabil în nuanță bej.",
      price: 899.0,
      imageUrl: "/assets/costum-casual-bej.jpg",
      rating: 4.5,
      reviewCount: 8,
      categoryId: "casual",
      category: "Suits",
      createdAt: "2024-05-10T10:00:00Z",
    },
    {
      id: "p15",
      name: "Costum Business Gri",
      description: "Costum business clasic, ideal pentru întâlniri importante.",
      price: 999.0,
      imageUrl: "/assets/costum-business-gri.jpg",
      rating: 4.8,
      reviewCount: 12,
      categoryId: "business",
      category: "Suits",
      createdAt: "2024-05-15T10:00:00Z",
    },
    {
      id: "p16",
      name: "Costum Ceremonie Maro cu Model",
      description:
        "Costum sofisticat pentru ceremonii în tonuri maro cu model distinctiv.",
      price: 1199.0,
      imageUrl: "/assets/costum-ceremonie-maro-cu-model.jpg",
      rating: 5.0,
      reviewCount: 7,
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-05-20T10:00:00Z",
    },
    {
      id: "p17",
      name: "Costum Ceremonie Albastru cu Model",
      description:
        "Costum elegant pentru ceremonii, albastru cu detalii speciale.",
      price: 1199.0,
      imageUrl: "/assets/costum-ceremonie-albastru-cu-model.jpg",
      rating: 5.0,
      reviewCount: 6,
      categoryId: "ceremony",
      category: "Suits",
      createdAt: "2024-05-25T10:00:00Z",
    },
    {
      id: "p18",
      name: "Costum Casual Albastru Deschis",
      description: "Costum casual modern în albastru deschis.",
      price: 899.0,
      imageUrl: "/assets/costum-casual-albastru-deschis.jpg",
      rating: 4.7,
      reviewCount: 8,
      categoryId: "casual",
      category: "Suits",
      createdAt: "2024-06-01T10:00:00Z",
    },
  ];

  return [...bestSellers, ...additionalProducts];
}

// Get product by ID
export function getProductById(id: string): Product | null {
  const allProducts = getProducts();
  return allProducts.find((product) => product.id === id) || null;
}

// Get related products
export function getRelatedProducts(
  productId: string,
  categoryId: string,
): Product[] {
  const allProducts = getProducts();
  return allProducts
    .filter(
      (product) =>
        product.id !== productId && product.categoryId === categoryId,
    )
    .slice(0, 4);
}

// Brand values
export function getBrandValues(): BrandValue[] {
  return [
    {
      id: "bv1",
      title: "Craftsmanship",
      description:
        "Each garment is meticulously crafted by skilled artisans with decades of experience in traditional tailoring techniques.",
      icon: null,
      iconName: "tool",
    },
    {
      id: "bv2",
      title: "Materials",
      description:
        "We source only the finest textiles from renowned mills across Europe, ensuring superior quality in every thread.",
      icon: null,
      iconName: "sparkles",
    },
    {
      id: "bv3",
      title: "Design",
      description:
        "Our designs balance contemporary trends with classic elements, creating pieces that transcend seasonal fashions.",
      icon: null,
      iconName: "layout",
    },
    {
      id: "bv4",
      title: "Sustainability",
      description:
        "We're committed to responsible production practices that minimize environmental impact while maximizing quality.",
      icon: null,
      iconName: "leaf",
    },
  ];
}

// Testimonials
export function getTestimonials(): Testimonial[] {
  return [
    {
      id: "t1",
      name: "James Wilson",
      title: "Wedding Collection Customer",
      quote:
        "The attention to detail in my wedding suit was extraordinary. StilClas delivered exactly what I envisioned—timeless elegance with perfect tailoring.",
      rating: 5,
      avatarUrl: "/assets/testimonial1.jpg",
    },
    {
      id: "t2",
      name: "Robert Chen",
      title: "Executive Collection Customer",
      quote:
        "As a CEO, my appearance matters. StilClas suits have become my signature look—exceptional quality, perfect fit, and sophisticated style.",
      rating: 5,
      avatarUrl: "/assets/testimonial2.jpg",
    },
    {
      id: "t3",
      name: "Michael Thompson",
      title: "Smart Casual Collection Customer",
      quote:
        "The smart casual collection combines comfort with sophistication perfectly. These pieces have elevated my everyday style substantially.",
      rating: 5,
      avatarUrl: "/assets/testimonial3.jpg",
    },
  ];
}

// Categories
export function getLegacyCategories(): Category[] {
  return [
    {
      id: "wedding",
      name: "Wedding Suits",
      description:
        "Exquisite tailoring for your most important day, combining timeless elegance with contemporary details.",
      imageUrl: "/assets/suit-ceremony.jpg",
    },
    {
      id: "business",
      name: "Business Suits",
      description:
        "Command respect in boardrooms with our precision-tailored business attire, crafted for distinction.",
      imageUrl:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: "casual",
      name: "Smart Casual",
      description:
        "Refined everyday attire that blends comfort with sophisticated style for the modern gentleman.",
      imageUrl:
        "https://pixabay.com/get/g6c28212eb889fc25ce619bf0df5d0eca83d75ba2b0c91d5ca4f7ca882af8cb090e9286982765e55e1f63eb821bacecf26b3634469d5a46548118583e5b503e2e_1280.jpg",
    },
    {
      id: "accessories",
      name: "Accessories",
      description:
        "Complete your look with our curated selection of premium ties, cufflinks, pocket squares, and more.",
      imageUrl:
        "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
  ];
}
