import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../Cards/Card';
import { data } from "../Utils/constant";
import BackgroundImage1 from '../statics/4.JPG'
import BackgroundImage2 from '../statics/2.JPG'

const Home = () => {
  const [services] = useState(data);

  return (
    <div>
      <div className="h-screen w-full bg-cover bg-center flex items-center justify-center">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div>
            <img src={BackgroundImage1} alt="Background 1" className="object-cover h-screen w-full" />
          </div>
          <div>
            <img src={BackgroundImage2} alt="Background 2" className="object-cover h-screen w-full" />
          </div>
        </Carousel>
        <div className="absolute bg-purple-100 bg-opacity-50 text-black p-10 rounded-lg">
          <h1 className="font-display text-6xl font-bold mb-4">Welcome to Toni & Guy</h1>
          <p className="text-lg text-center border-2 border-purple-700 rounded bg-black text-white">
            THE ULTIMATE SALON EXPERIENCE
          </p>
          <div className='flex justify-center space-x-4 gap-6 py-3 '>
            <button className='bg-white hover:bg-black hover:text-white text-black font-semibold py-3 px-6 border-2 border-purple-400 rounded shadow'>
              <Link to='/serviceMain'>OUR SERVICES</Link>
            </button>
            <button className='bg-white hover:bg-black hover:text-white text-black font-semibold py-2 px-4 border-2 border-purple-400 rounded shadow'>
              <Link to='/contact'>CONTACT US</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center bg-white">
        <h1 className="font-display text-4xl font-bold text-center text-black p-2">
          Our Popular Services
        </h1>
      </div>
      <div className="flex-grow border-t border-white"></div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-0 lg:flex-row lg:flex-wrap lg:justify-center">
          {services.map((i) => (
            <div key={i.id} className="w-full m-8">
              <Card {...i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
