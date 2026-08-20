import React from 'react';
import { usePageTitle } from '../utils/seo';
import FSPBadge from '../components/common/FSPBadge';

export function EmailDisclaimerPage() {
  usePageTitle(
    'Email Disclaimer | Lifa Insurance Brokers',
    'Official email legal disclaimer for Lifa Insurance Brokers cc.'
  );

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
        <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
        <h1 className="text-3xl font-extrabold">Email Legal Disclaimer</h1>
        <p className="text-xs text-slate-300">Lifa Insurance Brokers cc &bull; Authorised FSP 43132</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">Confidentiality & Legal Notice</h2>
        <p>
          Emails and any files transmitted with them by Lifa Insurance Brokers cc are confidential and intended solely for the use of the individual or entity to whom they are addressed.
        </p>
        <p>
          If you have received an email in error, please notify the sender immediately and delete it from your system. Unauthorised disclosure, copying, or distribution of the contents is prohibited.
        </p>
        <p>
          Lifa Insurance Brokers cc (FSP No. 43132) is an authorised financial services provider.
        </p>
      </div>
    </div>
  );
}
export default EmailDisclaimerPage;
