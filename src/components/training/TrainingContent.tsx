import React from 'react';
import { ArrowRight, CheckCircle, Download } from 'lucide-react';

const TrainingContent = () => {
  const learningTopics = [
    'Training & Development',
    'PAYE Tax Administration',
    'HR Policies & Employee Handbook',
    'Leave Management System',
    'Offer Letters & Onboarding',
    'Labour Law Essentials',
    'Termination & Exit Process',
    'HR Metrics & Reporting',
    'Payroll Management'
  ];

  const targetAudience = [
    'Entry-level HR Officers',
    'Business Owners managing HR functions internally',
    'HR Executives seeking to sharpen their operational skills',
    'Admin Professionals transitioning into HR',
    'HR Generalist'
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28 pb-20">
        {/* What You'll Learn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-white">What You'll Learn:</h3>
            <ul className="space-y-3">
              {learningTopics.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-white">Who Should Attend:</h3>
            <ul className="space-y-3">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/BcFQ6xgm26rvMYvG8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg group md:mr-4"
            >
              Register Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-blue-200 mb-2">For enquiries & Registration:</p>
            <p className="text-white font-semibold">info@openaccessconsult.com</p>
            <p className="text-white font-semibold">08066861023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContent;