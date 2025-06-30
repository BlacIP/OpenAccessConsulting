import React from 'react';
import { CheckCircle } from 'lucide-react';

const TrainingModules = () => {
  const modules = [
    {
      module: 'Module 1',
      title: 'HR Fundamentals',
      topics: ['HR Policies & Procedures', 'Employee Handbook Development', 'Compliance Basics']
    },
    {
      module: 'Module 2',
      title: 'Recruitment & Selection',
      topics: ['Job Analysis & Description', 'Sourcing Strategies', 'Interview Techniques']
    },
    {
      module: 'Module 3',
      title: 'Employee Relations',
      topics: ['Onboarding Process', 'Performance Management', 'Conflict Resolution']
    },
    {
      module: 'Module 4',
      title: 'Compensation & Benefits',
      topics: ['Payroll Management', 'PAYE Tax Administration', 'Benefits Administration']
    },
    {
      module: 'Module 5',
      title: 'Training & Development',
      topics: ['Training Needs Analysis', 'Program Design', 'Evaluation Methods']
    },
    {
      module: 'Module 6',
      title: 'HR Analytics',
      topics: ['HR Metrics & KPIs', 'Data Analysis', 'Reporting & Dashboards']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Training Modules
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive curriculum covering all essential HR functions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                {module.module}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.title}
              </h3>
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModules;