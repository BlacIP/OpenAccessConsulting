import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-[#393235] to-[#4a3f42] shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-[#FDED8F] p-2 rounded-lg group-hover:bg-[#fce76b] transition-colors">
              <Users className="h-6 w-6 text-[#393235]" />
            </div>
            <span className="text-xl font-bold text-[#FDED8F]">OPENACCESS CONSULTING</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#FDED8F] ${
                  isActive(item.path)
                    ? 'text-[#FDED8F] border-b-2 border-[#FDED8F] pb-1'
                    : 'text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#FDED8F]/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#FDED8F]" />
            ) : (
              <Menu className="h-6 w-6 text-[#FDED8F]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'text-[#FDED8F] bg-[#FDED8F]/10'
                      : 'text-gray-200 hover:text-[#FDED8F] hover:bg-[#FDED8F]/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;