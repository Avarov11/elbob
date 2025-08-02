import React, { useState, useMemo } from 'react';
import { Grid, List } from 'lucide-react';
import { getProductsByGender } from '../data/products';
import ProductCard from '../components/ProductCard';

interface MensPageProps {
  onViewProduct: (productId: string) => void;
}

const MensPage: React.FC<MensPageProps> = ({ onViewProduct }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get men's products with all data from centralized source
  const mensProducts = useMemo(() => {
    const products = getProductsByGender('men');
    
    // Add card images to products for compatibility with ProductCard
    return products.map(product => ({
      ...product,
      images: [product.cardImage], // Use cardImage for product cards
      detailImages: product.detailImages // Keep detail images for product detail page
    }));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">Men's Collection</h1>
          <p className="text-gray-600 text-lg">
            Performance running shoes for every athlete
          </p>
        </div>

        {/* Simple Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-600">
            {mensProducts.length} products
          </div>

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
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {mensProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {mensProducts.map(product => (
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

export default MensPage; 