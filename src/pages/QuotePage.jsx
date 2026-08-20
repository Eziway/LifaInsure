import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePageTitle } from '../utils/seo';
import QuoteForm from '../components/forms/QuoteForm';
import FSPBadge from '../components/common/FSPBadge';
import { ShieldCheck, Phone, MessageSquare, Mail, Clock } from 'lucide-react';

export function QuotePage() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('type') || 'Public Transport Insurance';

  usePageTitle(
    'Request a Quote | Lifa Insurance Brokers',
    'Request a short-term insurance quotation from Lifa Insurance Brokers (FSP 43132) for taxi, ride-hailing, motor vehicle, property, or commercial insurance.'
  );

  return (
    <div className="py-12 space-y-12">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Request an Insurance Quotation
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your insurance needs. Our experienced FAIS-accredited brokers will help you compare options and structure suitable cover.
          </p>
        </div>
      </section>

      {/* Main Quote Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Quote Form (Col 8) */}
          <div className="lg:col-span-8">
            <QuoteForm defaultInsuranceType={requestedType} />
          </div>

          {/* Right: Contact & Intermediary Info (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Contact Quick Assistance Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900">
                Prefer Speaking Directly?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you have an urgent insurance query or prefer discussing your requirements over the phone, contact our office directly:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:0117868855"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-lifa-navy text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Landline Office</div>
                    <div className="text-sm font-bold text-slate-900">011 786 8855</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/27815695790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-600 text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-800 uppercase">WhatsApp Line</div>
                    <div className="text-sm font-bold text-emerald-900">081 569 5790</div>
                  </div>
                </a>

                <a
                  href="mailto:admin@lifabrokers.co.za"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-lifa-navy text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Email Enquiries</div>
                    <div className="text-xs font-bold text-slate-900">admin@lifabrokers.co.za</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-lifa-gold font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Brokerage Operating Hours</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Monday – Friday:</span>
                  <span className="font-bold text-white">08:00 – 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday – Sunday:</span>
                  <span className="font-bold text-slate-400">Closed</span>
                </li>
              </ul>
            </div>

            {/* FSP Accreditation Seal Card */}
            <FSPBadge />

          </div>

        </div>
      </section>

    </div>
  );
}
export default QuotePage;
