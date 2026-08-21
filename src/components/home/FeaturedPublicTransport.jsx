import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Car, Shield, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export function FeaturedPublicTransport() {
  const imageBase = import.meta.env.BASE_URL;

  const categories = [
    {
      title: 'Ride-Hailing Vehicles',
      desc: 'Dedicated insurance for drivers operating on Uber, Bolt, InDrive & app platforms.',
      icon: Car
    },
    {
      title: 'Metered Taxis',
      desc: 'Full vehicle, third-party and passenger liability cover for metered taxi operators.',
      icon: Car
    },
    {
      title: 'Non-Metered Minibus Taxis',
      desc: 'Tailored short-term insurance solutions for South African minibus taxi owners and fleets.',
      icon: Bus
    },
    {
      title: 'Shuttle Services',
      desc: 'Protection for airport shuttles, hotel transport, and private transfer vehicles.',
      icon: Bus
    },
    {
      title: 'School Buses',
      desc: 'Specialized passenger liability and vehicle cover for learner and school transport.',
      icon: Bus
    },
    {
      title: 'Commercial Buses',
      desc: 'Comprehensive cover options for intercity, commuter, and charter bus fleets.',
      icon: Bus
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lifa-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lifa-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Specialist Sector Focus"
          title="Specialists in Public Transport Insurance"
          subtitle="Public transport is at the heart of South Africa's economy. Lifa Insurance Brokers provides specialized intermediary advice and tailored cover options for operators, drivers, and fleet owners."
          light={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 6 Public Transport Categories */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-lifa-gold/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-lifa-gold/20 text-lifa-gold group-hover:bg-lifa-gold group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-base text-white group-hover:text-lifa-gold transition-colors">
                      {cat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Featured Fleet Image & CTA Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-lifa-gold/30 shadow-2xl bg-slate-950 group">
              <img
                src={`${imageBase}images/public_transport_fleet.png`}
                alt="South African Public Transport Fleet Insurance"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-lifa-gold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Comprehensive & Third-Party Options</span>
                </div>
                
                <h3 className="text-xl font-extrabold text-white">
                  Protect Your Vehicles & Passenger Liability
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Avoid financial loss from accidents, theft, or passenger liability claims with suitable public transport insurance cover.
                </p>

                <Link
                  to="/quote?type=Public+Transport"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-lifa-red hover:bg-lifa-redDark text-white font-extrabold text-sm shadow-lg shadow-lifa-red/40 transition-all"
                >
                  <span>GET A PUBLIC TRANSPORT QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default FeaturedPublicTransport;
