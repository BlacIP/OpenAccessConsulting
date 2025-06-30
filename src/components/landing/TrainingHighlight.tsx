import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TrainingHighlight = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const benefits = [
    'Leadership & Management Development',
    'Sales & Marketing Excellence',
    'Customer Service Training',
    'Professional Certification Programs',
  ];

  return (
    <section className="py-20 lg:py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white -mx-22">
      <div className=" px-4 sm:px-10 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}training.jpg`}
              alt="Training session"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="space-y-8 relative z-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Professional Training Programs
              </h2>
              <p className="text-md text-blue-100 leading-relaxed mb-6">
                Enhance your team's capabilities through our comprehensive training programs. 
                From leadership development to technical skills, we offer customized solutions.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleNavigation('/enroll-for-training')}
              className="relative z-20 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center group cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              style={{ pointerEvents: 'auto' }}
            >
              Learn More & Register
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlight;