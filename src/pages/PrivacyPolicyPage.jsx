import React from 'react';
import { usePageTitle } from '../utils/seo';
import FSPBadge from '../components/common/FSPBadge';
import { ShieldCheck } from 'lucide-react';

export function PrivacyPolicyPage() {
  usePageTitle(
    'Privacy Policy | Lifa Insurance Brokers',
    'Lifa Insurance Brokers Privacy Policy detailing data protection and POPIA compliance.'
  );

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
        <FSPBadge variant="pill" className="bg-white/10 text-white border-white/20" />
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p className="text-xs text-slate-300">Lifa Insurance Brokers cc &bull; Authorised FSP 43132</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">1. Commitment to Privacy</h2>
        <p>
          Lifa Insurance Brokers cc (FSP 43132) respects your privacy and is committed to protecting your personal information in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
        </p>

        <h2 className="text-xl font-bold text-slate-900">2. Collection of Information</h2>
        <p>
          We collect personal information required to evaluate, structure, and administer short-term insurance advisory and intermediary services. Information collected includes your name, contact details, vehicle information, property details, and business operational details.
        </p>

        <h2 className="text-xl font-bold text-slate-900">3. Purpose of Processing</h2>
        <p>
          Your personal information is processed solely to provide insurance quotes, manage policies, facilitate claims with registered underwriters, and satisfy regulatory requirements under the FAIS Act.
        </p>

        <h2 className="text-xl font-bold text-slate-900">4. Safeguarding Data</h2>
        <p>
          We maintain physical, technical, and organizational security measures to protect personal data against unauthorized access, loss, or disclosure.
        </p>

        <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
        <p>
          For enquiries regarding your personal information, contact our Information Officer at <strong>admin@lifabrokers.co.za</strong> or <strong>011 786 8855</strong>.
        </p>
      </div>
    </div>
  );
}
export default PrivacyPolicyPage;
