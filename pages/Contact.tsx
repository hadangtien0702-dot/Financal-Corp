
import React from 'react';
import { ChevronDown, Send, Phone, Mail, Clock, CheckCircle, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will contact you shortly.');
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary to-blue-600 py-16 md:py-28 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        {/* Abstract shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to secure your future or join our elite team? We are here to answer your questions and guide you to success.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100 relative order-2 lg:order-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400 rounded-t-3xl"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-6 md:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <div className="relative">
                  <select id="subject" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white appearance-none text-gray-700 cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Agent Recruitment / Careers</option>
                    <option>Life Insurance Quote</option>
                    <option>Partnership Opportunities</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="How can we help you today?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95 duration-200">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-start space-y-6 md:space-y-8 order-1 lg:order-2 animate-fade-in-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-lg">
                Whether you are looking for insurance coverage or interested in a career opportunity, our team is ready to assist you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="bg-blue-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Phone</h3>
                <p className="text-gray-500 mb-2 text-sm">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+16787223447" className="text-primary font-bold text-lg md:text-xl hover:underline block truncate">+1 678-722-3447</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="bg-blue-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                <p className="text-gray-500 mb-2 text-sm">Our friendly team is here to help.</p>
                <a href="mailto:support@americanfinancialcorp.org" className="text-primary font-bold text-base md:text-lg hover:underline break-all">support@americanfinancialcorp.org</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="bg-blue-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Business Hours</h3>
                <p className="text-gray-500 text-sm">Monday - Friday</p>
                <p className="text-gray-800 font-bold">Mon-Fri 9am-5pm EST</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <h3 className="font-bold text-gray-900">Serving Nationwide</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We are licensed and actively serving families and agents across the United States. Contact us to find a representative near you.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-4 text-lg">Common questions about our services and careers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
              <div className="flex gap-5">
                <HelpCircle className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">How do I become an agent?</h4>
                  <p className="text-gray-600 leading-relaxed">Simply fill out the form above selecting "Agent Recruitment" as the subject. One of our hiring managers will reach out to discuss the licensing process and training.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
              <div className="flex gap-5">
                <HelpCircle className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Do you offer training for new agents?</h4>
                  <p className="text-gray-600 leading-relaxed">Yes! We provide a comprehensive training program including online courses, mentorship from top producers, and weekly sales training calls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
