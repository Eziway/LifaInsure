import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ServiceCard({
  title,
  description,
  image,
  icon: Icon,
  items = [],
  link = '/services',
  badge,
  featured = false
}) {
  return (
    <div className={`group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
      featured 
        ? 'bg-white border-2 border-lifa-gold/60 shadow-xl scale-[1.02]' 
        : 'bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1'
    }`}>
      {/* Image Banner */}
      {image && (
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          {badge && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-lifa-gold text-slate-950 font-bold text-xs shadow-md">
              {badge}
            </div>
          )}

          {Icon && (
            <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-lifa-navy text-lifa-gold border border-lifa-gold/40 shadow-md">
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {!image && Icon && (
            <div className="w-12 h-12 rounded-xl bg-lifa-navy/10 text-lifa-navy flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" />
            </div>
          )}

          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-lifa-navy transition-colors">
            {title}
          </h3>

          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            {description}
          </p>

          {items.length > 0 && (
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-2">
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-lifa-navy hover:text-lifa-red transition-colors group/link"
          >
            <span>LEARN MORE & COVERAGE</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
