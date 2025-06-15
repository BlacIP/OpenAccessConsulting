import React from 'react';
import { Award, Users, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'A team of experienced professionals across HR, immigration, compliance, and business strategy.',
    },
    {
      icon: Users,
      title: 'Efficiency',
      description: 'Streamlined processes that deliver results quickly and effectively for our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in every client engagement and service delivery.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      bio: 'With over 20 years of HR leadership experience, Sarah founded Open Access to help organizations build exceptional workplace cultures.',
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
      role: 'Immigration Specialist',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      bio: 'David ensures our clients navigate immigration processes smoothly with expert guidance and compliance support.',
    },
  ];

  const achievements = [
    'Expertise across multiple service areas',
    'Customized approach for each client',
    'Transparent processes that build trust',
    'Support for both local and international clients',
    'Over 500 successful client partnerships',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-10 lg:px-28 py-20 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                About <br /> 
                OPENACCESS CONSULTING
              </h1>
              <p className="text-l text-gray-300 leading-relaxed">
                Open Access is a professional services firm dedicated to delivering
                strategic solutions in human capital development, expatriate and
                immigration services, recruitment, background check services, value-
                added consulting, and outsourcing services.
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are a professional services company committed to
            delivering human capital development, business support
            solutions, expatriate and immigration services, and value-
            added consulting and outsourcing. We build long-term
            partnerships with our clients, helping them enhance
            performance at every stage of their business through
            innovative, flexible, and expert-driven solutions.
          </p>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600 mb-4">At Open Access, we are committed to:</p>
            <ul className="space-y-3">
              {[
                'Applying industry best practices across all service areas',
                'Providing responsive, client-focused solutions',
                'Ensuring timely delivery of all services',
                'Offering value-driven and impactful results',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 -mx-22">
        <div className="max-w-7xl mx-auto px-22">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our vision is supporting organizations to achieve their goals
              and objective by providing extraordinary human capital
              development, Expatriate & Immigration Services and
              Business solution activities for individual and organizational
              growth through learning, knowledge, and stewardship.
            </p>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Open Access?</h3>
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
      </section>

      {/* About Us Extended */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We partner with our clients to foster long-term relationships,
            supporting their performance improvement across all stages of
            business growth. Our approach is driven by innovation, flexibility, and
            professional expertise, ensuring tailored solutions that meet evolving
            client needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
              <p className="text-gray-600">
                A team of experienced professionals across HR, immigration,
                compliance, and business strategy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customized Approach</h3>
              <p className="text-gray-600">
                Solutions tailored to the specific goals and challenges of each
                client.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Transparent processes that build trust and accountability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Across Borders</h3>
              <p className="text-gray-600">
                We serve both local and international clients with a global
                mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Our 3E Model */}
      <section className="py-20 bg-gray-50 -mx-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28 py-20 lg:py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Our 3E Model guides everything we do and shapes our relationships with clients, 
              partners, and the communities we serve.
            </p>
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold inline-block">
              OUR 3E MODEL
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team brings decades of combined experience in HR strategy, 
            talent management, immigration services, and organizational development.
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
      </section>
    </div>
  );
};

export default About;