import React from 'react';

const ServicesCard = (props) => {
  return (
    <div className="max-w-sm w-full h-96 rounded overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 bg-red-50 hover:bg-zinc-200 hover:text-black my-2 relative">
      <div className="flex flex-col h-full">
        <div className="w-full h-1/2">
          <img className="w-full h-full object-cover p-2" src={props.image} alt={props.name} />
        </div>
        <div className="w-full px-6 py-4 flex flex-col justify-center h-1/2">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-base">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
