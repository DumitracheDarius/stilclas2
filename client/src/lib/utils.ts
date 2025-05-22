import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price in Romanian currency (LEI/RON)
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ro-RO', {
    style: 'currency',
    currency: 'RON',
    currencyDisplay: 'name',
  }).format(price);
}

// Truncate string
export function truncateString(str: string, num: number): string {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

// Get window dimensions
export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// Parse URL query params
export function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  
  return result;
}

// Scroll to top of page
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Format date string
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
