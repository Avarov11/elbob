export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  detailImages?: string[];
  description: string;
  sizes: string[];
  colors: string[];
  gender: 'men' | 'women' | 'unisex';
  category: string;
  featured: boolean;
  inStock: boolean;
  // New fields for enhanced product management
  cardImage?: string;           // Main image for product cards
  features?: string[];          // Product features/benefits
  specifications?: Record<string, string>; // Technical specifications
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    governorate: string;
  };
  createdAt: Date;
}

export interface FilterOptions {
  gender: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  category: string[];
}