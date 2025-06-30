import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden -mx-22">
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0"></div>
      <div className="relative z-20 mx-auto px-4 sm:px-10 lg:px-28 py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-30">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>
              <span className="block text-white">Business Operations</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Partner with industry experts for comprehensive professional services including 
              HR solutions, immigration support, recruitment, training, and business consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-50">
              <button
                onClick={() => handleNavigation('/contact')}
                className="relative z-50 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center group cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                style={{ pointerEvents: 'auto' }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className="relative z-50 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                style={{ pointerEvents: 'auto' }}
              >
                View Our Services
              </button>
            </div>
          </div>
          <div className="relative z-10">
            <img
              src={`${import.meta.env.BASE_URL}landing-page.jpg`}
              alt="Professional team meeting"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20">
              <div className="flex items-center space-x-4">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Annual HR Training</p>
                  <p className="text-sm text-gray-600">Register Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;