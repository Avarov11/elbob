import React from 'react';
import { ShoppingBag, Star, Truck, Heart, Eye, CheckCircle, Shield, Clock } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
<div className="min-h-screen bg-gray-50">
  {/* Hero Section */}
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/images/Image_fx (1).jpg"
        alt="Fresh Kicks Hero"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            Welcome to Fresh Kicks
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed">
            Discover amazing products at unbeatable prices. Quality meets affordability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => onNavigate('products-men')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#f26457] text-white font-semibold rounded-xl hover:bg-[#f26457]/90 transition-all duration-300 text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingBag className="mr-3" size={24} />
              Shop Men
            </button>
            <button
              onClick={() => onNavigate('products-women')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#f2b749] text-white font-semibold rounded-xl hover:bg-[#f2b749]/90 transition-all duration-300 text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingBag className="mr-3" size={24} />
              Shop Women
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center">
              <div className="bg-[#f26457]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="text-[#f26457]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Quality Products</h3>
              <p className="text-base sm:text-lg text-gray-600">Carefully curated selection of premium items</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2b749]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Truck className="text-[#f2b749]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Fast Shipping</h3>
              <p className="text-base sm:text-lg text-gray-600">Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-[#f2c849]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ShoppingBag className="text-[#f2c849]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Easy Shopping</h3>
              <p className="text-base sm:text-lg text-gray-600">Simple ordering process with cash on delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Shop by Category</h2>
            <p className="text-lg sm:text-xl text-gray-600">Choose your style and explore our collections</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Men's Category */}
            <div className="relative group cursor-pointer" onClick={() => onNavigate('products-men')}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-80 sm:h-96">
                <img
                  src="/images/Image_fx (1).jpg"
                  alt="Men's Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Men's Collection</h3>
                  <p className="text-sm sm:text-base opacity-90">Discover stylish footwear for men</p>
                </div>
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white text-[#f26457] px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg">
                  Shop Now
                </div>
              </div>
            </div>

            {/* Women's Category */}
            <div className="relative group cursor-pointer" onClick={() => onNavigate('products-women')}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-80 sm:h-96">
                <img
                  src="/images/Image_fx (2).jpg"
                  alt="Women's Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Women's Collection</h3>
                  <p className="text-sm sm:text-base opacity-90">Explore elegant footwear for women</p>
                </div>
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white text-[#f2b749] px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Best Sellers</h2>
            <p className="text-lg sm:text-xl text-gray-600">Our most popular products loved by customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105">
                <div className="relative">
                  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#f26457] to-[#f2b749] flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl sm:text-4xl mb-3">👟</div>
                      <div className="text-sm sm:text-base opacity-90">Best Seller {item}</div>
                    </div>
                  </div>
                  
                  {/* Wishlist button */}
                  <button className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:bg-[#f2b749] hover:text-white transition-all duration-300">
                    <Heart size={18} />
                  </button>
                  
                  {/* Quick view overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#f2b749] hover:text-white transition-all duration-300 text-sm sm:text-base shadow-lg">
                      <Eye size={16} className="mr-2" />
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm sm:text-base text-gray-500">Featured</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Premium Sneakers</h3>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-lg sm:text-xl font-bold text-black">1,200 EGP</span>
                    <span className="text-sm sm:text-base text-gray-500 line-through">1,500 EGP</span>
                  </div>
                  
                  <button className="w-full bg-[#f2b749] text-white py-3 rounded-lg hover:bg-[#f2b749]/90 transition-colors text-sm sm:text-base font-medium shadow-md hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Why Choose Fresh Kicks?</h2>
            <p className="text-lg sm:text-xl text-gray-600">We provide the best shopping experience for our customers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="text-center">
              <div className="bg-[#f26457]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="text-[#f26457]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Cash on Delivery</h3>
              <p className="text-base sm:text-lg text-gray-600">Pay with cash when your order arrives</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2b749]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Truck className="text-[#f2b749]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-base sm:text-lg text-gray-600">Free shipping on orders over 500 EGP</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2c849]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="text-[#f2c849]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Easy Returns</h3>
              <p className="text-base sm:text-lg text-gray-600">30-day return policy for all products</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-[#f26457]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="text-[#f26457]" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-base sm:text-lg text-gray-600">Round the clock customer support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;