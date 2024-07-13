import React from 'react';

const Card = ({ name, description, image_link, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col lg:flex-row max-w-full w-full h-auto lg:h-96 rounded overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 bg-red-50 hover:bg-zinc-200 hover:text-black my-2">
      {isEven ? (
        <>
          <div className="w-full lg:w-1/2 h-48 lg:h-full">
            <img className="w-full h-full object-cover p-2" src={image_link} alt={name} />
          </div>
          <div className="w-full lg:w-1/2 px-6 py-4 flex flex-col justify-center h-auto lg:h-full">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-base">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2 px-6 py-4 flex flex-col justify-center h-auto lg:h-full">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-base">{description}</p>
          </div>
          <div className="w-full lg:w-1/2 h-48 lg:h-full">
            <img className="w-full h-full object-cover p-2" src={image_link} alt={name} />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
