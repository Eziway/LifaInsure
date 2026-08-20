import React from 'react';
import { ClipboardList, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Submit your details online or call us directly. Specify whether you need vehicle, taxi, property, or business insurance.',
      icon: ClipboardList
    },
    {
      num: '02',
      title: 'Get Professional Advice',
      desc: 'Our experienced intermediary team reviews your requirements and presents available short-term insurance options.',
      icon: UserCheck
    },
    {
      num: '03',
      title: 'Find Suitable Cover',
      desc: 'We assist you in evaluating policies to select suitable cover terms and affordable premiums designed around your needs.',
      icon: ShieldCheck
    },
    {
      num: '04',
      title: 'Get Covered',
      desc: 'Finalize your policy documentation with confidence, backed by ongoing intermediary support and claims assistance.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple Intermediary Process"
          title="How It Works"
          subtitle="Getting short-term insurance cover through Lifa Insurance Brokers is straightforward, professional, and transparent."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-lifa-navy hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-extrabold text-lifa-gold">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-lifa-navy/10 text-lifa-navy group-hover:bg-lifa-navy group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-lifa-navy transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-lifa-gold transition-colors">
                  Step {step.num} of 04
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
