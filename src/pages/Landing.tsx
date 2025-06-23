import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, Award, Calendar, CheckCircle, Globe, Shield, BookOpen } from 'lucide-react';

const Landing = () => {
  const services = [
    {
      icon: Users,
      title: 'Recruitment Services',
      description: 'Comprehensive recruitment solutions across hospitality, manufacturing, healthcare, and more.',
    },
    {
      icon: Shield,
      title: 'Employee Verification',
      description: 'Thorough background checks including KYC, credit checks, and employment verification.',
    },
    {
      icon: Globe,
      title: 'Immigration Services',
      description: 'Complete expatriate and immigration support for international business operations.',
    },
    {
      icon: BookOpen,
      title: 'Training & Development',
      description: 'Professional development programs in leadership, sales, customer service, and more.',
    },
  ];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden -mx-22">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-10 lg:px-28 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Transform Your</span>
                <span className="block text-white">Business Operations</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Partner with industry experts for comprehensive professional services including 
                HR solutions, immigration support, recruitment, training, and business consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}landing-page.jpg`}
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
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

      {/* Trusted Clients Section */}
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

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            Comprehensive professional services tailored to your organization's unique needs and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100 h-full flex flex-col"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors flex-shrink-0">
                <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Training Highlight */}
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
            <div className="space-y-8">
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
                {[
                  'Leadership & Management Development',
                  'Sales & Marketing Excellence',
                  'Customer Service Training',
                  'Professional Certification Programs',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
              >
                Learn More & Register
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white -mx-22">
        <div className="max-w-4xl mx-auto px-22 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your organization achieve its goals 
            and build sustainable growth through our comprehensive services.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;