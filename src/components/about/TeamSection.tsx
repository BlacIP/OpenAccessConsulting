import React from 'react';

const TeamSection = () => {
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

  return (
    <section className="py-20 px-4 sm:px-10 lg:px-28">
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
  );
};

export default TeamSection;