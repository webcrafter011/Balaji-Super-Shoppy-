import React from 'react';
import { Facebook, Instagram, Twitter, ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart size={24} className="text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                <span className="text-yellow-400">Balaji</span> Super Shoppy
              </h3>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#discounts" className="hover:text-green-400 transition-colors">Discounts</a></li>
              <li><a href="#gallery" className="hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <p className="mb-4">
              Subscribe to receive updates on special offers and discounts.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Balaji Super Shoppy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;