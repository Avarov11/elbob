import React, { useState, useMemo } from 'react';
import { Minus, Plus, ShoppingCart, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const { addItem } = useCart();

  // Get product with all data from centralized source
  const product = useMemo(() => {
    const productData = getProductById(productId);
    if (!productData) return null;

    // Add images for compatibility with existing code
    return {
      ...productData,
      images: [productData.cardImage], // Use cardImage for compatibility
      detailImages: productData.detailImages // Keep detail images
    };
  }, [productId]);

  // Get detail images for this product (up to 4 images)
  // If no detail images, fall back to regular images
  const getDetailImages = () => {
    if (product && product.detailImages && product.detailImages.length > 0) {
      return product.detailImages;
    }
    return product?.images || [];
  };

  const detailImages = getDetailImages();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => onNavigate('products')}
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    onNavigate('cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => onNavigate('products')}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden h-[500px]">
              {detailImages.length > 0 ? (
                <img
                  src={detailImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-[#f26457] to-[#f2b749]">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">👟</div>
                    <div className="text-lg">{product.name}</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Image Thumbnails */}
            {detailImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {detailImages.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-white rounded-lg overflow-hidden border-2 h-[120px] ${
                      selectedImage === index ? 'border-red-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 capitalize">{product.category}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-bold text-black">
                  {product.price.toLocaleString()} EGP
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} EGP
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Product Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Product Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 font-medium">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-colors ${
                      selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Size</h3>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-gray-300 hover:border-red-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-red-600 text-white py-4 rounded-md hover:bg-red-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              
              <button 
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="w-full border-2 border-black text-black py-4 rounded-md hover:bg-black hover:text-white transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Truck, text: 'Free shipping on orders over 1000 EGP', color: 'text-orange-500' },
                { icon: RotateCcw, text: '14-day return policy', color: 'text-yellow-500' },
                { icon: Shield, text: '6-month warranty included', color: 'text-orange-500' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className={feature.color} size={24} />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Guide Modal */}
        {showSizeGuide && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Size Guide</h2>
                  <button
                    onClick={() => setShowSizeGuide(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">Size</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Length (cm)</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Width (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: '38', length: '24.0', width: '9.3' },
                        { size: '39', length: '24.5', width: '9.5' },
                        { size: '40', length: '25.0', width: '9.8' },
                        { size: '41', length: '25.5', width: '10.0' },
                        { size: '42', length: '26.0', width: '10.3' },
                        { size: '43', length: '26.5', width: '10.5' },
                        { size: '44', length: '27.0', width: '10.8' },
                        { size: '45', length: '27.5', width: '11.0' },
                      ].map((row) => (
                        <tr key={row.size}>
                          <td className="border border-gray-200 px-4 py-2 font-medium">{row.size}</td>
                          <td className="border border-gray-200 px-4 py-2">{row.length}</td>
                          <td className="border border-gray-200 px-4 py-2">{row.width}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;