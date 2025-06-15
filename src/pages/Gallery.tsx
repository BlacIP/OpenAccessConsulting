import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const events = [
    {
      year: '2023',
      title: 'Annual Business Excellence Conference',
      attendees: '500+',
      location: 'Lagos, Nigeria',
      highlights: ['12 Expert Speakers', '8 Workshop Sessions', 'Networking Dinner', 'Certificate Awards']
    },
    {
      year: '2022',
      title: 'Business Innovation Summit',
      attendees: '350+',
      location: 'Abuja, Nigeria',
      highlights: ['Technology in Business', 'Remote Work Strategies', 'Panel Discussions', 'Best Practices Awards']
    },
    {
      year: '2021',
      title: 'Virtual Professional Excellence Training',
      attendees: '600+',
      location: 'Online Event',
      highlights: ['Global Speakers', 'Interactive Workshops', 'Digital Networking', 'Online Certifications']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20 -mx-22">
        <div className="max-w-7xl mx-auto px-28 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore moments from our training sessions, conferences, and consulting engagements. 
            See the impact we're making in the business community.
          </p>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-gray-50 -mx-22">
        <div className="max-w-7xl mx-auto px-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Events
            </h2>
            <p className="text-xl text-gray-600">
              Highlights from our major training events and conferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                  {event.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-gray-600 text-sm flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
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
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.src)}
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
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white -mx-22">
        <div className="max-w-7xl mx-auto px-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1,500+</div>
              <div className="text-blue-200">Professionals Trained</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Training Events</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Organizations Served</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;