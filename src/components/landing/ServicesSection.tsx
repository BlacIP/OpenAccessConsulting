import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Shield, Globe, BookOpen } from 'lucide-react';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const services = [
    {
      icon: Users,
      title: 'Recruitment Service',
      description: 'Comprehensive recruitment solutions across hospitality, manufacturing, healthcare, and more.',
    },
    {
      icon: Shield,
      title: 'Employee Verification',
      description: 'Thorough background checks including KYC, credit checks, and employment verification.',
    },
    {
      icon: Globe,
      title: 'Immigration Services',
      description: 'Complete expatriate and immigration support for international business operations.',
    },
    {
      icon: BookOpen,
      title: 'Training & Development',
      description: 'Professional development programs in leadership, sales, customer service, and more.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-10 lg:px-28">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Core Services
        </h2>
        <p className="text-l text-gray-600 max-w-3xl mx-auto">
          Comprehensive professional services tailored to your organization's unique needs and goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100 h-full flex flex-col"
          >
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors flex-shrink-0">
              <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => handleNavigation('/services')}
          className="relative z-10 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center group cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          style={{ pointerEvents: 'auto' }}
        >
          View All Services
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;