import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

export function QuoteForm({ defaultInsuranceType = 'Public Transport Insurance' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    insuranceType: defaultInsuranceType,
    vehicleType: '',
    numberOfVehicles: '1',
    businessType: '',
    preferredContact: 'Phone',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMsg('Please complete all required contact fields (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean client submission logic (API backend integration ready)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      insuranceType: defaultInsuranceType,
      vehicleType: '',
      numberOfVehicles: '1',
      businessType: '',
      preferredContact: 'Phone',
      message: ''
    });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-xl text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Quote Request Received!
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your request for <strong className="text-lifa-navy">{formData.insuranceType}</strong> has been logged.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-lg mx-auto">
          <div className="font-bold text-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-lifa-gold" />
            <span>Next Intermediary Steps:</span>
          </div>
          <p className="text-slate-600">
            Our FSP No. 43132 accredited intermediary team will review your submitted details and contact you via <strong>{formData.preferredContact}</strong> ({formData.phone || formData.email}).
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Submit Another Quote Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-6">
      
      <div className="border-b border-slate-100 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lifa-navy/5 text-lifa-navy text-xs font-bold mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-lifa-gold" />
          <span>No Obligation &bull; FSP 43132 Advice</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">
          Request an Insurance Quote
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Fill out the details below and an accredited Lifa insurance broker will assist you.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-lifa-red">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Sipho Ndlovu"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-medium text-slate-900 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Company / Trading Name <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Ndlovu Transport cc"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-medium text-slate-900 outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-lifa-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. sipho@example.co.za"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-medium text-slate-900 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone / WhatsApp Number <span className="text-lifa-red">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 082 123 4567"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-medium text-slate-900 outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 3: Insurance Category & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Insurance Category <span className="text-lifa-red">*</span>
          </label>
          <select
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-semibold text-slate-900 bg-white outline-none transition-all"
          >
            <option value="Public Transport Insurance">Public Transport Insurance (Taxi/Ride-hailing)</option>
            <option value="Motor Insurance">Motor Insurance (Private Vehicle)</option>
            <option value="Commercial Insurance">Commercial & Fleet Insurance</option>
            <option value="Property Insurance">Property & Buildings Insurance</option>
            <option value="Household Insurance">Household Contents Insurance</option>
            <option value="Equipment / Asset Insurance">Equipment & Asset Insurance</option>
            <option value="Other">Other Insurance Query</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Contact Method
          </label>
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-semibold text-slate-900 bg-white outline-none transition-all"
          >
            <option value="Phone Call">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      {/* Conditional Fields for Public Transport / Fleet */}
      {(formData.insuranceType.includes('Transport') || formData.insuranceType.includes('Motor') || formData.insuranceType.includes('Commercial')) && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Vehicle Type / Operating Model
            </label>
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              placeholder="e.g. Minibus Taxi, Uber Sedan, School Bus, Fleet Truck"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white outline-none focus:ring-2 focus:ring-lifa-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Number of Vehicles
            </label>
            <input
              type="number"
              name="numberOfVehicles"
              min="1"
              value={formData.numberOfVehicles}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white outline-none focus:ring-2 focus:ring-lifa-navy"
            />
          </div>
        </div>
      )}

      {/* Message / Additional Information */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Additional Details / Requirements
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Specify any additional requirements, current insurer details, or vehicle year/models..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-lifa-navy focus:border-lifa-navy text-sm font-medium text-slate-900 outline-none transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-lifa-red hover:bg-lifa-redDark text-white font-extrabold text-base shadow-xl shadow-lifa-red/30 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Processing Request...</span>
          </>
        ) : (
          <>
            <span>SUBMIT QUOTE REQUEST</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400">
        By submitting this form, you consent to Lifa Insurance Brokers contacting you to assist with your insurance enquiry. Your personal information is protected under POPIA.
      </p>

    </form>
  );
}
export default QuoteForm;
