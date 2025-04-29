import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-500 shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingCart size={32} className="text-white" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white animate-pulse">
            <span className="text-yellow-300">Balaji</span> Super Shoppy
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-yellow-300 transition-colors font-medium">Home</a>
          <a href="#discounts" className="text-white hover:text-yellow-300 transition-colors font-medium">Discounts</a>
          <a href="#gallery" className="text-white hover:text-yellow-300 transition-colors font-medium">Gallery</a>
          <a href="#contact" className="text-white hover:text-yellow-300 transition-colors font-medium">Contact</a>
        </nav>
        <button className="block md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;