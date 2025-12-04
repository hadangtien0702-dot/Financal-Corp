
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Shield, Users, CheckCircle, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: "Quoc 'Leon' Tran",
        role: "Founder & CEO",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/total_rev.jpg"
    },
    {
        name: "Gina",
        role: "Elite Agent",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Gina.jpg"
    },
    {
        name: "Celine",
        role: "Elite Agent",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Celine.jpg"
    },
    {
        name: "Ty Trieu",
        role: "Elite Agent",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Ty%20Trieu.jpg"
    },
    {
        name: "Vicky Trieu",
        role: "Elite Agent",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Vicky%20Trieu.jpg"
    },
    {
        name: "Ha",
        role: "Elite Agent",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Ha.jpg"
    },
    {
        name: "Hung",
        role: "Elite Agent",
        image: "https://jvbtqggealvhqkkmowcc.supabase.co/storage/v1/object/public/post-attachments/financial-corp/Hung.jpg"
    }
];

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-16 md:py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About <span className="text-primary">American Finance Corp</span></h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in financial protection and professional growth. We are dedicated to securing futures and building legacies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
          <div className="order-2 md:order-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary font-bold text-xs uppercase tracking-widest mb-4">Our Story</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              American Finance Corp is a premier financial services agency serving families and businesses across the nation. We specialize in providing comprehensive insurance solutions, including Life Insurance, Annuities, and Executive Bonus Plans.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond our products, we are a thriving community of agents. We believe in empowering individuals to take control of their careers through our industry-leading training, mentorship, and aggressive compensation models. We don't just sell insurance; we build leaders.
            </p>
          </div>
          <div className="order-1 md:order-2 relative group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300"></div>
             <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-3 opacity-10 group-hover:-rotate-6 transition-transform duration-300"></div>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team meeting" className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-64 md:h-96 transform transition-transform duration-500 hover:scale-[1.02]" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-28">
          <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <Target className="w-12 h-12 mb-6 text-blue-100 relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-blue-50 text-lg leading-relaxed relative z-10">
              To provide peace of mind to millions of families through superior financial products while empowering a new generation of insurance professionals with the training, tools, and mentorship needed to achieve financial independence.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary opacity-10 rounded-full -ml-10 -mb-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <TrendingUp className="w-12 h-12 mb-6 text-primary relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
              To become the most trusted name in family financial protection and the premier destination for ambitious agents seeking to build their own business empires within the financial sector.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Shield, title: "Integrity", desc: "We operate with unyielding honesty and transparency in every interaction with clients and agents." },
                { icon: Users, title: "Service", desc: "Our commitment to serving our communities is the foundation of our success." },
                { icon: CheckCircle, title: "Excellence", desc: "We strive for the highest standards in product quality, agent training, and customer support." }
            ].map((value, idx) => (
                 <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all duration-300 bg-white group hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                        <value.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600">{value.desc}</p>
                </div>
            ))}
          </div>
        </div>

        {/* MEET THE TEAM SECTION - SCROLLING CAROUSEL */}
        <div className="mb-20 md:mb-28 overflow-hidden">
            <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary font-bold text-xs uppercase tracking-widest mb-4">Leadership</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our diverse team of experts is dedicated to your financial success and professional growth.</p>
            </div>
            
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex animate-scroll pause-on-hover w-max">
                    {/* Render list twice for seamless looping */}
                    {[...teamMembers, ...teamMembers].map((member, idx) => (
                        <div key={idx} className="w-72 md:w-80 mx-4 flex-shrink-0 group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex space-x-3 mb-2">
                                            <button className="bg-white/20 hover:bg-white text-white hover:text-primary p-2 rounded-full backdrop-blur-sm transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="bg-white/20 hover:bg-white text-white hover:text-primary p-2 rounded-full backdrop-blur-sm transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="text-white/90 text-sm">Dedicated to excellence.</p>
                                    </div>
                                </div>
                                
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                                />
                            </div>
                            <div className="p-6 relative z-20 bg-white">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">The American Finance Corp Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-4">For Our Clients</h3>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Personalized Strategies:</strong> We don't believe in one-size-fits-all. Your financial plan is custom-built for your specific needs and goals.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Independent Choice:</strong> We represent over 30 top-rated carriers, ensuring you get the best rates and products without bias.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Lifetime Support:</strong> We are here for the long haul, helping you adjust your protection as your life evolves.</span></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-4">For Our Agents</h3>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Highest Comp:</strong> We offer one of the most aggressive compensation structures in the industry, rewarding your hard work directly.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>True Ownership:</strong> Build a business that you truly own. We offer vested renewals from day one, securing your legacy.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>World-Class Training:</strong> Access our proprietary training platform to master the art of sales, marketing, and leadership.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Whether you need protection for your family or are looking for a lucrative career change, we are here to guide you every step of the way.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-colors shadow-lg w-full sm:w-auto transform hover:-translate-y-1">Contact Us Today</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
