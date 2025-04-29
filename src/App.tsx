import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DiscountItems from './components/DiscountItems';
import ShopGallery from './components/ShopGallery';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    document.title = "Balaji Super Shoppy";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DiscountItems />
      <ShopGallery />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;