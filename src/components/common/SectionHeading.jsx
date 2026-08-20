import React from 'react';

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
  light = false
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
          light 
            ? 'bg-lifa-gold/20 text-lifa-gold border-lifa-gold/30' 
            : 'bg-lifa-navy/10 text-lifa-navy border-lifa-navy/20'
        }`}>
          <span className="w-2 h-2 rounded-full bg-lifa-gold animate-ping" />
          {badge}
        </div>
      )}
      
      <h2 className={`text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default SectionHeading;
