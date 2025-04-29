import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="bg-cover bg-center h-[50vh] md:h-[60vh]" 
           style={{ 
             backgroundImage: `url('https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
             backgroundBlendMode: 'overlay',
             backgroundColor: 'rgba(0,0,0,0.4)'
           }}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Quality Products at <br />
            <span className="text-yellow-300">Affordable Prices</span>
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl drop-shadow-md">
            Your one-stop shop for all grocery needs with incredible weekly discounts
          </p>
          <a href="#discounts" 
             className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
            View Discounts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;