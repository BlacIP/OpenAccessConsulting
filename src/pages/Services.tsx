import React from 'react';
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
  Truck
} from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      icon: Users,
      title: 'Recruitment Services',
      description: 'Comprehensive recruitment solutions across multiple industries and sectors.',
      categories: [
        'Hospitality',
        'Manufacturing Professionals',
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
        'Hospitality',
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
        'Expatriate & Immigration Services',
        'Human Resource',
        'Warehouse Management',
        'Marketing & Sales',
        'Team Structure Management',
        'Business Startup Advisory',
        'Organisation & Process Improvement',
        'Research Outsourcing',
        'Business Management'
      ]
    }
  ];

  const hrServices = [
    'Employee handbook',
    'Absence management',
    'Performance management',
    'Training',
    'Human resource need assessment',
    'Health and safety',
    'Career management',
    'Recruitment',
    'Policies and procedure development',
    'HR compliance Audit',
    'HR management',
    'Payroll management',
    'Employee relation support'
  ];

  const businessManagementServices = [
    'Strategic planning',
    'Development of vision and mission',
    'Financial management',
    'Leadership and management development',
    'Sales increase',
    'Business restructuring',
    'Cost reduction',
    'Business set up support',
    'Competitors analysis'
  ];

  const processImprovementAreas = [
    'Warehouse',
    'Accounting',
    'Human resource',
    'Production',
    'Cash flow',
    'Vendor management',
    'Hotel management',
    'Payment and Receivable',
    'Education service delivery'
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 -mx-16">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
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
      <section className="py-20">
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.categories.slice(0, 4).map((category, categoryIndex) => (
                  <div key={categoryIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-sm">{category}</span>
                  </div>
                ))}
                {service.categories.length > 4 && (
                  <p className="text-blue-600 text-sm font-medium">
                    +{service.categories.length - 4} more services
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-gray-50 -mx-16">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Human Resource Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Human Resource Services</h3>
              <ul className="space-y-3">
                {hrServices.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Management</h3>
              <ul className="space-y-3">
                {businessManagementServices.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Improvement */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Organisation & Process Improvement</h3>
              <p className="text-gray-600 mb-4">Process improvement in areas such as:</p>
              <ul className="space-y-3">
                {processImprovementAreas.map((area, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 p-12 rounded-2xl">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At OpenAccess We provide data and insight to support your business, marketing, 
              from identifying market opportunities to targeting customers, designing products and services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide support in identifying and understanding competitors and also 
              promotions and pricing for your marketing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 -mx-16">
        <div className="max-w-7xl mx-auto px-16">
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

      {/* Annual HR Training Section */}
      <section className="py-20 bg-blue-600 text-white -mx-16">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Annual HR Professional Training
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join 500+ HR professionals for our comprehensive annual training program. 
              Stay ahead of industry trends and earn professional development credits.
            </p>
            <div className="mt-6">
              <p className="text-blue-200">Please request for our training calendar for more information</p>
            </div>
          </div>

          {/* Training Details */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Calendar className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dates</h3>
              <p className="text-blue-100">March 15-16, 2024</p>
              <p className="text-sm text-blue-200">Friday & Saturday</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Clock className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time</h3>
              <p className="text-blue-100">8:00 AM - 4:30 PM</p>
              <p className="text-sm text-blue-200">Both days</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Format</h3>
              <p className="text-blue-100">In-Person & Virtual</p>
              <p className="text-sm text-blue-200">Hybrid experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Award className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Credits</h3>
              <p className="text-blue-100">12 SHRM/HRCI</p>
              <p className="text-sm text-blue-200">Certification credits</p>
            </div>
          </div>

          {/* Training Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trainingHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur p-8 rounded-xl text-center"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {highlight.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Registration CTA */}
          <div className="text-center">
            <a
              href="https://forms.gle/BcFQ6xgm26rvMYvG8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-12 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center text-lg group mr-4"
            >
              Register Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </button>
            <p className="text-sm text-blue-200 mt-4">
              Contact us for training calendar and more information
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white -mx-16">
        <div className="max-w-4xl mx-auto px-16 text-center">
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