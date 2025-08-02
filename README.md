# Fresh Kicks - E-commerce Platform

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. Perfect for selling footwear and fashion items with a clean, Nike-inspired design.

## 🚀 Live Demo

[View Live Site](https://your-netlify-url.netlify.app)

## ✨ Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, minimalist design inspired by Nike
- **Product Management** - Centralized product data management
- **Shopping Cart** - Full cart functionality with quantity controls
- **Product Details** - Rich product pages with image galleries
- **Mobile-First** - Touch-friendly interface for mobile devices
- **Fast Performance** - Optimized for speed and user experience

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **React Context** - State management

## 📱 Mobile Optimized

- **iPhone Compatible** - Optimized for iOS devices
- **Touch-Friendly** - Large touch targets and smooth interactions
- **Responsive Images** - Adaptive image sizing
- **Fast Loading** - Optimized for mobile networks

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avarov11/elbob.git
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
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deploy to Netlify

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Set build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Option 2: Manual Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop**
   - Drag the `dist` folder to Netlify's deploy area
   - Your site will be live instantly!

## 📁 Project Structure

```
elbob/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── ProductCard.tsx # Product display card
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── MensPage.tsx    # Men's products
│   │   ├── WomensPage.tsx  # Women's products
│   │   ├── ProductDetailPage.tsx # Product details
│   │   └── CartPage.tsx    # Shopping cart
│   ├── context/            # React Context
│   │   └── CartContext.tsx # Shopping cart state
│   ├── data/               # Data management
│   │   └── products.ts     # Product data
│   ├── types/              # TypeScript types
│   │   └── index.ts        # Type definitions
│   └── photos/             # Product images
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Adding Products

Edit `src/data/products.ts` to add new products:

```typescript
{
  id: 'new-product',
  name: 'New Product Name',
  price: 1200,
  originalPrice: 1500,
  description: 'Product description...',
  category: 'men',
  cardImage: '/src/photos/your-image.jpg',
  detailImages: ['/src/photos/detail1.jpg', '/src/photos/detail2.jpg'],
  colors: ['Black', 'White'],
  sizes: ['40', '41', '42', '43'],
  inStock: true,
  features: ['Feature 1', 'Feature 2'],
  specifications: {
    'Material': 'Leather',
    'Weight': '300g'
  }
}
```

### Styling

- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Layout**: Modify components in `src/components/`
- **Pages**: Edit page components in `src/pages/`

## 📱 Mobile Features

- **Responsive Grid Layouts**
- **Touch-Friendly Buttons**
- **Smooth Animations**
- **Optimized Images**
- **Fast Loading Times**

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file for environment variables:

```env
VITE_API_URL=your_api_url
VITE_STRIPE_KEY=your_stripe_key
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email info@freshkicks.com or create an issue in this repository.

---

**Built with ❤️ for the Egyptian fashion community** 