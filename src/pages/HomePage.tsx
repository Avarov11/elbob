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
         <div className="relative z-10 text-center text-white px-4">
           <h1 className="text-5xl md:text-7xl font-bold mb-6">
             Welcome to Fresh Kicks
           </h1>
           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
             Discover amazing products at unbeatable prices. Quality meets affordability.
           </p>
                       <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products-men')}
                className="inline-flex items-center px-8 py-4 bg-[#f26457] text-white font-semibold rounded-lg hover:bg-[#f26457]/90 transition-colors text-lg"
              >
                <ShoppingBag className="mr-2" size={24} />
                Shop Men
              </button>
              <button
                onClick={() => onNavigate('products-women')}
                className="inline-flex items-center px-8 py-4 bg-[#f2b749] text-white font-semibold rounded-lg hover:bg-[#f2b749]/90 transition-colors text-lg"
              >
                <ShoppingBag className="mr-2" size={24} />
                Shop Women
              </button>
            </div>
         </div>
       </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#f26457]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#f26457]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Carefully curated selection of premium items</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2b749]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-[#f2b749]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f2c849]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-[#f2c849]" size={24} />
              </div>
                             <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
               <p className="text-gray-600">Simple ordering process with cash on delivery</p>
            </div>
          </div>
        </div>
      </section>

             {/* Categories Section */}
       <section className="bg-white py-16">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
             <p className="text-gray-600">Choose your style and explore our collections</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
                           {/* Men's Category */}
              <div className="relative group cursor-pointer" onClick={() => onNavigate('products-men')}>
                <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                  <img
                    src="/src/photos/Image_fx (1).jpg"
                    alt="Men's Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                    <p className="text-sm opacity-90">Discover stylish footwear for men</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-[#f26457] px-3 py-1 rounded-full text-sm font-semibold">
                    Shop Now
                  </div>
                </div>
              </div>

              {/* Women's Category */}
              <div className="relative group cursor-pointer" onClick={() => onNavigate('products-women')}>
                <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                  <img
                    src="/src/photos/Image_fx (2).jpg"
                    alt="Women's Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                    <p className="text-sm opacity-90">Explore elegant footwear for women</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-[#f2b749] px-3 py-1 rounded-full text-sm font-semibold">
                    Shop Now
                  </div>
                </div>
              </div>
           </div>
         </div>
       </section>

               {/* Best Sellers Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
              <p className="text-gray-600">Our most popular products loved by customers</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-[#f26457] to-[#f2b749] flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-3xl mb-2">👟</div>
                        <div className="text-sm opacity-90">Best Seller {item}</div>
                      </div>
                    </div>
                    
                    {/* Wishlist button */}
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-[#f2b749] hover:text-white transition-colors">
                      <Heart size={16} />
                    </button>
                    
                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-[#f2b749] hover:text-white transition-all duration-300">
                        <Eye size={16} className="mr-1" />
                        Quick View
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                                         <div className="flex items-center justify-between mb-2">
                       <span className="text-sm text-gray-500">Featured</span>
                     </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">Premium Sneakers</h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-lg font-bold text-black">1,200 EGP</span>
                      <span className="text-sm text-gray-500 line-through">1,500 EGP</span>
                    </div>
                    
                    <button className="w-full bg-[#f2b749] text-white py-2 rounded-md hover:bg-[#f2b749]/90 transition-colors text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Fresh Kicks?</h2>
              <p className="text-gray-600">We provide the best shopping experience for our customers</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#f26457]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-[#f26457]" size={24} />
                </div>
                                 <h3 className="text-xl font-semibold mb-2">Cash on Delivery</h3>
                 <p className="text-gray-600">Pay with cash when your order arrives</p>
              </div>
              <div className="text-center">
                <div className="bg-[#f2b749]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-[#f2b749]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Free shipping on orders over 500 EGP</p>
              </div>
              <div className="text-center">
                <div className="bg-[#f2c849]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-[#f2c849]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day return policy for all products</p>
              </div>
              <div className="text-center">
                <div className="bg-[#f26457]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-[#f26457]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round the clock customer support</p>
              </div>
            </div>
          </div>
        </section>

        
    </div>
  );
};

export default HomePage;