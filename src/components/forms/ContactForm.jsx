import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-lg text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
        <p className="text-xs text-slate-600">
          Thank you for reaching out to Lifa Insurance Brokers. Our team will contact you shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
          className="text-xs font-bold text-lifa-navy hover:underline pt-2 inline-block"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-4">
      <h3 className="text-xl font-extrabold text-slate-900">Send Us a Direct Message</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-lifa-navy"
            placeholder="Sipho Ndlovu"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-lifa-navy"
            placeholder="082 123 4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-lifa-navy"
          placeholder="admin@example.co.za"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-lifa-navy"
          placeholder="Enquiry regarding public transport insurance..."
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Message *</label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-lifa-navy"
          placeholder="How can our brokers assist you today?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-lifa-navy hover:bg-lifa-darkNavy text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
      >
        {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        <span>SEND MESSAGE</span>
      </button>
    </form>
  );
}
export default ContactForm;
