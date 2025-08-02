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
    cardImage: '/src/photos/running.jpg',
    detailImages: [
      '/src/photos/running.jpg',
      '/src/photos/running (2).jpg'
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
    cardImage: '/src/photos/black.jpg',
    detailImages: [
      '/src/photos/running (2).jpg',
      '/src/photos/running.jpg',
      '/src/photos/running2.jpg'
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
    cardImage: '/src/photos/white.jpg',
    detailImages: [
      '/src/photos/white.jpg',
      '/src/photos/running2.jpg',
      '/src/photos/running3.jpg',
      '/src/photos/running (2).jpg'
    ],
    features: [
      'Ultra-lightweight design',
      'Speed-focused construction',
      'Agility training optimized',
      'Minimalist feel'
    ],
    specifications: {
      'Weight': '220g',
      'Drop': '6mm',
      'Stack Height': '28mm',
      'Upper': 'Lightweight Mesh',
      'Midsole': 'Compressed EVA',
      'Outsole': 'Lightweight Rubber'
    }
  },
  {
    id: '4',
    name: 'Men\'s Professional Running Shoes',
    price: 1200,
    images: [], // Legacy field - use cardImage instead
    description: 'Professional-grade running shoes with advanced technology for competitive athletes. Designed for elite performance.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Black', 'Blue', 'Orange'],
    gender: 'men',
    category: 'Athletic',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/src/photos/running3.jpg',
    detailImages: [
      '/src/photos/running3.jpg',
      '/src/photos/black.jpg',
      '/src/photos/white.jpg',
      '/src/photos/running.jpg'
    ],
    features: [
      'Professional-grade technology',
      'Elite performance design',
      'Advanced cushioning system',
      'Competition-ready'
    ],
    specifications: {
      'Weight': '290g',
      'Drop': '8mm',
      'Stack Height': '30mm',
      'Upper': 'Performance Mesh',
      'Midsole': 'Advanced Foam',
      'Outsole': 'Performance Rubber'
    }
  },

  // WOMEN'S PRODUCTS (4 products)
  {
    id: '5',
    name: 'Elegant High Heels',
    price: 800,
    images: [], // Legacy field - use cardImage instead
    description: 'Sophisticated high heel shoes perfect for formal events and special occasions. Elegant and sophisticated design.',
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    colors: ['Black', 'Red', 'Nude'],
    gender: 'women',
    category: 'Heels',
    featured: false,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/src/photos/Image_fx.jpg',
    detailImages: [
      '/src/photos/Image_fx.jpg',
      '/src/photos/Image_fx (1).jpg',
      '/src/photos/Image_fx (2).jpg',
      '/src/photos/frsh kicks.png'
    ],
    features: [
      'Sophisticated design',
      'Formal event perfect',
      'Elegant styling',
      'Comfortable heel'
    ],
    specifications: {
      'Heel Height': '8cm',
      'Material': 'Leather',
      'Sole': 'Leather',
      'Closure': 'Slip-on',
      'Style': 'Pump',
      'Occasion': 'Formal'
    }
  },
  {
    id: '6',
    name: 'Fashion Sandals',
    price: 450,
    images: [], // Legacy field - use cardImage instead
    description: 'Trendy sandals perfect for summer and warm weather occasions. Light and breezy design for warm weather.',
    sizes: ['35', '36', '37', '38', '39', '40'],
    colors: ['Gold', 'Silver', 'Black'],
    gender: 'women',
    category: 'Sandals',
    featured: false,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/src/photos/frsh kicks.png',
    detailImages: [
      '/src/photos/frsh kicks.png',
      '/src/photos/Image_fx.jpg',
      '/src/photos/Image_fx (1).jpg',
      '/src/photos/Image_fx (2).jpg'
    ],
    features: [
      'Trendy summer design',
      'Warm weather perfect',
      'Light and breezy',
      'Versatile styling'
    ],
    specifications: {
      'Heel Height': '2cm',
      'Material': 'Synthetic',
      'Sole': 'Rubber',
      'Closure': 'Slip-on',
      'Style': 'Flat Sandal',
      'Season': 'Summer'
    }
  },
  {
    id: '7',
    name: 'Women\'s Casual Sneakers',
    price: 650,
    originalPrice: 750,
    images: [], // Legacy field - use cardImage instead
    description: 'Comfortable casual sneakers perfect for everyday wear and casual outings. Comfortable and stylish for everyday wear.',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['White', 'Pink', 'Gray'],
    gender: 'women',
    category: 'Sneakers',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/src/photos/running.jpg',
    detailImages: [
      '/src/photos/running.jpg',
      '/src/photos/running2.jpg',
      '/src/photos/running3.jpg',
      '/src/photos/running (2).jpg'
    ],
    features: [
      'Comfortable everyday wear',
      'Casual outing perfect',
      'Stylish design',
      'Versatile colors'
    ],
    specifications: {
      'Weight': '250g',
      'Drop': '6mm',
      'Stack Height': '25mm',
      'Upper': 'Canvas',
      'Midsole': 'EVA Foam',
      'Outsole': 'Rubber'
    }
  },
  {
    id: '8',
    name: 'Women\'s Fashion Boots',
    price: 900,
    images: [], // Legacy field - use cardImage instead
    description: 'Stylish fashion boots perfect for autumn and winter seasons. Trendy boots perfect for any season.',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Black', 'Brown', 'Tan'],
    gender: 'women',
    category: 'Boots',
    featured: true,
    inStock: true,
    // 🖼️ IMAGES - EDIT HERE
    cardImage: '/src/photos/black.jpg',
    detailImages: [
      '/src/photos/black.jpg',
      '/src/photos/white.jpg'
    ],
    features: [
      'Stylish fashion design',
      'Autumn/winter perfect',
      'Trendy styling',
      'Seasonal versatility'
    ],
    specifications: {
      'Heel Height': '5cm',
      'Material': 'Leather',
      'Sole': 'Rubber',
      'Closure': 'Zipper',
      'Style': 'Ankle Boot',
      'Season': 'Autumn/Winter'
    }
  }
];

// Helper functions for easy access
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