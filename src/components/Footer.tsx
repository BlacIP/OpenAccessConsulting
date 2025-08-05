import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-10 lg:px-28 py-10 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/src/assets/Logo/Open Access consult Logo.png"
                alt="OpenAccess Consulting"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-6">
              Empowering organizations through strategic HR consulting and professional development training.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">HR Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talent Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Employee Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training & Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Training Programs</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Annual HR Conference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HR Certification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <div>
                  <div>info@openaccessconsult.com</div>
                  <div>openaccessconsulting@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>08066861023</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>7 Asiata Solarin Crescent Off Kudirat Abiola Way,<br />Olusosun Bus Stop Oregun, Lagos.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 OPENACCESS CONSULTING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;