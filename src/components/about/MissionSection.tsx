import React from 'react';
import { CheckCircle } from 'lucide-react';

const MissionSection = () => {
  const commitments = [
    'Applying industry best practices across all service areas',
    'Providing responsive, client-focused solutions',
    'Ensuring timely delivery of all services',
    'Offering value-driven and impactful results',
  ];

  return (
    <section className="py-20 px-4 sm:px-10 lg:px-28">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We are a professional services company committed to
          delivering human capital development, business support
          solutions, expatriate and immigration services, and value-
          added consulting and outsourcing. We build long-term
          partnerships with our clients, helping them enhance
          performance at every stage of their business through
          innovative, flexible, and expert-driven solutions.
        </p>
        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
          <p className="text-gray-600 mb-4">At Open Access, we are committed to:</p>
          <ul className="space-y-3">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;