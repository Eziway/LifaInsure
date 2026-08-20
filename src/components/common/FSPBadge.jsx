import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function FSPBadge({ className = '', variant = 'badge' }) {
  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lifa-navy/5 border border-lifa-navy/20 text-lifa-navy font-medium text-xs ${className}`}>
        <ShieldCheck className="w-4 h-4 text-lifa-gold shrink-0" />
        <span>Authorised Financial Services Provider &bull; <strong>FSP 43132</strong></span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-lifa-darkNavy to-lifa-navy text-white border border-lifa-gold/30 shadow-md ${className}`}>
      <div className="p-2.5 rounded-lg bg-lifa-gold/20 text-lifa-gold border border-lifa-gold/40 shrink-0">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-lifa-gold">
          Licensed Intermediary & Advisory
        </div>
        <div className="text-sm font-bold tracking-tight">
          Authorised Financial Services Provider — <span className="text-lifa-gold">FSP No. 43132</span>
        </div>
      </div>
    </div>
  );
}
export default FSPBadge;
