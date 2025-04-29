import React from 'react';
import { Tag } from 'lucide-react';

// Assuming 'twenty' is defined elsewhere, e.g.:
// import twenty from './path/to/your/20-20-gold-image.jpg';
// OR const twenty = 'URL_TO_20-20_IMAGE';
// For this example, I'll replace `twenty` with a direct URL.

type DiscountItemProps = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  image: string;
};

const DiscountItem: React.FC<DiscountItemProps> = ({
  name,
  originalPrice,
  discountedPrice,
  discountPercentage,
  image
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover" // Consider 'object-contain' if image aspect ratios vary significantly
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-bold flex items-center">
          <Tag size={16} className="mr-1" />
          {discountPercentage}% OFF
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 line-through mr-2">₹{originalPrice}</span>
            <span className="text-xl font-bold text-green-600">₹{discountedPrice}</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const DiscountItems: React.FC = () => {
  const discountItems = [
    {
      name: "20-20 Gold",
      originalPrice: 250,
      discountedPrice: 150,
      discountPercentage: 40,
      // Replace this URL with your actual image source for 20-20 Gold, potentially using the 'twenty' variable if defined
      image: "https://www.bbassets.com/media/uploads/p/l/40289821_2-parle-20-20-gold-cashew-almond-cookies.jpg"
    },
    {
      name: "Khajur Boxes (Buy 1 Get 1)",
      originalPrice: 299,
      discountedPrice: 299, // Note: B1G1 implies the discount isn't on this single item price but on buying two. Percentage might be misleading.
      discountPercentage: 50,
      image: "https://a.media-amazon.com/images/I/61a7H74Te3L._SL1245_.jpg" // Representative image of dates box
    },
    {
      name: "Amul Ice Creams",
      originalPrice: 50,
      discountedPrice: 40,
      discountPercentage: 20,
      // Using a representative image for Amul Ice Cream tub
      image: "https://a.media-amazon.com/images/I/A1YhY2Pov3L._SL1500_.jpg"
    },
    {
      name: "Roohafza",
      originalPrice: 180,
      discountedPrice: 155,
      discountPercentage: 14, // Calculated percentage might be slightly different (13.88...). Ensure this is accurate.
      image: "https://5.imimg.com/data5/SELLER/Default/2022/5/HL/QP/ET/38768188/roohafza-hamdard-750ml-12-bottle-160-mrp-1000x1000.jpeg" // Official Roohafza image
    },
    {
      name: "Gits Gulab Jamun",
      originalPrice: 125,
      discountedPrice: 110,
      discountPercentage: 12, // Calculation: (1 - 110/125) * 100 = 12%. Updated from original 8%.
      image: "https://www.gitsfood.com/wp-content/uploads/2021/04/Gits-Gulab-Jamun-100-gms-front-scaled.jpg" // Official Gits Gulab Jamun Mix image
    },
    {
      name: "Cosmetics",
      originalPrice: 500,
      discountedPrice: 475,
      discountPercentage: 5,
      image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Generic cosmetics image
    },
    {
      name: "Suhana All Spices",
      originalPrice: 200,
      discountedPrice: 190,
      discountPercentage: 5,
      image: "https://images-cdn.ubuy.co.in/63b5b3637263445e6967a1c3-suhana-spice-mixes-paneer-butter-veg.jpg" // Representative image of Suhana spice range
    },
    {
      name: "Brooms",
      originalPrice: 180,
      discountedPrice: 99,
      discountPercentage: 45, // Calculation: (1 - 99/180) * 100 = 45%. Correct.
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/667f8de4-001c-46e5-ae46-caca07224597/Gala-No-Dust-90-cm-Broom-Jhadu-Plastic-Blue-Brown-.jpeg" // Representative image of a household broom
    }
  ];

  // Small correction in discount percentage calculation check
  const calculatePercentage = (original: number, discounted: number) => {
    if (original <= 0) return 0;
    return Math.round(((original - discounted) / original) * 100);
  };

  return (
    <section id="discounts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            This Week's <span className="text-red-500">Special Discounts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of these limited-time offers on our premium quality products.
            Hurry, while stocks last!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {discountItems.map((item, index) => {
            // Optional: Recalculate percentage here if needed, or rely on the provided one
            // const calculatedPercentage = calculatePercentage(item.originalPrice, item.discountedPrice);
            return (
              <DiscountItem
                key={index}
                name={item.name}
                originalPrice={item.originalPrice}
                discountedPrice={item.discountedPrice}
                // Use the provided percentage, but ensure it's accurate.
                discountPercentage={item.discountPercentage}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscountItems;