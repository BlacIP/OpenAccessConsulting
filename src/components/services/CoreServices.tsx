import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  // Target, 
  Users, 
  // TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Briefcase,
  Shield,
  BookOpen,
  // Search,
  Building,
  Globe,
  X
} from 'lucide-react';

const CoreServices = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const coreServices = [
    {
      icon: Users,
      title: 'Recruitment Service',
      description: 'Comprehensive recruitment solutions across multiple industries and sectors.',
      categories: [
        'Manufacturing Professional',
        'Hospital',
        'Financial Institution',
        'Pharmaceutical',
        'Engineering',
        'Call Centre',
        'Head Hunting'
      ]
    },
    {
      icon: Shield,
      title: 'Employee Verification',
      description: 'Thorough background check services to ensure reliable hiring decisions.',
      categories: [
        'KYC Verification',
        'Credit Check',
        'Previous Employment Check',
        'Educational Certificate Verification',
        'NYSC Certificate Verification',
        'Guarantor / Referee Check',
        'Criminal Record Check',
        'Address Confirmation'
      ]
    },
    {
      icon: Briefcase,
      title: 'Outsourcing Services',
      description: 'Professional outsourcing solutions to optimize your workforce and operations.',
      categories: [
        'Call Centre',
        'Technicians',
        'Marketers',
        'Customer Service',
        'Drivers',
        'Bank Teller',
        'Factory Worker',
        'Hospitality Staff'
      ]
    },
    {
      icon: BookOpen,
      title: 'Training & Development',
      description: 'Comprehensive learning and development programs for professional growth.',
      categories: [
        'Leadership & Management',
        'Sales & Marketing',
        'Customer Service',
        'Professional Development Program',
        'Management Development Program',
        'Human Resource Training',
        'Finance & Accounting'
      ]
    },
    {
      icon: Globe,
      title: 'Expatriate & Immigration Services',
      description: 'Complete immigration and expatriate support services for international operations.',
      categories: [
        'Facilitation of expatriate quota approvals',
        'Processing of business permits',
        'Monthly expatriate quota returns',
        'Monitoring quota positions',
        'Renewal and amendment of quota positions',
        'Expatriate information management',
        'Temporary Work Permits (TWP)',
        'CERPAC processing and renewal'
      ]
    },
    {
      icon: Building,
      title: 'Pre-Employment Tests',
      description: 'Comprehensive business support across multiple functional areas.',
      categories: [
        'Cognitive Ability Test',
        'Personality Test',
        'Aptitude Test',
        'Skills Assessment Test',
        'Emotional Intelligence (EQ) Test',
        'Situational Judgment Test (SJT)',
        'Integrity/Honesty Test',
        'Job Knowledge Test',
        'Language Proficiency Test',
        'Psychometric Test',
        'Culture Fit Assessment',
        'Technical Competency Test',
        'Numerical & Verbal Reasoning Test',
        'Leadership/Management Assessment'
      ]
    },
    {
      icon: Users,
      title: 'Human Resource Services',
      description: 'Complete HR solutions to manage and optimize your human capital.',
      categories: [
        'Attendance Device Supply and Management',
        'Performance management',
        'Training',
        'Outsourcing',
        'Career management',
        'Recruitment',
        'Policies and procedure development',
        'HR compliance Audit',
        'HR management',
        'Payroll management',
        'Employee relation support'
      ]
    },
    // {
    //   icon: TrendingUp,
    //   title: 'Business Management',
    //   description: 'Strategic business management services to drive growth and efficiency.',
    //   categories: [
    //     'Strategic planning',
    //     'Development of vision and mission',
    //     'Financial management',
    //     'Leadership and management development',
    //     'Sales increase',
    //     'Business restructuring',
    //     'Cost reduction',
    //     'Business set up support',
    //     'Competitors analysis'
    //   ]
    // },
    // {
    //   icon: Target,
    //   title: 'Organisation & Process Improvement',
    //   description: 'Optimize your organizational processes across all business areas.',
    //   categories: [
    //     'Warehouse',
    //     'Accounting',
    //     'Human resource',
    //     'Production',
    //     'Cash flow',
    //     'Vendor management',
    //     'Hotel management',
    //     'Payment and Receivable'
    //   ]
    // },
    // {
    //   icon: Search,
    //   title: 'Research Services',
    //   description: 'Data and insights to support your business and marketing strategies.',
    //   categories: [
    //     'Market opportunity identification',
    //     'Customer targeting research',
    //     'Product and service design research',
    //     'Competitor analysis',
    //     'Marketing strategy development',
    //     'Pricing research',
    //     'Promotional strategy research',
    //     'Business intelligence'
    //   ]
    // },
    {
      icon: Shield,
      title: 'Regulatory Compliance, Certification & Audit Services',
      description: 'Comprehensive certification, audit, and regulatory registration services for oil & gas and other industries.',
      categories: [
        'NIPEX Registration (New, Renewals, PCA)',
        'DPR/NUPRC/NMDPRA Permits',
        'NCDMB & NOGIC JQS Registration',
        'COREN Certification',
        'Dun & Bradstreet D-U-N-S® Registration',
        'Offshore Safety Permit (OSP)',
        'Weight & Measure Permits',
        'Certificate of Pattern Approval',
        'Second Party (2nd Party) Audits',
        'Contractor Safety Audits',
        'Regulatory Compliance Audits',
        'Prequalification Audits',
        'ISO 45001:2018 Stage 1 & 2 Certification Audits',
        'Internal Occupational Health & Safety (OHS) Audits',
        'Internal ISO 45001 Compliance Audits',
        'Regulatory Audit',
        'NIPEX Audit'
      ]
    }
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From recruitment and training to immigration and business support, we provide 
            comprehensive solutions tailored to your organization's unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors flex-shrink-0">
                <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-grow">
                {service.description}
              </p>
              <div className="space-y-2 flex-shrink-0">
                {service.categories.slice(0, 4).map((category, categoryIndex) => (
                  <div key={categoryIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-xs leading-tight">{category}</span>
                  </div>
                ))}
                {service.categories.length > 4 && (
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors cursor-pointer mt-2"
                  >
                    +{service.categories.length - 4} more services
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <selectedService.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">All Services Include:</h4>
                {selectedService.categories.map((category: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{category}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoreServices;