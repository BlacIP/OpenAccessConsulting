import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      alt: 'HR Training Session - Group Discussion',
      category: 'Training Sessions',
      event: '2023 Annual HR Conference',
      description: 'Interactive workshop on talent management strategies'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      alt: 'Professional Team Meeting',
      category: 'Consulting',
      event: 'Strategic Planning Session',
      description: 'Working with clients on business strategy development'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      alt: 'Conference Presentation',
      category: 'Speaking Events',
      event: '2023 Leadership Summit',
      description: 'Keynote presentation on modern business practices'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      alt: 'Workshop Participants',
      category: 'Training Sessions',
      event: 'Performance Management Workshop',
      description: 'Hands-on training for business professionals'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      alt: 'Team Collaboration',
      category: 'Consulting',
      event: 'Organizational Development Project',
      description: 'Collaborative session with client leadership team'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      alt: 'Training Certificate Ceremony',
      category: 'Certifications',
      event: 'Professional Certification Program',
      description: 'Certificate presentation to program graduates'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      alt: 'Panel Discussion',
      category: 'Speaking Events',
      event: 'Business Innovation Panel',
      description: 'Industry experts discussing future of business'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg',
      alt: 'Networking Event',
      category: 'Networking',
      event: 'Business Professionals Meetup',
      description: 'Networking session during annual conference'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg',
      alt: 'Workshop Breakout Session',
      category: 'Training Sessions',
      event: 'Employee Engagement Workshop',
      description: 'Small group discussions on engagement strategies'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg',
      alt: 'Consulting Meeting',
      category: 'Consulting',
      event: 'Client Strategy Session',
      description: 'One-on-one consulting session with client'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg',
      alt: 'Training Materials Review',
      category: 'Training Sessions',
      event: 'Curriculum Development',
      description: 'Review of training materials and resources'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg',
      alt: 'Award Ceremony',
      category: 'Awards',
      event: 'Excellence in Business Award',
      description: 'Recognition ceremony for outstanding business practices'
    }
  ];

  const categories = ['All', 'Training Sessions', 'Consulting', 'Speaking Events', 'Networking', 'Certifications', 'Awards'];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (idx: number) => setSelectedImageIndex(idx);
  const closeModal = () => setSelectedImageIndex(null);
  const prevImage = () => setSelectedImageIndex(idx => (idx !== null && idx > 0 ? idx - 1 : idx));
  const nextImage = () => setSelectedImageIndex(idx => (idx !== null && idx < filteredImages.length - 1 ? idx + 1 : idx));

  return (
    <>
      <section className="py-20 mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse through our collection of memorable moments
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium w-fit mb-2">
                  {image.category}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {image.event}
                </h3>
                <p className="text-gray-600 text-xs">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Left Button (Desktop/Tablet) */}
            {selectedImageIndex > 0 && (
              <button
                onClick={prevImage}
                className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            {/* Main Image */}
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Right Button (Desktop/Tablet) */}
            {selectedImageIndex < filteredImages.length - 1 && (
              <button
                onClick={nextImage}
                className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}
          </div>

          {/* Mobile Thumbnails */}
          {filteredImages.length > 1 && (
            <div className="flex md:hidden mt-4 gap-2 overflow-x-auto w-full justify-center">
              {filteredImages.map((img, idx) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className={`h-16 w-16 object-cover rounded-lg border-2 ${
                    idx === selectedImageIndex
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImageIndex(idx)}
                />
              ))}
            </div>
          )}

          {/* Left/Right Buttons for Mobile */}
          <div className="flex md:hidden justify-between w-full mt-4">
            <button
              onClick={prevImage}
              disabled={selectedImageIndex === 0}
              className="text-white bg-black bg-opacity-50 rounded-full p-2 disabled:opacity-30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              disabled={selectedImageIndex === filteredImages.length - 1}
              className="text-white bg-black bg-opacity-50 rounded-full p-2 disabled:opacity-30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;