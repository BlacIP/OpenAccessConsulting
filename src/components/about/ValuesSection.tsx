import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'A team of experienced professionals across HR, immigration, compliance, and business strategy.',
    },
    {
      icon: Users,
      title: 'Efficiency',
      description: 'Streamlined processes that deliver results quickly and effectively for our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in every client engagement and service delivery.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Our 3E Model guides everything we do and shapes our relationships with clients, 
            partners, and the communities we serve.
          </p>
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold inline-block">
            OUR 3E MODEL
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;