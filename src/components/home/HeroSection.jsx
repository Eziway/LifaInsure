import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export function HeroSection() {
  const imageBase = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Hero Photography Asset Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${imageBase}images/hero_public_transport.png`}
          alt="Lifa Insurance Brokers South African Transport & Financial Insurance"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
        />
        {/* Multi-stage dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          
          {/* FSP Accreditation Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-lifa-gold/20 text-lifa-gold border border-lifa-gold/40 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-lifa-gold" />
            <span>Authorised Financial Services Provider &bull; <strong>FSP 43132</strong></span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            LET THE RIGHT PEOPLE HELP YOU CHOOSE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-lifa-goldLight via-lifa-gold to-amber-200">RIGHT COVER</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
            Lifa Insurance Brokers provides professional insurance advice and intermediary services to help individuals and businesses find suitable and affordable insurance cover across domestic, commercial, and public transport sectors.
          </p>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-lifa-gold shrink-0" />
              <span>Public Transport & Taxi Intermediary Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-lifa-gold shrink-0" />
              <span>Ride-Hailing (Uber/Bolt) & Shuttle Cover</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-lifa-gold shrink-0" />
              <span>Commercial Fleet & Business Asset Cover</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-lifa-gold shrink-0" />
              <span>Domestic Motor, Property & Contents Insurance</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-lifa-red to-lifa-redDark text-white font-extrabold text-base tracking-wide shadow-xl shadow-lifa-red/40 hover:shadow-2xl hover:shadow-lifa-red/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-200"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ChevronRight className="w-5 h-5 text-lifa-gold" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
export default HeroSection;
