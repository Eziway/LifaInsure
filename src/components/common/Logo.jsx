import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ variant = 'default', size = 'md' }) {
  const isLight = variant === 'light';

  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-lifa-gold/50 rounded-lg p-1 transition-all">
      {/* Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-lifa-navy to-lifa-darkNavy border border-lifa-gold/40 shadow-md group-hover:scale-105 transition-transform duration-300">
        <span className="font-serif text-2xl font-bold italic text-lifa-gold tracking-tighter drop-shadow-sm">
          L
        </span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-lifa-gold rounded-full border-2 border-white animate-pulse" />
      </div>

      {/* Text Brand */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-serif text-2xl font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-lifa-navy'}`}>
            Lifa
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-lifa-gold bg-lifa-navy/10 px-1.5 py-0.5 rounded border border-lifa-gold/30">
            FSP 43132
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-widest uppercase ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>
          Insurance Brokers <span className="text-lifa-gold">cc</span>
        </span>
      </div>
    </Link>
  );
}
export default Logo;
