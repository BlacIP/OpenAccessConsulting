import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, Award, CheckCircle, Download } from 'lucide-react';

const EnrollForTraining = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 -mx-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              2025 Intensive Hands-On HR Training
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
              Are you an aspiring or practicing HR professional looking to bridge the gap between theory and real-life HR practice? 
              Join our virtual intensive hands-on training designed to equip you with practical tools and confidence to succeed in any HR role.
            </p>
            <div className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-bold inline-block mb-4">
              Price: ₦120,000
            </div>
            <p className="text-blue-200">Second Edition - Virtual Training</p>
          </div>

          {/* Training Details */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Start Date</h3>
              <p className="text-blue-100">2nd August, 2025</p>
              <p className="text-sm text-blue-200">Saturday Only</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Clock className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time</h3>
              <p className="text-blue-100">10am - 1pm</p>
              <p className="text-sm text-blue-200">Weekly sessions</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Format</h3>
              <p className="text-blue-100">Virtual Training</p>
              <p className="text-sm text-blue-200">Online sessions</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p className="text-blue-100">12 Weeks</p>
              <p className="text-sm text-blue-200">Comprehensive program</p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-white">What You'll Learn:</h3>
              <ul className="space-y-3">
                {[
                  'Training & Development',
                  'PAYE Tax Administration',
                  'HR Policies & Employee Handbook',
                  'Leave Management System',
                  'Offer Letters & Onboarding',
                  'Labour Law Essentials',
                  'Termination & Exit Process',
                  'HR Metrics & Reporting',
                  'Payroll Management'
                ].map((item, index) => (
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
                {[
                  'Entry-level HR Officers',
                  'Business Owners managing HR functions internally',
                  'HR Executives seeking to sharpen their operational skills',
                  'Admin Professionals transitioning into HR',
                  'HR Generalist'
                ].map((item, index) => (
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

      {/* Why Choose This Training */}
      <section className="py-20 px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Training?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intensive hands-on approach ensures you gain practical skills that you can immediately apply in your HR role.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: 'Expert Instructors',
              description: 'Learn from seasoned HR professionals with decades of real-world experience across various industries.'
            },
            {
              icon: Award,
              title: 'Practical Focus',
              description: 'Hands-on exercises, case studies, and real HR scenarios to bridge the gap between theory and practice.'
            },
            {
              icon: CheckCircle,
              title: 'Career Support',
              description: 'Ongoing mentorship and career guidance to help you advance in your HR career journey.'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Modules */}
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
            {[
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
            ].map((module, index) => (
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

      {/* Final CTA */}
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
    </div>
  );
};

export default EnrollForTraining;