import React from 'react';
import Map from '../Cards/Map';

const Contact = () => {
  function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-16">
      <div className="w-full bg-zinc-700 text-white py-6">
        <h1 className="font-display text-4xl font-bold text-center">Contact Us</h1>
      </div>
      
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="w-full">
            <form 
              className="space-y-4"
              action="https://getform.io/f/avreeoma" // Replace with your Getform endpoint
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="mt-1 block w-full p-2 border border-zinc-700 rounded-md shadow-sm" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="mt-1 block w-full p-2 border border-zinc-700 rounded-md shadow-sm" 
                  placeholder="Your Email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  name="message"
                  className="mt-1 block w-full p-2 border border-zinc-700 rounded-md shadow-sm" 
                  rows="4" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 border-2 border-zinc-400 bg-white text-black font-bold rounded-md hover:bg-zinc-700 hover:text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full">
            <Map />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
