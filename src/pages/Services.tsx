import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  Clock,
  MapPin,
  Star,
  Download,
  Briefcase,
  Shield,
  BookOpen,
  UserCheck,
  Search,
  Building,
  Globe,
  FileText,
  Phone,
  Truck,
  X
} from 'lucide-react';

const Services = () => {
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
      title: 'Business Support Solutions',
      description: 'Comprehensive business support across multiple functional areas.',
      categories: [
        'Human Resource',
        'Warehouse Management',
        'Marketing & Sales',
        'Team Structure Management',
        'Business Startup Advisory',
        'Organisation & Process Improvement',
        'Research Outsourcing',
        'Business Management'
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
    {
      icon: TrendingUp,
      title: 'Business Management',
      description: 'Strategic business management services to drive growth and efficiency.',
      categories: [
        'Strategic planning',
        'Development of vision and mission',
        'Financial management',
        'Leadership and management development',
        'Sales increase',
        'Business restructuring',
        'Cost reduction',
        'Business set up support',
        'Competitors analysis'
      ]
    },
    {
      icon: Target,
      title: 'Organisation & Process Improvement',
      description: 'Optimize your organizational processes across all business areas.',
      categories: [
        'Warehouse',
        'Accounting',
        'Human resource',
        'Production',
        'Cash flow',
        'Vendor management',
        'Hotel management',
        'Payment and Receivable'
      ]
    },
    {
      icon: Search,
      title: 'Research Services',
      description: 'Data and insights to support your business and marketing strategies.',
      categories: [
        'Market opportunity identification',
        'Customer targeting research',
        'Product and service design research',
        'Competitor analysis',
        'Marketing strategy development',
        'Pricing research',
        'Promotional strategy research',
        'Business intelligence'
      ]
    }
  ];

  const trainingHighlights = [
    {
      icon: Users,
      title: 'Expert Speakers',
      description: 'Learn from industry leaders and certified HR professionals',
    },
    {
      icon: Award,
      title: 'Certification Credits',
      description: 'Earn SHRM and HRCI recertification credits',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Multiple session times to fit your busy schedule',
    },
  ];

  const speakers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      company: 'OPENACCESS CONSULTING',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      bio: 'Leading expert in HR transformation with 20+ years experience',
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Chief People Officer',
      company: 'TechCorp Industries',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Renowned speaker on workplace psychology and employee wellness',
    },
    {
      name: 'Michael Chen',
      role: 'Senior HR Consultant',
      company: 'OPENACCESS CONSULTING',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      bio: 'Talent management specialist with Fortune 500 experience',
    },
    {
      name: 'Jennifer Martinez',
      role: 'CHRO',
      company: 'Global Dynamics',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Expert in organizational development and change management',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 -mx-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive professional services designed to transform your business, 
              optimize operations, and drive organizational success across all areas.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50 -mx-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We analyze your needs and identify the best service solutions for your organization.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a customized approach aligned with your business objectives and requirements.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the services with precision, keeping you informed throughout the process.'
              },
              {
                step: '04',
                title: 'Support',
                description: 'We provide ongoing support and optimization to ensure continued success.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training CTA Section */}
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

      {/* CTA Section */}
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
    </div>
  );
};

export default Services;