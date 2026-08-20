import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export function CTASection({
  title = "Need Insurance Cover? Let's Talk.",
  subtitle = "Whether you need cover for a vehicle, property, business, public transport operation or valuable equipment, our team is here to help.",
  primaryBtnText = "REQUEST A QUOTE",
  primaryBtnLink = "/quote",
  secondaryBtnText = "CONTACT US",
  secondaryBtnLink = "/contact"
}) {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lifa-darkNavy via-lifa-navy to-slate-900 text-white rounded-3xl my-12 border border-lifa-gold/30 shadow-2xl">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-lifa-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-lifa-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lifa-gold/20 text-lifa-gold border border-lifa-gold/30 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Authorised FSP No. 43132</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryBtnLink}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-lifa-red hover:bg-lifa-redDark text-white font-extrabold text-base shadow-xl shadow-lifa-red/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to={secondaryBtnLink}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 hover:border-white/40 transition-all duration-200"
          >
            <span>{secondaryBtnText}</span>
            <Phone className="w-4 h-4 text-lifa-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default CTASection;
