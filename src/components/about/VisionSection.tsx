import React from 'react';
import { Star } from 'lucide-react';

const VisionSection = () => {
  const achievements = [
    'Expertise across multiple service areas',
    'Customized approach for each client',
    'Transparent processes that build trust',
    'Support for both local and international clients',
    'Over 500 successful client partnerships',
  ];

  return (
    <section className="py-20 bg-gray-50 -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Our vision is supporting organizations to achieve their goals
            and objective by providing extraordinary human capital
            development, Expatriate & Immigration Services and
            Business solution activities for individual and organizational
            growth through learning, knowledge, and stewardship.
          </p>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Open Access?</h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;