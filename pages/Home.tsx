
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

const products = [
    {
        title: "IUL Secrets",
        desc: "Indexed Universal Life insurance offering flexible permanent protection with cash value growth potential.",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/IUL.png",
        link: "https://thinksmartinsurance.com/iul-2",
        color: "blue"
    },
    {
        title: "Millionaire Baby",
        desc: "Strategies designed to jumpstart your child's financial future with compound interest and tax advantages.",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Baby%20Milione.png",
        link: "https://thinksmartinsurance.com",
        color: "cyan"
    },
    {
        title: "Term-Life",
        desc: "Affordable, straightforward coverage for a set period to protect your family's financial obligations like mortgages and income.",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/20251204-110323.png",
        link: "https://thinksmartinsurance.com",
        color: "blue"
    },
    {
        title: "Max-Funded IUL",
        desc: "Strategies structured to maximize cash value accumulation for potential tax-free retirement income.",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Max-Funded.png",
        link: "https://thinksmartinsurance.com/max-funded-iul-secrets-2",
        color: "cyan"
    }
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
      <section className="relative h-[650px] md:h-[750px] flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Corporate Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-blue-500/10 hover:bg-blue-500/20 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now Recruiting Agents Nationwide
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-pulse-slow">Legacy</span>. <br />
              Secure Their <span className="text-white">Future</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed drop-shadow-sm">
              American Finance Corp empowers families with superior financial protection and provides agents with the tools to build independent business empires.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full -mt-10 transition-all duration-700 ease-out transform translate-x-full translate-y-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
                <span className="relative flex items-center">
                   Start Your Career
                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border border-slate-600 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm w-full sm:w-auto">
                Explore Our Services
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Top-Tier Commission</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Vested Renewals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { number: "10k+", label: "Families Protected" },
                { number: "30+", label: "Top-Rated Carriers" },
                { number: "50", label: "States Covered" }
            ].map((stat, idx) => (
                <div key={idx} className="group p-6 rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 text-center bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-700 mb-2">{stat.number}</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-xs group-hover:text-primary transition-colors">{stat.label}</div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 text-center">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="text-lg md:text-2xl font-serif font-bold text-gray-800 cursor-default text-center hover:scale-105 transition-transform">National Life Group</div>
            <div className="text-xl md:text-3xl font-sans font-black text-blue-900 cursor-default tracking-tighter hover:scale-105 transition-transform">AIG</div>
            <div className="text-lg md:text-2xl font-sans font-bold text-blue-800 cursor-default tracking-wide uppercase hover:scale-105 transition-transform">Allianz</div>
            <div className="text-base md:text-xl font-serif font-bold italic text-gray-700 cursor-default hover:scale-105 transition-transform">Transamerica</div>
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTION */}
      <section className="bg-gray-50 py-16 md:py-28 relative z-10 overflow-hidden">
         {/* Decorative blob */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 skew-x-12 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative group perspective-1000">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full z-0 pointer-events-none animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0 pointer-events-none animate-float" style={{animationDelay: '1s'}}></div>
              
              <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-1">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
                <img src="https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/total_rev.jpg" alt="Quoc 'Leon' Tran - American Finance Corp" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg z-20 hidden md:block max-w-xs border-l-4 border-primary transform transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                <p className="text-gray-800 font-bold text-sm italic">"We manage risk so you don't have to."</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6 px-3 py-1 bg-blue-50 rounded-full w-fit">
                <ShieldCheck className="w-4 h-4" />
                <span>Specialized Expertise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Specialists in <span className="text-primary">Growth</span> & Protection</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">Our Specialty Insurance Group offers specialized commercial products that help businesses manage financial risk. We go beyond basic coverage to provide strategies that meet your specific and ever-changing financial risk exposures.</p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">Whether you are a business owner looking to protect your assets or an individual seeking tax-advantaged retirement growth, our specialists design custom solutions tailored to your unique situation.</p>
              <Link to="/about" className="group inline-flex items-center text-white bg-gray-900 hover:bg-primary font-bold text-lg px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-primary/40">
                Learn more about our approach
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Clean Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a1020] to-slate-950"></div>
          {/* Subtle Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]">Exclusive Financial Solutions</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Portfolio</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">Explore our specialized strategies designed to maximize wealth, protect assets, and secure your family's legacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product, index) => (
                <div key={index} className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col">
                    <div className="relative h-72 md:h-80 w-full p-8 flex items-center justify-center bg-slate-950/30 overflow-hidden">
                         <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10 transition-opacity duration-300 ${product.color === 'blue' ? 'group-hover:to-blue-900/40' : 'group-hover:to-cyan-900/40'}`}></div>
                         {/* Glow effect behind image */}
                         <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${product.color === 'blue' ? 'bg-blue-600/10' : 'bg-cyan-600/10'} rounded-full blur-[50px] group-hover:blur-[70px] transition-all duration-700`}></div>
                         
                         <img 
                            src={product.image} 
                            alt={product.title} 
                            className={`relative z-20 h-full w-auto object-contain drop-shadow-2xl transform transition-transform duration-500 ${
                              product.title === 'Term-Life' 
                                ? 'scale-100 md:scale-[1.45] translate-y-0 md:-translate-y-6 group-hover:scale-105 md:group-hover:scale-[1.5] group-hover:-translate-y-2 md:group-hover:-translate-y-8' 
                                : 'group-hover:-translate-y-2 group-hover:scale-105'
                            }`} 
                         />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow relative z-20">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`h-px w-10 ${product.color === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'}`}></span>
                            <span className={`${product.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'} font-bold uppercase tracking-widest text-xs`}>
                                Featured Product 0{index + 1}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors">
                            {product.title}
                        </h3>
                        
                        <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                            {product.desc}
                        </p>
                        
                        <a 
                            href={product.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className={`relative inline-flex items-center gap-2 font-bold transition-all duration-300 group/btn w-fit ${product.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 'text-cyan-400 hover:text-cyan-300'}`}
                        >
                            Learn More 
                            <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${product.color === 'blue' ? 'bg-blue-400' : 'bg-cyan-400'} transition-all duration-300 group-hover/btn:w-full`}></span>
                        </a>
                    </div>
                </div>
            ))}
          </div>

          <div className="mt-24 text-center border-t border-slate-800 pt-16">
            <p className="text-slate-400 mb-6">Looking for a custom solution?</p>
            <a href="https://thinksmartinsurance.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg transition-colors group">
              View Full Product Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
            <div className="relative bg-white p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="absolute -top-6 bg-gradient-to-r from-primary to-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/30">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              <div className="min-h-[160px] flex items-center justify-center">
                 <p key={currentTestimonial} className="text-gray-600 italic text-xl md:text-2xl leading-relaxed animate-fade-in">
                    "{t.quote}"
                 </p>
              </div>
              <div className="mt-8 flex flex-col items-center animate-fade-in-up">
                <img src={t.image} className="w-16 h-16 rounded-full object-cover border-4 border-blue-50 mb-3 shadow-md" alt="Author" />
                <span className="font-bold text-gray-900 text-lg">{t.author}</span>
                <span className="text-sm text-primary font-bold uppercase tracking-wider">{t.role}</span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-primary w-10 shadow-lg shadow-blue-500/40' : 'bg-gray-300 hover:bg-primary/50 w-3'}`}
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
