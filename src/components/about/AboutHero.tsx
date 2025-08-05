import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20 -mx-22">
      <div className="mx-auto px-4 sm:px-10 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              About <br /> 
              OPENACCESS CONSULTING
            </h1> */}
            <p className="text-2xl text-gray-300 leading-relaxed">
              Open Access Consulting is a professional services firm dedicated to delivering strategic solutions in human capital development,
              expatriate and immigration services, recruitment, background check services, value-added consulting,
              and outsourcing services. We establish long-term relationships with our clients, helping them improve
              performance throughout the different stages of their businesses, by providing innovative and flexible
              services, using our professional expertise. 
            <br/>
            <br/>
              We provide professional background check services such as Guarantors Check, Employee Address confirmation,
              Criminal record, Previous Employer verification, Driver license check, credit/loan check status,
              Name Authenticity/ Identity Verification and Educational Certificate Check. We have been delivering
              quality services and supporting businesses for over <br/> 13 years.
            </p>
          </div>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}aboutus-page.jpg`} 
              alt="HR consulting team"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;