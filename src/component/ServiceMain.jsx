import React from 'react';
import { Link } from 'react-router-dom';

const ServicesMain = () => {
  return (
    <div className="container mx-auto mt-10 space-y-1">
        <div className="w-full bg-zinc-700 text-white py-6">
        <h1 className="font-display text-4xl font-bold text-center">Our Services</h1>
      </div>
      {/* Men Services Card */}
      <div className="w-full bg-red-50 hover:bg-zinc-200 rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
        <img 
          src="/static/sm.jpg" 
          alt="Men Services" 
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Men Services</h2>
          <h3>Toni & Guy Dwarka Salon offers premium grooming services tailored for modern men. Our expert stylists provide precision haircuts, tailored beard trims, and classic shaves, ensuring you look and feel your best. We use top-quality products to nourish and style your hair, keeping it healthy and vibrant. Enjoy a relaxing experience in our sophisticated salon environment, where personalized consultations ensure each service meets your unique style and preferences. From contemporary cuts to timeless styles, Toni & Guy Men Salon is dedicated to delivering exceptional grooming services for the discerning gentleman.</h3>
          <button className='bg-white hover:bg-black hover:text-white text-black font-semibold py-3 px-6 border-2 border-purple-400 rounded shadow space-y-2'>
              <Link to='/services/men'>MORE</Link>
            </button>
        </div>
      </div>

      {/* Women Services Card */}
      <div className="w-full bg-red-50 hover:bg-zinc-200 rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
      <img 
          src="/static/wm.jpg" 
          alt="Women Services" 
          className="w-full md:w-1/2 object-cover"
        />
      <div className="p-4 flex flex-col justify-center">
      
          <h2 className="text-2xl font-bold mb-4">Women Services</h2>
          <h3>Toni & Guy Dwarka Salon offers a luxurious experience tailored to enhance your natural beauty. Our expert stylists provide a range of services, including precision haircuts, vibrant coloring, and innovative styling techniques. We specialize in personalized consultations to understand your unique style and preferences, ensuring every visit leaves you feeling refreshed and confident. Additionally, our salon features treatments like deep conditioning and specialized scalp care to maintain healthy hair. Enjoy a relaxing ambiance as you indulge in our professional services designed to elevate your look and well-being. Discover the art of hair at Toni & Guy Women Salon today!</h3>
          <button className='bg-white hover:bg-black hover:text-white text-black font-semibold py-3 px-6 border-2 border-purple-400 rounded shadow space-y-2'>
              <Link to='/services/women'>MORE</Link>
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesMain;
