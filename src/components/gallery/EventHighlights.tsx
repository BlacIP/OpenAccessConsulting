import React from 'react';
import { Users, MapPin, Award } from 'lucide-react';

const EventHighlights = () => {
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
    <section className="py-20 bg-gray-50 -mx-22">
      <div className="mx-auto px-4 sm:px-10 lg:px-28">
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
  );
};

export default EventHighlights;