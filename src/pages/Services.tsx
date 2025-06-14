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
  UserCheck
} from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      icon: Target,
      title: 'HR Strategy & Planning',
      description: 'Develop comprehensive HR strategies aligned with your business objectives and organizational goals.',
      features: [
        'Strategic workforce planning',
        'HR policy development',
        'Organizational restructuring',
        'Change management support'
      ]
    },
    {
      icon: Users,
      title: 'Talent Management',
      description: 'Attract, develop, and retain top talent through strategic talent management solutions.',
      features: [
        'Recruitment & selection',
        'Talent acquisition strategies',
        'Succession planning',
        'Employee retention programs'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Management',
      description: 'Implement effective performance management systems that drive results and employee growth.',
      features: [
        'Performance review systems',
        'Goal setting frameworks',
        'Feedback mechanisms',
        'Performance improvement plans'
      ]
    },
    {
      icon: Briefcase,
      title: 'Employee Relations',
      description: 'Build positive workplace relationships and resolve conflicts effectively.',
      features: [
        'Conflict resolution',
        'Employee engagement surveys',
        'Workplace mediation',
        'Communication strategies'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Legal',
      description: 'Ensure your organization stays compliant with employment laws and regulations.',
      features: [
        'Employment law compliance',
        'Policy audits',
        'Risk assessment',
        'Legal documentation'
      ]
    },
    {
      icon: BookOpen,
      title: 'Training & Development',
      description: 'Enhance your team\'s capabilities through customized training and development programs.',
      features: [
        'Leadership development',
        'Skills training programs',
        'Professional certifications',
        'Career development planning'
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive HR solutions designed to transform your workplace, 
              optimize talent management, and drive organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core HR Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to day-to-day operations, we provide end-to-end 
              HR solutions tailored to your organization's unique needs.
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
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your current HR practices and identify opportunities for improvement.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a customized HR strategy aligned with your business objectives.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We work with your team to implement solutions and best practices.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We monitor progress and continuously optimize for better results.'
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Annual HR Professional Training
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join 500+ HR professionals for our comprehensive annual training program. 
              Stay ahead of industry trends and earn professional development credits.
            </p>
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

          {/* Key Benefits */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What You'll Gain
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Latest HR trends and best practices',
                'Practical tools and templates',
                'Networking with 500+ professionals',
                'Certificate of completion',
                'Access to exclusive resources',
                'Follow-up consultation session',
                '12 SHRM/HRCI recertification credits',
                'Lifetime access to session recordings',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Speakers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Speakers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-xl overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{speaker.name}</h4>
                    <p className="text-blue-200 text-sm mb-1">{speaker.role}</p>
                    <p className="text-blue-300 text-xs">{speaker.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-center mb-8">Training Investment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Early Bird</div>
                <div className="text-blue-200 mb-2">Until Feb 15</div>
                <div className="text-3xl font-bold">₦249</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Regular</div>
                <div className="text-blue-200 mb-2">Feb 16 - Mar 10</div>
                <div className="text-3xl font-bold">₦299</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Late Registration</div>
                <div className="text-blue-200 mb-2">After Mar 10</div>
                <div className="text-3xl font-bold">₦349</div>
              </div>
            </div>
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
              Secure payment • Full refund if cancelled 30 days prior
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your HR Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help your organization achieve 
            its HR goals and build a thriving workplace culture.
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