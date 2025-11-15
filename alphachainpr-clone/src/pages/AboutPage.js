import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { APP_CONFIG } from '../config/constants';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
              About <span className="gradient-text">{APP_CONFIG.name}</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8">
                {APP_CONFIG.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="glass-morphism p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    To empower blockchain projects with world-class marketing strategies that drive adoption, 
                    build communities, and create lasting impact in the Web3 ecosystem.
                  </p>
                </div>
                
                <div className="glass-morphism p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300">
                    To become the most trusted marketing partner for innovative blockchain projects, 
                    helping shape the future of decentralized technology.
                  </p>
                </div>
              </div>
              
              <div className="glass-morphism p-8 rounded-2xl my-12">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Deep understanding of blockchain technology and Web3 culture
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Proven track record with 150+ successful projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Data-driven approach to marketing and growth
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    Comprehensive services from PR to community management
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    24/7 support and transparent communication
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Ready to Grow Your Web3 Project?</h2>
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    Get Started Today
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
