import { ReactNode } from "react";

// Collection type
export interface Collection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Product review type
export interface ProductReview {
  author: string;
  rating: number;
  title: string;
  date: string;
  comment: string;
}

// Product type
export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  categoryId: string;
  category: string;
  colors?: string[];
  sizes?: string[];
  createdAt: string;
  gallery?: string[];
  fabric?: string;
  lining?: string;
  buttons?: string;
  tags?: string[];
  reviews?: ProductReview[];
  sku?: string;
}

// Brand value type
export interface BrandValue {
  id: string;
  title: string;
  description: string;
  icon: ReactNode | null;
  iconName?: string;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

// Category type
export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
