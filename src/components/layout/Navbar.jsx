import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import Logo from '../common/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Insurance Solutions', path: '/services' },
    { name: 'Why Choose Us', path: '/why-insure' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-lifa-navy bg-lifa-navy/5 font-bold'
                      : 'text-slate-700 hover:text-lifa-navy hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <NavLink
              to="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-lifa-red to-lifa-redDark text-white font-bold text-sm tracking-wide shadow-md shadow-lifa-red/30 hover:shadow-lg hover:shadow-lifa-red/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <NavLink
              to="/quote"
              className="px-3 py-1.5 rounded-lg bg-lifa-red text-white font-bold text-xs shadow"
            >
              QUOTE
            </NavLink>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-lifa-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-lifa-navy"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-40 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-white bg-lifa-navy font-bold'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Contact Quick Buttons */}
            <div className="space-y-3 pt-2">
              <NavLink
                to="/quote"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-lifa-red text-white font-bold text-base shadow-md"
              >
                <span>REQUEST A QUOTE NOW</span>
                <ArrowRight className="w-5 h-5" />
              </NavLink>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="tel:0826407493"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-lifa-navy" />
                  <span>082 640 7493</span>
                </a>

                <a
                  href="https://wa.me/27815695790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-lifa-navy/5 border border-lifa-navy/10 flex items-center gap-2 text-xs text-slate-700">
                <ShieldCheck className="w-4 h-4 text-lifa-gold shrink-0" />
                <span>Authorised FSP No. <strong>43132</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;
