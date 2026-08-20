import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/seo';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { Search, BookOpen, Clock, ArrowRight, X, ShieldCheck } from 'lucide-react';

export function ResourcesPage() {
  usePageTitle(
    'Resources & Blog | Lifa Insurance Brokers',
    'Read insurance guides and advisory articles from Lifa Insurance Brokers on public transport cover, commercial vehicle protection, and asset management.'
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'What Should You Consider When Insuring a Taxi?',
      category: 'Public Transport',
      date: 'August 2026',
      readTime: '4 min read',
      summary: 'Essential factors taxi owners and fleet managers must check when structuring minibus and metered taxi cover in South Africa.',
      content: `Insuring a public transport vehicle in South Africa requires special attention to operating risks. Minibus taxis and metered transport operate under high daily mileage and passenger traffic. Key factors to evaluate include:
1. Passenger Liability Limits: Ensure your policy includes sufficient third-party and passenger liability protection.
2. Underwriting & Vehicle Valuation: Always specify correct vehicle details, route usage, and modifications to prevent claims repudiation.
3. Excess Structure: Understand your excess responsibilities in event of accidental damage or windshield replacement.
Working with an experienced intermediary like Lifa Insurance Brokers ensures your policy matches your operational reality.`
    },
    {
      id: 2,
      title: 'Understanding Commercial Vehicle Insurance',
      category: 'Commercial Vehicles',
      date: 'August 2026',
      readTime: '5 min read',
      summary: 'A guide to commercial fleet cover, goods in transit considerations, and third-party liability for business vehicles.',
      content: `Business-use vehicles and delivery fleets require policy terms different from standard personal motor insurance. Key considerations include:
- Usage Classification: Ensuring vehicles used for business logistics are accurately declared as commercial lines.
- Driver Declarations: Specifying nominated drivers or open-driver policy terms depending on your company structure.
- Claims Support: Having fast intermediary assistance to minimize vehicle downtime and keep your business operational.`
    },
    {
      id: 3,
      title: 'Why Public Transport Businesses Need the Right Insurance Cover',
      category: 'Public Transport',
      date: 'August 2026',
      readTime: '4 min read',
      summary: 'How specialized insurance protects ride-hailing (Uber/Bolt) and shuttle operators against sudden financial loss.',
      content: `Ride-hailing service taxis and shuttle vehicles form a critical component of urban mobility. Without proper commercial passenger transport cover:
- Personal vehicle policies may reject claims occurring while carrying fare-paying passengers.
- Vehicle damage or third-party liabilities can threaten business solvency.
Lifa Insurance Brokers assists operators in securing cover tailored for ride-hailing and shuttle services.`
    },
    {
      id: 4,
      title: 'How to Choose Suitable Insurance Cover',
      category: 'General Insurance',
      date: 'August 2026',
      readTime: '3 min read',
      summary: 'Practical tips for evaluating short-term insurance options across vehicle, property, and business assets.',
      content: `Selecting suitable insurance involves balancing price with protection. Tips from licensed brokers:
1. Avoid Under-Insurance: Ensure replacement values reflect current market prices.
2. Review Policy Exclusions: Ask your broker to explain specific policy exclusions before signing.
3. Seek Independent Advice: An independent broker assists you in comparing policy options to find suitable and affordable cover.`
    },
    {
      id: 5,
      title: 'Protecting Your Business Assets',
      category: 'Business Cover',
      date: 'August 2026',
      readTime: '4 min read',
      summary: 'Safeguarding office computers, tools, equipment, and premises against fire, storm, and theft.',
      content: `Business assets represent significant capital investment. Key steps to protect them:
- Maintain an updated inventory register of computers, smartphones, and tools.
- Choose All-Risk cover for portable items frequently taken off company premises.
- Review security measures at your premises to comply with underwriter security requirements.`
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lifa-gold/20 text-lifa-gold text-xs font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Insurance Knowledge Hub & Articles</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Resources & Advisory Articles
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Educational insights to help you understand short-term insurance, public transport protection, and risk management in South Africa.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles by topic (e.g. Taxi, Commercial, Assets, Property)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 shadow-sm focus:ring-2 focus:ring-lifa-navy outline-none text-sm font-medium text-slate-900 bg-white"
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="px-3 py-1 rounded-full bg-lifa-navy/10 text-lifa-navy font-bold">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-lifa-gold" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-lifa-navy transition-colors">
                  {art.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-lifa-navy hover:text-lifa-red transition-colors"
                >
                  <span>READ FULL ARTICLE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 space-y-6 max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-lifa-gold uppercase">
              <span>{selectedArticle.category}</span>
              <span>&bull;</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900">
              {selectedArticle.title}
            </h2>

            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {selectedArticle.content}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Authorised FSP 43132 Advisory Resource</span>
              <Link
                to="/quote"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl bg-lifa-red text-white font-bold text-xs"
              >
                Request Advice Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
}
export default ResourcesPage;
