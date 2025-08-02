import React, { memo, useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product, onViewProduct }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const images = product.images || [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group cursor-pointer" onClick={() => onViewProduct(product.id)}>
      <div className="relative mb-4">
        <div className="w-full h-80 bg-gray-100 overflow-hidden">
          {images.length > 0 ? (
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center">
                    <div class="text-gray-600 text-center">
                      <div class="text-4xl mb-2">👟</div>
                      <div class="text-sm opacity-90">${product.name}</div>
                    </div>
                  </div>
                `;
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-600 text-center">
                <div className="text-4xl mb-2">👟</div>
                <div className="text-sm opacity-90">{product.name}</div>
              </div>
            </div>
          )}
          
          {/* Image Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
          
          {/* Image Dots Indicator */}
          {hasMultipleImages && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? 'bg-black' 
                      : 'bg-black/50 hover:bg-black/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-sm font-semibold">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Wishlist button */}
        <button 
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors"
          aria-label="Add to wishlist"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={16} />
        </button>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium text-black text-lg">{product.name}</h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-black">
            {product.price.toLocaleString()} EGP
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice.toLocaleString()} EGP
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-1">
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
              aria-label={`Color: ${color}`}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;