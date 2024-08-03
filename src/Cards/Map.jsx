import React from 'react';

const Map = () => {
  return (
    <div className="map-container" style={{ width: '100%', height: '400px', margin: '20px 0' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6075.340828810637!2d77.03974766892668!3d28.596447788966437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b8baa0eafc3%3A0xaf157af2513485b!2sToni%20%26%20Guy%20Dwarka!5e0!3m2!1sen!2sin!4v1722695036821!5m2!1sen!2sin" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
