import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white -mx-22">
      <div className="max-w-4xl mx-auto px-4 sm:px-10 lg:px-28 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Advance Your HR Career?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join hundreds of HR professionals who have transformed their careers through our intensive training program.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://forms.gle/BcFQ6xgm26rvMYvG8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center text-lg group"
          >
            Enroll Today
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/contact"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center"
          >
            Have Questions? Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;