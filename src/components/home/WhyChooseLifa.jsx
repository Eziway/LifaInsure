import React from 'react';
import { UserCheck, ShieldCheck, DollarSign, Layers, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export function WhyChooseLifa() {
  const reasons = [
    {
      icon: UserCheck,
      title: 'Professional Advice',
      desc: 'Get clear, experienced guidance from licensed financial services professionals who understand short-term insurance.'
    },
    {
      icon: ShieldCheck,
      title: 'Suitable Cover',
      desc: 'We assist you in structuring insurance cover selected around your specific personal or commercial needs.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Solutions',
      desc: 'Helping clients evaluate options to find suitable and affordable short-term insurance protection.'
    },
    {
      icon: Layers,
      title: 'Industry Experience',
      desc: 'Broad intermediary experience across domestic lines, commercial businesses, and specialized public transport.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalised Service',
      desc: 'Enjoy a direct, client-focused relationship with accessible brokers who assist you every step of the way.'
    },
    {
      icon: Sparkles,
      title: 'Wide Range of Solutions',
      desc: 'Comprehensive protection options for vehicles, buildings, business assets, office equipment, and valuables.'
    }
  ];

  return (
    <section className="py-20 bg-lifa-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Lifa Advantage"
          title="Why Choose Lifa Insurance Brokers?"
          subtitle="As an independent financial intermediary, our focus is assisting you to find suitable, affordable cover with dedicated personal service."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-lifa-navy/10 text-lifa-navy group-hover:bg-lifa-navy group-hover:text-lifa-gold transition-colors duration-300 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-lifa-navy transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-lifa-gold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-lifa-gold" />
                  <span>Licensed Intermediary</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default WhyChooseLifa;
