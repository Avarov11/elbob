import React, { useState, useMemo } from 'react';
import { Grid, List, ChevronDown } from 'lucide-react';
import { getProductsByGender } from '../data/products';
import ProductCard from '../components/ProductCard';

interface WomensPageProps {
  onViewProduct: (productId: string) => void;
}

const WomensPage: React.FC<WomensPageProps> = ({ onViewProduct }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  // Get women's products with all data from centralized source
  const womensProducts = useMemo(() => {
    const products = getProductsByGender('women');
    
    // Add card images to products for compatibility with ProductCard
    return products.map(product => ({
      ...product,
      images: [product.cardImage], // Use cardImage for product cards
      detailImages: product.detailImages // Keep detail images for product detail page
    }));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Simple Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">Women's Collection</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Elegant footwear for the modern woman
          </p>
        </div>

        {/* Simple Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-3 sm:space-y-0">
          <div className="text-xs sm:text-sm text-gray-600">
            {womensProducts.length} products
          </div>

          <div className="flex items-center space-x-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-3 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 sm:p-3 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <List size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {womensProducts.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">No products found.</p>
            </div>
          ) : (
            <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
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