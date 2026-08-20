import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/seo';
import ContactForm from '../components/forms/ContactForm';
import FSPBadge from '../components/common/FSPBadge';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, Navigation } from 'lucide-react';

export function ContactPage() {
  usePageTitle(
    'Contact Us | Lifa Insurance Brokers cc',
    'Get in touch with Lifa Insurance Brokers cc (FSP 43132) in Highlands North, Johannesburg. Call 011 786 8855 or WhatsApp 081 569 5790.'
  );

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact Lifa Insurance Brokers
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Our experienced team is ready to assist you with quotes, advisory services, and policy queries.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Office Location (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Get In Touch
              </h2>

              <ul className="space-y-5">
                {/* Physical Address */}
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-lifa-navy/10 text-lifa-navy shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Physical Office</div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      162 8th Avenue, Highlands North, 2192, Johannesburg, South Africa
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Postal: P O Box 10530, Fourways East, 2055
                    </div>
                  </div>
                </li>

                {/* Telephone */}
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-lifa-navy/10 text-lifa-navy shrink-0">
                    <Phone className="w-5 h-5 text-lifa-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Telephone Line</div>
                    <a href="tel:0117868855" className="text-base font-extrabold text-slate-900 hover:text-lifa-navy transition-colors">
                      011 786 8855
                    </a>
                  </div>
                </li>

                {/* Mobile & WhatsApp Numbers */}
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">WhatsApp & Mobile Lines</div>
                    <div className="space-y-1 mt-1 text-xs font-bold text-slate-800">
                      <div>
                        <a href="https://wa.me/27815695790" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                          081 569 5790 (SMS / WhatsApp)
                        </a>
                      </div>
                      <div className="text-slate-600 font-normal">
                        Additional Lines: 082 640 7493 | 072 322 1629 | 081 531 4946
                      </div>
                    </div>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-lifa-navy/10 text-lifa-navy shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</div>
                    <a href="mailto:admin@lifabrokers.co.za" className="text-sm font-extrabold text-slate-900 hover:text-lifa-navy transition-colors">
                      admin@lifabrokers.co.za
                    </a>
                  </div>
                </li>
              </ul>

              {/* Direct Quick CTA Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href="tel:0117868855"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-lifa-navy text-white text-center font-bold text-xs shadow hover:bg-lifa-darkNavy transition-colors"
                >
                  CALL US NOW
                </a>
                <a
                  href="mailto:admin@lifabrokers.co.za"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-center font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  EMAIL US
                </a>
                <Link
                  to="/quote"
                  className="w-full py-2.5 px-4 rounded-xl bg-lifa-red text-white text-center font-bold text-xs shadow hover:bg-lifa-redDark transition-colors"
                >
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>

            {/* Regulatory Seal */}
            <FSPBadge />

          </div>

          {/* Right: Direct Contact Form & Map (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <ContactForm />

            {/* Location Map View Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-extrabold text-slate-900 text-base">
                  <Navigation className="w-5 h-5 text-lifa-navy" />
                  <span>Office Location — Highlands North</span>
                </div>
                <span className="text-xs font-bold text-lifa-gold">FSP 43132</span>
              </div>

              {/* Responsive Google Maps Embed Placeholder Container */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center text-center p-4">
                <iframe
                  title="Lifa Insurance Brokers Location Map"
                  src="https://maps.google.com/maps?q=162+8th+Avenue,+Highlands+North,+2192,+Johannesburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-slate-500 text-center">
                162 8th Avenue, Highlands North, 2192, Johannesburg, South Africa
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
export default ContactPage;
