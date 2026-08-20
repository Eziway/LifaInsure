import React from 'react';
import { usePageTitle } from '../utils/seo';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { ShieldCheck, AlertTriangle, TrendingUp, ShieldAlert, HeartHandshake, CheckCircle2, Lock } from 'lucide-react';

export function WhyInsurePage() {
  usePageTitle(
    'Why Insure | Understanding Insurance Protection',
    'Learn why short-term insurance protection is essential for your vehicle, property, business, and assets. Lifa Insurance Brokers provides clear, accessible advisory services.'
  );

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Protect What Matters Most',
      desc: 'Accidents, theft, severe weather events, or fires can happen unexpectedly. Short-term insurance provides financial safety so you do not have to absorb unexpected loss out of pocket.'
    },
    {
      icon: TrendingUp,
      title: 'Protect Your Business & Cash Flow',
      desc: 'For public transport operators and small businesses, a damaged vehicle or stolen tool means lost daily income. The right insurance helps repair or replace critical assets quickly.'
    },
    {
      icon: Lock,
      title: 'Protect Your Vehicles & Fleets',
      desc: 'Whether it is a private vehicle, a ride-hailing sedan, a minibus taxi, or a commercial bakkie, insurance protects against third-party liability and costly collision repairs.'
    },
    {
      icon: ShieldAlert,
      title: 'Reduce Unforeseen Financial Risk',
      desc: 'Without insurance, a single multi-vehicle accident or building fire could result in devastating debt or bankruptcy. Insurance transfers risk to established financial underwriters.'
    },
    {
      icon: HeartHandshake,
      title: 'Get Professional Intermediary Advice',
      desc: 'Understanding policy terms can be confusing. As an accredited intermediary (FSP 43132), Lifa helps you understand options so you choose suitable, affordable cover.'
    }
  ];

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lifa-gold/20 text-lifa-gold text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Financial Risk Education & Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Why Insurance Matters for You & Your Business
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Understanding how short-term insurance safeguards your hard-earned assets, vehicles, and livelihoods in South Africa.
          </p>
        </div>
      </section>

      {/* Main Educational Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Risk Mitigation"
          title="5 Essential Reasons to Secure Proper Cover"
          subtitle="Insurance is not just an expense — it is an essential foundation that protects your financial stability."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-xl transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-lifa-navy/10 text-lifa-navy flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Regulatory Disclaimer Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 text-slate-800 space-y-3">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Important Regulatory Policy Disclaimer</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-700">
            Please note that all short-term insurance products, policy benefits, limits, and cover options are subject to the specific terms, conditions, underwriting criteria, and exclusions set out in the relevant underwriter’s policy contract. Lifa Insurance Brokers cc (FSP 43132) provides intermediary financial advice to help you evaluate suitable options.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
}
export default WhyInsurePage;
