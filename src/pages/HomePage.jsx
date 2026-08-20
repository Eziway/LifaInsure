import React from 'react';
import { usePageTitle } from '../utils/seo';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import FeaturedPublicTransport from '../components/home/FeaturedPublicTransport';
import WhyChooseLifa from '../components/home/WhyChooseLifa';
import HowItWorks from '../components/home/HowItWorks';
import CTASection from '../components/common/CTASection';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/common/ServiceCard';
import { Bus, Car, Building2, Briefcase, Laptop } from 'lucide-react';

export function HomePage() {
  usePageTitle(
    'Lifa Insurance Brokers | Professional Insurance Solutions',
    'Lifa Insurance Brokers provides professional insurance advice and intermediary services for public transport, motor, commercial, property and domestic insurance in South Africa.'
  );

  const mainSolutions = [
    {
      title: 'Public Transport Insurance',
      description: 'Specialised short-term cover options for ride-hailing (Uber/Bolt), metered & non-metered taxis, shuttles, school buses and commercial buses.',
      image: '/images/public_transport_fleet.png',
      icon: Bus,
      badge: 'Niche Focus',
      featured: true,
      items: [
        'Ride-hailing vehicles (Uber/Bolt)',
        'Metered & non-metered taxis',
        'Shuttles & school buses',
        'Passenger liability options'
      ],
      link: '/services#public-transport'
    },
    {
      title: 'Motor Insurance',
      description: 'Comprehensive, third-party, fire and theft protection for private motor vehicles and business-use vehicles.',
      image: '/images/motor_insurance.png',
      icon: Car,
      items: [
        'Private motor vehicles',
        'Business-use vehicles',
        'Commercial fleets',
        'Roadside assistance options'
      ],
      link: '/services#motor'
    },
    {
      title: 'Property Insurance',
      description: 'Protection for residential houses, household contents, commercial office buildings, and commercial real estate.',
      image: '/images/property_insurance.png',
      icon: Building2,
      items: [
        'Residential homes & sectional title',
        'Household contents & valuables',
        'Office buildings',
        'Commercial property risk'
      ],
      link: '/services#property'
    },
    {
      title: 'Business Insurance',
      description: 'Tailored commercial insurance solutions protecting assets, office contents, machinery, and business operational risks.',
      image: '/images/commercial_business.png',
      icon: Briefcase,
      items: [
        'Commercial asset protection',
        'Office furniture & contents',
        'Work equipment & tools',
        'Business-use vehicles'
      ],
      link: '/services#business'
    },
    {
      title: 'Personal & Asset Insurance',
      description: 'Specific cover options for portable valuable items, electronic equipment, computers, and mobile devices.',
      image: '/images/commercial_business.png',
      icon: Laptop,
      items: [
        'Laptops & desktop computers',
        'Mobile smartphones & tablets',
        'Valuable work equipment',
        'All-risk specified items'
      ],
      link: '/services#assets'
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust & FSP Accreditation Seal */}
      <TrustSection />

      {/* 3. Insurance Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Coverage"
            title="Insurance Solutions Designed Around You"
            subtitle="Whether you operate a public transport vehicle, run a business, or need cover for your home and personal vehicle, Lifa Insurance Brokers provides professional intermediary services."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainSolutions.map((solution, idx) => (
              <ServiceCard key={idx} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Public Transport Section */}
      <FeaturedPublicTransport />

      {/* 5. Why Choose Lifa */}
      <WhyChooseLifa />

      {/* 6. How It Works Timeline */}
      <HowItWorks />

      {/* 7. CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
export default HomePage;
