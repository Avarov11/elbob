import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Men', href: 'products-men' },
    { name: 'Women', href: 'products-women' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center p-2 -m-2"
            >
              <img 
                src="/src/photos/frsh kicks.png" 
                alt="Fresh Kicks Logo" 
                className="h-8 sm:h-10 w-auto hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.href)}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  currentPage === item.href
                    ? 'text-[#f2b749] bg-[#f2b749]/10'
                    : 'text-gray-700 hover:text-[#f2b749] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-700 hover:text-[#f2b749] transition-colors">
              <Search size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-[#f2b749] transition-colors">
              <User size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-700 hover:text-[#f2b749] transition-colors"
            >
              <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f2b749] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getItemCount()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#f2b749] transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-3 text-base font-medium w-full text-left transition-colors rounded-md ${
                    currentPage === item.href
                      ? 'text-[#f2b749] bg-[#f2b749]/10'
                      : 'text-gray-700 hover:text-[#f2b749] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;