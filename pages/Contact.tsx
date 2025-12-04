
import React, { useState } from 'react';
import { ChevronDown, Send, Phone, Mail, Clock, CheckCircle, HelpCircle, Loader2, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNNB3wQeUS847Abp42v9TAZg1I1q9ByONL563PEh2SS1BUriza1_3i1jDMMdedLKYg/exec';

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const date = new Date();

    // Use URLSearchParams for application/x-www-form-urlencoded
    // This format is much more reliable for Google Apps Script doPost triggers than FormData
    const data = new URLSearchParams();
    
    // MAPPING KEYS EXACTLY TO YOUR GOOGLE SHEET HEADERS
    data.append('First Name', formData.get('firstName') as string);
    data.append('Last Name', formData.get('lastName') as string);
    data.append('Email Address', formData.get('email') as string); // Changed from 'Email' to 'Email Address'
    data.append('Phone Number', formData.get('phone') as string); // Changed from 'Phone' to 'Phone Number'
    data.append('Subject', formData.get('subject') as string);
    data.append('Message', formData.get('message') as string);
    data.append('Created At', date.toLocaleString());

    try {
       // mode: 'no-cors' is required. 
       // Note: Response will be 'opaque' (status 0), so we cannot check res.ok directly.
       // We assume success if the network request doesn't throw an error.
       await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
       });
       
       setSubmitStatus('success');
       form.reset();
       
       setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (e) {
      console.error('Error during fetch:', e);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

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
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">Message sent successfully! We will be in touch soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">Something went wrong. Please try again or call us directly.</p>
              </div>
            )}

            <form className="space-y-5 md:space-y-6" onSubmit={handlePost}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <div className="relative">
                  <select id="subject" name="subject" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white appearance-none text-gray-700 cursor-pointer">
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Agent Recruitment">Agent Recruitment / Careers</option>
                    <option value="Life Insurance Quote">Life Insurance Quote</option>
                    <option value="Partnership">Partnership Opportunities</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="How can we help you today?"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 transform duration-200 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed text-gray-100' : 'bg-primary text-white hover:bg-blue-600 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95'}`}
              >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Send Message
                    </>
                )}
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
