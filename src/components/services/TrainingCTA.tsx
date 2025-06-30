import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TrainingCTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Enhance Your HR Skills?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join our 2025 Intensive Hands-On HR Training program and bridge the gap between theory and practice.
        </p>
        <Link
          to="/enroll-for-training"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group text-lg"
        >
          Learn More About Training
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default TrainingCTA;