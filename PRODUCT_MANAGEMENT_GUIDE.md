# 🛍️ Product Management Guide

## 📍 Centralized Product Management

All product data is now centralized in **`src/data/products.ts`**. This means you can edit everything from one place and it will automatically update across your entire site!

## 🖼️ How to Add/Edit Product Images

### **Available Photos in `/src/photos/`:**
- `running.jpg` - Running shoes
- `running (2).jpg` - Another running shoes variant  
- `running2.jpg` - Different running shoes
- `running3.jpg` - Another running shoes style
- `white.jpg` - White shoes
- `black.jpg` - Black shoes
- `Image_fx.jpg` - Fashion shoes
- `Image_fx (1).jpg` - Fashion shoes variant
- `Image_fx (2).jpg` - Fashion shoes variant
- `frsh kicks.png` - Fresh kicks

### **How to Edit Product Images:**

1. **Open `src/data/products.ts`**
2. **Find the product you want to edit**
3. **Update the image fields:**

```typescript
{
  id: '1',
  name: 'Men\'s Sports Running Shoes',
  // ... other fields ...
  
  // 🖼️ IMAGES - EDIT HERE
  cardImage: '/src/photos/running.jpg',        // ← Main image for product cards
  detailImages: [                              // ← Up to 4 images for product detail page
    '/src/photos/running.jpg',
    '/src/photos/running (2).jpg', 
    '/src/photos/running2.jpg',
    '/src/photos/running3.jpg'
  ],
  // ... rest of product data ...
}
```

## 📝 How to Edit Product Information

### **Product Fields You Can Edit:**

```typescript
{
  id: '1',                                    // ← Product ID (don't change)
  name: 'Men\'s Sports Running Shoes',        // ← Product name
  price: 950,                                 // ← Price in EGP
  originalPrice: 1300,                        // ← Original price (optional)
  description: 'High-performance running...',  // ← Product description
  sizes: ['38', '39', '40', '41', '42'],     // ← Available sizes
  colors: ['Black', 'Blue', 'Red'],           // ← Available colors
  gender: 'men',                              // ← 'men' or 'women'
  category: 'Athletic',                       // ← Product category
  featured: true,                             // ← Featured product?
  inStock: true,                              // ← In stock?
  
  // 🖼️ IMAGES - EDIT HERE
  cardImage: '/src/photos/running.jpg',       // ← Main image
  detailImages: [...],                        // ← Detail images
  
  // 📋 PRODUCT DETAILS - EDIT HERE
  features: [                                 // ← Product features
    'Advanced cushioning technology',
    'Breathable mesh upper',
    'Lightweight design',
    'Durable outsole'
  ],
  specifications: {                           // ← Technical specs
    'Weight': '280g',
    'Drop': '8mm',
    'Stack Height': '32mm',
    'Upper': 'Mesh',
    'Midsole': 'EVA Foam',
    'Outsole': 'Rubber'
  }
}
```

## 🎯 Product ID Mapping

### **Men's Products:**
- **ID `1`**: Men's Sports Running Shoes
- **ID `2`**: Men's Premium Running Shoes  
- **ID `3`**: Men's Lightweight Running Shoes
- **ID `4`**: Men's Professional Running Shoes

### **Women's Products:**
- **ID `5`**: Elegant High Heels
- **ID `6`**: Fashion Sandals
- **ID `7`**: Women's Casual Sneakers
- **ID `8`**: Women's Fashion Boots

## 🚀 Adding New Products

To add a new product:

1. **Add your images** to `/src/photos/`
2. **Add a new product object** to the `products` array in `src/data/products.ts`
3. **Use the next available ID** (currently 9)
4. **Fill in all required fields**

Example:
```typescript
{
  id: '9',
  name: 'New Product Name',
  price: 800,
  description: 'Product description...',
  sizes: ['36', '37', '38', '39', '40'],
  colors: ['Black', 'White'],
  gender: 'women',
  category: 'Sneakers',
  featured: false,
  inStock: true,
  
  // 🖼️ IMAGES - EDIT HERE
  cardImage: '/src/photos/your-image.jpg',
  detailImages: [
    '/src/photos/your-image.jpg',
    '/src/photos/another-image.jpg'
  ],
  
  // 📋 PRODUCT DETAILS - EDIT HERE
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  specifications: {
    'Spec 1': 'Value 1',
    'Spec 2': 'Value 2'
  }
}
```

## ✅ Benefits of This System

- **🎯 Single Source of Truth**: Edit everything in one place
- **🔄 No Duplication**: No more duplicate image mappings
- **📱 Automatic Updates**: Changes appear everywhere instantly
- **🛠️ Easy Maintenance**: Simple to add/edit products
- **📊 Rich Data**: Includes features, specifications, and detailed descriptions

## 🔧 Helper Functions

The system includes helper functions for easy access:

```typescript
import { 
  getProductById, 
  getProductsByGender, 
  getFeaturedProducts,
  getProductsByCategory 
} from '../data/products';

// Get a specific product
const product = getProductById('1');

// Get all men's products
const mensProducts = getProductsByGender('men');

// Get all women's products  
const womensProducts = getProductsByGender('women');

// Get featured products
const featuredProducts = getFeaturedProducts();

// Get products by category
const athleticProducts = getProductsByCategory('Athletic');
```

## 🎨 Image Guidelines

- **Card Images**: Use 1 image per product for listing pages
- **Detail Images**: Use up to 4 images per product for detail pages
- **File Formats**: JPG, PNG, or other web-compatible formats
- **Path Format**: Always use `/src/photos/filename.ext`
- **Image Size**: Recommended 800x600px or larger for good quality

---

**💡 Tip**: After editing `src/data/products.ts`, save the file and your changes will automatically appear on your site! 