import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/layout/TopHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyInsurePage from './pages/WhyInsurePage';
import QuotePage from './pages/QuotePage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import POPIAPage from './pages/POPIAPage';
import EmailDisclaimerPage from './pages/EmailDisclaimerPage';

const getRouterBasename = () => {
  const pathname = window.location.pathname;
  return pathname.startsWith('/LifaInsure') ? '/LifaInsure' : '/';
};

export function App() {
  return (
    <Router basename={getRouterBasename()}>
      <div className="min-h-screen flex flex-col bg-lifa-bgLight text-slate-900 selection:bg-lifa-navy selection:text-white">
        {/* Top Contact Utility Header */}
        <TopHeader />

        {/* Main Sticky Navbar */}
        <Navbar />

        {/* Main Route View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-insure" element={<WhyInsurePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/popia" element={<POPIAPage />} />
            <Route path="/email-disclaimer" element={<EmailDisclaimerPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
