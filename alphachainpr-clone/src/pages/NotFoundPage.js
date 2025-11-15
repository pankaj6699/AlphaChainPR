import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl font-black text-white opacity-20">404</h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you're looking for seems to have vanished into the blockchain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="flex items-center">
                Go Home
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-blue-400 hover:text-blue-300 transition-colors">About</Link>
              <span className="text-gray-500">•</span>
              <Link to="/services" className="text-blue-400 hover:text-blue-300 transition-colors">Services</Link>
              <span className="text-gray-500">•</span>
              <Link to="/portfolio" className="text-blue-400 hover:text-blue-300 transition-colors">Portfolio</Link>
              <span className="text-gray-500">•</span>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
