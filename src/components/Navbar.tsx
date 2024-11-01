import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/certifications", label: "Certifications" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BitwiseBinary</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`${
                  isActive(link.to)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Dashboard
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`block py-2 ${
                  isActive(link.to)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="block w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}