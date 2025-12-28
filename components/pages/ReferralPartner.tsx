import React, { useState } from 'react';
import { PageLayout } from '../PageLayout';
import { 
  Wallet, Clock, CheckCircle2, BarChart3, Smartphone, 
  Download, ChevronRight, TrendingUp, Users, Award, 
  HelpCircle, Calculator, BadgeIndianRupee, Star, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import { Button } from '../Button';
import { ButtonVariant } from '../../types';

// Simple Icons for App Stores
const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
);
const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
);

export const ReferralPartner: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [leads, setLeads] = useState(25);
  
  // Simple calculation logic: Leads * 40% conversion * loanAmount * 1.5% commission (avg)
  const potentialEarnings = Math.round(leads * 0.4 * loanAmount * 0.015);
  
  // Determine partner level based on leads
  const partnerLevel = leads < 20 ? 'Silver' : leads < 50 ? 'Gold' : 'Platinum';
  const progressPercent = Math.min((leads / 100) * 100, 100);

  return (
    <PageLayout title="Become a Partner" subtitle="Join India's fastest growing loan distribution network. Earn high commissions with zero investment.">
      <div className="space-y-24">
        
        {/* Section 1: Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold text-rupivo-blue mb-1">₹15Cr+</div>
                <div className="text-sm text-gray-600 font-medium">Commissions Paid</div>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold text-rupivo-green mb-1">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Active Partners</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold text-purple-600 mb-1">40+</div>
                <div className="text-sm text-gray-600 font-medium">Lending Partners</div>
            </div>
            <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold text-yellow-600 mb-1">T+3</div>
                <div className="text-sm text-gray-600 font-medium">Payout Cycle</div>
            </div>
        </section>

        {/* Section 2: App Showcase (Download) - ENHANCED */}
        <section className="bg-rupivo-dark rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rupivo-blue/20 to-transparent"></div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center p-8 md:p-16 relative z-10">
                <div className="text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-yellow-500/30 text-yellow-400">
                        <Star size={12} fill="currentColor" /> #1 App for DSAs
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Track Leads & Earnings <br/> <span className="text-rupivo-blue">On The Go.</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
                        The <strong>Rupivo Partner App</strong> is your complete digital office. Generate offers, check application status, and withdraw commissions instantly.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Live Dashboard</p>
                                <p className="text-xs text-gray-400">Real-time stats</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Wallet size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Instant Payout</p>
                                <p className="text-xs text-gray-400">Withdraw anytime</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white text-rupivo-dark px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <PlayStoreIcon />
                            <div className="text-left leading-none">
                                <div className="text-[10px] uppercase text-gray-500 font-bold mb-0.5">Get it on</div>
                                <div className="text-base">Google Play</div>
                            </div>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1 border border-white/20">
                            <AppleIcon />
                            <div className="text-left leading-none">
                                <div className="text-[10px] uppercase text-gray-400 font-bold mb-0.5">Download on</div>
                                <div className="text-base">App Store</div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Dual Phone Mockup */}
                <div className="relative h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
                     {/* Back Phone (Lead List) */}
                     <div className="absolute right-0 top-10 w-[260px] h-[520px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl opacity-60 transform translate-x-12 translate-y-12 rotate-6 z-0 hidden md:block">
                        <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden p-4 relative">
                           {/* Mock List */}
                           <div className="h-8 w-1/2 bg-gray-100 rounded mb-4"></div>
                           {[1,2,3,4,5].map(i => (
                               <div key={i} className="flex items-center gap-3 mb-3 p-3 bg-gray-50 rounded-xl">
                                   <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                   <div className="flex-1">
                                       <div className="h-2 w-20 bg-gray-200 rounded mb-1"></div>
                                       <div className="h-2 w-10 bg-gray-200 rounded"></div>
                                   </div>
                               </div>
                           ))}
                        </div>
                     </div>

                     {/* Front Phone (Dashboard) */}
                     <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-10 transform md:-rotate-6 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#F3F4F6] rounded-[2.5rem] overflow-hidden">
                             {/* Notch */}
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                             
                             {/* Header */}
                             <div className="bg-rupivo-blue h-48 p-6 pt-12 text-white relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                                 <div className="flex justify-between items-center mb-6 relative z-10">
                                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">RM</div>
                                     <div className="px-2 py-1 bg-green-500/20 rounded-lg text-[10px] font-bold border border-green-400/30 text-green-300 flex items-center gap-1">
                                         <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                                     </div>
                                 </div>
                                 <p className="text-xs opacity-80 font-medium tracking-wide uppercase">Total Earnings</p>
                                 <h3 className="text-4xl font-extrabold mt-1">₹ 45,250</h3>
                                 <div className="mt-4 flex gap-2">
                                     <span className="text-[10px] bg-white/20 px-2 py-1 rounded text-white">+ ₹2,400 today</span>
                                 </div>
                             </div>

                             {/* Stats Grid */}
                             <div className="p-5 -mt-6 relative z-10">
                                 <div className="bg-white p-5 rounded-2xl shadow-lg mb-4 flex justify-between items-center">
                                     <div>
                                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Conversion Rate</p>
                                         <p className="text-2xl font-bold text-gray-800">42%</p>
                                     </div>
                                     <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                                         <TrendingUp size={24} />
                                     </div>
                                 </div>
                                 
                                 {/* Visual Progress Bars */}
                                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                                     <div>
                                         <div className="flex justify-between text-xs font-bold mb-1">
                                             <span className="text-gray-600">Verification</span>
                                             <span className="text-rupivo-blue">8/10</span>
                                         </div>
                                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                             <div className="h-full bg-rupivo-blue w-[80%] rounded-full"></div>
                                         </div>
                                     </div>
                                     <div>
                                         <div className="flex justify-between text-xs font-bold mb-1">
                                             <span className="text-gray-600">Disbursed</span>
                                             <span className="text-green-500">5/10</span>
                                         </div>
                                         <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                             <div className="h-full bg-green-500 w-[50%] rounded-full"></div>
                                         </div>
                                     </div>
                                 </div>

                                 {/* Recent Activity */}
                                 <div className="mt-4">
                                     <p className="text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Recent Activity</p>
                                     <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
                                         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">₹</div>
                                         <div>
                                             <p className="text-xs font-bold text-gray-800">Commission Credited</p>
                                             <p className="text-[10px] text-gray-400">2 mins ago</p>
                                         </div>
                                         <div className="ml-auto text-xs font-bold text-green-600">+ ₹1,200</div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Section 3: How It Works */}
        <section>
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-rupivo-dark mb-4">How to Start Earning?</h2>
                <p className="text-gray-600">Zero paperwork. 100% digital onboarding.</p>
             </div>
             <div className="grid md:grid-cols-4 gap-8">
                {[
                    { icon: Users, title: "Register", desc: "Sign up on the app with your basic details & KYC." },
                    { icon: Smartphone, title: "Add Leads", desc: "Enter customer details or share your referral link." },
                    { icon: Clock, title: "Track Status", desc: "Track application progress in real-time on dashboard." },
                    { icon: BadgeIndianRupee, title: "Get Paid", desc: "Receive commission directly in your bank account." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-rupivo-blue relative">
                            <step.icon size={28} />
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rupivo-dark text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                                {i+1}
                            </div>
                        </div>
                        <h3 className="font-bold text-lg text-rupivo-dark mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-500 px-4">{step.desc}</p>
                    </div>
                ))}
             </div>
        </section>

        {/* Section 4: Calculator - GAMIFIED */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
                         <Calculator size={14} /> Earnings Calculator
                     </div>
                     <h2 className="text-3xl font-bold text-rupivo-dark mb-6">Calculate Your Potential Income</h2>
                     <p className="text-gray-600 mb-8">See how much you can earn by partnering with Rupivo. The more leads you convert, the higher your partner tier.</p>
                     
                     <div className="space-y-8">
                         <div>
                             <div className="flex justify-between mb-2 font-bold text-gray-700">
                                 <label>Monthly Leads</label>
                                 <span className="text-rupivo-blue">{leads} Leads</span>
                             </div>
                             <input 
                                type="range" 
                                min="1" max="100" 
                                value={leads} 
                                onChange={(e) => setLeads(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rupivo-blue"
                             />
                             {/* Tier Progress Visual */}
                             <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                                 <span className="text-gray-400">Tier:</span>
                                 <span className={`${partnerLevel === 'Platinum' ? 'text-purple-600' : partnerLevel === 'Gold' ? 'text-yellow-600' : 'text-gray-600'}`}>{partnerLevel}</span>
                                 <div className="flex-1 h-1.5 bg-gray-200 rounded-full ml-2 overflow-hidden">
                                     <div 
                                        className={`h-full rounded-full transition-all duration-500 ${partnerLevel === 'Platinum' ? 'bg-purple-500' : partnerLevel === 'Gold' ? 'bg-yellow-500' : 'bg-gray-400'}`} 
                                        style={{ width: `${progressPercent}%` }}
                                     ></div>
                                 </div>
                             </div>
                         </div>
                         <div>
                             <div className="flex justify-between mb-2 font-bold text-gray-700">
                                 <label>Average Loan Amount</label>
                                 <span className="text-rupivo-blue">₹{(loanAmount/100000).toFixed(1)} Lakhs</span>
                             </div>
                             <input 
                                type="range" 
                                min="50000" max="1000000" step="50000"
                                value={loanAmount} 
                                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rupivo-blue"
                             />
                         </div>
                     </div>
                 </div>
                 
                 <div className="bg-white rounded-3xl p-8 shadow-xl text-center border border-gray-100 transform md:rotate-2 hover:rotate-0 transition-transform relative overflow-hidden">
                     {/* Dynamic Background Shine */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                     
                     <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Monthly Earning Potential</p>
                     <div className="text-5xl font-extrabold text-rupivo-blue mb-2">
                        ₹ {potentialEarnings.toLocaleString()}
                     </div>
                     <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-6">
                         + Performance Bonus Eligible
                     </div>
                     
                     <div className="border-t border-gray-100 pt-6 mt-2 mb-6 grid grid-cols-2 gap-4">
                         <div className="text-center">
                             <p className="text-xs text-gray-400 uppercase font-bold">Base</p>
                             <p className="font-bold text-gray-700">1.5%</p>
                         </div>
                         <div className="text-center border-l border-gray-100">
                             <p className="text-xs text-gray-400 uppercase font-bold">Incentive</p>
                             <p className="font-bold text-green-600">Up to 1%</p>
                         </div>
                     </div>

                     <Button fullWidth variant={ButtonVariant.PRIMARY}>Start Earning Now</Button>
                 </div>
             </div>
        </section>

        {/* Section 5: Benefits */}
        <section>
            <h3 className="text-2xl font-bold text-rupivo-dark mb-10 text-center">Why Partner with Rupivo?</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-rupivo-blue group-hover:scale-110 transition-transform">
                        <Wallet className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-xl text-rupivo-dark mb-3">Highest Payouts</h4>
                    <p className="text-gray-600">Earn up to 2.5% commission on every disbursal. Best in industry rates guaranteed.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform group">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-rupivo-green group-hover:scale-110 transition-transform">
                        <Clock className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-xl text-rupivo-dark mb-3">Instant Settlement</h4>
                    <p className="text-gray-600">Get your commission payout within T+3 days of loan disbursement. No long waiting periods.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-transform group">
                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-xl text-rupivo-dark mb-3">Digital Dashboard</h4>
                    <p className="text-gray-600">Track leads, check status, and manage earnings in real-time through our dedicated partner app.</p>
                </div>
            </div>
        </section>

        {/* Section 6: Testimonials - EXPANDED */}
        <section className="relative">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-rupivo-dark mb-4">Partner Success Stories</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of partners who have transformed their income with Rupivo.</p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                     {
                         name: "Rajesh Kumar",
                         role: "DSA, Delhi",
                         earnings: "₹1.2 Lakhs",
                         text: "I shifted from traditional banks to Rupivo because of the app. I can track every lead's status without calling support. My monthly income has doubled.",
                         img: "Rajesh"
                     },
                     {
                         name: "Sunita Menon",
                         role: "Financial Advisor, Mumbai",
                         earnings: "₹85,000",
                         text: "The payouts are actually instant. T+3 days means I get my money same week. Plus, my customers are happy with the fast approvals.",
                         img: "Sunita"
                     },
                     {
                         name: "Vikram Singh",
                         role: "Insurance Agent, Pune",
                         earnings: "₹2.5 Lakhs",
                         text: "Cross-selling loans to my insurance clients was never this easy. The eligibility check takes 30 seconds, and I don't need to collect physical documents.",
                         img: "Vikram"
                     },
                     {
                         name: "Anjali Desai",
                         role: "Tax Consultant, Ahmedabad",
                         earnings: "₹60,000",
                         text: "Rupivo is a great side income source. My clients trust me with their taxes, and now I help them with funding needs too. Zero friction process.",
                         img: "Anjali"
                     },
                     {
                        name: "Amit Patel",
                        role: "Mobile Shop Owner, Surat",
                        earnings: "₹45,000",
                        text: "I help customers finance their phones. Rupivo approves loans fast, so I close more sales in my shop. It's a win-win.",
                        img: "Amit"
                    }
                 ].map((story, i) => (
                    <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
                        {/* Quote Icon Background */}
                        <div className="absolute top-4 right-4 text-gray-100 group-hover:text-blue-50 transition-colors">
                            <div className="text-6xl font-serif">"</div>
                        </div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${story.img}`} className="w-14 h-14 rounded-full bg-gray-50 border-2 border-white shadow-sm" alt="Partner" />
                            <div>
                                <h4 className="font-bold text-rupivo-dark">{story.name}</h4>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">{story.role}</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-600 italic mb-6 relative z-10 text-sm leading-relaxed min-h-[80px]">"{story.text}"</p>
                        
                        <div className="border-t border-gray-50 pt-4 mt-auto flex justify-between items-center relative z-10">
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Monthly Earnings</p>
                                <p className="text-rupivo-blue font-bold text-lg">{story.earnings}</p>
                            </div>
                            <div className="flex gap-0.5 text-yellow-400">
                                {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                            </div>
                        </div>
                    </div>
                 ))}
                 
                 {/* Join Card */}
                 <div className="p-8 bg-rupivo-blue rounded-3xl shadow-lg flex flex-col items-center justify-center text-center text-white relative overflow-hidden group cursor-pointer hover:bg-rupivo-dark transition-colors">
                     <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <ArrowUpRight size={32} />
                     </div>
                     <h4 className="font-bold text-2xl mb-2">Be the Next Story</h4>
                     <p className="text-blue-100 mb-6 text-sm">Join 5000+ partners earning high commissions.</p>
                     <Button variant={ButtonVariant.SECONDARY} className="bg-white text-rupivo-blue hover:bg-gray-50 border-0">Register Now</Button>
                 </div>
             </div>
        </section>
        
        {/* Section 7: FAQ */}
        <section>
             <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-rupivo-dark mb-8 text-center flex items-center justify-center gap-2">
                    <HelpCircle className="text-rupivo-blue" /> Partner FAQs
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-2">Is there a joining fee?</h4>
                        <p className="text-sm text-gray-600">No, joining Rupivo Partner Program is completely free. Zero investment required.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-2">When do I get paid?</h4>
                        <p className="text-sm text-gray-600">We process payouts every week. Once a loan is disbursed, you get paid within 3 working days.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-2">Who can become a partner?</h4>
                        <p className="text-sm text-gray-600">Anyone! DSAs, Insurance Agents, CAs, Tax Consultants, or even working professionals looking for side income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-2">Do you provide marketing material?</h4>
                        <p className="text-sm text-gray-600">Yes, the app has a 'Marketing' section where you can download personalized posters with your name and number.</p>
                    </div>
                </div>
             </div>
        </section>

        {/* Section 8: Registration Form (Existing) */}
        <section id="register" className="bg-rupivo-dark rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rupivo-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                <div>
                    <h3 className="text-3xl font-bold mb-4">Register in 2 Minutes</h3>
                    <p className="text-gray-400 mb-8 text-lg">Fill the form to get your Partner ID and access to the dashboard.</p>
                    
                    <ul className="space-y-4 mb-8">
                        {["Dedicated Relationship Manager", "Marketing Material Support", "Unlimited Earnings Potential"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-rupivo-green shrink-0" />
                                <span className="text-gray-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl text-gray-800">
                    <h4 className="font-bold text-xl mb-6">Partner Registration</h4>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rupivo-blue outline-none" placeholder="Rahul" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rupivo-blue outline-none" placeholder="Verma" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">Mobile Number</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rupivo-blue outline-none" placeholder="+91 98765 43210" />
                        </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">City</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rupivo-blue outline-none" placeholder="Mumbai" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">Profession</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-rupivo-blue outline-none">
                                <option>Financial Advisor</option>
                                <option>DSA / Loan Agent</option>
                                <option>Insurance Agent</option>
                                <option>Chartered Accountant</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <Button fullWidth className="mt-2">Register Now</Button>
                        <p className="text-xs text-center text-gray-400 mt-4">By registering, you agree to our Partner Terms.</p>
                    </form>
                </div>
            </div>
        </section>

      </div>
    </PageLayout>
  );
};