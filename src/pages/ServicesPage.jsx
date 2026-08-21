import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/seo';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { Bus, Car, Building2, Briefcase, Laptop, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export function ServicesPage() {
  const imageBase = import.meta.env.BASE_URL;

  usePageTitle(
    'Insurance Solutions | Lifa Insurance Brokers',
    'Explore comprehensive insurance solutions by Lifa Insurance Brokers for public transport, ride-hailing, motor vehicles, property, commercial businesses, and work equipment.'
  );

  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'public-transport',
      category: 'public-transport',
      title: 'Public Transport & Taxi Insurance',
      subtitle: 'Ride-Hailing, Metered Taxis, Minibus Taxis, Shuttles & School Buses',
      description: 'Lifa Insurance Brokers specializes in assisting public transport operators find suitable and affordable short-term insurance cover for vehicles and passenger liabilities.',
      image: `${imageBase}images/hero_public_transport.png`,
      icon: Bus,
      badge: 'Niche Specialisation',
      subcategories: [
        'Ride-Hailing Vehicles (Uber, Bolt, InDrive)',
        'Metered & Non-Metered Taxis',
        'Shuttle & Airport Transfer Vehicles',
        'School Buses & Learner Transport',
        'Commercial & Intercity Buses'
      ],
      considerations: [
        'Third-Party & Passenger Liability options',
        'Coverage tailored for high-mileage commercial operation',
        'Fast claims assistance to reduce vehicle downtime'
      ]
    },
    {
      id: 'motor',
      category: 'motor',
      title: 'Motor Vehicle Insurance',
      subtitle: 'Private Motor Vehicles, Business Vehicles & Commercial Fleets',
      description: 'Protect your personal or business vehicles against accidental damage, third-party claims, theft, hijacking, and weather damage.',
      image: `${imageBase}images/motor_insurance.png`,
      icon: Car,
      subcategories: [
        'Private Motor Vehicles',
        'Business-Use Sedans & SUVs',
        'Light Commercial Bakkies & Vans',
        'Fleet Vehicle Risk Options'
      ],
      considerations: [
        'Comprehensive, Third Party Fire & Theft, or Third Party Only options',
        'Roadside assistance & towing cover options',
        'Excess structure evaluation'
      ]
    },
    {
      id: 'property',
      category: 'property',
      title: 'Property & Household Insurance',
      subtitle: 'Houses, Household Contents, Office Buildings & Commercial Real Estate',
      description: 'Safeguard your physical properties and personal belongings against fire, storm, water damage, burglary, and structural loss.',
      image: `${imageBase}images/property_insurance.png`,
      icon: Building2,
      subcategories: [
        'Private Suburban Houses & Outbuildings',
        'Household Contents & Valuables',
        'Office Buildings & Commercial Property',
        'Sectional Title Property Cover'
      ],
      considerations: [
        'Correct replacement value estimation to prevent under-insurance',
        'Storm, flood, fire, and power surge protection options',
        'Tenants & landlord risk options'
      ]
    },
    {
      id: 'business',
      category: 'business',
      title: 'Commercial & Business Insurance',
      subtitle: 'Commercial Assets, Office Contents, Tools & Business-Use Assets',
      description: 'Tailored insurance solutions for small businesses, corporate offices, and transport operators protecting operational assets and equipment.',
      image: `${imageBase}images/commercial_business.png`,
      icon: Briefcase,
      subcategories: [
        'Commercial Assets & Stock',
        'Office Furniture & Fixtures',
        'Workplace Machinery & Tools',
        'Business Interruption Options'
      ],
      considerations: [
        'Asset inventory valuation',
        'Public liability & third-party business risks',
        'Combined commercial policy structures'
      ]
    },
    {
      id: 'assets',
      category: 'assets',
      title: 'Computers & Equipment Insurance',
      subtitle: 'Computers, Mobile Devices, Valuable Equipment & Portable Assets',
      description: 'Specified and all-risk cover for valuable electronic equipment, laptops, smartphones, and specialized tools used at work or on the road.',
      image: `${imageBase}images/commercial_business.png`,
      icon: Laptop,
      subcategories: [
        'Laptops, Desktop PCs & Servers',
        'Mobile Smartphones & Tablets',
        'Specialised Work Tools & Diagnostic Instruments',
        'Portable Electronic Valuables'
      ],
      considerations: [
        'Specified item schedules for portable equipment',
        'Worldwide / national out-of-office cover options',
        'Accidental damage and liquid damage inclusion options'
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="py-12 space-y-16">
      
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lifa-gold/20 text-lifa-gold text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Authorised FSP 43132</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Insurance Solutions Designed Around You
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive short-term insurance solutions tailored for public transport, motor vehicles, property, businesses, and valuable assets.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'all'
                ? 'bg-lifa-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Solutions
          </button>
          <button
            onClick={() => setActiveTab('public-transport')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'public-transport'
                ? 'bg-lifa-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Public Transport & Taxis
          </button>
          <button
            onClick={() => setActiveTab('motor')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'motor'
                ? 'bg-lifa-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Motor Vehicles
          </button>
          <button
            onClick={() => setActiveTab('property')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'property'
                ? 'bg-lifa-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Property & Household
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'business'
                ? 'bg-lifa-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Commercial & Business
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'assets'
                ? 'bg-lifa-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Equipment & Assets
          </button>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-lifa-navy/10 text-lifa-navy font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-lifa-gold/20 text-lifa-navy font-bold text-xs">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {service.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-lifa-gold uppercase tracking-wider mt-1">
                    {service.subtitle}
                  </h3>

                  <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Included Coverage Areas:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.subcategories.map((sub, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl space-y-1.5">
                    <h4 className="text-xs font-bold text-lifa-navy uppercase tracking-wider">
                      Key Intermediary Considerations:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.considerations.map((item, idx) => (
                        <li key={idx}>&bull; {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={`/quote?type=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lifa-red hover:bg-lifa-redDark text-white font-extrabold text-xs tracking-wider uppercase shadow-md transition-all"
                  >
                    <span>REQUEST A QUOTE FOR {service.title.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
}
export default ServicesPage;
