import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const services = [
  'Recruitment Service',
  'Employee Verification',
  'Outsourcing Services',
  'Training & Development',
  'Expatriate & Immigration Services',
  'Pre-Employment Tests',
  'Human Resource Services',
  'Regulatory Compliance, Certification & Audit Services',
];

const trainingPrograms = [
  'Annual HR Conference',
  'Leadership Development',
  'HR Certification',
  'Workshops',
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-10 lg:px-28 py-10 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={`${import.meta.env.BASE_URL}Logo/Open-Access-consult-Logo.png`}
                alt="OpenAccess Consulting"
                className="h-auto w-60"
              />
            </div>
            <p className="text-gray-300 text-sm leading-6">
              Empowering organizations through strategic HR consulting and professional development training.
            </p>
            {/* TODO: add LinkedIn / X / Instagram icons once the real profile URLs are available */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-white transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Training Programs</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {trainingPrograms.map((program) => (
                <li key={program}>
                  <Link to="/enroll-for-training" className="hover:text-white transition-colors">{program}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <div>
                  <a href="mailto:info@openaccessconsult.com" className="block hover:text-white transition-colors">info@openaccessconsult.com</a>
                  <a href="mailto:openaccessconsulting@gmail.com" className="block hover:text-white transition-colors">openaccessconsulting@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+2348066861023" className="hover:text-white transition-colors">08066861023</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>7 Asiata Solarin Crescent Off Kudirat Abiola Way,<br />Olusosun Bus Stop Oregun, Lagos.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} OPENACCESS CONSULTING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
