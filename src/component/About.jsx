import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-16">
      {/* Heading Banner */}
      <div className="w-full bg-zinc-700 text-white py-5">
        <h1 className="font-display text-4xl font-bold text-center">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center mt-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            className="rounded-lg shadow-lg w-full h-64 md:h-96 md:max-w-lg"
            src="https://drive.google.com/file/d/1M1uVCwdIX_1VWg1zVVruh_hmFurOCtw2/preview"
            title="Tony & Guy Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Tom & Guy Salon is a premier destination for exceptional hair care and beauty services. Known for its professional staff and stylish ambiance, Tony & Guy Salon offers a wide range of services including haircuts, styling, coloring, and treatments, as well as skincare and makeup services. The salon is dedicated to providing personalized experiences, ensuring that every client leaves feeling refreshed and looking their best. With a focus on the latest trends and techniques, Tony & Guy Salon stands out as a leader in the beauty industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
