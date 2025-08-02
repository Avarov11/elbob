import React, { useState, useMemo } from 'react';
import { Grid, List, ChevronDown } from 'lucide-react';
import { getProductsByGender } from '../data/products';
import ProductCard from '../components/ProductCard';

interface WomensPageProps {
  onViewProduct: (productId: string) => void;
}

const WomensPage: React.FC<WomensPageProps> = ({ onViewProduct }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get women's products with all data from centralized source
  const womensProducts = useMemo(() => {
    const products = getProductsByGender('women');
    
    // Add card images to products for compatibility with ProductCard
    const productsWithImages = products.map(product => ({
      ...product,
      images: [product.cardImage], // Use cardImage for product cards
      detailImages: product.detailImages // Keep detail images for product detail page
    }));

    // Sort products
    switch (sortBy) {
      case 'price-low':
        productsWithImages.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        productsWithImages.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        productsWithImages.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default: // featured
        productsWithImages.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return productsWithImages;
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">Women's Collection</h1>
          <p className="text-gray-600 text-lg">
            Style and comfort for every occasion
          </p>
        </div>

        {/* Simple Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-600">
            {womensProducts.length} products
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-4 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {womensProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {womensProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewProduct={onViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WomensPage; 