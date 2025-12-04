import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink, ShieldCheck, Quote } from 'lucide-react';

// Testimonials Data
const testimonials = [
  {
    quote: "The mentorship at American Finance Corp changed my career trajectory. I went from struggling to find leads to building a sustainable business in under 6 months.",
    author: "Sarah Jenkins", role: "Senior Agent", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Finally, an agency that truly puts the agent first. The commission structure is aggressive, but it's the supportive culture that keeps me here.",
    author: "Michael Torres", role: "Agency Owner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "I was looking for a way to secure my children's college fund without market risk. The 'Millionaire Baby' strategy was exactly what our family needed.",
    author: "Emily & David Chen", role: "Policyholders", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Transitioning from a captive agency to American Finance Corp gave me the freedom I always wanted. I own my book of business now.",
    author: "James Wilson", role: "Regional Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
];

export const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[currentTestimonial];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[600px] md:h-[700px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Corporate Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
              Now Recruiting Agents Nationwide
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Legacy</span>. <br />
              Secure Their <span className="text-white">Future</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              American Finance Corp empowers families with superior financial protection and provides agents with the tools to build independent business empires.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-primary hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
                Start Your Career
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border border-slate-600 hover:bg-slate-800 transition-all hover:border-slate-500">
                Explore Our Services
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Top-Tier Commission</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Vested Renewals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y divide-gray-100 md:divide-y-0 md:divide-x md:divide-gray-100">
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">10k+</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Families Protected</div>
            </div>
            <div className="px-4 pt-8 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">30+</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Top-Rated Carriers</div>
            </div>
            <div className="px-4 pt-8 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">50</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 text-center">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="text-xl md:text-2xl font-serif font-bold text-gray-800 cursor-default text-center">National Life Group</div>
            <div className="text-2xl md:text-3xl font-sans font-black text-blue-900 cursor-default tracking-tighter">AIG</div>
            <div className="text-xl md:text-2xl font-sans font-bold text-blue-800 cursor-default tracking-wide uppercase">Allianz</div>
            <div className="text-lg md:text-xl font-serif font-bold italic text-gray-700 cursor-default">Transamerica</div>
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTION */}
      <section className="bg-gray-50 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0 opacity-50 pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Professional Specialist" className="relative z-10 w-full rounded-2xl shadow-2xl" loading="lazy" />
              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg z-20 hidden md:block max-w-xs border-l-4 border-primary">
                <p className="text-gray-800 font-bold text-sm">"We manage risk so you don't have to."</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Specialized Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Specialists in Property, Casualty, & Financial Growth</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">Our Specialty Insurance Group offers specialized commercial products that help businesses manage financial risk. We go beyond basic coverage to provide strategies that meet your specific and ever-changing financial risk exposures.</p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Whether you are a business owner looking to protect your assets or an individual seeking tax-advantaged retirement growth, our specialists design custom solutions tailored to your unique situation.</p>
              <Link to="/about" className="group inline-flex items-center text-primary font-bold text-lg hover:text-blue-700 transition-colors">
                Learn more about our approach
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Clean Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0f172a] to-slate-950"></div>
          {/* Subtle Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 md:mb-32">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Exclusive Financial Solutions</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Portfolio</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">Explore our specialized strategies designed to maximize wealth, protect assets, and secure your family's legacy.</p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">

            {/* Product 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/30 pointer-events-none"></div>
                <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2 perspective-1000">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                    <img src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/IUL.png" alt="IUL Secrets" className="w-auto h-auto max-h-96 max-w-full object-contain drop-shadow-2xl relative z-10" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4"><span className="h-px w-12 bg-blue-500/50"></span><span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Featured Product 01</span></div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">IUL Secrets</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">Indexed Universal Life insurance offering flexible permanent protection with cash value growth potential.</p>
                <a href="https://thinksmartinsurance.com/iul-2" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-white text-[#020617] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300">
                  Learn More <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 2 (Reverse) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-600/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/30 pointer-events-none"></div>
                <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2 perspective-1000">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                    <img src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Baby%20Milione.png" alt="Millionaire Baby" className="w-auto h-auto max-h-96 max-w-full object-contain drop-shadow-2xl relative z-10" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4"><span className="h-px w-12 bg-blue-500/50"></span><span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Featured Product 02</span></div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Millionaire Baby</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">Strategies designed to jumpstart your child's financial future with compound interest and tax advantages.</p>
                <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-white text-[#020617] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300">
                  Learn More <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/30 pointer-events-none"></div>
                <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2 perspective-1000">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                    <img src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/20251204-110323.png" alt="Term-Life" className="w-auto h-auto max-h-96 max-w-full object-contain drop-shadow-2xl relative z-10 rounded-md" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4"><span className="h-px w-12 bg-blue-500/50"></span><span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Featured Product 03</span></div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Term-Life</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">Affordable, straightforward coverage for a set period to protect your family's financial obligations like mortgages and income.</p>
                <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-white text-[#020617] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300">
                  Learn More <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 4 (Reverse) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-600/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/30 pointer-events-none"></div>
                <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2 perspective-1000">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                    <img src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Max-Funded.png" alt="Max-Funded IUL" className="w-auto h-auto max-h-96 max-w-full object-contain drop-shadow-2xl relative z-10" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4"><span className="h-px w-12 bg-blue-500/50"></span><span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Featured Product 04</span></div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Max-Funded IUL</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">Strategies structured to maximize cash value accumulation for potential tax-free retirement income.</p>
                <a href="https://thinksmartinsurance.com/max-funded-iul-secrets-2" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-white text-[#020617] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300">
                  Learn More <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-32 text-center border-t border-slate-800 pt-16">
            <p className="text-slate-400 mb-6">Looking for a custom solution?</p>
            <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg transition-colors">
              View Full Product Catalog <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from the families we've protected and the agents whose careers we've transformed.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Simple Testimonial Carousel */}
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="absolute -top-6 bg-primary text-white p-3 rounded-full shadow-lg">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-8 text-lg md:text-xl leading-relaxed mt-4 transition-opacity duration-500 ease-in-out">
                "{t.quote}"
              </p>
              <div className="mt-auto flex flex-col items-center transition-opacity duration-500 ease-in-out">
                <img src={t.image} className="w-16 h-16 rounded-full object-cover border-4 border-blue-50 mb-3 shadow-md" alt="Author" />
                <span className="font-bold text-gray-900 text-lg">{t.author}</span>
                <span className="text-sm text-primary font-bold uppercase tracking-wider">{t.role}</span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary w-3'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};