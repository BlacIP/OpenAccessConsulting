import React from 'react';

const ProcessSection = () => {
  const processes = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your needs and identify the best service solutions for your organization.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a customized approach aligned with your business objectives and requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the services with precision, keeping you informed throughout the process.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and optimization to ensure continued success.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600">
            A proven methodology that delivers results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;