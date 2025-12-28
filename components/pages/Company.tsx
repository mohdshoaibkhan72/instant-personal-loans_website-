import React from 'react';
import { PageLayout } from '../PageLayout';
import { Target, Users, TrendingUp, ArrowRight, Heart, Shield, Zap, Rocket, Globe, Coffee, Smile, Award, History, Newspaper, Linkedin, MapPin } from 'lucide-react';
import { Button } from '../Button';

// --- ABOUT US ---
export const AboutUs: React.FC = () => (
  <PageLayout title="About Us" subtitle="Building the future of financial inclusion in India.">
    <div className="space-y-20">
      {/* Section 1: Our Mission */}
      <section className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-rupivo-dark mb-6">Democratizing Credit for a Billion Indians</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At Rupivo, we believe that access to credit is a fundamental right, not a privilege. Millions of Indians are underserved by traditional banking simply because they lack a credit history or formal income documents. We are here to change that. By leveraging advanced AI and alternative data, we connect deserving borrowers with RBI-registered lenders instantly, transparently, and securely.
        </p>
        <div className="w-24 h-1 bg-rupivo-blue mx-auto rounded-full"></div>
      </section>

      {/* Section 2: Our Journey (Timeline) - NEW */}
      <section>
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-rupivo-dark flex items-center justify-center gap-2">
                <History className="text-rupivo-blue" /> Our Journey
            </h3>
        </div>
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-1/2 space-y-12">
            {[
                { year: "2021", title: "The Inception", desc: "Founded in Bangalore by a team of ex-bankers and techies." },
                { year: "2022", title: "Seed Funding", desc: "Raised $5M to build our proprietary AI credit engine." },
                { year: "2023", title: "100k Users", desc: "Reached a milestone of 1 Lakh happy customers and 10+ lending partners." },
                { year: "2024", title: "Expansion", desc: "Launched Rupivo 2.0 with instant approvals and expanded to 19,000 pincodes." }
            ].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-rupivo-blue rounded-full border-4 border-white shadow-sm"></div>
                    <div className="md:w-1/2 p-4 md:px-12">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                            <span className="text-rupivo-blue font-extrabold text-2xl block mb-1">{item.year}</span>
                            <h4 className="font-bold text-lg text-rupivo-dark">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            ))}
        </div>
      </section>

      {/* Section 3: Leadership Team - NEW */}
      <section>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-rupivo-dark">Meet the Leadership</h3>
            <p className="text-gray-500 mt-2">Driven by passion, guided by experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { name: "Arjun Malhotra", role: "Co-Founder & CEO", prev: "Ex-Goldman Sachs", img: "Arjun" },
                  { name: "Sneha Kapoor", role: "Co-Founder & CTO", prev: "Ex-Google AI", img: "Sneha" },
                  { name: "Vikram Singh", role: "Chief Risk Officer", prev: "Ex-HDFC Bank", img: "Vikram" },
              ].map((leader, i) => (
                  <div key={i} className="group text-center">
                      <div className="relative inline-block mb-4">
                          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${leader.img}`} alt={leader.name} className="w-full h-full bg-gray-100" />
                          </div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#0077b5] rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                              <Linkedin size={16} />
                          </div>
                      </div>
                      <h4 className="font-bold text-xl text-rupivo-dark">{leader.name}</h4>
                      <p className="text-rupivo-blue font-medium text-sm mb-1">{leader.role}</p>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">{leader.prev}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="bg-gray-50 rounded-[2.5rem] p-10 md:p-16">
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-rupivo-dark">Our Core Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-rupivo-blue" />
            </div>
            <h4 className="font-bold text-xl text-rupivo-dark mb-3">Simplicity First</h4>
            <p className="text-gray-600 leading-relaxed">We remove complex paperwork and jargon. Finance should be as easy as ordering food online.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-rupivo-green" />
            </div>
            <h4 className="font-bold text-xl text-rupivo-dark mb-3">Radical Inclusion</h4>
            <p className="text-gray-600 leading-relaxed">We build for the unserved. Our models look beyond CIBIL scores to see the real person.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-600" />
            </div>
            <h4 className="font-bold text-xl text-rupivo-dark mb-3">Unwavering Trust</h4>
            <p className="text-gray-600 leading-relaxed">We treat user data with sanctity. Transparency and security are non-negotiable.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Press Mentions - NEW */}
      <section className="text-center">
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-10 flex items-center justify-center gap-2">
              <Newspaper size={20} /> Featured In
          </h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for media logos */}
             <span className="text-2xl font-serif font-bold text-gray-800">The Economic Times</span>
             <span className="text-2xl font-sans font-black tracking-tighter text-gray-800">YourStory</span>
             <span className="text-2xl font-serif font-bold text-gray-800">Mint</span>
             <span className="text-2xl font-sans font-bold text-gray-800">TechCrunch</span>
             <span className="text-2xl font-sans font-bold text-gray-800">INC42</span>
          </div>
      </section>
    </div>
  </PageLayout>
);

// --- CAREERS ---
export const Careers: React.FC = () => (
  <PageLayout title="Join Our Team" subtitle="Help us revolutionize lending for the next billion users.">
    <div className="space-y-20">
      
      {/* Section 1: Intro */}
      <section className="text-center max-w-3xl mx-auto">
         <p className="text-xl text-gray-700 leading-relaxed font-medium">
            We are a team of engineers, data scientists, and dreamers based in Bangalore. If you are passionate about Fintech and solving hard problems at scale, we want to hear from you.
         </p>
      </section>
      
      {/* Section 2: Life at Rupivo (Gallery) - NEW */}
      <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white font-bold text-lg">Brainstorming Fridays</p>
                  </div>
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" alt="Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-2 rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80" alt="Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white font-bold text-lg">Annual Offsite 2023</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 3: Perks */}
      <section className="bg-gray-50 rounded-[2.5rem] p-10">
        <h3 className="text-2xl font-bold text-rupivo-dark mb-10 text-center">Why Work With Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <Rocket className="text-blue-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">High Impact</h4>
                <p className="text-sm text-gray-600">Work on products used by millions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <Coffee className="text-green-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">Work-Life Balance</h4>
                <p className="text-sm text-gray-600">Flexible hours & hybrid policy.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <TrendingUp className="text-purple-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">Growth & ESOPs</h4>
                <p className="text-sm text-gray-600">Competitive salary + ownership.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <Heart className="text-yellow-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">Health First</h4>
                <p className="text-sm text-gray-600">Comprehensive insurance for family.</p>
            </div>
        </div>
      </section>

      {/* Section 4: Employee Testimonial - NEW */}
      <section className="max-w-4xl mx-auto">
          <div className="bg-rupivo-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Developer" alt="Dev" className="bg-gray-800" />
                  </div>
                  <div className="text-center md:text-left">
                      <p className="text-xl md:text-2xl font-medium italic mb-4">"The autonomy to build things from scratch is incredible here. I shipped a feature in my first month that is now used by 50k users daily. The culture is purely meritocratic."</p>
                      <div>
                          <h4 className="font-bold text-rupivo-blue">Rohan Mehta</h4>
                          <p className="text-gray-400 text-sm">Senior Backend Engineer</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 5: Open Positions */}
      <section>
        <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-bold text-rupivo-dark">Open Positions</h3>
            <a href="#" className="text-rupivo-blue font-bold text-sm hover:underline">View All</a>
        </div>
        <div className="space-y-4">
          {[
            { role: "Senior Backend Engineer", dept: "Engineering", loc: "Bangalore", type: "Full-time" },
            { role: "Product Manager - Growth", dept: "Product", loc: "Bangalore", type: "Full-time" },
            { role: "Customer Success Lead", dept: "Operations", loc: "Remote", type: "Contract" },
            { role: "UI/UX Designer", dept: "Design", loc: "Bangalore", type: "Full-time" }
          ].map((job, idx) => (
            <div key={idx} className="group flex flex-col sm:flex-row justify-between items-center p-6 border border-gray-200 rounded-2xl hover:border-rupivo-blue hover:shadow-lg hover:shadow-rupivo-blue/5 transition-all cursor-pointer bg-white">
              <div className="mb-4 sm:mb-0 text-center sm:text-left w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h4 className="font-bold text-lg text-rupivo-dark group-hover:text-rupivo-blue transition-colors">{job.role}</h4>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500 inline-block w-fit mx-auto sm:mx-0">{job.type}</span>
                </div>
                <p className="text-sm text-gray-500">{job.dept} • {job.loc}</p>
              </div>
              <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-rupivo-blue group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Section 6: Application Process */}
      <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-rupivo-dark mb-8 text-center">How We Hire</h3>
          <div className="flex flex-col md:flex-row justify-between gap-8 relative">
              {/* Line */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

              {[
                  { step: 1, title: "Apply", desc: "Send us your CV" },
                  { step: 2, title: "Intro Call", desc: "30 min chat" },
                  { step: 3, title: "Deep Dive", desc: "Technical round" },
                  { step: 4, title: "Culture Fit", desc: "Meet the team" },
                  { step: 5, title: "Offer", desc: "Welcome aboard!" }
              ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center text-center bg-gray-50">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-rupivo-blue text-rupivo-blue font-bold text-lg flex items-center justify-center mb-4 shadow-sm z-10">
                          {s.step}
                      </div>
                      <h5 className="font-bold text-rupivo-dark">{s.title}</h5>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      <div className="text-center mt-8">
        <p className="text-gray-600 mb-2">Don't see a role for you?</p>
        <p className="font-bold text-rupivo-blue">Send your CV to careers@rupivo.in</p>
      </div>
    </div>
  </PageLayout>
);

// --- BLOG ---
export const Blog: React.FC = () => (
  <PageLayout title="Rupivo Blog" subtitle="Financial tips, product updates, and industry insights.">
    <div className="space-y-16">
       
       {/* Section 1: Featured Post */}
       <section className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl">
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
             alt="Featured" 
             className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 text-white max-w-3xl">
               <span className="bg-rupivo-blue px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 inline-block">Editor's Pick</span>
               <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Mastering Your Credit Score: The Ultimate Guide for 2024</h2>
               <p className="text-gray-200 mb-6 line-clamp-2 text-lg">Understanding your CIBIL score is the first step to financial freedom. Learn actionable tips to improve it within 6 months without paying agents.</p>
               <div className="flex items-center gap-4 text-sm font-medium">
                   <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-white/20"></div>
                       <span>By Rishi Mehta</span>
                   </div>
                   <span className="w-1 h-1 bg-white rounded-full"></span>
                   <span>5 min read</span>
               </div>
           </div>
       </section>

       {/* Section 2: Trending Topics - NEW */}
       <section>
           <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-4">Trending Topics</h4>
           <div className="flex flex-wrap gap-3">
               {["All", "Credit Education", "Personal Finance", "Product Updates", "Security", "Success Stories", "Fraud Prevention", "Investment 101"].map((cat, i) => (
                   <button key={i} className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${i===0 ? 'bg-rupivo-dark text-white border-rupivo-dark' : 'bg-white text-gray-600 border-gray-200 hover:border-rupivo-dark hover:text-rupivo-dark hover:shadow-sm'}`}>
                       {cat}
                   </button>
               ))}
           </div>
       </section>

       {/* Section 3: Recent Posts */}
       <section>
        <h3 className="text-2xl font-bold text-rupivo-dark mb-8">Recent Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
            { title: "5 Tips to Improve Your CIBIL Score Fast", date: "March 15, 2024", cat: "Credit Education", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
            { title: "Personal Loan vs. Credit Card: Which is Better?", date: "March 10, 2024", cat: "Finance 101", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" },
            { title: "How to Avoid Instant Loan Frauds in India", date: "Feb 28, 2024", cat: "Security", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
            { title: "Introducing Rupivo 2.0: Faster & Smarter", date: "Feb 14, 2024", cat: "Product Update", img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=600&q=80" },
        ].map((post, idx) => (
            <div key={idx} className="group bg-white border border-gray-200 rounded-[2rem] overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1">
                <div className="h-60 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-rupivo-dark">
                        {post.cat}
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-rupivo-dark mb-3 group-hover:text-rupivo-blue transition-colors leading-snug">{post.title}</h3>
                <div className="mt-auto pt-4 flex items-center text-rupivo-blue font-bold text-sm">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                </div>
            </div>
        ))}
        </div>
       </section>

       {/* Section 4: Newsletter */}
       <section className="bg-rupivo-dark rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-rupivo-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-rupivo-green/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
           
           <div className="relative z-10">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg backdrop-blur text-yellow-400">
                   <Zap size={32} />
               </div>
               <h3 className="text-3xl font-bold mb-4">Get Smarter About Money</h3>
               <p className="text-gray-300 mb-8 max-w-lg mx-auto">Join 50,000+ subscribers. Get weekly financial tips and exclusive offers directly in your inbox.</p>
               <form className="max-w-md mx-auto flex gap-3" onSubmit={(e) => e.preventDefault()}>
                   <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 rounded-xl border border-white/10 bg-white/5 focus:bg-white focus:text-rupivo-dark outline-none transition-colors" />
                   <Button className="rounded-xl whitespace-nowrap bg-rupivo-blue text-white hover:bg-white hover:text-rupivo-blue">Subscribe</Button>
               </form>
               <p className="text-xs text-gray-400 mt-6">No spam, ever. Unsubscribe anytime.</p>
           </div>
       </section>
    </div>
  </PageLayout>
);