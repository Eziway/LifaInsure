import React from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck } from 'lucide-react';

export function TopHeader() {
  return (
    <div className="bg-lifa-darkNavy text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Accreditation */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-lifa-gold shrink-0" />
          <span className="font-medium text-slate-200">
            Authorised Financial Services Provider — <strong className="text-lifa-gold">FSP No. 43132</strong>
          </span>
        </div>

        {/* Right: Contact Links */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:0826407493" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-lifa-gold" />
            <span>082 640 7493</span>
          </a>

          <a 
            href="https://wa.me/27815695790" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp: 081 569 5790</span>
          </a>

          <a 
            href="mailto:admin@lifabrokers.co.za" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-lifa-gold" />
            <span>admin@lifabrokers.co.za</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default TopHeader;
