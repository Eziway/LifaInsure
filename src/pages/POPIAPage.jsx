import React from 'react';
import { usePageTitle } from '../utils/seo';
import FSPBadge from '../components/common/FSPBadge';

export function POPIAPage() {
  usePageTitle(
    'POPIA Notice | Lifa Insurance Brokers',
    'POPIA compliance notice for Lifa Insurance Brokers cc.'
  );

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
        <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
        <h1 className="text-3xl font-extrabold">POPIA Compliance Policy</h1>
        <p className="text-xs text-slate-300">Protection of Personal Information Act &bull; FSP 43132</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">POPIA Compliance Statement</h2>
        <p>
          Lifa Insurance Brokers cc complies strictly with the Protection of Personal Information Act (POPIA). Personal data submitted via quote request forms or direct communication is used exclusively for intermediary insurance advisory purposes.
        </p>
        <p>
          You have the right to request access to, correction of, or deletion of your personal information held by Lifa Insurance Brokers cc by emailing <strong>admin@lifabrokers.co.za</strong>.
        </p>
      </div>
    </div>
  );
}
export default POPIAPage;
