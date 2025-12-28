import React from 'react';
import { ShieldCheck, Building2, FileText, IndianRupee } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { 
      icon: <ShieldCheck className="w-6 h-6 text-rupivo-green" />, 
      title: "Secure & Encrypted",
      sub: "256-bit SSL Protection"
    },
    { 
      icon: <Building2 className="w-6 h-6 text-rupivo-blue" />, 
      title: "RBI-Registered",
      sub: "Regulated Partners"
    },
    { 
      icon: <FileText className="w-6 h-6 text-purple-600" />, 
      title: "Transparent Terms",
      sub: "No Hidden Fees"
    },
    { 
      icon: <IndianRupee className="w-6 h-6 text-orange-600" />, 
      title: "For India",
      sub: "100% Homegrown"
    },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 relative z-20 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-3 py-6 px-2 hover:bg-gray-50/50 transition-colors cursor-default group">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-rupivo-dark text-sm md:text-base leading-tight">{item.title}</p>
                <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};