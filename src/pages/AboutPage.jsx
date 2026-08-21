import React from 'react';
import { usePageTitle } from '../utils/seo';
import SectionHeading from '../components/common/SectionHeading';
import FSPBadge from '../components/common/FSPBadge';
import CTASection from '../components/common/CTASection';
import { ShieldCheck, Target, Award, CheckCircle2, Bus, Car, Building, Users } from 'lucide-react';

export function AboutPage() {
  const imageBase = import.meta.env.BASE_URL;

  usePageTitle(
    'About Us | Lifa Insurance Brokers cc',
    'Learn about Lifa Insurance Brokers cc, an authorised financial services provider (FSP 43132) specialising in public transport, domestic, and commercial insurance in South Africa.'
  );

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${imageBase}images/commercial_business.png`}
            alt="Lifa Insurance Brokers Corporate Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About Lifa Insurance Brokers cc
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A unique intermediary financial services provider dedicated to offering professional advisory and intermediary services across specialized asset classes in South Africa.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lifa-navy/10 text-lifa-navy font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-lifa-gold" />
              <span>Independent Financial Intermediary</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Professional Advisory & Intermediary Services
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong>Lifa Insurance Brokers cc</strong> is a unique intermediary financial services provider offering advisory and intermediary services for a wide range of asset classes and markets.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              While catering to general domestic and commercial insurance needs, Lifa has developed strong niche intermediary expertise in the public transport sector — specifically serving ride-hailing taxis, metered taxis, non-metered taxis, shuttle operators, and school transport providers.
            </p>

            <FSPBadge />
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
              <img
                src={`${imageBase}images/hero_public_transport.png`}
                alt="Lifa Insurance Brokers Public Transport Intermediary Services"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-bold text-lifa-gold uppercase tracking-wider">
                  FAIS Accredited Expertise
                </span>
                <h3 className="text-xl font-extrabold">
                  Client-Centred Short-Term Insurance Solutions
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission Banner */}
      <section className="bg-gradient-to-r from-lifa-navy via-lifa-darkNavy to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-lifa-gold/20 text-lifa-gold flex items-center justify-center mx-auto border border-lifa-gold/30">
            <Target className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-lifa-gold">
            OUR MISSION
          </span>

          <blockquote className="text-2xl sm:text-3xl font-serif italic text-white leading-relaxed">
            "To assist our clients in finding suitable and affordable insurance cover while providing professional insurance advice."
          </blockquote>
        </div>
      </section>

      {/* Specialisation Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Market Focus"
          title="Our Key Intermediary Specialisations"
          subtitle="We focus on sectors where specialized advice ensures business owners and individuals receive appropriate policy terms."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lifa-navy/10 text-lifa-navy flex items-center justify-center font-bold">
              <Bus className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Public Transport</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ride-hailing (Uber/Bolt), metered taxis, minibus taxis, shuttles, school buses and commercial transport.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lifa-navy/10 text-lifa-navy flex items-center justify-center font-bold">
              <Car className="w-5 h-5 text-lifa-gold" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Motor & Fleet</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Private passenger cars, business-use vehicles, and commercial transport fleets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lifa-navy/10 text-lifa-navy flex items-center justify-center font-bold">
              <Building className="w-5 h-5 text-lifa-red" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Property & Buildings</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Private suburban residences, household contents, commercial offices, and real estate properties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lifa-navy/10 text-lifa-navy flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Commercial Assets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Office furniture, computer equipment, tools, and operational business property.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
}
export default AboutPage;
