import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { APP_CONFIG } from '../config/constants';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      name: 'DeFi Protocol X',
      category: 'DeFi',
      description: 'Revolutionary yield farming protocol with $500M TVL',
      results: ['400% community growth', '50+ media placements', '$2B+ media reach'],
      gradient: 'from-blue-500 to-purple-500',
      logo: '🏦'
    },
    {
      id: 2,
      name: 'NFT Marketplace',
      category: 'NFT',
      description: 'Leading digital art marketplace with 100K+ users',
      results: ['1M+ trading volume', '200K+ community members', 'Top 5 NFT platform'],
      gradient: 'from-purple-500 to-indigo-500',
      logo: '🎨'
    },
    {
      id: 3,
      name: 'Gaming Token',
      category: 'Gaming',
      description: 'Play-to-earn gaming ecosystem with integrated NFTs',
      results: ['500K+ players', '100+ partnerships', '$10M+ raised'],
      gradient: 'from-indigo-500 to-cyan-500',
      logo: '🎮'
    },
    {
      id: 4,
      name: 'Layer 2 Solution',
      category: 'Infrastructure',
      description: 'Scalable blockchain solution for enterprise applications',
      results: ['100+ enterprise clients', '1M+ transactions', 'Top 10 L2 platform'],
      gradient: 'from-cyan-500 to-blue-500',
      logo: '⚡'
    },
    {
      id: 5,
      name: 'Enterprise Blockchain',
      category: 'Enterprise',
      description: 'Supply chain management solution for Fortune 500 companies',
      results: ['50+ enterprise clients', '10M+ tracked items', 'Industry recognition'],
      gradient: 'from-orange-500 to-yellow-500',
      logo: '🏢'
    },
    {
      id: 6,
      name: 'DeFi Yield Farm',
      category: 'DeFi',
      description: 'Automated yield optimization platform with multiple strategies',
      results: ['$100M+ TVL', '10K+ users', '15% average APY'],
      gradient: 'from-green-500 to-blue-500',
      logo: '🌾'
    }
  ];

  const categories = ['All', 'DeFi', 'NFT', 'Gaming', 'Infrastructure', 'Enterprise'];
  
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover the successful Web3 projects we've helped launch and scale
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredItems.map((item) => (
              <div key={item.id} className="glass-morphism rounded-2xl overflow-hidden card-hover">
                <div className={`h-48 bg-gradient-to-r ${item.gradient} flex items-center justify-center text-6xl`}>
                  {item.logo}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Key Results:</h4>
                    {item.results.map((result, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <span className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full mr-3`}></span>
                        {result}
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full mt-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105`}>
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="glass-morphism p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful blockchain projects that trust AlphaChainPR with their growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="flex items-center">
                  Start Your Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
