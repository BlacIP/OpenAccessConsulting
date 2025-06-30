import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '1,500+', label: 'Professionals Trained' },
    { number: '50+', label: 'Training Events' },
    { number: '200+', label: 'Organizations Served' },
    { number: '15+', label: 'Years of Excellence' }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white -mx-22">
      <div className="max-w-7xl mx-auto px-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;