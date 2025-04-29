import React from 'react';
import frontImage from '../assets/shop/front.jpg';
import insideImage from '../assets/shop/inside.jpg';
import topImage from '../assets/shop/top.jpg';

const ShopGallery: React.FC = () => {
  const images = [
    {
      url: frontImage,
      caption: "Our modern store front provides a welcoming atmosphere for all customers"
    },
    {
      url: insideImage,
      caption: "Well-stocked aisles with a variety of fresh produce and grocery items"
    },
    {
      url: topImage,
      caption: "Our dedicated staff ensures quality service and a pleasant shopping experience"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit Our <span className="text-green-600">Store</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look inside our modern supermarket where we offer the best shopping experience
            with quality products and excellent service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg group relative"
            >
              <img 
                src={image.url} 
                alt={`Shop image ${index + 1}`} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
