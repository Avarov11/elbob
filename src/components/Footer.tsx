import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/src/photos/frsh kicks.png" 
                alt="Fresh Kicks Logo" 
                className="h-8 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold">Fresh Kicks</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Fresh Kicks - Premium footwear imported from around the world. Style, comfort, and quality for the modern Egyptian.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f2b749] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f2b749] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f2b749] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                              {['Home', 'Men', 'Women', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase().replace(' ', '-'))}
                    className="text-gray-300 hover:text-[#f2b749] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['Size Guide', 'Shipping Info', 'Returns', 'FAQ', 'Support'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate('faq')}
                    className="text-gray-300 hover:text-[#f2b749] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#f2b749]" />
                <span className="text-gray-300">+20 100 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#f2b749]" />
                <span className="text-gray-300">info@stepstyle.eg</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#f2b749]" />
                <span className="text-gray-300">Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fresh Kicks. All rights reserved. | Designed for Egyptian fashion lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;