import React from 'react';

const GalleryHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20 -mx-22">
      <div className="mx-auto px-4 sm:px-10 lg:px-28">
        <div className='text-center'>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore moments from our training sessions, conferences, and consulting engagements. 
            See the impact we're making in the business community.
          </p> 
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;