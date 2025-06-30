import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      
      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-10 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  );
};

export default Contact;