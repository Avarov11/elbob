import React from 'react';
import { ShoppingBag, Star, Truck, Heart, Eye, CheckCircle, Shield, Clock } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/src/photos/Image_fx.jpg"
            alt="Fresh Kicks Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Welcome to Fresh Kicks
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 px-4">
            Discover amazing products at unbeatable prices. Quality meets affordability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={() => onNavigate('products-men')}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#f26457] text-white font-semibold rounded-lg hover:bg-[#f26457]/90 transition-colors text-base sm:text-lg"
            >
              <ShoppingBag className="mr-2" size={20} />
              Shop Men
            </button>
            <button
              onClick={() => onNavigate('products-women')}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#f2b749] text-white font-semibold rounded-lg hover:bg-[#f2b749]/90 transition-colors text-base sm:text-lg"
            >
              <ShoppingBag className="mr-2" size={20} />
              Shop Women
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-[#f26457]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="text-[#f26457]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-sm sm:text-base text-gray-600">Carefully curated selection of premium items</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2b749]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Truck className="text-[#f2b749]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-sm sm:text-base text-gray-600">Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-[#f2c849]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ShoppingBag className="text-[#f2c849]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Easy Shopping</h3>
              <p className="text-sm sm:text-base text-gray-600">Simple ordering process with cash on delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Shop by Category</h2>
            <p className="text-sm sm:text-base text-gray-600">Choose your style and explore our collections</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Men's Category */}
            <div className="relative group cursor-pointer" onClick={() => onNavigate('products-men')}>
              <div className="relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80">
                <img
                  src="/src/photos/Image_fx (1).jpg"
                  alt="Men's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Men's Collection</h3>
                  <p className="text-xs sm:text-sm opacity-90">Discover stylish footwear for men</p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white text-[#f26457] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Shop Now
                </div>
              </div>
            </div>

            {/* Women's Category */}
            <div className="relative group cursor-pointer" onClick={() => onNavigate('products-women')}>
              <div className="relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80">
                <img
                  src="/src/photos/Image_fx (2).jpg"
                  alt="Women's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Women's Collection</h3>
                  <p className="text-xs sm:text-sm opacity-90">Explore elegant footwear for women</p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white text-[#f2b749] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Best Sellers</h2>
            <p className="text-sm sm:text-base text-gray-600">Our most popular products loved by customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-[#f26457] to-[#f2b749] flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl sm:text-3xl mb-2">👟</div>
                      <div className="text-xs sm:text-sm opacity-90">Best Seller {item}</div>
                    </div>
                  </div>
                  
                  {/* Wishlist button */}
                  <button className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-[#f2b749] hover:text-white transition-colors">
                    <Heart size={14} />
                  </button>
                  
                  {/* Quick view overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold hover:bg-[#f2b749] hover:text-white transition-all duration-300 text-xs sm:text-sm">
                      <Eye size={14} className="mr-1" />
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-500">Featured</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Premium Sneakers</h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-base sm:text-lg font-bold text-black">1,200 EGP</span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">1,500 EGP</span>
                  </div>
                  
                  <button className="w-full bg-[#f2b749] text-white py-2 rounded-md hover:bg-[#f2b749]/90 transition-colors text-xs sm:text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Why Choose Fresh Kicks?</h2>
            <p className="text-sm sm:text-base text-gray-600">We provide the best shopping experience for our customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-[#f26457]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="text-[#f26457]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Cash on Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600">Pay with cash when your order arrives</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2b749]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Truck className="text-[#f2b749]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600">Free shipping on orders over 500 EGP</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2c849]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="text-[#f2c849]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm sm:text-base text-gray-600">30-day return policy for all products</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-[#f26457]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="text-[#f26457]" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm sm:text-base text-gray-600">Round the clock customer support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;