import React from 'react';

const ClientLogos = () => {
  const clientLogos = [
    {
      name: 'Karflex Fisheries Limited',
      logo: `${import.meta.env.BASE_URL}karflex.png`,
    },
    {
      name: 'SoftHealth',
      logo: `${import.meta.env.BASE_URL}softhealth.jpg`,
    },
    {
      name: 'MoneyTronics Microfinance Bank',
      logo: `${import.meta.env.BASE_URL}monie-tronics.png`,
    },
    {
      name: 'Infinity Microfinance Bank',
      logo: `${import.meta.env.BASE_URL}infinity-mfb.jpg`,
    },
    {
      name: 'Lyceum College',
      logo: `${import.meta.env.BASE_URL}lyceum.png`,
    },
    {
      name: 'Imperial Homes',
      logo: `${import.meta.env.BASE_URL}imperial-consult.png`,
    },
  ];

  return (
    <section className="py-6 bg-gray-50 -mx-22 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-gray-900 mb">Our Trusted Clients</h2>
          <p className="text-s text-gray-600">Partnering with leading organizations across various industries</p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-4 items-center">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scrolling Animation */}
        <div className="lg:hidden relative">
          <div className="flex animate-scroll space-x-4">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain filter grayscale"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;