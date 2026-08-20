import React from 'react';
import { usePageTitle } from '../utils/seo';
import FSPBadge from '../components/common/FSPBadge';

export function TermsPage() {
  usePageTitle(
    'Terms & Conditions | Lifa Insurance Brokers',
    'Terms and conditions governing the use of Lifa Insurance Brokers website and intermediary services.'
  );

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
        <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
        <h1 className="text-3xl font-extrabold">Terms & Conditions</h1>
        <p className="text-xs text-slate-300">Lifa Insurance Brokers cc &bull; Authorised FSP 43132</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">1. Regulatory Status</h2>
        <p>
          Lifa Insurance Brokers cc is an authorised financial services provider (FSP No. 43132) licensed under the Financial Advisory and Intermediary Services (FAIS) Act 37 of 2002.
        </p>

        <h2 className="text-xl font-bold text-slate-900">2. Website Content & Advice Disclaimer</h2>
        <p>
          The information contained on this website is for general informational and quote request purposes. Formal financial advice and policy terms are provided upon direct engagement with our accredited brokers.
        </p>

        <h2 className="text-xl font-bold text-slate-900">3. Underwriting & Cover Limits</h2>
        <p>
          All insurance cover, policy benefits, and claims are subject to the underwriter’s specific policy schedule, endorsements, and exclusions.
        </p>
      </div>
    </div>
  );
}
export default TermsPage;
