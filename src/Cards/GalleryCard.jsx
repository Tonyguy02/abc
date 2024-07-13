import React from 'react';

const GalleryCard = (props) => {
  return (
    <div className="max-w-sm w-full h-96 rounded overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 bg-red-50 hover:bg-zinc-200 hover:text-black my-2 relative">
      <div className="flex flex-col h-full">

          <img className="w-full h-full object-cover p-2" src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default GalleryCard;
