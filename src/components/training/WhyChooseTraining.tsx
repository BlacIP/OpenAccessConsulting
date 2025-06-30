import React from 'react';
import { Users, Award, CheckCircle } from 'lucide-react';

const WhyChooseTraining = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from seasoned HR professionals with decades of real-world experience across various industries.'
    },
    {
      icon: Award,
      title: 'Practical Focus',
      description: 'Hands-on exercises, case studies, and real HR scenarios to bridge the gap between theory and practice.'
    },
    {
      icon: CheckCircle,
      title: 'Career Support',
      description: 'Ongoing mentorship and career guidance to help you advance in your HR career journey.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-10 lg:px-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Our Training?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our intensive hands-on approach ensures you gain practical skills that you can immediately apply in your HR role.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
              <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseTraining;