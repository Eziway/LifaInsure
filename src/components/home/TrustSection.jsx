import React from 'react';
import { ShieldCheck, Award, Briefcase, Users, FileCheck } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
        
        {/* Main Trust Banner Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* FSP Seal Badge */}
          <div className="md:col-span-1 flex items-center gap-4 p-4 rounded-xl bg-slate-900 text-white border border-lifa-gold/30">
            <div className="p-3 rounded-lg bg-lifa-gold/20 text-lifa-gold shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-lifa-gold">
                REGULATORY STATUS
              </div>
              <div className="text-base font-extrabold text-white">
                Authorised FSP No. 43132
              </div>
              <div className="text-xs text-slate-300">
                Licensed Intermediary & Advisor
              </div>
            </div>
          </div>

          {/* Intermediary Description */}
          <div className="md:col-span-2 space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-lifa-navy" />
              <span>Independent Advisory & Intermediary Services</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lifa Insurance Brokers cc is a unique intermediary financial services provider offering advisory and intermediary services for a wide range of asset classes and markets, while specialising in the public transport sector, commercial fleet, property, and domestic insurance.
            </p>
          </div>

        </div>

        {/* 3 Core Trust Pillars */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-lifa-navy/10 text-lifa-navy shrink-0 mt-0.5">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Niche Industry Expertise</h4>
              <p className="text-xs text-slate-500 mt-1">Specialised understanding of taxis, ride-hailing, shuttles & school buses.</p>
            </div>
          </div>

          <div className="flex items-start gap-[12px]">
            <div className="p-2 rounded-lg bg-lifa-navy/10 text-lifa-navy shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-lifa-gold" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">FAIS Compliant Advice</h4>
              <p className="text-xs text-slate-500 mt-1">Professional advice ensuring you choose suitable and affordable cover.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-lifa-navy/10 text-lifa-navy shrink-0 mt-0.5">
              <Users className="w-5 h-5 text-lifa-red" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Client-Centred Support</h4>
              <p className="text-xs text-slate-500 mt-1">Direct intermediary assistance from policy selection through claim processes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export default TrustSection;
