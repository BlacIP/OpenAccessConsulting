import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <section className="py-20 bg-gray-900 text-white -mx-22">
      <div className="max-w-4xl mx-auto px-22 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how we can help your organization achieve its goals 
          and build sustainable growth through our comprehensive services.
        </p>
        <button
          onClick={() => handleNavigation('/contact')}
          className="relative z-10 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center group cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          style={{ pointerEvents: 'auto' }}
        >
          Schedule a Consultation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;