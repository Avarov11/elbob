# 🛍️ ElBob - Modern E-commerce Platform

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. Features a clean, Nike-inspired design with centralized product management.

## ✨ Features

- **🖼️ Centralized Product Management** - All product data in one place
- **📱 Responsive Design** - Works perfectly on all devices
- **🎨 Clean UI/UX** - Nike-inspired minimalist design
- **🛒 Shopping Cart** - Full cart functionality with context
- **📸 Image Gallery** - Multiple product images with navigation
- **🔍 Product Filtering** - Sort by price, featured, newest
- **💳 Checkout System** - Complete checkout flow
- **📱 Mobile Optimized** - Touch-friendly interface

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elbob.git
   cd elbob
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
elbob/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── context/       # React context (cart)
│   ├── data/          # Product data
│   ├── types/         # TypeScript types
│   ├── photos/        # Product images
│   └── utils/         # Utility functions
├── public/            # Static assets
└── docs/             # Documentation
```

## 🎯 Key Features

### **Centralized Product Management**
All product data is managed in `src/data/products.ts`:
- Product information
- Images and galleries
- Pricing and discounts
- Features and specifications

### **Clean Design**
- Minimalist, Nike-inspired design
- Responsive grid layouts
- Smooth animations and transitions
- Professional typography

### **Shopping Experience**
- Product browsing with filters
- Detailed product pages
- Shopping cart functionality
- Checkout process

## 🖼️ Adding Products

1. **Add images** to `src/photos/`
2. **Edit product data** in `src/data/products.ts`
3. **Update product information**:
   ```typescript
   {
     id: '9',
     name: 'New Product',
     price: 800,
     cardImage: '/src/photos/your-image.jpg',
     detailImages: ['/src/photos/image1.jpg', '/src/photos/image2.jpg'],
     // ... other fields
   }
   ```

## 🎨 Customization

### **Colors**
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#f2b749',
      secondary: '#f26457',
    }
  }
}
```

### **Styling**
- All styling uses Tailwind CSS
- Custom components in `src/components/`
- Responsive design built-in

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Ready** - Perfect on tablets
- **Desktop Optimized** - Full desktop experience
- **Touch Friendly** - Large touch targets

## 🔧 Development

### **Adding New Pages**
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### **Adding New Components**
1. Create component in `src/components/`
2. Export and import where needed
3. Follow existing patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation in `/docs`
- Review the code examples

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS** 