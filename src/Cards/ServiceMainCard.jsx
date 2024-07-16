import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ image, link, title }) => {
  return (
    <div className="w-full flex justify-center items-center mb-4">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Link 
            to={link} 
            className="text-white text-xl font-bold py-2 px-4 bg-purple-700 rounded hover:bg-purple-800"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16">
      <ServicesCard 
        image="https://via.placeholder.com/800x400" 
        link="/services/men" 
        title="Men Services" 
      />
      <ServicesCard 
        image="https://via.placeholder.com/800x400" 
        link="/services/women" 
        title="Women Services" 
      />
    </div>
  );
}

export default Services;
