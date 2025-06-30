import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-20 bg-gray-50 -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            7 Asiata Solarin Crescent Off Kudirat Abiola Way, Olusosun Bus Stop Oregun, Lagos.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96800.76508513864!2d3.3946093528314774!3d6.5251174813143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b937a75c894ed%3A0x604cbad4c7f4679e!2sOpen%20Access%20Consulting%20Limited!5e0!3m2!1sen!2sng!4v1750202053306!5m2!1sen!2sng" 
              width="600" 
              height="450" 
              className="border-0 w-full h-full"
              title="Open Access Consulting Limited Office Location"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;