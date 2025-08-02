import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/images/frsh kicks.png" 
                alt="Fresh Kicks Logo" 
                className="h-6 sm:h-8 w-auto mr-3"
              />
              <h3 className="text-xl sm:text-2xl font-bold">Fresh Kicks</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Fresh Kicks - Premium footwear imported from around the world. Style, comfort, and quality for the modern Egyptian.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f2b749] transition-colors p-2">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f2b749] transition-colors p-2">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f2b749] transition-colors p-2">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Men', 'Women', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase().replace(' ', '-'))}
                    className="text-sm sm:text-base text-gray-300 hover:text-[#f2b749] transition-colors py-1"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['Size Guide', 'Shipping Info', 'Returns', 'FAQ', 'Support'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate('faq')}
                    className="text-sm sm:text-base text-gray-300 hover:text-[#f2b749] transition-colors py-1"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#f2b749] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">+20 100 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#f2b749] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">info@stepstyle.eg</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#f2b749] flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 Fresh Kicks. All rights reserved. | Designed for Egyptian fashion lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;