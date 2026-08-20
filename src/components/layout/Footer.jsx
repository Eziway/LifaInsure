import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import Logo from '../common/Logo';

export function Footer() {
  return (
    <footer className="bg-lifa-darkNavy text-slate-300 border-t border-slate-800">
      {/* Upper Footer CTA Banner */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lifa-navy to-lifa-darkNavy">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lifa-gold/20 text-lifa-gold text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Licensed Intermediary</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to find the right cover for your assets?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Get in touch with our team today for professional insurance advice tailored to your needs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-xl bg-lifa-red hover:bg-lifa-redDark text-white font-bold text-sm shadow-lg shadow-lifa-red/30 transition-all"
            >
              REQUEST A QUOTE
            </Link>
            <a
              href="tel:0117868855"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-lifa-gold" />
              <span>011 786 8855</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info & FSP */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" />
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Lifa Insurance Brokers cc is a unique intermediary financial services provider offering advisory and intermediary services for domestic, commercial, and specialized public transport insurance.
            </p>

            {/* FSP Seal Card */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-lifa-gold font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>REGULATORY COMPLIANCE</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Authorised Financial Services Provider &bull; <strong>FSP No. 43132</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                Licensed to provide short-term insurance advisory and intermediary services in South Africa.
              </p>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-lifa-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lifa-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-lifa-gold transition-colors">Insurance Solutions</Link>
              </li>
              <li>
                <Link to="/why-insure" className="hover:text-lifa-gold transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-lifa-gold transition-colors">Resources & Blog</Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-lifa-gold transition-colors font-semibold text-lifa-gold">Request a Quote</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lifa-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Insurance Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Insurance Cover
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#public-transport" className="hover:text-lifa-gold transition-colors">Public Transport Insurance</Link>
              </li>
              <li>
                <Link to="/services#ride-hailing" className="hover:text-lifa-gold transition-colors">Ride-Hailing (Uber/Bolt)</Link>
              </li>
              <li>
                <Link to="/services#motor" className="hover:text-lifa-gold transition-colors">Motor Vehicle Insurance</Link>
              </li>
              <li>
                <Link to="/services#commercial" className="hover:text-lifa-gold transition-colors">Commercial & Fleet Cover</Link>
              </li>
              <li>
                <Link to="/services#property" className="hover:text-lifa-gold transition-colors">Property & Buildings</Link>
              </li>
              <li>
                <Link to="/services#assets" className="hover:text-lifa-gold transition-colors">Equipment & Asset Cover</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lifa-gold shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  162 8th Avenue, Highlands North, 2192, Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lifa-gold shrink-0" />
                <a href="tel:0117868855" className="hover:text-white transition-colors text-xs font-semibold">
                  011 786 8855
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/27815695790" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors text-xs">
                  081 569 5790 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lifa-gold shrink-0" />
                <a href="mailto:admin@lifabrokers.co.za" className="hover:text-white transition-colors text-xs">
                  admin@lifabrokers.co.za
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Policies & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>&copy; {new Date().getFullYear()} Lifa Insurance Brokers cc. All rights reserved. Authorised FSP 43132.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>&bull;</span>
            <Link to="/popia" className="hover:text-white transition-colors">POPIA Compliance</Link>
            <span>&bull;</span>
            <Link to="/email-disclaimer" className="hover:text-white transition-colors">Email Disclaimer</Link>
          </div>
        </div>

        {/* Regulatory Disclaimer Note */}
        <div className="mt-6 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Regulatory Notice:</strong> Lifa Insurance Brokers cc is an authorised financial services provider (FSP No. 43132) licensed in terms of the Financial Advisory and Intermediary Services (FAIS) Act 37 of 2002. Short-term insurance products and cover options are subject to individual insurer underwriting terms, conditions, and policy exclusions.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
