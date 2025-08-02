import { Product } from '../types';

// Enhanced Product interface with images
export interface EnhancedProduct extends Product {
  cardImage: string;           // Main image for product cards
  detailImages: string[];      // Up to 4 images for product detail page
  features: string[];          // Product features/benefits
  specifications: Record<string, string>; // Technical specifications
}

export const products: EnhancedProduct[] = [
  // MEN'S PRODUCTS (4 products)
  {
    id: '1',
    name: 'Men\'s Sports Running Shoes',
    price: 950,
    images: [], // Legacy field - use cardImage instead
    description: 'High-performance running shoes with advanced cushioning technology and breathable mesh upper. Perfect for daily training and long-distance running.',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Black', 'Blue', 'Red'],
    gender: 'men',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/running.jpg',
    detailImages: [
      '/images/running.jpg',
      '/images/running (2).jpg'
    ],
    features: [
      'Advanced cushioning technology',
      'Breathable mesh upper',
      'Lightweight design',
      'Durable outsole'
    ],
    specifications: {
      'Weight': '280g',
      'Drop': '8mm',
      'Stack Height': '32mm',
      'Upper': 'Mesh',
      'Midsole': 'EVA Foam',
      'Outsole': 'Rubber'
    }
  },
  {
    id: '2',
    name: 'Men\'s Premium Running Shoes',
    price: 1100,
    originalPrice: 1300,
    images: [], // Legacy field - use cardImage instead
    description: 'Premium running shoes with enhanced comfort and performance features for serious runners. Advanced technology for competitive athletes.',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Black', 'Gray', 'Blue'],
    gender: 'men',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/black.jpg',
    detailImages: [
      '/images/running (2).jpg',
      '/images/running.jpg',
      '/images/running2.jpg'
    ],
    features: [
      'Enhanced comfort technology',
      'Performance-focused design',
      'Competitive athlete features',
      'Premium materials'
    ],
    specifications: {
      'Weight': '310g',
      'Drop': '10mm',
      'Stack Height': '35mm',
      'Upper': 'Engineered Mesh',
      'Midsole': 'Dual-density Foam',
      'Outsole': 'Carbon Rubber'
    }
  },
  {
    id: '3',
    name: 'Men\'s Lightweight Running Shoes',
    price: 850,
    images: [], // Legacy field - use cardImage instead
    description: 'Ultra-lightweight running shoes designed for speed and agility during training sessions. Perfect for speed and agility training.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['White', 'Black', 'Red'],
    gender: 'men',
    category: 'Athletic',
    featured: false,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/white.jpg',
    detailImages: [
      '/images/white.jpg',
      '/images/running2.jpg',
      '/images/running3.jpg',
      '/images/running (2).jpg'
    ],
    features: [
      'Ultra-lightweight design',
      'Speed-focused construction',
      'Agility training optimized',
      'Minimalist upper'
    ],
    specifications: {
      'Weight': '220g',
      'Drop': '6mm',
      'Stack Height': '28mm',
      'Upper': 'Lightweight Mesh',
      'Midsole': 'EVA Foam',
      'Outsole': 'Rubber'
    }
  },
  {
    id: '4',
    name: 'Men\'s Professional Running Shoes',
    price: 1200,
    originalPrice: 1500,
    images: [], // Legacy field - use cardImage instead
    description: 'Professional-grade running shoes with advanced technology for competitive athletes. Maximum performance and comfort for serious runners.',
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    colors: ['Black', 'Blue', 'Red'],
    gender: 'men',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/running2.jpg',
    detailImages: [
      '/images/running2.jpg',
      '/images/running3.jpg',
      '/images/running.jpg',
      '/images/black.jpg'
    ],
    features: [
      'Professional-grade technology',
      'Competitive athlete design',
      'Maximum performance features',
      'Advanced comfort system'
    ],
    specifications: {
      'Weight': '290g',
      'Drop': '8mm',
      'Stack Height': '30mm',
      'Upper': 'Engineered Mesh',
      'Midsole': 'Carbon Fiber Plate',
      'Outsole': 'Carbon Rubber'
    }
  },

  // WOMEN'S PRODUCTS (4 products)
  {
    id: '5',
    name: 'Women\'s Comfort Running Shoes',
    price: 900,
    images: [], // Legacy field - use cardImage instead
    description: 'Comfortable running shoes designed specifically for women with enhanced cushioning and support. Perfect for daily training and casual running.',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Pink', 'Purple', 'White'],
    gender: 'women',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/Image_fx (1).jpg',
    detailImages: [
      '/images/Image_fx (1).jpg',
      '/images/Image_fx (2).jpg',
      '/images/Image_fx.jpg'
    ],
    features: [
      'Women-specific design',
      'Enhanced cushioning',
      'Comfortable fit',
      'Breathable upper'
    ],
    specifications: {
      'Weight': '250g',
      'Drop': '8mm',
      'Stack Height': '30mm',
      'Upper': 'Mesh',
      'Midsole': 'EVA Foam',
      'Outsole': 'Rubber'
    }
  },
  {
    id: '6',
    name: 'Women\'s Performance Running Shoes',
    price: 1050,
    originalPrice: 1250,
    images: [], // Legacy field - use cardImage instead
    description: 'High-performance running shoes for women with advanced technology and stylish design. Perfect for competitive runners and serious athletes.',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: ['Blue', 'Green', 'Black'],
    gender: 'women',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/Image_fx (2).jpg',
    detailImages: [
      '/images/Image_fx (2).jpg',
      '/images/Image_fx.jpg',
      '/images/Image_fx (1).jpg',
      '/images/running3.jpg'
    ],
    features: [
      'High-performance technology',
      'Competitive design',
      'Advanced comfort features',
      'Stylish appearance'
    ],
    specifications: {
      'Weight': '270g',
      'Drop': '10mm',
      'Stack Height': '32mm',
      'Upper': 'Engineered Mesh',
      'Midsole': 'Dual-density Foam',
      'Outsole': 'Carbon Rubber'
    }
  },
  {
    id: '7',
    name: 'Women\'s Lightweight Training Shoes',
    price: 800,
    images: [], // Legacy field - use cardImage instead
    description: 'Lightweight training shoes perfect for gym workouts and cross-training sessions. Versatile design for various fitness activities.',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['White', 'Gray', 'Pink'],
    gender: 'women',
    category: 'Athletic',
    featured: false,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/Image_fx.jpg',
    detailImages: [
      '/images/Image_fx.jpg',
      '/images/Image_fx (1).jpg',
      '/images/Image_fx (2).jpg',
      '/images/white.jpg'
    ],
    features: [
      'Lightweight construction',
      'Versatile training design',
      'Gym workout optimized',
      'Cross-training ready'
    ],
    specifications: {
      'Weight': '240g',
      'Drop': '6mm',
      'Stack Height': '28mm',
      'Upper': 'Lightweight Mesh',
      'Midsole': 'EVA Foam',
      'Outsole': 'Rubber'
    }
  },
  {
    id: '8',
    name: 'Women\'s Premium Athletic Shoes',
    price: 1150,
    originalPrice: 1400,
    images: [], // Legacy field - use cardImage instead
    description: 'Premium athletic shoes with luxury materials and advanced technology. Perfect for serious athletes who demand the best performance.',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: ['Black', 'White', 'Gold'],
    gender: 'women',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/images/running3.jpg',
    detailImages: [
      '/images/running3.jpg',
      '/images/running2.jpg',
      '/images/black.jpg',
      '/images/white.jpg'
    ],
    features: [
      'Premium materials',
      'Luxury construction',
      'Advanced technology',
      'Elite performance'
    ],
    specifications: {
      'Weight': '260g',
      'Drop': '8mm',
      'Stack Height': '30mm',
      'Upper': 'Premium Mesh',
      'Midsole': 'Carbon Fiber',
      'Outsole': 'Premium Rubber'
    }
  }
];

// Helper functions
export const getProductById = (id: string): EnhancedProduct | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByGender = (gender: 'men' | 'women'): EnhancedProduct[] => {
  return products.filter(product => product.gender === gender);
};

export const getFeaturedProducts = (): EnhancedProduct[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): EnhancedProduct[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};