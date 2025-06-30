import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '08066861023',
      subtext: 'Mon-Fri 9:00 AM - 6:00 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@openaccessconsult.com',
      subtext: 'openaccessconsulting@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '7 Asiata Solarin Crescent Off Kudirat Abiola Way',
      subtext: 'Olusosun Bus Stop Oregun, Lagos.',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Contact Information
      </h3>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <info.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {info.title}
              </h4>
              <p className="text-gray-700 font-medium">
                {info.details}
              </p>
              <p className="text-gray-500 text-sm">
                {info.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;