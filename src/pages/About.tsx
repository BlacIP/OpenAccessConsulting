import React from 'react';
import { Award, Users, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every client engagement and training program.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term partnerships based on trust and mutual success.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of HR trends and bring innovative solutions to our clients.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards and professional integrity.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      bio: 'With over 20 years of HR leadership experience, Sarah founded HRPro to help organizations build exceptional workplace cultures.',
    },
    {
      name: 'Michael Chen',
      role: 'Senior HR Consultant',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      bio: 'Michael specializes in talent management and organizational development, bringing 15 years of Fortune 500 experience.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Training Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Emily leads our training programs and has developed curricula for thousands of HR professionals worldwide.',
    },
    {
      name: 'David Thompson',
      role: 'Compliance Specialist',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      bio: 'David ensures our clients stay compliant with ever-changing employment laws and regulations.',
    },
  ];

  const achievements = [
    'Certified by the Society for Human Resource Management (SHRM)',
    'Winner of the 2023 HR Excellence Award',
    'Featured in HR Magazine as Top Consulting Firm',
    'Trusted by Fortune 500 companies nationwide',
    'Over 10,000 professionals trained annually',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                About HRPro Consulting
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We are passionate HR professionals dedicated to helping organizations 
                unlock their full potential through strategic human resource management 
                and comprehensive professional development.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="HR consulting team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower organizations by providing strategic HR consulting services 
                  and professional development programs that drive sustainable growth, 
                  enhance workplace culture, and optimize human capital.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What We Do</h3>
                <ul className="space-y-3">
                  {[
                    'Strategic HR planning and implementation',
                    'Talent acquisition and retention strategies',
                    'Employee engagement and culture development',
                    'Performance management systems',
                    'Compliance and legal guidance',
                    'Professional training and certification programs',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the premier HR consulting firm that transforms workplaces 
                  into thriving environments where both organizations and employees 
                  achieve their highest potential.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships with clients, 
              partners, and the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings decades of combined experience in HR strategy, 
              talent management, and organizational development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From a small consultancy to a leading HR firm, here's our story.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                year: '2009',
                title: 'Founded HRPro Consulting',
                description: 'Started with a vision to transform HR practices for small and medium businesses.',
              },
              {
                year: '2012',
                title: 'First Annual Training Program',
                description: 'Launched our signature annual HR professional training program.',
              },
              {
                year: '2016',
                title: 'Fortune 500 Partnerships',
                description: 'Expanded to serve Fortune 500 companies with enterprise-level HR solutions.',
              },
              {
                year: '2020',
                title: 'Digital Transformation',
                description: 'Adapted our services for remote work and digital-first HR strategies.',
              },
              {
                year: '2024',
                title: 'Industry Recognition',
                description: 'Recognized as a top HR consulting firm with over 500 successful client partnerships.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;