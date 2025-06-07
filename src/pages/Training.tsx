import React from 'react';
import { Calendar, Clock, Users, Award, CheckCircle, ArrowRight, Star, Download } from 'lucide-react';

const Training = () => {
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

  const agenda = [
    {
      time: '8:00 AM - 9:00 AM',
      title: 'Registration & Breakfast',
      description: 'Network with fellow HR professionals while enjoying breakfast',
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Keynote: The Future of HR',
      speaker: 'Sarah Johnson, CEO',
      description: 'Exploring emerging trends and technologies transforming HR practices',
    },
    {
      time: '10:45 AM - 12:00 PM',
      title: 'Workshop: Talent Acquisition Strategies',
      speaker: 'Michael Chen, Senior Consultant',
      description: 'Hands-on strategies for attracting and retaining top talent',
    },
    {
      time: '12:00 PM - 1:00 PM',
      title: 'Lunch & Networking',
      description: 'Connect with peers and speakers over lunch',
    },
    {
      time: '1:00 PM - 2:30 PM',
      title: 'Panel: Employee Engagement in Remote Work',
      description: 'Best practices for maintaining engagement in hybrid workplaces',
    },
    {
      time: '2:45 PM - 4:00 PM',
      title: 'Workshop: Performance Management Innovation',
      speaker: 'Emily Rodriguez, Training Director',
      description: 'Modern approaches to performance reviews and feedback',
    },
    {
      time: '4:00 PM - 4:30 PM',
      title: 'Closing Remarks & Certificate Presentation',
      description: 'Final thoughts and professional development certificates',
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

  const testimonials = [
    {
      name: 'Lisa Thompson',
      role: 'HR Director, MedTech Solutions',
      content: 'This training transformed how we approach talent management. The practical strategies I learned have already improved our retention rates by 25%.',
      rating: 5,
    },
    {
      name: 'Robert Kim',
      role: 'People Operations Manager, StartupXYZ',
      content: 'Outstanding content and networking opportunities. The speakers provided actionable insights that I implemented immediately.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Chief Human Resources Officer, FinanceFirst',
      content: 'Worth every penny. The certification credits and practical knowledge gained make this a must-attend event for any HR professional.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-blue-700/30 px-4 py-2 rounded-full text-sm font-medium w-fit">
                March 15-16, 2024
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Annual HR Professional Training
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join 500+ HR professionals for two days of intensive learning, 
                networking, and skill development. Earn certification credits 
                while staying ahead of industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://registration.example.com/hr-training-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
                >
                  Register Now - $299
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Professional training session"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Attendees Expected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dates</h3>
              <p className="text-gray-600">March 15-16, 2024</p>
              <p className="text-sm text-gray-500">Friday & Saturday</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Time</h3>
              <p className="text-gray-600">8:00 AM - 4:30 PM</p>
              <p className="text-sm text-gray-500">Both days</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">In-Person & Virtual</p>
              <p className="text-sm text-gray-500">Hybrid experience</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Credits</h3>
              <p className="text-gray-600">12 SHRM/HRCI</p>
              <p className="text-sm text-gray-500">Certification credits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Attend Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain practical skills, earn certification credits, and network with 
              industry leaders in this comprehensive professional development experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trainingHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <highlight.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
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
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Training Agenda
            </h2>
            <p className="text-xl text-gray-600">
              Two days packed with practical sessions, workshops, and networking opportunities
            </p>
          </div>
          <div className="space-y-6">
            {agenda.map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {session.time}
                      </span>
                      {session.speaker && (
                        <span className="text-gray-500 text-sm">
                          with {session.speaker}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {session.title}
                    </h3>
                    <p className="text-gray-600">
                      {session.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Speakers
            </h2>
            <p className="text-xl text-gray-600">
              Learn from industry leaders and certified HR professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">{speaker.role}</p>
                  <p className="text-gray-500 text-sm mb-3">{speaker.company}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Attendees Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from previous participants about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Advance Your HR Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't miss this opportunity to learn from industry experts, 
            earn certification credits, and network with HR professionals.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Early Bird</div>
                <div className="text-blue-200">Until Feb 15</div>
                <div className="text-3xl font-bold">$249</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Regular</div>
                <div className="text-blue-200">Feb 16 - Mar 10</div>
                <div className="text-3xl font-bold">$299</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Late Registration</div>
                <div className="text-blue-200">After Mar 10</div>
                <div className="text-3xl font-bold">$349</div>
              </div>
            </div>
          </div>
          <a
            href="https://registration.example.com/hr-training-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-12 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center text-lg group"
          >
            Register Now
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-blue-200 mt-4">
            Secure payment • Full refund if cancelled 30 days prior
          </p>
        </div>
      </section>
    </div>
  );
};

export default Training;