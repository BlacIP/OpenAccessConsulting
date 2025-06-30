import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white -mx-22">
      <div className="max-w-4xl mx-auto px-4 sm:px-10 lg:px-28 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how our comprehensive services can help your organization achieve 
          its goals and drive sustainable growth.
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
  );
};

export default ServicesCTA;