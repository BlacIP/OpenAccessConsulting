import React from 'react';

const WhoWeAreSection = () => {
  const expertiseAreas = [
    {
      title: 'Our Expertise',
      description: 'A team of experienced professionals across HR, immigration, compliance, and business strategy.'
    },
    {
      title: 'Customized Approach',
      description: 'Solutions tailored to the specific goals and challenges of each client.'
    },
    {
      title: 'Integrity',
      description: 'Transparent processes that build trust and accountability.'
    },
    {
      title: 'Support Across Borders',
      description: 'We serve both local and international clients with a global mindset.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-10 lg:px-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We partner with our clients to foster long-term relationships,
          supporting their performance improvement across all stages of
          business growth. Our approach is driven by innovation, flexibility, and
          professional expertise, ensuring tailored solutions that meet evolving
          client needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;