import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const PartnerLogo: React.FC<{ name: string; domain: string }> = ({ name, domain }) => {
  const [imgError, setImgError] = useState(false);

  // Professional fallback if logo fails
  if (imgError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full gap-2 p-2 group-hover:scale-105 transition-transform">
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-gray-400 group-hover:text-rupivo-blue transition-colors" />
        </div>
        <span className="text-[10px] font-bold text-center leading-tight uppercase tracking-wide text-gray-500 group-hover:text-rupivo-dark transition-colors">{name}</span>
      </div>
    );
  }

  return (
    <img 
      src={`https://logo.clearbit.com/${domain}?size=160&greyscale=true`}
      onMouseOver={(e) => (e.currentTarget.src = `https://logo.clearbit.com/${domain}?size=160`)}
      onMouseOut={(e) => (e.currentTarget.src = `https://logo.clearbit.com/${domain}?size=160&greyscale=true`)}
      onError={() => setImgError(true)}
      alt={`${name} Logo`}
      className="max-w-[80%] max-h-[60%] object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
    />
  );
};

export const Partners: React.FC = () => {
  const partners = [
    { name: "HDFC Bank", domain: "hdfcbank.com" },
    { name: "Axis Bank", domain: "axisbank.com" },
    { name: "IDFC FIRST", domain: "idfcfirstbank.com" },
    { name: "Kotak", domain: "kotak.com" },
    { name: "Aditya Birla", domain: "adityabirlacapital.com" },
    { name: "Piramal", domain: "piramalfinance.com" },
    { name: "KreditBee", domain: "kreditbee.in" },
    { name: "MoneyView", domain: "moneyview.in" },
    { name: "Fibe", domain: "fibe.in" },
    { name: "Tata Capital", domain: "tatacapital.com" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-4">
             <p className="text-xs font-bold text-rupivo-blue tracking-widest uppercase">Lending Partners</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark">Trusted by India's Top Banks</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We work with RBI-registered NBFCs and Banks to bring you the best loan offers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group h-28 cursor-default"
            >
              <PartnerLogo name={partner.name} domain={partner.domain} />
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-12 max-w-3xl mx-auto border-t border-gray-100 pt-6">
          *Rupivo is a technology platform acting as a Loan Service Provider (LSP). We do not provide loans directly. All loans are disbursed by our regulated lending partners.
        </p>
      </div>
    </section>
  );
};