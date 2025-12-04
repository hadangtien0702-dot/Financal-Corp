
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

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
              <img 
                src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/20251204-110408.jpg" 
                alt="American Finance Corp" 
                className="h-14 w-auto object-contain"
              />
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
      <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand Info (Span 4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block">
                <div className="bg-white p-2 rounded-lg inline-block hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-shadow duration-300">
                    <img 
                      src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/20251204-110408.jpg" 
                      alt="American Finance Corp" 
                      className="h-12 w-auto object-contain"
                    />
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Empowering financial independence through comprehensive insurance solutions and agent development. We build legacies that last generations.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Core Products (Span 3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                Core Products
                <span className="h-1 w-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                    <a href="https://thinksmartinsurance.com/iul-2" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                        <span className="group-hover:translate-x-1 transition-transform">IUL Secrets</span>
                    </a>
                </li>
                <li>
                    <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                        <span className="group-hover:translate-x-1 transition-transform">Millionaire Baby</span>
                    </a>
                </li>
                <li>
                    <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                        <span className="group-hover:translate-x-1 transition-transform">Term-Life</span>
                    </a>
                </li>
                <li>
                    <a href="https://thinksmartinsurance.com/max-funded-iul-secrets-2" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                        <span className="group-hover:translate-x-1 transition-transform">Max-Funded IUL</span>
                    </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company (Span 2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                Company
                <span className="h-1 w-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors text-sm block hover:translate-x-1 duration-200">Home</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors text-sm block hover:translate-x-1 duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm block hover:translate-x-1 duration-200">Contact</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm block hover:translate-x-1 duration-200">Careers</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us (Span 3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                Contact Us
                <span className="h-1 w-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary mr-4 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                     <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Call Us</span>
                    <a href="tel:+16787223447" className="text-gray-300 hover:text-white transition-colors font-medium text-lg">+1 678-722-3447</a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary mr-4 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Email Us</span>
                    <a href="mailto:support@americanfinancialcorp.org" className="text-gray-300 hover:text-white transition-colors text-sm break-all leading-relaxed">support@americanfinancialcorp.org</a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary mr-4 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Location</span>
                    <span className="text-gray-400 text-sm">Nationwide Service, USA</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} American Finance Corp. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
