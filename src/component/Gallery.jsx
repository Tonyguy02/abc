import React from 'react';
import {services}from '../Utils/Services'
import GalleryCard from '../Cards/GalleryCard';


const Gallery = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-16">
      <div className="w-full bg-zinc-700 text-white py-6">
        <h1 className="font-display text-4xl font-bold text-center">Gallery</h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-center">
          {services.map((i) => (
            <div key={i.id} className="w-full lg:w-1/3 xl:w-1/4 p-2">
              <GalleryCard {...i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
