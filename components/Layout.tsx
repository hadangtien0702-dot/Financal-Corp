import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-600 hover:text-primary';
  };

  const mobileIsActive = (path: string) => {
    return location.pathname === path ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50';
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* HEADER */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-[999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gray-900 leading-none group-hover:text-primary transition-colors">
                  American Finance
                </span>
                <span className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">
                  Corp
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={`text-sm font-bold uppercase tracking-wide transition-colors py-2 ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/about" className={`text-sm font-bold uppercase tracking-wide transition-colors py-2 ${isActive('/about')}`}>
                About Us
              </Link>
              <Link to="/contact" className={`text-sm font-bold uppercase tracking-wide transition-colors py-2 ${isActive('/contact')}`}>
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg z-[1000]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-bold ${mobileIsActive('/')}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-bold ${mobileIsActive('/about')}`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-bold ${mobileIsActive('/contact')}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex flex-col mb-4 group">
                <span className="font-serif text-2xl font-bold text-white leading-none">American Finance</span>
                <span className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">Corp</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering financial independence through comprehensive insurance solutions and agent development. We build legacies that last generations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-gray-700 pb-2 inline-block">Core Products</h3>
              <ul className="space-y-3">
                <li>
                    <a href="https://thinksmartinsurance.com/iul-2" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>IUL Secrets
                    </a>
                </li>
                <li>
                    <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Millionaire Baby
                    </a>
                </li>
                <li>
                    <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Term-Life
                    </a>
                </li>
                <li>
                    <a href="https://thinksmartinsurance.com/max-funded-iul-secrets-2" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Max-Funded IUL
                    </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-gray-700 pb-2 inline-block">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-gray-700 pb-2 inline-block">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+16787223447" className="text-gray-300 hover:text-white transition-colors font-medium">+1 678-722-3447</a>
                    <span className="text-xs text-gray-500">Mon-Fri 9am-5pm EST</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <a href="mailto:support@americanfinancialcorp.org" className="text-gray-300 hover:text-white transition-colors text-sm break-all">support@americanfinancialcorp.org</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Nationwide Service, United States</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} American Finance Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};